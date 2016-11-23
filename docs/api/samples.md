# Samples API

- [bulkUpsertSamples](#bulkupsertsamples)
- [getSample](#getsample)


## bulkUpsertSamples
`bulkUpsertSamples(arr)` => `Promise`

Insert or update an array of Samples asynchronously.

| Param | Type | Description |
| --- | --- | --- |
| arr | `Array` | The array of Samples to upsert. |

Returns a Bluebird `Promise` which resolves to the status OK.


## getSample
`getSample(name)` => `Promise`

Retrieve the specified Sample.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Sample to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Sample.
