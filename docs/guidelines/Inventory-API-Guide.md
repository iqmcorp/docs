# Inventory API

IQM's advanced algorithm deterines the most relevant ads to display to a user based on their activity and the content of a given page. Inventories provide advertisers a way to organize collecions or groups based on criteria such as ad format, placement type, targeting options, and other attributes. Private Marketplace (PMP) deals and Programmatic Guarantee (PG) deals are arranged so advertisers can purchase ad inventory. This page will cover common methods and endpoints associated with **Inventories**, **PMP Deals**, **PG Deals**, and **Groups**.

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Get Inventory Details

Inventories are collections of all inventory sources.

Use the following endpoints to get details for various aspects of inventories, filtered by query parameters:

| Method | Path | Description |
| ---- | ---- | --- |
| <span class="badge badge--primary">GET</span>  | <span class="path-text">/api/v3/inv/inventories/list | Gets list of inventory available to user |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/inventories/distributions | Gets distribution of inventory available for user across country and other parameters |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/inventories/count | Gets count of unique inventories, unique publishers, total number of impressions, and total reach of all inventories |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/inventory-group-types | Gets list of inventory group types |

<div class="container">
  <div class="child1">

| Query Parameters| Description |
| ---- | --- |
| `keywords` <br /><span class="type-text">string</span> | Keywords to search inventory list |
| `countries` <br /><span class="type-text">string</span> | Filter by country |
| `categories` <br /><span class="type-text">string</span> | Filter by category |
| `inventoryTypes` <br /><span class="type-text">string</span> | Filter by inventory type |
| `creativeSizes` <br /><span class="type-text">string</span> | Filter by creative size |
| `creativeTypes` <br /><span class="type-text">string</span> | Filter by creative type |
| `creativeDurations` <br /><span class="type-text">string</span>| Filter by creative duration |
| `trafficTypes` <br /><span class="type-text">string</span> | Filter by traffic type |
| `deviceTypes` <br /><span class="type-text">string</span> | Filter by device type |
| `exchanges` <br /><span class="type-text">string</span> | Filter by exchange |
| `videoPlayerSizes` <br /><span class="type-text">string</span> | Filter by video player size |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of entries per page |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |
| `groupId` <br /><span class="type-text">integer</span> | Group ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "inventoryDataList": [
            {
                "id": 3510,
                "name": "Test Inv 1234",
                "publisher": "UNKNOWN",
                "appId": "INVENTORY",
                "inventoryType": "Other App",
                "impressions": 7397885,
                "reach": 5257,
                "videoPercentage": 100,
                "displayPercentage": 0
            },
            {
                "id": 4746,
                "name": "Test Old TV 345",
                "publisher": "UNKNOWN",
                "appId": "INVENTORY",
                "inventoryType": "Other App",
                "impressions": 428882,
                "reach": 31291,
                "videoPercentage": 100,
                "displayPercentage": 0
            }
        ]
    }
}
```

<details>
<summary>More Responses</summary>

Response 403 

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "User is not allowed to access provided inventory group."
        }
    ]
}
```

Response 500

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

### Get List of Blocked Inventories

<span class="badge badge--primary">GET</span> <span class="path-text">api/v3/inv/blocked-inventories</span>

<div class="container">
  <div class="child1">

Blocklisted inventories refer to digital media placements or websites that are deemed inappropriate (adult content, hate speech, misaleading information) or of low quality (low engagement, poor user experience).

| Query Parameters| Description |
| ---- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search result by keyword |
| `inventoryIds` <br /><span class="type-text">string</span> | Filter inventories by inventory ID |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of entries per page, default: `200` |
| `pageNo`<br /><span class="type-text">integer</span> | Number of pages for retrieved data, default: `1` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "globalBlockedInventoryData": [
            {
                "id": 35109,
                "name": "Pluto TV - It's Free TV",
                "publisher": "UNKNOWN",
                "appId": "74519",
                "inventoryType": "Other App",
                "comment": "This is the comment for this inventory",
                "impressions": 0,
                "uniques": 0,
                "videoPercentage": 0,
                "displayPercentage": 0
            }
        ]
    },
    "globalBlockedInventoryIds": 1,
    "filteredRecords": 13
}
```

</div></div>

## Inventory Management

Optimize inventories for specific campaigns, download detailed inventory files, or block inventories.

### Campaign Inventory Optimization

<span class="badge badge--success">POST</span> <span class="path-text">/api/v2/inv/inventories/includeExclude</span>

<div class="container">
  <div class="child1">

Inventories can be optimized for specific campaign IDs.

| Request Schema | Description |
| ---- | --- |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID to target for optimization |
| `ids` <br /><span class="type-text">string</span>| Comma separated strings of inventory IDs to include in or exclude from specified campaign |
| `isExcluded` <br /><span class="type-text">integer</span> | Include in campaign: `0`<br /> Exclude from campaign: `1` |

</div><div class="child2">

```json title="Request Sample"
{
    "campaignId": 168622,
    "ids": "1,2,3,4",
    "isExcluded": 0
}
```

```json title="Response 200"
{
    "statusCode": 200,
    "responseObject": {
        "message": "Inventories Included."
    }
}
```

</div></div>

---

### Block Inventories

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/inv/inventories/block</span>

<div class="container">
  <div class="child1">

Inventories can be blocked at the account level by ID or search field.

| Request Schema | Description |
| ---- | --- |
| `inventoryIds` <br /><span class="type-text">array of integers</span> | Inventory IDs to block |
| `searchField` <br /><span class="type-text">string</span> | Block inventories by searched keyword |

</div><div class="child2">

```json title="Request Sample"
{
    "inventoryIds": [
        0,
        1,
        5
    ]
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Inventories blocked successfully."
}
```

</div></div>

---

### Get Inventory Lists in or from CSV Format

| Method | Path | Description |
| ---- | ---- | --- |
| <span class="badge badge--success">POST</span>  | <span class="path-text">api/v3/inv/inventories/open-exchange/download</span> | Generates CSV (or XLSX) file of inventory list filtered by query parameters or CSV upload: `multipartFile` |
|<span class="badge badge--success">POST</span> | <span class="path-text">api/v3/inv/inventories/csv/list</span> | Gets list of inventory based on provided CSV file: `domainsFile` | 
| <span class="badge badge--success">POST</span>| <span class="path-text">api/v3/inv/inventories/csv/distributions</span> | Gets distribution of inventory based on provided CSV file: `domainsFile` |
| <span class="badge badge--success">POST</span>| <span class="path-text">api/v3/inv/inventories/csv/count</span> |  Gets inventory count based on provided CSV file: `domainsFile` |

<div class="container">
  <div class="child1">

Get a paginated list of various inventory details in or from CSV file format

| Request Schema |  |
| ---- | --- |
| `keywords` <br /><span class="type-text">string</span> | Filters by list of keywords |
| `countries` <br /><span class="type-text">string</span>| Filters by list of countries |
| `categories` <br /><span class="type-text">string</span> | Filters by categories |
| `inventoryTypes` <br /><span class="type-text">string</span> | Filters by inventory type |
| `creativeSizes` <br /><span class="type-text">string</span> | Filters by creative sizes |
| `creativeDurations` <br /><span class="type-text">string</span> | Filters by creative durations | 
| `trafficTypes` <br /><span class="type-text">string</span> | Filters by traffic type | 
| `deviceTypes` <br /><span class="type-text">string</span>| Filters by device type |
| `exchanges` <br /><span class="type-text">string</span> | Filters by exchanges | 
| `videoPlayerSizes` <br /><span class="type-text">string</span> | Filters by video player size |
| `isCsvSearch` <br /><span class="type-text">boolean</span> | `true` if CSV file uploaded for query, otherwise `false` |
| `fileType` <br /><span class="type-text">string</span> | File type to download: `csv` or `xlsx` |

</div><div class="child2">

```json title="Request Sample"
{
    "multipartFile": "string"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "https://iqm-ephemeral-2aca615e13f8-stage.s3.amazonaws.com/inventory/download/csv/Yash%20org%202_1720435555550.csv?response-expires-Amz-Credential"
}
```

</div></div>

---

## Inventory Groups

An inventory group refers to a collection or grouping of inventory sources categorized by specific criteria such as ad format, placement type, targeting options, or other attributes. There are three types of inventory group: **Open Exchange**, **PMP Deals**, and **Contextual Inventory**. This section will cover common methods and endpoints for managing inventory groups.

### Get List of Inventory Groups

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/inv/groups/list</span>

<div class="container">
  <div class="child1">

Get a list of inventory groups based on various filters and parameters.

| Query Parameters |  |
| ---- | --- |
| `groupFilterId` <br /><span class="type-text">integer</span> | Filters groups list. Supported values: <br />All Groups [default]: `0` <br />Share by Admin: `1` <br />Own Groups: `2` |
| `groupTypeIds` <br /><span class="type-text">string</span> | Filters groups list. Supported values: <br />Open Exchange: `1` <br />PMP: `2` <br />Contextual: `3` |
| `ids` <br /><span class="type-text">string</span> | Comma separated IDs
| `provideAccountLevelExcludedGroup` <br /><span class="type-text">boolean</span> | Flag to indicate whether to include account-level excluded group in response or not, default: `false` |
| `includeStatistics` <br /><span class="type-text">boolean</span> | Flag to indicate whether to include statistics in response or not, default: `true` |
| `excludeEmptyGroups` <br /><span class="type-text">boolean</span> | Flag to indicate whether to include empty groups in response or not, default: `false` |
| `searchField` <br /><span class="type-text">string</span>| Searches by name |
| `pageSize` <br /><span class="type-text">integer</span> | Maximum number of entries per page |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `sortBy` <br /><span class="type-text">string</span> | Sort entries by ascending (`+`) or descending (`-`) |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 371,
        "filteredRecords": 6,
        "inventoryGroupList": [
        {
            "groupTypeId": 1,
            "created": 1720032375,
            "modifiedDate": "2024-07-03T13:18:26.935+0000",
            "owId": 201427,
            "impressions": 0,
            "isAccountLevelExcluded": null,
            "campaignWhitelistCount": 0,
            "campaignBlacklistCount": 0,
            "whiteListedCampaignIds": [
                503885,
                486112,
                478890
            ],
            "blackListedCampaignIds": [],
            "publishers": 0,
            "sharedCount": 0,
            "uniques": 0,
            "reach": 0,
            "inventories": 0,
            "deals": 0,
            "contextualInventories": 0,
            "count": 0,
            "id": 176178,
            "name": "Inventory Group - Open exchange - 3 campaign",
            "isShared": false
        }
        ]
    }
}
```

</div></div>

---

### Get More Inventory Groups Details

Get more inventory groups details with the following endpoints:

| Method | Path | Description |
| ---- | ---- | --- |
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/statistics</span> | Get statistics of inventory groups
| <span class="badge badge--primary">GET</span>  | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/shared/campaigns/list</span> | Gets list of campaigns attached to the inventory group |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/pmp-deals</span> | Gets list of PMP Deals in an inventory group |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/pmp-deals/csv</span> | Gets CSV format list of PMP Deals in an inventory group |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/open-exchange-inventories</span> | Gets list of open exchange inventories for an inventory group
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/open-exchange-inventories/distributions</span> | Gets distribution of open exchange inventories in an inventory group |
| <span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/open-exchange-inventories/count</span> | Gets count of open exchange inventories in an inventory group |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/contextual-inventories</span> | Gets list of contextual inventories for an inventory group |
| <span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/contextual-inventories/csv</span> | Gets CSV format list of contextual inventories for an inventory group |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/groups/api/v3/group/{groupId}/contextual-inventories/count</span> | Gets count of contextual inventories for an inventory group |

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `groupId` <br /><span class="type-text">integer</span> | Group ID |

| Query Parameters ||
| --- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search inventory group by name |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of entries per page, default: `50` |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |

</div><div class="child2">

```json title="Response 200 (open exchange inventories)"
{
    "success": true,
    "data": {
        "totalRecords": 3,
        "filteredRecords": 3,
        "openExchangeInventoryData": [
            {
                "id": 52982,
                "name": "gazeta.pl",
                "publisher": "UNKNOWN",
                "appId": "INVENTORY",
                "inventoryType": "Site",
                "impressions": 25738,
                "reach": 2128,
                "videoPercentage": 18.29979,
                "displayPercentage": 77.989743
            },
            {
                "id": 52983,
                "name": "protopage.com",
                "publisher": "UNKNOWN",
                "appId": "INVENTORY",
                "inventoryType": "Site",
                "impressions": 4315,
                "reach": 322,
                "videoPercentage": 0,
                "displayPercentage": 100
            },
            {
                "id": 52986,
                "name": "gwiazdy.wp.pl",
                "publisher": "UNKNOWN",
                "appId": "INVENTORY",
                "inventoryType": "Site",
                "impressions": 516,
                "reach": 58,
                "videoPercentage": 4.651163,
                "displayPercentage": 87.596899
            }
        ],
        "uniqueRecords": 3
    }
}
```

</div></div>

---

### Contextual Inventory

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/inv/contextual/recommend</span>
<br /><span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/inv/contextual/autosuggest</span>

<div class="container">
  <div class="child1">

Get recommended keywords or autocompleted keywords.

| Query Parameters |  |
| ---- | --- |
| `keyword` <br /><span class="type-text">string</span> | Suggestion or Recommendation will be made based on this keyword | 

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        "sport",
        "business",
        "play"
    ]
}
```

</div></div>

---

## Inventory Group Management

Update details or delete group inventories.

### Create a New Inventory Group

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/inv/groups</span>

<div class="container">
  <div class="child1">

Add a new inventory group based on the provided request body.

| Request Schema |  |
| ---- | --- |
| `groupName` <br /><span class="type-text">integer</span> | Desired name for group |
| `groupTypeId` <br /><span class="type-text">integer</span>| Group type. Supported values: <br />Open Exchange: `1` <br />PMP: `2` <br />Contextual: `3` |
| `inventoryIds` <br /><span class="type-text">array of integers</span> | Inventory to include in group |

</div><div class="child2">

```json title="Request Sample"
{
    "groupName": "Inventory Group - Open exchange",
    "groupTypeId": 1,
    "inventoryIds": [
        35132,
        4107192
    ]
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "groupTypeId": 1,
        "created": 1719836234,
        "modifiedDate": "2024-07-01T12:17:20.295+0000",
        "owId": 201427,
        "impressions": 2334725782,
        "isAccountLevelExcluded": false,
        "campaignWhitelistCount": 0,
        "campaignBlacklistCount": 0,
        "whiteListedCampaignIds": [],
        "blackListedCampaignIds": [],
        "publishers": 56,
        "sharedCount": 0,
        "uniques": 0,
        "reach": 154976228,
        "inventories": 0,
        "deals": 0,
        "contextualInventories": 0,
        "count": 2,
        "id": 174594,
        "name": "Inventory Group - Open exchange",
        "isShared": false
    }
}
```

</div></div>

---

### Add or Remove Mappings to an Inventory Group

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/inv/group/addMappings</span>
<br /><span class="badge badge--success">POST</span><span class="path-text">/api/v3/inv/group/removeMappings</span>

<div class="container">
  <div class="child1">

Add or Remove inventories (Open Exchange, Private Deals, Contextual) to a group or multiple groups.

Inventories can be added/removed by filtering for results, inputting `dealIds`, contextual details, or `inentoryIds`.


<details>
<summary>Add/Remove by filter</summary>

| Request Schema  |  |
| ----  | --- |
| `groupIds` <br /><span class="type-text">array of integers</span> | Group IDs to add mappings to |
| `keywords` <br /><span class="type-text">array of integers</span>  | Filters by keyword | 
| `countries` <br /><span class="type-text">array of integers</span>  | Filters by country |
| `categories` <br /><span class="type-text">array of integers</span>  | Filter by category |
| `inventoryTypes` <br /><span class="type-text">array of integers</span>  | Filter by inventory type |
| `creativeSizes` <br /><span class="type-text">array of integers</span>  | Filter by creative size |
| `creativeTypes` <br /><span class="type-text">array of integers</span>  | Filter by creative types |
| `trafficTypes` <br /><span class="type-text">array of integers</span>  | Filter by traffic types |
| `deviceTypes` <br /><span class="type-text">array of integers</span>  | Filter by device types |
| `videoPlayerSizes` <br /><span class="type-text">array of integers</span>  | Filter by video player sizes |
| `isAllInventories` | <br /><span class="type-text">boolean</span>  | 

</details>

<details>
<summary>Add/Remove by Deal ID</summary>

| Request Schema |  |
| ----  | --- |
| `groupIds` <br /><span class="type-text">array of integers</span>  | Group IDs to add mappings to |
| `dealIds` <br /><span class="type-text">array of integers</span>  | Deal IDs to add to group |

</details>

<details>
<summary>Add/Remove by Contextual Inventories</summary>

| Request Schema |  |
| ---- | --- |
| `groupIds` <br /><span class="type-text">array of integers</span>  | Group IDs to add mappings to |
| `contextualKeywords` <br /><span class="type-text">array of strings</span>  | Names of Contextual Inventories |
| `contextualUrls` <br /><span class="type-text">array of strings</span>  | URLs of Contextual Inventories |

</details>

<details>
<summary>Add/Remove by Inventory ID</summary>

| Request Schema  |  |
| ---- | --- |
| `groupIds` <br /><span class="type-text">array of integers</span> | Group IDs to add mappings to |
| `inventoryIds` <br /><span class="type-text">array of integers</span>  | Inventory IDs to add to group |

</details>

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "groupTypeId": 1,
            "created": 1719983099,
            "modifiedDate": "2024-07-03T07:35:45.800+0000",
            "owId": 202017,
            "impressions": 7927783118,
            "isAccountLevelExcluded": false,
            "whiteListedCampaignIds": null,
            "blackListedCampaignIds": null,
            "publishers": 59,
            "sharedCount": 1,
            "uniques": 0,
            "reach": 558137549,
            "inventories": 0,
            "deals": 0,
            "contextualInventories": 0,
            "count": 2,
            "id": 176130,
            "name": "Open Exchange Inventories Group",
            "isShared": true
        }
    ]
}
```

</div></div>

---

### Add or Remove Customers From a Shared Inventory Group

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/inv/group/{groupId}/shared/customers/edit</span>

<div class="container">
  <div class="child1">

Add or remove customers from an inventory group by group ID with the following endpoint: 

| Path Parameters |  |
| ---- | --- |
| `groupId` <br /><span class="type-text">integer</span> | Group ID |

| Request Schema |  |
| ---- | --- |
| `addOwIds` <br /><span class="type-text">array of integers</span> | Organization Worskpace IDs to add to Inventory Group |
| `removeOwIds` <br /><span class="type-text">array of integers</span> | Organization Workspace IDs to remove from Inventory Group |

</div><div class="child2">

```json title="Request Sample"
{
    "addOWIds": [
        200425,
        200495,
        200496
    ],
    "removeOWIds": [
        200929,
        200931,
        200963,
        200964
    ]
}
```

```json "Response 200"
{
    "success": true,
    "data": "Your changes have been successfully saved."
}
```

</div></div>

---

### Edit Inventory Group

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/inv/groups/{groupId}</span>

<div class="container">
  <div class="child1">

Edit an inventory group.

| Path Parameters  |  |
| ---- | --- |
| `groupId` <br /><span class="type-text">integer</span> | Group ID |

| Request Schema |  |
| ----  | --- |
| `groupName` <br /><span class="type-text">string</span> | Name of group |

</div><div class="child2">

```json title="Request Sample"
{
    "groupName": "Open exchange Group - updated"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "groupTypeId": null,
        "created": null,
        "modifiedDate": null,
        "owId": 0,
        "impressions": 0,
        "isAccountLevelExcluded": null,
        "campaignWhitelistCount": 0,
        "campaignBlacklistCount": 0,
        "whiteListedCampaignIds": null,
        "blackListedCampaignIds": null,
        "publishers": 0,
        "sharedCount": 0,
        "uniques": 0,
        "reach": 0,
        "inventories": 0,
        "deals": 0,
        "contextualInventories": 0,
        "count": 0,
        "id": 176168,
        "name": "Open exchange Group - updated",
        "isShared": false
    }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 403"
{
    "success": false,
    "errorObjects": [
        {
        "error": "Forbidden!"
        }
    ]
}
```

```json title="Response 422"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Inventory group name can not have more than 255 characters.",
            "field": "groupName"
        }
    ]
}
```

```json title="Response 500"
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

### Delete Inventory Group

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/inv/groups/{groupId}</span>

<div class="container">
  <div class="child1">

Delete an existing inventory group.

| Path Parameters | Description |
| ---- | --- |
| `groupId` <br /><span class="type-text">integer</span> | Group ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Inventory group deleted successfully."
}
```

</div></div>

---

## Private Marketplace (PMP) Deals Details

Private Marketplace Deals are a type of programmatic advertising arrangement that allows advertisers to purchase ad inventory through a private, invitation-only auction. This section will cover common methods and endponts associated with PMP deals.

### Get PMP Deals List

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/pmp/deals/list</span>

<div class="container">
  <div class="child1">
 
Get a list of PMP deals based on desired filters available for user.

| Request Schema  |  |
| ---- | --- |
| `groupId` <br /><span class="type-text">integer</span> | Filters PMP Deals by Group ID |
| `active` | boolean | Filters for active (`true`) or inactive (`false`) deals |
| `searchKeywords` <br /><span class="type-text">array of strings</span> | Strings used to search by `dealId`, `dealName`, or description |
| `creativeTypes` <br /><span class="type-text">array of integers</span> | Creative type IDs |
| `exchanges` <br /><span class="type-text">array of integers</span> | Exchanges IDs |
| `ids` <br /><span class="type-text">array of integers</span> | PMP Deal IDs |
| `dealStatuses` <br /><span class="type-text">array of strings</span> | Deal statuses, allowed values: `inUse`, `unUsed`, and `inActive` |
| `owIds` <br /><span class="type-text">array of integers</span> | Organization Workspace IDs |
| `pageNo` <br /><span class="type-text">integer</span> | Pages of retrieved details desired, default: `1` |
| `noOfEntries` <br /><span class="type-text">integer</span>| Maximum number of deals to retrieve, default: `50` |
| `sortBy` <br /><span class="type-text">string</span>| Ascending= `+dealId`, descending= `-dealId` |

</div><div class="child2">

```json title="Request Sample"
{
    "groupId": 1,
    "active": true,
    "searchKeywords": [
        "keyword1",
        "keyword2"
    ],
    "creativeTypes": [
        1,
        2,
        3
    ],
    "exchanges": [
        1,
        2,
        3,
        4
    ],
    "ids": [
        1,
        2,
        3,
        4
    ],
    "dealStatuses": [
        "inUse",
        "unUsed",
        "inActive"
    ],
    "sortBy": "-dealId",
    "noOfEntries": 2,
    "pageNo": 1
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "filteredRecords": 1,
        "filteredList": [
            {
                "id": 115,
                "dealId": "1476907757380667148",
                "dealName": "85%+ Completion",
                "description": "85%+ Completion",
                "cpm": 20,
                "dealCurationTypeId": 1,
                "creativeTypes": [
                    "video"
                ],
                "exchanges": [
                    "Oath"
                ],
                "active": true,
                "shared": false,
                "created": 1597658148,
                "assignedToCustomers": [
                    1,
                    2
                ],
                "assignedToCampaigns": [
                    11223,
                    65333
                ]
            }
        ]
    }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 422"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid sortBy value."
        }
    ]
}
```

```json title="Response 500"
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

### Get More PMP Details

Get more PMP details with the following endpoints:

| Method | Path |  |
| ---- | ---- | --- |
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v3/inv/pmp/deals/{id}</span> | Get PMP Deal details by ID |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/pmp/deals/{dealId}/associated-customers</span> | Gets list of customers associated with campaigns for a PMP Deal |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/pmp/deals/count-by-status</span> | Gets count of PMP deals for all statuses, supports query parameter `searchKeywords` |
| <span class="badge badge--primary">GET</span>  | <span class="path-text">/api/v3/inv/static/deal-types</span> | Gets list of deal types |
| <span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/inv/static/deal-status</span> | Gets list of deal statuses |

<div class="container">
  <div class="child1">

| Path Parameters |  |
| ---- | --- |
| `id` <br /><span class="type-text">integer</span>| PMP Deal ID |
| `dealId` <br /><span class="type-text">integer</span> | PMP Deal ID |

</div><div class="child2">

```json title="Response 200 (count by status)"
{
    "success": true,
    "data": {
        "All": 351,
        "inActive": 48,
        "inUse": 266,
        "unUsed": 37
    }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 403"
{
    "success": false,
    "errorObjects": [
        {
            "error": "User is not super-user!"
        }
    ]
}
```

```json title="Response 500"
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

## PMP Management

Create, update, or delete PMP Deals using the methods and endpoints outlined in this section.

### Resource Properties

Create or update PMP Deals using the following properties in the Request Body Schema.

<div class="container">
  <div class="child3">

| Attributes |  |
| ---- | --- |
| `dealId` <br /><span class="type-text">string</span> | PMP Deal ID |
| `dealName` <br /><span class="type-text">string</span> | PMP Deal name |
| `description` <br /><span class="type-text">string</span> | PMP Deal description |
| `cpm` <br /><span class="type-text">integer</span> | PMP deal Cost Per Mille (CPM) value |
| `dealCurationTypeId` <br /><span class="type-text">integer</span> | Curation type ID |
| `creativeTypes` <br /><span class="type-text">array of integers</span> | Creative type IDs |
| `exchangeId` <br /><span class="type-text">integer</span> | Exchange associated with PMP Deal |
| `assignToCustomers` <br /><span class="type-text">array of integers</span> | Customer Organization Workspace IDs |
| `active` <br /><span class="type-text">boolean</span> | Deal status, active= `true`, inactive= `false` |

</div></div>

### Create PMP Deal

<span class="badge badge--success">POST</span> <span class="path-text">api/v3/inv/pmp/deals/add</span>

<div class="container">
  <div class="child1">

Create a new PMP Deal using the above [resource properties](#resource-properties) as the request schema

</div><div class="child2">

```json title="Request Sample"
{
    "dealId": "DIewkFZALX1taoLjQg6Gge1dD6YvZYO4RChUKmOLk",
    "dealName": "Deal test123",
    "description": "test deal description",
    "cpm": 10,
    "creativeTypes": [
        11,
        12
    ],
    "exchangeId": 39,
    "active": true
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 461,
        "message": "Deal test123 created successfully"
    }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 400"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Deal id can not be longer than 500 characters",
            "field": "dealId"
        }
    ]
}
```

```json title="Response 422"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid exchange id/ids provided"
        }
    ]
}
```

```json title="Response 500"
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

### Update PMP Deal

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/inv/pmp/deals/{id}</span>

<div class="container">
  <div class="child1">

Update any [resource property](#resource-properties) of an existing PMP Deal with its ID  with the following endpoint:

\
**Path Parameters**

| Path Parameters |  |
| ----| --- |
| `id` <br /><span class="type-text">integer</span> | PMP Deal ID


</div><div class="child2">

```json title="Request Sample"
{
    "dealName": "New Deal Name"
}

```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 461,
        "message": "New Deal Name updated successfully"
    }
}
```

</div></div>

---

### Delete PMP Deal

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/inv/pmp/deals</span>

<div class="container">
  <div class="child1">

Delete an existing PMP Deal.


| Query Parameters |  |
| ---- | --- |
| `ids` <br /><span class="type-text">list of integers</span> | PMP Deal IDs to delete |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": [
            470,
            471
        ],
        "message": "Deal/s deleted successfully"
    }
}
```

</div></div>

---

## Programmatic Guarantee (PG) Deals Details

A Programmatic Guarantee Deal is a direct negotiation between one publisher and one advertiser offering budget predictability and avoiding auction volatility by ensuring a fixed amount of ad inventory at a pre-negotiated price. This section will cover common methods and endpoints associated with PG Deals.

### Get PG Deals List

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/inv/pg/deals/list</span>

<div class="container">
  <div class="child1">

Get a list of PG deals available for user.

| Query Parameters |  |
| ---- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of deals to retrieve, default: `20` |
| `pageNo` <br /><span class="type-text">integer</span> |  Pages of retrieved details desired, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sort results by ascending (`+`) or descending (`-`), supported values: `id`, `dealName`, `cmp` <br />Default: `-id` |
| `ids` <br /><span class="type-text">array of integers</span> | IDs of the primary key of PG Deals |
| `paymentTypeIds` <br /><span class="type-text">array of integers</span> | Payment type IDs |
| `statusIds` <br /><span class="type-text">array of integers</span> | Status IDs |
| `exchangeIds` <br /><span class="type-text">array of integers</span> | Exchange IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 61,
        "filteredRecords": 4,
        "pgDealData": [
            {
                "id": 873,
                "dealId": "PM-RTY-98765",
                "dealName": "Demo Deal D4",
                "statusId": 1,
                "description": "Demo deal description D4",
                "paymentTypeId": 2,
                "exchangeId": 11,
                "created": 1719723041347,
                "activeCampaignIds": [],
                "otherCampaignIds": [
                    506172,
                    506173,
                    506174,
                    506175,
                    506176,
                    506177,
                    506178
                ],
                "deleteAllowed": true
            },
            {
                "id": 872,
                "dealId": "PM-QWE-54321",
                "dealName": "Sample Deal C3",
                "statusId": 1,
                "description": "Sample deal description C3",
                "paymentTypeId": 2,
                "exchangeId": 78,
                "created": 1719722247192,
                "activeCampaignIds": [
                    506162,
                    506161,
                    506160
                ],
                "otherCampaignIds": [
                    506163,
                    506166,
                    506165,
                    506164
                ],
                "deleteAllowed": false
            },
            ...
        ]
    }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 401"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Unauthorized"
        }
    ]
}
```

```json title="Response 422"
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid sortBy value."
        }
    ]
}
```

```json title="Response 500"
{
    "success": false,
    "errorObjects": [
        {
            "error": "server encountered an error !"
        }
    ]
}
```

</details>

</div></div>

---

### Get More PG Deals Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/inv/pg/deals/{id}</span>

<div class="container">
  <div class="child1">

Get PG Deal details by specified ID including its associated campaign IDs.

\
**Path Parameters**

| Path Parameters  |  |
| ----  | --- |
| `id` <br /><span class="type-text">integer</span> | PG Deal ID

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 872,
        "dealId": "PM-QWE-54321",
        "dealName": "Sample Deal C3",
        "statusId": 1,
        "description": "Sample deal description C3",
        "paymentTypeId": 2,
        "exchangeId": 78,
        "created": 1719722247192,
        "activeCampaignIds": [
            506160,
            506161,
            506162
        ],
        "otherCampaignIds": [
            506163,
            506164,
            506165,
            506166
        ]
    }
}
```

</div></div>

---

## PG Management

Create, update, or delete PG Deals using the methods and endpoints outlined in this section.

### Resource Properties

Create or update PG Deals using the following properties in the Request Body Schema.

<div class="container">
  <div class="child3">

| Attributes  |  |
| ---- | --- |
| `dealId` <br /><span class="type-text">string</span> | PG Deal ID |
| `dealName` <br /><span class="type-text">string</span>| PG Deal name |
| `exchangeId` <br /><span class="type-text">integer</span> | Exchange ID associated with PG Deal | 
| `cpm` <br /><span class="type-text">integer</span> | Cost Per Mille (CPM) value |
| `statusId` <br /><span class="type-text">integer</span> | Status ID of PG Deal |
| `description` <br /><span class="type-text">string</span> | Description or notes about the deal |
| `paymentTypeId` <br /><span class="type-text">integer</span> | Payment type ID of PG Deal

</div></div>

---

### Create PG Deal

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/inv/pg/deals/add</span>

<div class="container">
  <div class="child1">

Create a new PG Deal with the following endpoint:

Refer to [PG Deal resource properties](#resource-properties-1) above for schema. 

</div><div class="child2">

```json title="Request Sample"
{
    "dealId": "YT-Test-1234",
    "dealName": "Test deal YT31",
    "exchangeId": 11,
    "statusId": 2,
    "paymentTypeId": 1,
    "description": "Test Deal"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "message": "Deal Test deal YT31 created successfully",
        "id": 2
    }
}
```

</div></div>

---

### Update PG Deal Details

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/inv/pg/deals/{id}</span>

<div class="container">
  <div class="child1">

Update specific details of a PG Deal.

| Path Parameters |  |
| ---- | --- |
| `id` <br /><span class="type-text">integer</span> | PG Deal ID |

Refer to [PG Deal resource properties](#resource-properties-1) above for request schema. 

</div><div class="child2">

```json title="Request Sample"
{
    "dealId": "PM-ABC-12345",
    "dealName": "Premium Advertising Package",
    "statusId": 2,
    "description": "Comprehensive advertising package including display, video, and social media placements for maximum exposure.",
    "cpm": 40,
    "paymentTypeId": 2,
    "exchangeId": 11
}
```

```json title="Response 200"
{
    "success": true,
    "data": "PG deal updated successfully"
}
```

</div></div>

---

### Delete PG Deal

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/inv/pg/deals</span>

<div class="container">
  <div class="child1">

Delete an existing PG Deal.

| Query Parameters |  |
| ---- | --- |
| `ids` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Comma separated PG Deal IDs to delete |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "PG Deal deleted successfully"
}
```

</div></div>

---
