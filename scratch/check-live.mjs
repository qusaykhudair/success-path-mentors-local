import https from 'node:https';

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          bodySnippet: data.substring(0, 300),
          containsHeroHeading: data.includes('hero-heading'),
          containsReveal: data.includes('whileInView') || data.includes('framer-motion'),
          containsChat: data.includes('@n8n/chat')
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function run() {
  const home = await checkUrl('https://successpathmentors.net/en');
  console.log('Homepage Check:', JSON.stringify(home, null, 2));
  
  const milton = await checkUrl('https://successpathmentors.net/en/locations/canada/ontario/milton');
  console.log('Milton Check:', JSON.stringify({
    statusCode: milton.statusCode,
    containsHeroHeading: milton.containsHeroHeading,
    bodySnippet: milton.bodySnippet
  }, null, 2));
}

run();
