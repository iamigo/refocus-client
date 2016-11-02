# Aspects API

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