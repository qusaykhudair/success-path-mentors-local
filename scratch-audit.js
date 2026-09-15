import https from 'node:https';

const urls = [
  'https://successpathmentors.net/en',
  'https://successpathmentors.net/ar',
  'https://successpathmentors.net/en/about',
  'https://successpathmentors.net/ar/%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D9%86%D8%B5%D8%A9',
  'https://successpathmentors.net/en/how-it-works',
  'https://successpathmentors.net/ar/%D8%A2%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84',
  'https://successpathmentors.net/en/contact',
  'https://successpathmentors.net/ar/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7',
  'https://successpathmentors.net/en/tutor-matching',
  'https://successpathmentors.net/ar/tutor-matching',
  'https://successpathmentors.net/en/privacy',
  'https://successpathmentors.net/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9',
  'https://successpathmentors.net/en/terms',
  'https://successpathmentors.net/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7-%D9%88%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85',
  'https://successpathmentors.net/en/data-deletion',
  'https://successpathmentors.net/ar/%D8%AD%D8%B0%D9%81-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA',
  'https://successpathmentors.net/en/cancellation-policy',
  'https://successpathmentors.net/ar/cancellation-policy',
  'https://successpathmentors.net/en/subjects',
  'https://successpathmentors.net/ar/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%D8%A9',
  'https://successpathmentors.net/en/subjects/math',
  'https://successpathmentors.net/ar/subjects/math',
  'https://successpathmentors.net/en/subjects/english',
  'https://successpathmentors.net/ar/subjects/english',
  'https://successpathmentors.net/en/subjects/chemistry',
  'https://successpathmentors.net/ar/subjects/chemistry',
  'https://successpathmentors.net/en/subjects/physics',
  'https://successpathmentors.net/ar/subjects/physics',
  'https://successpathmentors.net/en/subjects/general-science',
  'https://successpathmentors.net/ar/subjects/general-science',
  'https://successpathmentors.net/fr/programme-francais'
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          data
        });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

function extractMeta(html) {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const head = headMatch ? headMatch[1] : html;

  const canonicalMatch = head.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                         head.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  
  const enMatch = head.match(/<link[^>]+hreflang=["']en-CA["'][^>]*href=["']([^"']+)["']/i) ||
                  head.match(/<link[^>]+href=["']([^"']+)["'][^>]+hreflang=["']en-CA["']/i);
  
  const arMatch = head.match(/<link[^>]+hreflang=["']ar-CA["'][^>]*href=["']([^"']+)["']/i) ||
                  head.match(/<link[^>]+href=["']([^"']+)["'][^>]+hreflang=["']ar-CA["']/i);

  const defMatch = head.match(/<link[^>]+hreflang=["']x-default["'][^>]*href=["']([^"']+)["']/i) ||
                   head.match(/<link[^>]+href=["']([^"']+)["'][^>]+hreflang=["']x-default["']/i);

  const frMatch = head.match(/<link[^>]+hreflang=["']fr-CA["'][^>]*href=["']([^"']+)["']/i) ||
                  head.match(/<link[^>]+href=["']([^"']+)["'][^>]+hreflang=["']fr-CA["']/i);

  return {
    canonical: canonicalMatch ? canonicalMatch[1] : null,
    enCA: enMatch ? enMatch[1] : null,
    arCA: arMatch ? arMatch[1] : null,
    xDefault: defMatch ? defMatch[1] : null,
    frCA: frMatch ? frMatch[1] : null,
  };
}

async function main() {
  for (const url of urls) {
    const res = await fetchUrl(url);
    if (res.error) {
      console.log(`URL: ${url} | ERROR: ${res.error}`);
      continue;
    }
    const meta = extractMeta(res.data);
    console.log(JSON.stringify({
      url,
      status: res.status,
      ...meta
    }, null, 2));
  }
}

main();
