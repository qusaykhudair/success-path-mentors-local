import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync('src/content/locations/location-pages.ts','utf8');
const pages=vm.runInNewContext(source.slice(source.indexOf('= [')+2,source.indexOf('\nconst byId')).replace(/;\s*$/,''));
const csv=(rows)=>rows.map(r=>r.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\n');
const strings=v=>typeof v==='string'?[v]:Array.isArray(v)?v.flatMap(strings):v&&typeof v==='object'?(v.en?strings(v.en):Object.values(v).flatMap(strings)):[];
const names=[...new Set(pages.flatMap(p=>[p.name.en,p.shortName.en]))].sort((a,b)=>b.length-a.length);
const normalize=s=>{for(const n of names)s=s.replaceAll(n,'PLACE');return s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()};
const bodies=pages.map(p=>normalize(strings([p.introduction,p.curriculumDescription,p.curriculumPoints,p.assessments,p.localContext,p.faqs]).join(' ')));
const shingles=bodies.map(s=>{const w=s.split(' ');return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')))});
const rows=[['URL','unique content score','title unique?','meta unique?','H1 unique?','local value','duplicate risk','recommendation','closest page','similarity']];
for(let i=0;i<pages.length;i++){const p=pages[i];let max=0,near=0;for(let j=0;j<pages.length;j++){if(i===j)continue;const a=shingles[i],b=shingles[j];let both=0;for(const x of a)if(b.has(x))both++;const sim=both/(a.size+b.size-both);if(sim>max){max=sim;near=j}}const unique=f=>pages.filter(q=>f(q)===f(p)).length===1;rows.push(['https://successpathmentors.net/en/locations'+(p.segments.length?'/'+p.segments.join('/'):''),Math.round(100*(1-max)),unique(p=>p.seo.title.en),unique(p=>p.seo.description.en),unique(p=>p.heroTitle.en),strings(p.localContext).join(' '),max>.8?'High':max>.6?'Medium':'Low',max>.8?'Retain route; editorial review for distinct useful local guidance before expansion':'Retain; verify curriculum references and local usefulness',pages[near].id,max.toFixed(3)])}
fs.writeFileSync('reports/seo/location-audit.csv',csv(rows));
fs.writeFileSync('reports/seo/location-paths.json',JSON.stringify(pages.map(p=>'/en/locations'+(p.segments.length?'/'+p.segments.join('/'):'')),null,2));
const claims=[['claim','page','source','verified?','action taken']];
for(const locale of ['en','ar']){const m=JSON.parse(fs.readFileSync(`messages/${locale}.json`,'utf8'));for(const s of m.hero.stats??[])claims.push([`${s.value}${s.suffix} ${s.label}`,`/${locale}`,`messages/${locale}.json hero.stats`,'No supporting records','Remove']);claims.push([JSON.stringify(m.hero.rating),`/${locale}`,`messages/${locale}.json hero.rating`,'No platform source','Remove']);for(const section of ['testimonials','videoTestimonials'])for(const t of m[section].items)claims.push([JSON.stringify(t),`/${locale}`,t.videoSrc||'Static translation; Facebook label without permalink','Identity / attribution / rating not verified','Withhold from public rendering; preserve text unchanged in source']);claims.push([JSON.stringify(m.programs.badge),`/${locale}`,'Static translation','No supporting records','Replace with factual online lesson label']);}
// Preserve the pre-change claim evidence on subsequent audits.
if (!fs.existsSync('reports/seo/claims-audit.csv')) fs.writeFileSync('reports/seo/claims-audit.csv',csv(claims));
console.log(JSON.stringify({locations:pages.length,highRisk:rows.slice(1).filter(r=>r[6]==='High').length,duplicateTitles:rows.slice(1).filter(r=>!r[2]).length,duplicateMeta:rows.slice(1).filter(r=>!r[3]).length,duplicateH1:rows.slice(1).filter(r=>!r[4]).length,example:pages[3].localContext.en}));
