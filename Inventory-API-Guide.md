# Inventory API

IQM's advanced algorithm deterines the most relevant ads to display to a user based on their activity and the content of a given page. Inventories provide advertisers a way to organize collecions or groups based on criteria such as ad format, placement type, targeting options, and other attributes. Private Marketplace (PMP) deals and Programmatic Guarantee (PG) deals are arranged so advertisers can purchase ad inventory. This page will cover common methods and endpoints associated with `Inventories`, `PMP Deals`, `PG Deals`, and `Groups`.

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Inventory Details

Inventories are collections of all inventory sources.

Use the following endpoints to get details for various aspects of inventories, filtered by query parameters:

| Method/Endpoint | Path | Description |
| ---- | ---- | --- |
| `GET` /api/v3/inv | inventories/list | Gets list of inventory available to user |
|| inventories/distributions | Gets distribution of inventory available for user across country and other parameters |
|| inventories/count | Gets count of unique inventories, unique publishers, total number of impressions, and total reach of all inventories |
|| inventory-group-types | Gets list of inventory group types |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `keywords` | string | Keywords to search inventory list |
| `countries` | string | Filter by country |
| `categories` | string | Filter by category |
| `inventoryTypes` | string | Filter by inventory type |
| `creativeSizes` | string | Filter by creative size |
| `creativeTypes` | string | Filter by creative type |
| `creativeDurations` | string | Filter by creative duration |
| `trafficTypes` | string | Filter by traffic type |
| `deviceTypes` | string | Filter by device type |
| `exchanges` | string | Filter by exchange |
| `videoPlayerSizes` | string | Filter by video player size |
| `noOfEntries` | integer | Maximum number of entries per page |
| `pageNo` | integer | Number of pages for retrieved data |
| `groupId` | integer | Group ID |

\
Response 200 Sample (inventory list)

```json
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

### Get List of Blocked Inventories

Blocklisted inventories refer to digital media placements or websites that are deemed inappropriate (adult content, hate speech, misaleading information) or of low quality (low engagement, poor user experience). Use the following endpoint to get a list of blocklisted inventories:

* `GET` api/v3/inv/blocked-inventories

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search result by keyword |
| `inventoryIds` | string | Filter inventories by inventory ID |
| `noOfEntries` | integer | Maximum number of entries per page, default: `200` |
| `pageNo` | integer | Number of pages for retrieved data, default: `1` |

\
Response 200 Sample

```json
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

## Inventory Management

Optimize inventories for specific campaigns, download detailed inventory files, or block inventories.

### Campaign Inventory Optimization

Inventories can be optimized for specific campaign IDs with the following endpoint: 

* `POST` /api/v2/inv/inventories/includeExclude

\
**Sample Request Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer | Campaign ID to target for optimization |
| `ids` | string | Comma separated strings of inventory IDs to include in or exclude from specified campaign |
| `isExcluded` | integer | Include in campaign: `0`<br> Exclude from campaign: `1` |

\
Request Body Sample

```json
{
    "campaignId": 168622,
    "ids": "1,2,3,4",
    "isExcluded": 0
}
```

\
Response 200

```json
{
    "statusCode": 200,
    "responseObject": {
        "message": "Inventories Included."
    }
}
```

### Block Inventories

Inventories can be blocked at the account level by ID or search field with the following endpoint:

`POST` /api/v3/inv/inventories/block

\
**Sample Request Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `inventoryIds` | array of integers | Inventory IDs to block |
| `searchField` | string | Block inventories by searched keyword |

\
Request Body Sample

```json
{
    "inventoryIds": [
        0,
        1,
        5
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": "Inventories blocked successfully."
}
```

### Get Inventory Lists in or from CSV Format

Get a paginated list of various inventory details in or from CSV file format with the following endpoints:

| Method/Endpoint | Path | Description |
| ---- | ---- | --- |
| `POST` api/v3/inv/inventories | /open-exchange/download | Generates CSV (or XLSX) file of inventory list filtered by query parameters or CSV upload: `multipartFile` |
| | /csv/list | Gets list of inventory based on provided CSV file: `domainsFile` | 
| | /csv/distributions | Gets distribution of inventory based on provided CSV file: `domainsFile` |
| | /csv/count |  Gets inventory count based on provided CSV file: `domainsFile` |

\
**Request Body Schema: applicatin/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `keywords` | string | Filters by list of keywords |
| `countries` | string | Filters by list of countries |
| `categories` | string | Filters by categories |
| `inventoryTypes` | string | Filters by inventory type |
| `creativeSizes` | string | Filters by creative sizes |
| `creativeDurations` | string | Filters by creative durations | 
| `trafficTypes` | string | Filters by traffic type | 
| `deviceTypes` | string| Filters by device type |
| `exchanges` | string | Filters by exchanges | 
| `videoPlayerSizes` | string | Filters by video player size |
| `isCsvSearch` | boolean | `true` if CSV file uploaded for query, otherwise `false` |
| `fileType` | string | File type to download: `csv` or `xlsx` |

\
Request Body Sample

```json
{
    "multipartFile": "string"
}
```

Response 200

```json
{
    "success": true,
    "data": "https://iqm-ephemeral-2aca615e13f8-stage.s3.amazonaws.com/inventory/download/csv/Yash%20org%202_1720435555550.csv?response-expires-Amz-Credential"
}
```

## Inventory Groups

An inventory group refers to a collection or grouping of inventory sources categorized by specific criteria such as ad format, placement type, targeting options, or other attributes. There are three types of inventory group: `Open Exchange`, `PMP Deals`, and `Contextual Inventory`. This section will cover common methods and endpoints for managing inventory groups.

### Get List of Inventory Groups

Get a list of inventory groups based on various filters and parameters with the following endpoint:

* `GET` /api/v3/inv/groups/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `groupFilterId` | integer | Filters groups list. Supported values: <br>All Groups [default]: `0` <br>Share by Admin: `1` <br>Own Groups: `2` |
| `groupTypeIds` | string | Filters groups list. Supported values: <br>Open Exchange: `1` <br>PMP: `2` <br>Contextual: `3` |
| `ids` | string | Comma separated IDs
| `provideAccountLevelExcludedGroup` | boolean | Flag to indicate whether to include account-level excluded group in response or not, default: `false` |
| `includeStatistics` | boolean | Flag to indicate whether to include statistics in response or not, default: `true` |
| `excludeEmptyGroups` | boolean | Flag to indicate whether to include empty groups in response or not, default: `false` |
| `searchField` | string | Searches by name |
| `pageSize` | integer | Maximum number of entries per page |
| `pageNo` | integer | Number of pages for retrieved data |
| `owId` | integer | Organization Workspace ID |
| `sortBy` | string | Sort entries by ascending (+) or descending (-) |

\
Response 200 Sample

```json
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

### Get More Inventory Groups Details

Get more inventory groups details with the following endpoints:

| Method/Endpoint | Path | Description |
| ---- | ---- | --- |
| `GET` /api/v3/inv/groups | /statistics | Get statistics of inventory groups
| `GET` /api/v3/group/{groupId} | /shared/campaigns/list | Gets list of campaigns attached to the inventory group |
| | /pmp-deals | Gets list of PMP Deals in an inventory group |
| | /pmp-deals/csv | Gets CSV format list of PMP Deals in an inventory group |
| | /open-exchange-inventories | Gets list of open exchange inventories for an inventory group
| | /open-exchange-inventories/distributions | Gets distribution of open exchange inventories in an inventory group |
| | /open-exchange-inventories/count | Gets count of open exchange inventories in an inventory group |
| | /contextual-inventories | Gets list of contextual inventories for an inventory group |
| | /contextual-inventories/csv | Gets CSV format list of contextual inventories for an inventory group |
| | /contextual-inventories/count | Gets count of contextual inventories for an inventory group | 

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `groupId` | integer [required] | Group ID |
| `searchField` | string | Search inventory group by name |
| `noOfEntries` | integer | Maximum number of entries per page, default: `50` |
| `pageNo` | integer | Number of pages for retrieved data |

\
Response 200 Sample (open exchange inventories)

```json
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

### Contextual Inventory

Get recommended keywords or autocompleted keywords with the following endpoints:

* `GET` /api/v3/inv/contextual/recommend
* `GET` /api/v3/inv/contextual/autosuggest

\
**Query Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `keyword` | string | Suggestion or Recommendation will be made based on this keyword | 

\
Response 200 

```json
{
    "success": true,
    "data": [
        "sport",
        "business",
        "play"
    ]
}
```

## Inventory Group Management

Update details or delete group inventories.

### Create a New Inventory Group

Add a new inventory group based on the provided request body.

**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `groupName` | integer | Desired name for group |
| `groupTypeId` | integer | Group type. Supported values: <br>Open Exchange: `1` <br>PMP: `2` <br>Contextual: `3` |
| `inventoryIds` | array of integers | Inventory to include in group |

\
**Request Sample**

```json
{
    "groupName": "Inventory Group - Open exchange",
    "groupTypeId": 1,
    "inventoryIds": [
        35132,
        4107192
    ]
}
```

\
Response 200 Sample

```json
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

### Add or Remove Mappings to an Inventory Group

Add or Remove inventories (Open Exchange, Private Deals, Contextual) to a group or multiple groups with the following endpoints:

* `POST` /api/v3/inv/group/addMappings
* `POST` /api/v3/inv/group/removeMappings

\
**Request Body Schema: application/json**

Inventories can be added/removed by filtering for results, inputting `dealIds`, contextual details, or `inentoryIds`.

Add/Remove by filter:

| Property | Type | Description |
| ---- | ---- | --- |
| `groupIds` | array of integers | Group IDs to add mappings to |
| `keywords` | array of strings | Filters by keyword | 
| `countries` | array of integers | Filters by country |
| `categories` | array of strings | Filter by category |
| `inventoryTypes` | array of integers | Filter by inventory type |
| `creativeSizes` | array of strings | Filter by creative size |
| `creativeTypes` | array of integers | Filter by creative types |
| `trafficTypes` | array of integers | Filter by traffic types |
| `deviceTypes` | array of integers | Filter by device types |
| `videoPlayerSizes` | array of integers | Filter by video player sizes |
| `isAllInventories` | boolean | 

\
Add/Remove by Deal ID:

| Property | Type | Description |
| ---- | ---- | --- |
| `groupIds` | array of integers | Group IDs to add mappings to |
| `dealIds` | array of integers | Deal IDs to add to group |

\
Add/Remove by Contextual Inventories:

| Property | Type | Description |
| ---- | ---- | --- |
| `groupIds` | array of integers | Group IDs to add mappings to |
| `contextualKeywords` | array of strings | Names of Contextual Inventories |
| `contextualUrls` | array of strings | URLs of Contextual Inventories |

\
Add/Remove by Inventory ID:

| Property | Type | Description |
| ---- | ---- | --- |
| `groupIds` | array of integers | Group IDs to add mappings to |
| `inventoryIds` | array of integers | Inventory IDs to add to group |

\
Response 200 Sample

```json
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

### Add or Remove Customers From a Shared Inventory Group

Add or remove customers from an inventory group by group ID with the following endpoint: 

* `PATCH` /api/v3/inv/group/{groupId}/shared/customers/edit

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `groupId` | integer [required] | Group ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `addOwIds` | array of integers | Organization Worskpace IDs to add to Inventory Group |
| `removeOwIds` | array of integers | Organization Workspace IDs to remove from Inventory Group |

\
Request Sample 

```json
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

Response 200 Sample

```json
{
    "success": true,
    "data": "Your changes have been successfully saved."
}
```

### Edit Inventory Group

Edit an inventory group with the following endpoint:

* `PATCH` /api/v3/inv/groups/{groupId}

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `groupId` | integer [required] | Group ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `groupName` | string| Name of group |

\
Request Sample

```json
{
    "groupName": "Open exchange Group - updated"
}
```

Response 200 Sample

```json
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

<detail>
<summary>More Responses</summary>

Response 403

```json
{
    "success": false,
    "errorObjects": [
        {
        "error": "Forbidden!"
        }
    ]
}
```

Response 422

```json
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


### Delete Inventory Group

Delete an existing inventory group with the following endpoint:

* `DELETE` /api/v3/inv/groups/{groupId}

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `groupId` | integer [required] | Group ID |

\
Response 200 Sample

```json
{
    "success": true,
    "data": "Inventory group deleted successfully."
}
```

## Private Marketplace (PMP) Deals Details

Private Marketplace Deals are a type of programmatic advertising arrangement that allows advertisers to purchase ad inventory through a private, invitation-only auction. This section will cover common methods and endponts associated with PMP deals. 

### Get PMP Deals List

Get a list of PMP deals based on desired filters available for user with the following endpoint:

* `POST` /api/v3/pmp/deals/list

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `groupId` | integer | Filters PMP Deals by Group ID |
| `active` | boolean | Filters for active (=`true`) or inactive (=`false`) deals |
| `searchKeywords` | array of strings | Strings used to search by `dealId`, `dealName`, or description |
| `creativeTypes` | array of integers | Creative type IDs |
| `exchanges` | array of integers | Exchanges IDs |
| `ids` | array of integers | PMP Deal IDs |
| `dealStatuses` | array of strings | Deal statuses, allowed values: `inUse`, `unUsed`, and `inActive` |
| `owIds` | array of integers | Organization Workspace IDs |
| `pageNo` | integer | Pages of retrieved details desired, default: `1` |
| `noOfEntries` | integer | Maximum number of deals to retrieve, default: `50` |
| `sortBy` | string | Ascending= `+dealId`, descending= `-dealId` |

\
Request Sample

```json
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

Response 200 Sample

```json
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
Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid sortBy value."
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

### Get More PMP Details

Get more PMP details with the following endpoints:

| Method/Endpoint | Path | Description |
| ---- | ---- | --- |
| `GET` /api/v3/inv/pmp/deals | /{id} | Get PMP Deal details by ID |
|| /{dealId}/associated-customers | Gets list of customers associated with campaigns for a PMP Deal |
|| /count-by-status | Gets count of PMP deals for all statuses, supports query parameter `searchKeywords` |
| `GET` /api/v3/inv/static | /deal-types | Gets list of deal types |
| | /deal-status | Gets list of deal statuses |

\
**Path Parameters** (where applicable)

| Path | Type | Description |
| ---- | ---- | --- |
| `id` | integer | PMP Deal ID |
| `dealId` | integer | PMP Deal ID |

\
Response Sample 200 (count by status)

```json
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

Response 403

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "User is not super-user!"
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

## PMP Management

Create, update, or delete PMP Deals using the methods and endpoints outlined in this section.

### Resource Properties

Create or update PMP Deals using the following properties in the Request Body Schema.

| Property | Type | Description |
| ---- | ---- | --- |
| `dealId` | string | PMP Deal ID |
| `dealName` | string | PMP Deal name |
| `description` | string | PMP Deal description |
| `cpm` | integer | PMP deal Cost Per Mille (CPM) value |
| `dealCurationTypeId` | integer | Curation type ID |
| `creativeTypes` | array of integers | Creative type IDs |
| `exchangeId` | integer | Exchange associated with PMP Deal |
| `assignToCustomers` | array of integers | Customer Organization Workspace IDs |
| `active` | boolean | Deal status, active= `true`, inactive= `false` |

### Create PMP Deal

Create a new PMP Deal using the above [resource properties](#resource-properties) as the request schema

\
**Request Sample**

```json
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

Response 200

```json
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

Response 400

```json
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

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid exchange id/ids provided"
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

### Update PMP Deal

Update any [resource property](#resource-properties) of an existing PMP Deal with its ID  with the following endpoint:

* `PATCH` /api/v3/inv/pmp/deals/{id}

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `id` | integer | PMP Deal ID

\
Request Sample

```json
{
    "dealName": "New Deal Name"
}

```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 461,
        "message": "New Deal Name updated successfully"
    }
}
```

### Delete PMP Deal

Delete an existing PMP Deal with the following endpoint:

* `DELETE` /api/v3/inv/pmp/deals

\
**Query Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `ids` | list of integers [required] | PMP Deal IDs to delete |

\
Response 200 Sample

```json
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

## Programmatic Guarantee (PG) Deals Details

A Programmatic Guarantee Deal is a direct negotiation between one publisher and one advertiser offering budget predictability and avoiding auction volatility by ensuring a fixed amount of ad inventory at a pre-negotiated price. This section will cover common methods and endpoints associated with PG Deals. 

### Get PG Deals List

Get a list of PG deals available for user with the following endpoint:

* `GET` /api/v3/inv/pg/deals/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `noOfEntries` | integer | Maximum number of deals to retrieve, default: `20` |
| `pageNo` | integer |  Pages of retrieved details desired, default: `1` |
| `sortBy` | string | Sort results by ascending (`+`) or descending (`-`), supported values: `id`, `dealName`, `cmp` <br>Default: `-id` |
| `ids` | array of integers | IDs of the primary key of PG Deals |
| `paymentTypeIds` | array of integers | Payment type IDs |
| `statusIds` | array of integers | Status IDs |
| `exchangeIds` | array of integers | Exchange IDs |

\
Response 200 Sample

```json
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

Response 401

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Unauthorized"
        }
    ]
}
```

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid sortBy value."
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

### Get More PG Deals Details

Get PG Deal details by specified ID including its associated campaign IDs with the following endpoint:

* `GET` /api/v3/inv/pg/deals/{id}

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `id` | integer | PG Deal ID

\
Response 200 Sample

```json
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

## PG Management

Create, update, or delete PG Deals using the methods and endpoints outlined in this section.

### Resource Properties

Create or update PG Deals using the following properties in the Request Body Schema.

| Property | Type | Description |
| ---- | ---- | --- |
| `dealId` | string | PG Deal ID |
| `dealName` | string| PG Deal name |
| `exchangeId` | integer | Exchange ID associated with PG Deal | 
| `cpm` | integer | Cost Per Mille (CPM) value |
| `statusId` | integer | Status ID of PG Deal |
| `description` | string | Description or notes about the deal |
| `paymentTypeId` | integer | Payment type ID of PG Deal

### Create PG Deal

Create a new PG Deal with the following endpoint:

* `POST` /api/v3/inv/pg/deals/add

\
**Request Body Schema: application/json**

Refer to [PG Deal resource properties](/Inventory-API-Guide.md#resource-properties-1) above for schema. 

\
Request Sample

```json
{
    "dealId": "YT-Test-1234",
    "dealName": "Test deal YT31",
    "exchangeId": 11,
    "statusId": 2,
    "paymentTypeId": 1,
    "description": "Test Deal"
}
```

\
Response 200 Sample

```json
{
    "success": true,
    "data": {
        "message": "Deal Test deal YT31 created successfully",
        "id": 2
    }
}
```

### Update PG Deal Details

Update specific details of a PG Deal with the following endpoint:

* `PATCH` /api/v3/inv/pg/deals/{id}

\
**Path Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `id` | integer [required] | PG Deal ID |

\
**Request Body Schema: application/json**

Refer to [PG Deal resource properties](/Inventory-API-Guide.md#resource-properties-1) above for schema. 

Request Sample

```json
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

Response 200 Sample

```json
{
    "success": true,
    "data": "PG deal updated successfully"
}
```

### Delete PG Deal

Delete an existing PG Deal with the following endpoint:

* `DELETE` /api/v3/inv/pg/deals

\
**Query Parameters**

| Path | Type | Description |
| ---- | ---- | --- |
| `ids` | list of integers [required] | Pg Deal IDs to delete |

\
Response 200 Sample

```json
{
    "success": true,
    "data": "PG Deal deleted successfully"
}
```
