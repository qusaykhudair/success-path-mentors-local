import assert from 'node:assert/strict';
import fs from 'node:fs';
const local = JSON.parse(fs.readFileSync('reports/technical-seo/local-qa.json','utf8'));
const before = JSON.parse(fs.readFileSync('reports/technical-seo/live-before-qa.json','utf8'));
const byPath = p => local.rows.find(r=>r.path===p);
const expectedMissingPath = '/en/subjects/science';
assert.deepEqual(local.summary.issues,[{path:expectedMissingPath,issue:'HTTP 404'}]);
assert.ok(local.summary.homepageTitle && local.summary.homepageDescription);
assert.deepEqual(local.summary.homepageHreflang,['en-CA','ar-CA','x-default']);
assert.equal(local.summary.aboutSentenceCount,1);
assert.equal(local.summary.howItWorksAcademyMentions,0);
assert.equal(local.summary.nextResourcesAllowed,true);
assert.deepEqual(local.summary.resourceFailures,[]);
const contacts = [...new Set(local.rows.filter(r=>r.status===200).flatMap(r=>r.contacts))];
assert.deepEqual(contacts.sort(),['mailto:successpathmentors@gmail.com','tel:+16477875999']);
for(const path of ['/en','/ar']) {
  const current=byPath(path), original=before.rows.find(r=>r.path===path);
  assert.deepEqual(current.schemas,original.schemas,`${path}: preserve validated JSON-LD exactly`);
  assert.ok(current.schemas.some(s=>s['@type']==='WebSite'));
  assert.ok(current.schemas.some(s=>s['@type']==='FAQPage'));
  const organization=current.schemas.find(s=>s['@type']==='EducationalOrganization');
  assert.equal(organization.name,'Success Path Mentors');
  assert.equal(organization.url,'https://successpathmentors.net');
  assert.equal(organization.logo.url,'https://successpathmentors.net/images/logo.png');
  assert.equal(organization.contactPoint.telephone.replace(/\D/g,''),'16477875999');
  assert.equal(current.legacy,false);
  assert.equal(current.reviewClaim,false);
}
const disallowedTypes=[];
function inspect(value,path) {
  if(!value||typeof value!=='object')return;
  if(['Person','LocalBusiness','Review','AggregateRating'].includes(value['@type']))disallowedTypes.push({path,type:value['@type']});
  for(const child of Object.values(value))inspect(child,path);
}
for(const r of local.rows)inspect(r.schemas,r.path);
assert.deepEqual(disallowedTypes,[]);
const summary={existingPagesPassed:local.rows.filter(r=>r.status===200).length,knownMissingPath:expectedMissingPath,homepageSchemasUnchanged:true,contactLinks:contacts,unexpectedSchemaTypes:disallowedTypes,imageTagsWithAlt:local.rows.flatMap(r=>r.images).filter(i=>i.alt!==undefined).length};
fs.writeFileSync('reports/technical-seo/regression-qa.json',JSON.stringify(summary,null,2));
console.log(summary);
