# refocus-client

Read on if you're building a Node.js application which uses the Refocus API.

> **TODO**
>
> We should make this an npm package so it's super-easy to install and build off of.

## Install

`npm install refocus-client --save`

# API

```
/**
 * Inserts or updates the sample.
 *
 * @param {Object} sample - The sample to upsert.
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain the upserted sample.
 */
upsertSample(sample)

/**
 * Inserts or updates the samples asynchronously.
 *
 * @param {Object} arr - The array of samples to upsert.
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain a status OK.
 */
bulkUpsertSamples(arr)

/**
 * Creates a new subject as the child of the specified parent subject.
 *
 * @param {String} parentAbsolutePath - The absolutePath of the new subject's parent.
 * @param {Object} newSubject - The new subject to create.
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain the new subject.
 */
addChildSubject(parentAbsolutePath, newSubject)

/**
 * Retrieves the specified subject.
 *
 * @param {Object} absolutePath - The absolutePath of the subject to retrieve
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain the subject.
 */
getSubject(absolutePath)

/**
 * Retrieves all subjects.
 *
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain an array of subjects.
 */
getSubjects()

/**
 * Creates a new aspect.
 *
 * @param {Object} sample - The sample to upsert. Must have name and value string properties.
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain the newly created aspect.
 */
addAspect(aspect)

/**
 * Retrieves the specified aspect.
 *
 * @param {Object} name - The name of the aspect to retrieve.
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain the aspect.
 */
getAspect(name)

/**
 * Retrieves all aspects.
 *
 * @returns {Promise} - A promise which resolves to the http response. When successful, the response will contain as array of aspects.
 */
getAspects()

```

> **TODO**
>
> We can add coverage for more of the API later but these should be the basic ones right out of the gate

# Examples

## Send a Sample

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.upsertSample({
  name: 'Salesforce.Chicago|AvgPageTime',
  value: '100',
})
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the sample returned
})
.catch((err) => {
  // either the sample object didn't look like a sample (e.g. missing required
  // field) OR got status 4xx, 5xx
});
```

## Send Multiple Samples

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.bulkUpsertSamples([{
  name: 'Salesforce.Chicago|AvgPageTime',
  value: '103',
}, {
  name: 'Salesforce.Denver|AvgPageTime',
  value: '378',
  messageCode: 'SLOW',
  messageBody: 'This is too slow. Must investigate if average page time stays this high.',
}, {
  name: 'Salesforce.Vancouver|AvgPageTime',
  value: '88',
}])
.then((res) => {
  // got status 1xx, 2xx, 3xx
})
.catch((err) => {
  // got status 4xx, 5xx
});
```

## Create a New Child Subject

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.addChildSubject('Salesforce', {
  name: 'Tokyo',
  description: '...',
  isPublished: true,
})
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the new subject returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```

## Get a Subject

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.getSubject('Salesforce.Denver')
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the subject returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```

## Get All Subjects

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.getSubjects()
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the array of subjects returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```

## Create a New Aspect

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.addAspect({
  name: 'LoginErrors',
  description: '...',
  isPublished: true,
  timeout: '60s',
})
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the new aspect returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```

## Get an Aspect

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.getAspect('AvgPageTime')
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the aspect returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```
## Get All Aspects

```
const refocusClient = require('refocus-client')('https://refocus-sandbox.herokuapp.com', 'v1', 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34');

refocusClient.getAspects()
.then((res) => {
  // got status 1xx, 2xx, 3xx
  // do something with the array of aspects returned
})
.catch((err) => {
  // got status 4xx, 5xx
});
```
