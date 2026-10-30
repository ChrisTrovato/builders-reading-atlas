import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const base=new URL('../dist/books/',import.meta.url);
const read=name=>fs.readFileSync(new URL(name,base),'utf8');
const data=Object.fromEntries(['books','learning','philosophy','frontiers','domains'].map(x=>[x,JSON.parse(read(x+'.json'))]));
const normalize=s=>s.normalize('NFKD').replace(/[^a-z0-9]/gi,'').toLowerCase();
assert.equal(data.books.length,500,'Release catalog has exactly 500 distinct selections');
assert.equal(data.books.filter(x=>x.kind==='nonfiction').length,350);
assert.equal(data.books.filter(x=>x.kind==='fiction').length,150);
assert.equal(new Set(data.books.map(x=>x.id)).size,500,'Unique stable IDs');
assert.equal(new Set(data.books.map(x=>normalize(x.title)+'|'+normalize(x.author))).size,500,'No duplicate title/author records');
for(const b of data.books){
 for(const k of ['id','title','author','category','why','question','caveat'])assert.ok(typeof b[k]==='string'&&b[k].trim(),`${b.id}: ${k}`);
 assert.match(b.id,/^[nf]\d{3}$/);assert.ok(['nonfiction','fiction'].includes(b.kind));
 assert.ok(['Start here','Build foundations','Go deeper','Reference'].includes(b.stage),b.id);
 assert.ok(Number.isInteger(b.difficulty)&&b.difficulty>=1&&b.difficulty<=5,b.id);
 assert.ok(b.year===null||(Number.isInteger(b.year)&&b.year>-4000&&b.year<=2026),b.id+' year');
 assert.ok(b.source?.label&&new URL(b.source.url).protocol==='https:',b.id+' source');
 assert.ok(Array.isArray(b.tags)&&b.tags.length>=2,b.id+' tags');
}
const legacy=JSON.parse(fs.readFileSync(new URL('legacy-ids.json',import.meta.url),'utf8'));
for(const [id,title] of Object.entries(legacy))assert.equal(data.books.find(b=>b.id===id)?.title,title,'Existing shelf ID '+id);
assert.equal(data.domains.length,16);
const indexed=new Map(data.books.map(b=>[b.id,b]));
for(const d of data.domains){
 assert.ok(d.bookIds.length>=3,d.id+' populated');assert.equal(d.starters.length,3,d.id+' three starter books');
 assert.equal(new Set(d.bookIds).size,d.bookIds.length,d.id+' duplicate membership');
 for(const id of d.bookIds)assert.ok(indexed.has(id),d.id+' unknown book '+id);
 for(const id of d.starters)assert.ok(d.bookIds.includes(id),d.id+' starter membership');
 for(const id of d.neighbors)assert.ok(data.domains.some(x=>x.id===id),d.id+' neighbor '+id);
}
const categorized=new Set(data.domains.flatMap(x=>x.bookIds));
assert.equal(categorized.size,500,'Every book appears in at least one knowledge field');
const el={addEventListener(){},querySelector(){return null},querySelectorAll(){return []},classList:{add(){},remove(){}},textContent:'',innerHTML:''};
const ctx=vm.createContext({document:{querySelector:()=>el,addEventListener(){},querySelectorAll:()=>[],activeElement:{tagName:'BODY'}},window:{addEventListener(){},scrollTo(){}},location:{hash:''},console,Set,Map,JSON,URL,Blob,setTimeout,clearTimeout,localStorage:{getItem(){return null},setItem(){}}});
for(const name of ['journey.js','atlas.js','app.js'])vm.runInContext(read(name).replace(/\ninit\(\);\s*$/,''),ctx,{filename:name});
vm.runInContext(`books=${JSON.stringify(data.books)};learning=${JSON.stringify(data.learning)};philosophy=${JSON.stringify(data.philosophy)};frontierData=${JSON.stringify(data.frontiers)};atlasDomains=${JSON.stringify(data.domains)};index=new Map(books.map(b=>[b.id,b]));expandRoutes();`,ctx);
const pages=['basecamp()','atlasPage()','journeyPage()','ideasPage()','nightPage()','frontiersPage()','projectsPage()','journalPage()','workbenchPage()','catalog()','shelfPage()','banksPage()','routesPage()','aboutPage()','v2About()',...data.domains.map(d=>`domainPage('${d.id}')`),...data.learning.bridges.map(b=>`lessonPage('${b.id}')`),...data.frontiers.frontiers.map(f=>`frontierPage('${f.id}')`)];
for(const p of pages){const html=vm.runInContext(p,ctx);assert.ok(html.length>400,p);assert.ok(!/undefined|NaN|data-open=""/.test(html),p);}
const routes=JSON.parse(vm.runInContext('JSON.stringify(paths.map(p=>({id:p.id,name:p.name,got:pathBooks(p).length,want:p.titles.length})))',ctx));
assert.equal(routes.length,20);
for(const p of routes){assert.equal(p.got,p.want,p.name);assert.ok(vm.runInContext(`routePage('${p.id}')`,ctx).length>1000,p.name);}
for(const d of data.domains){assert.equal(vm.runInContext(`filters={domain:'${d.id}',kind:'all',category:'all',stage:'all',difficulty:'all',q:'',sort:'curated',view:'grid'};filteredBooks().length`,ctx),d.bookIds.length,d.id+' filter');}
assert.equal(vm.runInContext("filters.domain='all';filters.kind='fiction';filteredBooks().length",ctx),150);
assert.equal(vm.runInContext("filters.kind='nonfiction';filteredBooks().length",ctx),350);
assert.equal(vm.runInContext("filters.kind='all';filters.q='zzxyunfindable';filteredBooks().length",ctx),0);
assert.ok(vm.runInContext("filters.q='Banks';filteredBooks().length",ctx)>=10);
assert.equal(vm.runInContext("validRecords({n001:{status:'reading',notes:'Preserve this'},missing:{status:'want'}}).n001.notes",ctx),'Preserve this');
assert.equal(vm.runInContext("Object.keys(validRecords({missing:{status:'want'}})).length",ctx),0);
assert.equal(vm.runInContext("cleanJourney({active:'fake',practiced:['algebra','algebra','fake'],entries:[{text:'ok',date:'Today',kind:'unknown'}]}).practiced.length",ctx),1);
assert.equal(vm.runInContext("cleanJourney({entries:[{text:'ok',date:'Today',kind:'unknown'}]}).entries[0].kind",ctx),'reflection');
assert.equal(vm.runInContext("cleanJourney({entries:[{id:'',text:'ok',date:'Today'}]}).entries[0].id",ctx),'import-0');
assert.throws(()=>vm.runInContext("cleanJourney({entries:Array.from({length:301},()=>({text:'note',date:'Today'}))})",ctx),/Capacity/);
vm.runInContext("let capturedExport=null;download=(content,type,name)=>{capturedExport={content,type,name};};toast=()=>{};journeyState.entries=[{id:'qa',date:'2026-10-30',kind:'practice',text:'I checked the units.'}];exportLearningLog();",ctx);
assert.equal(vm.runInContext('capturedExport.name',ctx),'learning-field-notes.md');
assert.ok(vm.runInContext('capturedExport.content',ctx).includes('I checked the units.'));
assert.equal(vm.runInContext("esc('<img onerror=alert(1)>')",ctx),'&lt;img onerror=alert(1)&gt;');
assert.ok(vm.runInContext('labAngle=90;labLength=20;armResult()',ctx).includes('20.0'));
assert.ok(vm.runInContext('labEffort=.5;labLoad=50;leverResult()',ctx).includes('10.0'));
const html=read('index.html');
assert.ok(html.includes('https://ditchthescroll.com/books/'));
assert.ok(!/200 books|100 nonfiction|100 imagined|The 200/.test(html));
for(const file of ['app.js','journey.js','atlas.js'])assert.ok(!/outside the 200|all 200|200-book|eight guided reading/i.test(read(file)),file+' outdated copy');
console.log(JSON.stringify({catalog:500,nonfiction:350,fiction:150,knowledgeFields:16,readingRoutes:routes.length,renderedViews:pages.length+routes.length,legacyShelfIds:200,localStorageCompatibility:'passed',catalogFiltering:'passed',numericModels:'passed',everyBookMapped:true},null,2));
