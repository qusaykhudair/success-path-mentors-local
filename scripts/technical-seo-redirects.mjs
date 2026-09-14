import fs from 'node:fs';
import http from 'node:http';
const base = process.argv[2] || 'http://localhost:3101';
const label = process.argv[3] || 'local';
const local = base.startsWith('http://localhost');
const official = 'https://successpathmentors.net';
const cases = [];
for (const origin of ['https://www.successpathmentors.net','http://successpathmentors.net','http://www.successpathmentors.net']) {
  for (const path of ['/en','/en/about/?q=one%20two&x=1','/images/logo.png','/robots.txt','/en/locations/canada?ref=qa']) cases.push({origin,path});
}
for (const path of ['/en/','/en/about/']) cases.push({origin:official,path});
function localRequest(path, url) {
  // Node fetch does not preserve the Host override; use the HTTP client here.
  return new Promise((resolve,reject) => {
    const req = http.get(base+path,{headers:{host:url.host,'x-forwarded-proto':url.protocol.slice(0,-1)}},response=>{
      response.resume();
      resolve({status:response.statusCode,location:response.headers.location??null});
    });
    req.setTimeout(20000,()=>req.destroy(new Error('Timed out')));
    req.on('error',reject);
  });
}
const rows = [];
for (const c of cases) {
  const u = new URL(c.origin+c.path);
  const expected = official+u.pathname.replace(/\/+$/,'')+u.search;
  try {
    let response;
    if(local) response = await localRequest(c.path,u);
    else {
      const r = await fetch(u,{redirect:'manual',signal:AbortSignal.timeout(20000)});
      response = {status:r.status,location:r.headers.get('location')};
      await r.body.cancel();
    }
    const {status,location} = response;
    const target = location ? new URL(location,u) : null;
    const expectedUrl = new URL(expected);
    const permanent = c.origin===official ? [301,308].includes(status) : status===301;
    // + and %20 are equivalent query encodings; compare parameter values.
    const pass = permanent && target?.origin===expectedUrl.origin && target?.pathname===expectedUrl.pathname && target?.searchParams.toString()===expectedUrl.searchParams.toString();
    rows.push({url:u.href,status,location,expected,pass});
  } catch(e) {rows.push({url:u.href,pass:false,error:String(e)});}
}
fs.writeFileSync(`reports/technical-seo/${label}-redirects.json`,JSON.stringify(rows,null,2));
console.log(JSON.stringify({cases:rows.length,passed:rows.filter(r=>r.pass).length,failed:rows.filter(r=>!r.pass)},null,2));
if(local&&rows.some(r=>!r.pass)) process.exitCode=1;
