# Lenses API

- [addLens](#addlens)
- [deleteLens](#deletelens)
- [getLens](#getlens)
- [getLenses](#getlenses)


## addLens
`addLens(pathToLibrary, lens)` => `Promise`

Create a new Lens.

| Param | Type | Description |
| --- | --- | --- |
| pathToLibrary | `String` | The path to the Lens library file. |
| lens | `Object` | Optional object to override what the library specifies. |

Returns a Bluebird `Promise` which resolves to the newly created Lens.


## deleteLens
`deleteLens(name)` => `Promise`

Delete the specified Lens.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Lens to delete. |

Returns`Promise` | A promise which resolves to the deleted Lens.


## getLens
`getLens(name)` => `Promise`

Retrieve the specified Lens.

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the Lens to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Lens.


## getLenses
`getLenses()` => `Promise`

Retrieve all Lenses.

Returns a Bluebird `Promise` which resolves to an array of Lenses.
