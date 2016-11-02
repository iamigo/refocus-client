# refocus-client

Interact with the Refocus API using `refocus-client` and Bluebird promises.

## Install

`npm install refocus-client --save`

## Usage

```
const RefocusClient = require('refocus-client');

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

- [Subjects](docs/api/subjects.md)
- [Aspects](docs/api/aspects.md)
- [Samples](docs/api/samples.md)
