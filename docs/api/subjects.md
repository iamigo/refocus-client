# Subjects API

- [addChildSubject](#addchildsubject)
- [addChildSubjects](#addchildsubjects)
- [addRootSubject](#addrootsubject)
- [addRootSubjects](#addrootsubjects)
- [deleteSubject](#deletesubject)
- [deleteSubjects](#deletesubjects)
- [deleteSubjectTag](#deletesubjecttag)
- [deleteSubjectTags](#deletesubjecttags)
- [getHierarchy](#gethierarchy})
- [getSubject](#getsubject)
- [getSubjects](#getsubjects)
- [patchSubject](#patchsubject)
- [patchSubjects](#patchsubjects)


## addChildSubject
`addChildSubject(parentAbsolutePath, newSubject)` => `Promise`

Create a new Subject as a child of the specified parent Subject.

| Param | Type | Description |
| --- | --- | --- |
| parentAbsolutePath | `String` | The absolutePath of the new Subject's parent. |
| newSubject | `Object` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.


## addChildSubjects
`addChildSubjects(childrenToAdd)` => `Promise`

For each element in the childrenToAdd array, create a new Subject as a child
of the specified parent Subject.

| Param | Type | Description |
| --- | --- | --- |
| childrenToAdd | `Array` | An array of objects where each object has a "parentAbsolutePath" attribute and a "subject" attribute (the subject being added). |

Returns a Bluebird Promise which resolves to an array of the new Subjects.


## addRootSubject
`addRootSubject(newSubject)` => `Promise`

Create a new root Subject.

| Param | Type | Description |
| --- | --- | --- |
| newSubject | `String` | The new Subject to create. |

Returns a Bluebird `Promise` which resolves to the newly created Subject.


## addRootSubjects
`addRootSubjects(newSubject)` => `Promise`

Create new root Subjects.

| Param | Type | Description |
| --- | --- | --- |
| rootSubjectsToAdd | `Array` | The new Subjects to create. |

Returns a Bluebird Promise which resolves to an array of the newly created
Subjects.


## deleteSubject
`deleteSubject(absolutePath)` => `Promise`

Delete the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to delete. |

Returns a Bluebird `Promise` which resolves to the deleted Subject.


## deleteSubjects
`deleteSubjects(toDelete)` => `Promise`

Deletes multiple subjects sequentially.

| Param | Type | Description |
| --- | --- | --- |
| toDelete | `Array` | An array of absolutePaths. |

Returns a Bluebird `Promise` which resolves to an array of the deleted
Subjects.


## deleteSubjectTag
`deleteSubjectTag(absolutePath, tag)` => `Promise`

Deletes the specified tag from the specified subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject. |
| tag | `String` | The tag to delete. |

Returns a Bluebird `Promise` which resolves to the updated Subject.


## deleteSubjectTags
`deleteSubjectTags(absolutePath)` => `Promise`

Deletes all tags from the specified subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject. |

Returns a Bluebird `Promise` which resolves to the updated Subject.


## getHierarchy
`getHierarchy(absolutePath)` => `Promise`

Retrieve the hierarhcy under the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the root subject of the hierarchy to retrieve. |

Returns a Bluebird Promise which resolves to the hierarchy json.


## getSubject
`getSubject(absolutePath)` => `Promise`

Retrieve the specified Subject.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Subject.


## getSubjects
`getSubjects()` => `Promise`

Retrieve all Subjects, optional query params for filter/sort/limit/offset.

| Param | Type | Description |
| --- | --- | --- |
| queryParams | `String` | Query params (no leading "?"). |

Returns a Bluebird `Promise` which resolves to an array of Subjects.


## patchSubject
`patchSubject(absolutePath, subject)` => `Promise`

Update a Subject, modifying only the attributes you provide.

| Param | Type | Description |
| --- | --- | --- |
| absolutePath | `String` | The absolutePath of the Subject to patch. |
| subject | `Object` | An object containing the attributes you want to update. |

Returns a Bluebird `Promise` which resolves to the patched Subject.


## patchSubjects
`patchSubjects(toPatch)` => `Promise`

Updates multiple subjects sequentially, modifying only the attributes you
provide.

| Param | Type | Description |
| --- | --- | --- |
| toPatch | `Array` | An array of objects where each object has an "absolutePath" attribute (which subject to patch) and a "subject" attribute (the attributes to patch for that subject). |

Returns a Bluebird `Promise` which resolves to an array of the patched
Subjects.
