# Aspects API

- [addAspect](#addaspect)
- [addAspects](#addaspects)
- [deleteAspect](#deleteaspect)
- [deleteAspects](#deleteaspects)
- [getAspect](#getaspect)
- [getAspects](#getaspects)
- [patchAspect](#patchaspect)
- [patchAspects](#patchaspects)


## addAspect
`addAspect(aspect)` => `Promise`

Create a new Aspect.

| Param | Type | Description |
| --- | --- | --- |
| aspect | `Object` | The Aspect to create. |

Returns a Bluebird `Promise` which resolves to the newly created Aspect.


## addAspects
`addAspects(aspects)` => `Promise`

Create new Aspects.

| Param | Type | Description |
| --- | --- | --- |
| aspects | `Array` | The Aspects to create. |

Returns a Bluebird `Promise` which resolves to an array of the newly created
Aspects.


## deleteAspect
`deleteAspect(name)` => `Promise`

Delete the specified Aspect.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the aspect to delete. |

Returns`Promise` | A promise which resolves to the deleted aspect.


## deleteAspects
`deleteAspects(toDelete)` => `Promise`

Delete the specified Aspects.

| Param | Type | Description |
| --- | --- | --- |
| toDelete | `Array` | An array of the names of the aspects to delete. |

Returns`Promise` | A promise which resolves to an array of the deleted aspects.


## getAspect
`getAspect(name)` => `Promise`

Retrieve the specified Aspect.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Aspect to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Aspect.


## getAspects
`getAspects()` => `Promise`

Retrieve all Aspects.

Returns a Bluebird `Promise` which resolves to an array of Aspects.


## patchAspect
`patchAspect(name, aspect)` => `Promise`

Update an Aspect, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Aspect to patch. |
| aspect | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Aspect.


## patchAspects
`patchAspects(toPatch)` => `Promise`

Update Aspects, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| toPatch | `String` | An array of objects where each object has a "name" attribute (which aspect to patch) and an "aspect" attribute (the attributes to patch for that aspect). |

Returns a Bluebird `Promise` which resolves to the array of patched Aspects.

