/**
 * Demonstrates how to use refocus-client to work with Subjects.
 */
const RefocusClient = require('../index');

// Some configuration
const refocusUrl = 'http://localhost:3000';
const apiVersion = 'v1';
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34';

const rc = new RefocusClient(refocusUrl, apiVersion, token);
rc.getSubject('NorthAmerica.Canada.Ontario')
.then((subject) => {
  console.log(subject);
})
.catch((err) => {
  console.log(err.statusCode, err.message);
});
