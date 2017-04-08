# Perspectives API

- [addPerspective](#addperspective)
- [addPerspectives](#addperspectives)
- [deletePerspective](#deleteperspective)
- [deletePerspectives](#deleteperspectives)
- [getPerspective](#getperspective)
- [getPerspectives](#getperspectives)
- [patchPerspective](#patchperspective)
- [patchPerspectives](#patchperspectives)


## addPerspective
`addPerspective(perspective)` => `Promise`

Create a new Perspective.

| Param | Type | Description |
| --- | --- | --- |
| perspective | `Object` | The Perspective to create. |

Returns a Bluebird `Promise` which resolves to the newly created Perspective.


## addPerspectives
`addPerspectives(perspectives)` => `Promise`

Create new Perspectives.

| Param | Type | Description |
| --- | --- | --- |
| perspectives | `Array` | The Perspectives to create. |

Returns a Bluebird `Promise` which resolves to an array of the newly created
Perspectives.


## deletePerspective
`deletePerspective(name)` => `Promise`

Delete the specified Perspective.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the perspective to delete. |

Returns`Promise` | A promise which resolves to the deleted perspective.


## deletePerspectives
`deletePerspectives(toDelete)` => `Promise`

Delete the specified Perspectives.

| Param | Type | Description |
| --- | --- | --- |
| toDelete | `Array` | An array of the names of the perspectives to delete. |

Returns`Promise` | A promise which resolves to an array of the deleted
perspectives.


## getPerspective
`getPerspective(name)` => `Promise`

Retrieve the specified Perspective.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Perspective to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Perspective.


## getPerspectives
`getPerspectives()` => `Promise`

Retrieve all Perspectives.

Returns a Bluebird `Promise` which resolves to an array of Perspectives.


## patchPerspective
`patchPerspective(name, perspective)` => `Promise`

Update a Perspective, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Perspective to patch. |
| perspective | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Perspective.


## patchPerspectives
`patchPerspectives(toPatch)` => `Promise`

Update Perspectives, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| toPatch | `String` | An array of objects where each object has a "name" attribute (which perspective to patch) and a "perspective" attribute (the attributes to patch for that perspective). |

Returns a Bluebird `Promise` which resolves to the array of patched
Perspectives.
