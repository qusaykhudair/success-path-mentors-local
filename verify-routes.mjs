async function testRoute(path, expectedStatus, expectedRedirect = null) {
  const url = `http://localhost:3000${path}`;
  const response = await fetch(url, {
    headers: { accept: "text/html" },
    redirect: "manual", // Don't follow redirects automatically
  });

  console.log(`Testing ${path}: Expected ${expectedStatus}, Got ${response.status}`);
  if (response.status !== expectedStatus) {
    console.error(`❌ ${path} failed. Expected ${expectedStatus}, got ${response.status}`);
    return false;
  }
  if (expectedRedirect && response.headers.has("location")) {
    const loc = new URL(response.headers.get("location"), "http://localhost:3000").pathname;
    if (loc !== expectedRedirect) {
      console.error(`❌ ${path} failed. Expected redirect to ${expectedRedirect}, got ${loc}`);
      return false;
    }
  }
  console.log(`✅ ${path} passed.`);
  return true;
}

async function runTests() {
  const tests = [
    // NORTH AMERICA
    ["/en", 200],
    ["/ar", 200],
    ["/en/register", 200],
    ["/ar/register", 200],
    // EXAM
    ["/en/services/exam-preparation", 200],
    ["/en/exam-preparation", 301, "/en/services/exam-preparation"],
    ["/services/exam-preparation", 301, "/en/services/exam-preparation"],
    ["/exam-preparation", 301, "/en/services/exam-preparation"],
    // ONTARIO
    ["/en/curriculum/ontario", 301, "/en/locations/canada/ontario/curriculum"],
    // GERMANY
    ["/de", 200],
    ["/de/de", 301, "/de"],
    ["/de/en", 200],
    ["/de/ar", 200],
    ["/de/register", 200],
    ["/de/login", 200],
    ["/de/privacy", 200],
    ["/de/terms", 200],
    ["/de/free-trial", 200],
    ["/de/de/register", 301, "/de/register"],
    // FRANCE
    ["/fr/programme-francais", 200],
  ];

  let allPassed = true;
  for (const [path, status, redirect] of tests) {
    const passed = await testRoute(path, status, redirect);
    if (!passed) allPassed = false;
  }

  if (allPassed) {
    console.log("ALL ROUTES PASSED!");
  } else {
    console.error("SOME ROUTES FAILED.");
    process.exit(1);
  }
}

runTests();
