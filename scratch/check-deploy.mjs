// Check if deployment has propagated
fetch('https://successpathmentors.net/en')
  .then(async r => {
    console.log('Status:', r.status);
    console.log('Age:', r.headers.get('age'));
    console.log('x-nextjs-cache:', r.headers.get('x-nextjs-cache'));
    console.log('x-hcdn-cache-status:', r.headers.get('x-hcdn-cache-status'));
    const t = await r.text();
    console.log('Has hero-heading id:', t.includes('id="hero-heading"'));
    // Check if the old Reveal animation wrapper is in the rendered HTML
    console.log('Has old Reveal wrapper:', t.includes('whileInView'));
    console.log('First 500 chars of h1 area:');
    const idx = t.indexOf('hero-heading');
    if (idx > -1) console.log(t.substring(idx - 50, idx + 200));
  })
  .catch(console.error);
