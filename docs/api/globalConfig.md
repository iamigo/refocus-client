# Global Config API

- [addGlobalConfigItem](#addglobalconfigitem)
- [deleteGlobalConfigItem](#deleteglobalconfigitem)
- [getGlobalConfigItem](#getglobalconfigitem)
- [getGlobalConfigItems](#getglobalconfigitems)
- [patchGlobalConfigItem](#patchglobalconfigitem)


## addGlobalConfigItem
`addGlobalConfigItem(globalConfig)` => `Promise`

Create a new Global Config item.

| Param | Type | Description |
| --- | --- | --- |
| globalConfig | `Object` | The Global Config item to create. |

Returns a Bluebird `Promise` which resolves to the newly created Global Config item.


## deleteGlobalConfigItem
`deleteGlobalConfigItem(key)` => `Promise`

Delete the specified Global Config item.

| Param | Type | Description |
| --- | --- | --- |
| key | `String` | The name of the Global Config item to delete. |

Returns`Promise` | A promise which resolves to the deleted Global Config item.


## getGlobalConfigItem
`getGlobalConfigItem(key)` => `Promise`

Retrieve the specified Global Config item.

| Param | Type | Description |
| --- | --- | --- |
| key | `String` | The name of the Global Config item to retrieve. |

Returns a Bluebird `Promise` which resolves to the specified Global Config item.


## getGlobalConfigItems
`getGlobalConfigItems()` => `Promise`

Retrieve all Global Config items.

Returns a Bluebird `Promise` which resolves to an array of Global Config items.


## patchGlobalConfigItem
`patchGlobalConfigItem(key, value)` => `Promise`

Update the value of a Global Config item.

| Param | Type | Description |
| --- | --- | --- |
| key | `String` | The key of the Global Config item to delete. |
| value | `Object` | The new value you want to assign. |

Returns a Bluebird `Promise` which resolves to the patched Global Config item.

