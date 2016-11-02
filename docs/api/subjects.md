# Subjects API

- [addChildSubject]
- [addRootSubject]
- [deleteSubject]
- [getSubject]
- [getSubjects]
- [patchSubject]


## addChildSubject
`addChildSubject(parentAbsolutePath, newSubject)` => `Promise`

Create a new Subject as a child of the specified parent Subject.

| Param | Type | Description |
| --- | --- | --- |
| parentAbsolutePath | `String` | The absolutePath of the new Subject's parent. |
| newSubject | `Object` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.


## addRootSubject
`addRootSubject(newSubject)` => `Promise`

Create a new root Subject.

| Param | Type | Description |
| --- | --- | --- |
| newSubject | `String` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.


## deleteSubject
`deleteSubject(absolutePath)` => `Promise`

Delete the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to delete. |

Returns a Bluebird `Promise` which resolves to the deleted Subject.


## getSubject
`getSubject(absolutePath)` => `Promise`

Retrieve the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Subject.


## getSubjects
`getSubjects()` => `Promise`

Retrieve all Subjects.

Returns a Bluebird `Promise` which resolves to an array of Subjects.


### `patchSubject(absolutePath, subject)` => `Promise`

Update a Subject, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to patch. |
| subject | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Subject.
