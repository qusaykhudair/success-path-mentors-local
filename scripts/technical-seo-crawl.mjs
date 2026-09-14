import fs from 'node:fs';
const base = process.argv[2] || 'http://localhost:3101';
const label = process.argv[3] || 'local';
const official = 'https://successpathmentors.net';
const output = 'reports/technical-seo';
const decode = s => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const attrs = s => Object.fromEntries([...s.matchAll(/([\w:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)].map(m=>[m[1].toLowerCase(),decode(m[3]??m[4])]));
const isLocation = p => /\/(locations|المواقع)(\/|$)/.test(decodeURIComponent(p));
async function get(url, headers) {
  const chain = [];
  try {
    for (let i=0; i<6; i++) {
      const r = await fetch(url, {redirect:'manual',headers,signal:AbortSignal.timeout(25000)});
      const location = r.headers.get('location');
      chain.push({url,status:r.status,location});
      if (r.status>=300 && r.status<400 && location) {
        await r.body.cancel(); url = new URL(location,url).href; continue;
      }
      return {status:r.status,url,chain,html:await r.text()};
    }
    return {status:0,url,chain,html:'',error:'Redirect limit exceeded'};
  } catch(e) { return {status:0,url,chain,html:'',error:String(e)}; }
}
const sitemap = await get(base+'/sitemap.xml');
const robots = await get(base+'/robots.txt');
fs.writeFileSync(`${output}/${label}-sitemap.xml`,sitemap.html);
fs.writeFileSync(`${output}/${label}-robots.txt`,robots.html);
const paths = new Set(['/en','/ar','/en/about','/en/how-it-works','/en/subjects','/en/subjects/math','/en/subjects/english','/en/subjects/science','/en/subjects/general-science','/en/subjects/physics','/en/subjects/chemistry']);
for (const m of sitemap.html.matchAll(/(?:<loc>|href=")(https:\/\/successpathmentors.net[^<"]*)/g)) {
  const u = new URL(decode(m[1]));
  if (!isLocation(u.pathname)) paths.add(u.pathname);
}
const queue = [...paths], rows = [], images = new Set(), assets = new Set();
async function worker() {
  while(queue.length) {
    const path = queue.shift(), r = await get(base+path);
    const h = r.html, head = h.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
    const meta = [...head.matchAll(/<meta\b[^>]*>/g)].map(m=>attrs(m[0]));
    const value = name => meta.filter(a=>(a.name||a.property)===name).map(a=>a.content);
    const linkTags = [...head.matchAll(/<link\b[^>]*>/g)].map(m=>attrs(m[0]));
    const canonicals = linkTags.filter(a=>a.rel==='canonical').map(a=>a.href);
    const alternates = linkTags.filter(a=>a.rel==='alternate'&&a.hreflang);
    for (const target of [...canonicals,...alternates.map(a=>a.href)]) {
      const u = new URL(target);
      if (u.origin===official && !isLocation(u.pathname) && !paths.has(u.pathname)) {paths.add(u.pathname);queue.push(u.pathname);}
    }
    const schemas=[]; let schemaErrors=0;
    for (const m of h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try {schemas.push(JSON.parse(m[1]));} catch {schemaErrors++;}
    }
    const body = h.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
    const visibleText = decode(body.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ');
    const img = [...body.matchAll(/<img\b[^>]*>/g)].map(m=>attrs(m[0]));
    for (const i of img) if(i.src?.startsWith('/')) images.add(i.src);
    for (const a of linkTags) if(a.rel==='stylesheet'&&a.href?.startsWith('/_next/')) assets.add(a.href);
    rows.push({path,status:r.status,chain:r.chain,finalPath:new URL(r.url).pathname,headPresent:Boolean(head),title:decode(head.match(/<title>([\s\S]*?)<\/title>/)?.[1]||''),descriptions:value('description'),canonicals,alternates,ogTitle:value('og:title'),ogDescription:value('og:description'),twitterTitle:value('twitter:title'),twitterDescription:value('twitter:description'),schemaErrors,schemas,images:img.map(i=>({src:i.src,alt:i.alt})),legacy:/mustafa[ -]?academy/i.test(h),reviewClaim:/2,000\+ reviews|4\.9\s*(?:out of|\/\s*5)/i.test(visibleText),aboutSentenceCount:visibleText.split('Students learn differently, and the support they need can change from one subject, grade, or school term to another.').length-1,academyMentions:(visibleText.match(/\bthe academy\b/gi)||[]).length,contacts:[...body.matchAll(/href="((?:mailto:|tel:)[^"]*)"/g)].map(m=>decode(m[1]))});
  }
}
await Promise.all(Array.from({length:4},worker));
const resourceChecks=[];
for (const p of new Set(['/images/logo.png',...assets,...images])) {
  const r=await get(base+p);resourceChecks.push({path:p,status:r.status,redirects:r.chain.length-1});
}
const expectedTitle='Online Tutoring for Grades 1–12 | Success Path Mentors';
const expectedDescription='Personalized one-to-one online tutoring for Grades 1–12 in Math, English, Science, Physics, Chemistry and French. Book a free trial with Success Path Mentors.';
const issues=[];
const byPath=new Map(rows.map(r=>[r.finalPath,r]));
for (const r of rows) {
  if(r.status!==200){issues.push({path:r.path,issue:'HTTP '+r.status});continue;}
  for(const field of ['descriptions','canonicals','ogTitle','ogDescription','twitterTitle','twitterDescription']) if(r[field].length!==1||!r[field][0])issues.push({path:r.path,issue:field});
  if(!r.title)issues.push({path:r.path,issue:'title'});
  if(r.images.some(i=>i.alt===undefined))issues.push({path:r.path,issue:'missing image alt'});
  if(r.legacy||r.reviewClaim||r.schemaErrors)issues.push({path:r.path,issue:'brand / trust / JSON-LD'});
  for(const c of r.canonicals){const u=new URL(c),target=byPath.get(u.pathname);if(u.origin!==official||!target||target.chain.length!==1||target.status!==200||target.canonicals[0]!==c)issues.push({path:r.path,issue:'canonical target',target:c});}
  if(!r.alternates.length)issues.push({path:r.path,issue:'missing head hreflang'});
  for(const a of r.alternates){const target=byPath.get(new URL(a.href).pathname);if(!target||target.chain.length!==1||target.status!==200||!target.alternates.some(t=>t.href===r.canonicals[0]))issues.push({path:r.path,issue:'hreflang target / reciprocity',target:a.href});}
}
const home=byPath.get('/en');
const summary={timestamp:new Date().toISOString(),base,pages:rows.length,issues,homepageTitle:home.title===expectedTitle&&home.ogTitle[0]===expectedTitle&&home.twitterTitle[0]===expectedTitle,homepageDescription:home.descriptions[0]===expectedDescription&&home.ogDescription[0]===expectedDescription&&home.twitterDescription[0]===expectedDescription,homepageHreflang:home.alternates.map(a=>a.hreflang),aboutSentenceCount:byPath.get('/en/about')?.aboutSentenceCount,howItWorksAcademyMentions:byPath.get('/en/how-it-works')?.academyMentions,robotsAccessible:robots.status===200,nextResourcesAllowed:!/^Disallow:\s*\/_next\//mi.test(robots.html),sitemapStatus:sitemap.status,resourceFailures:resourceChecks.filter(r=>r.status!==200)};
fs.writeFileSync(`${output}/${label}-qa.json`,JSON.stringify({summary,rows,resourceChecks},null,2));
console.log(JSON.stringify(summary,null,2));
