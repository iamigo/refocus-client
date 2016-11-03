# Perspectives API

- [addPerspective](#addperspective)
- [deletePerspective](#deleteperspective)
- [getPerspective](#getperspective)
- [getPerspectives](#getperspectives)
- [patchPerspective](#patchperspective)


## addPerspective
`addPerspective(perspective)` => `Promise`

Create a new Perspective.

| Param | Type | Description |
| --- | --- | --- |
| perspective | `Object` | The Perspective to create. |

Returns a Bluebird `Promise` which resolves to the newly created Perspective.


## deletePerspective
`deletePerspective(name)` => `Promise`

Delete the specified Perspective.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the perspective to delete. |

Returns`Promise` | A promise which resolves to the deleted perspective.


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

