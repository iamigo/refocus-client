/**
 * Demonstrates how to use refocus-client to work with Subjects.
 */
const RefocusClient = require('../index');

// Some configuration
const refocusUrl = 'http://localhost:3000';
const apiVersion = 'v1';
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34';

// Instantiate the RefocusClient.
const rc = new RefocusClient(refocusUrl, apiVersion, token, true);

// Create a new "root" subject then a child subject under it.
// rc.addRootSubject({
//   name: 's21',
//   isPublished: true,
//   description: 'This is a root subject.',
// })
// .then((res) => {
//   console.log('Created root subject!', res.statusCode, res.body.absolutePath);
//   return rc.addChildSubject(res.body.absolutePath, {
//     name: 'Child1',
//     isPublished: true,
//     description: 'This is a child subject.',
//   });
// })
// .then((res) => {
//   console.log('Created child!', res.statusCode, res.body.absolutePath);
//   return rc.getSubject('d');
// })
// .then((res) => {
//   console.log(res);
//   if (res)
//     console.log('Found subject!', res);
//   else
//     console.log('NOT FOUND');
//   return rc.getSubjects(res);
// })
// .then((res) => {
//   // console.log('All subjects', res);
//   return rc.getSubjects(res);
// })
// .catch((err) => {
//   console.log('Uh oh!', err.body.errors);
// });

rc.getSubject('d')
.then((res) => {
  console.log('Found subject!', res);
})
.catch((err) => {
  console.log('Uh oh!', err.statusCode, err.message);
});
