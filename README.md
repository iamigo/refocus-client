# refocus-client

Interact with the Refocus API using `refocus-client` and Bluebird promises.

## Install

`npm install refocus-client --save`

## Usage

```
const RefocusClient = require('../index');

// Some configuration
const refocusUrl = 'http://localhost:3000'; // The URL where Refocus is running
const apiVersion = 'v1'; // The Refocus API version
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34'; // Your API token

// Instantiate the RefocusClient.
const rc = new RefocusClient(refocusUrl, apiVersion, token);

// Now use the RefocusClient API. For example, here we create a new Aspect:
rc.addAspect({
  name: 'Latency',
  isPublished: true,
  timeout: '5m',
  valueType: 'NUMERIC',
  valueLabel: 'ms',
  criticalRange: [500, 999999999999],
  warningRange: [300, 500],
  infoRange: [200, 300],
  okRange: [0, 200],
})
.then((asp) => {
  // Do something else now that the aspect has been created?
  console.log(`Created "${asp.name}"`);
})
.catch((err) => {
  // Handle errors...
  console.log('Uh oh!', err);
});
```

## API

### Subjects

#### `getSubjects()` => `Promise`

Retrieve all Subjects.

Returns a Bluebird `Promise` which resolves to an array of Subjects.

#### `getSubject(absolutePath)` => `Promise`

Retrieve the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Subject.

#### `addChildSubject(parentAbsolutePath, newSubject)` => `Promise`

Create a new Subject as a child of the specified parent Subject.

| Param | Type | Description |
| --- | --- | --- |
| parentAbsolutePath | `String` | The absolutePath of the new Subject's parent. |
| newSubject | `Object` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.

### `addRootSubject(newSubject)` => `Promise`

Create a new root Subject.

| Param | Type | Description |
| --- | --- | --- |
| newSubject | `String` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.

### `patchSubject(absolutePath, subject)` => `Promise`

Update a Subject, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to patch. |
| subject | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Subject.

#### `deleteSubject(absolutePath)` => `Promise`

Delete the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to delete. |

Returns a Bluebird `Promise` which resolves to the deleted Subject.

### Aspects

#### `getAspects()` => `Promise`

Retrieve all Aspects.

Returns a Bluebird `Promise` which resolves to an array of Aspects.

#### `getAspect(name)` => `Promise`

Retrieve the specified Aspect.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Aspect to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Aspect.

#### `addAspect(aspect)` => `Promise`

Create a new Aspect.

| Param | Type | Description |
| --- | --- | --- |
| aspect | `Object` | The Aspect to create. |

Returns a Bluebird `Promise` which resolves to the newly created Aspect.

#### `patchAspect(name, aspect)` => `Promise`

Update an Aspect, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Aspect to patch. |
| aspect | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Aspect.

#### `deleteAspect(name)` => `Promise`

Delete the specified Aspect.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the aspect to delete. |

Returns`Promise` | A promise which resolves to the deleted aspect.

### Samples

#### `bulkUpsertSamples(arr)` => `Promise`
Insert or update an array of Samples asynchronously.

| Param | Type | Description |
| --- | --- | --- |
| arr | `Array` | The array of Samples to upsert. |

Returns a Bluebird `Promise` which resolves to the status OK.
