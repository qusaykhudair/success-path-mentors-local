const fs = require('node:fs');
const path = require('node:path');
const base = 'https://successpathmentors.net';
const out = __dirname;
const decode = s => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n,16))).replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&nbsp;', ' ');
const text = s => decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')).trim();
const attr = (tag, name) => decode(tag.match(new RegExp('\\b'+name+'=["\x27]([^"\x27]*)["\x27]', 'i'))?.[1] || '');
(async () => {
  const sitemapResponse = await fetch(base + '/sitemap.xml');
  const sitemap = await sitemapResponse.text();
  const discovered = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>decode(m[1]));
  const isInScope = url => {
    const p = decodeURI(new URL(url).pathname);
    return (p === '/en' || p.startsWith('/en/') || p.startsWith('/fr/programme-francais')) && !/\/(locations|المواقع)(\/|$)/.test(p);
  };
  const urls = [...new Set([...discovered.filter(isInScope), ...['/en/programs','/en/services','/en/faq','/en/blog','/en/subjects/french','/en/subjects/biology','/en/subjects/science','/en/subjects/math/calculus-vectors','/en/subjects/math/mcv4u'].map(p=>base+p)])];
  const rows = [];
  let next = 0;
  await Promise.all(Array.from({length:4}, async()=>{
    while(next<urls.length){
      const url=urls[next++];
      try {
        const options={redirect:'manual',headers:{Accept:'text/html','Cache-Control':'no-cache'},signal:AbortSignal.timeout(60000)};
        let response=await fetch(url,options);
        const initialContentType=response.headers.get('content-type');
        let htmlRetry=false;
        if(response.status===200&&!initialContentType?.includes('text/html')) {
          await response.text();
          response=await fetch(url+'?seo_audit='+Date.now(),options);
          htmlRetry=true;
        }
        const html=await response.text();
        // Next.js streams some page sections after </main>, then inserts them.
        // Include those real HTML nodes; discard shared chrome and script data.
        const main=html.replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, '').replace(/<(header|footer|nav)\b[^>]*>[\s\S]*?<\/\1>/gi, tag => /<h1\b/i.test(tag) ? tag : '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
        const head=html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
        const links=[...head.matchAll(/<link\b[^>]*>/gi)].map(m=>m[0]);
        const metas=[...head.matchAll(/<meta\b[^>]*>/gi)].map(m=>m[0]);
        rows.push({url,status:response.status,initialContentType,contentType:response.headers.get('content-type'),htmlRetry,location:response.headers.get('location'),title:text(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ''),canonical:attr(links.find(l=>attr(l,'rel')==='canonical') || '', 'href'),description:attr(metas.find(m=>attr(m,'name')==='description') || '', 'content'),h1:[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m=>text(m[1])),headings:[...main.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m=>text(m[1])),ids:[...main.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]),text:text(main),links:[...new Set([...main.matchAll(/<a\b[^>]*>/gi)].map(m=>attr(m[0],'href')))]});
      } catch(error){rows.push({url,status:null,error:error.message});}
    }
  }));
  rows.sort((a,b)=>a.url.localeCompare(b.url));
  const summary={checkedAt:new Date().toISOString(),sitemapStatus:sitemapResponse.status,discoveredInScope:discovered.filter(isInScope).length,requested:rows.length,statuses:rows.reduce((a,r)=>(a[r.status]=(a[r.status]||0)+1,a),{}),locationsFetched:0};
  fs.writeFileSync(path.join(out,'crawl.json'),JSON.stringify({summary,rows},null,2));
  console.log(JSON.stringify(summary,null,2));
})();
