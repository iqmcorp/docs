# Inventory API

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Inventory Details

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
| `noOfEntries` | integer | Maximum number of entires per page |
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

## Private Marketplace (PMP) Deals Details

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

### Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `dealId` | string | PMP Deal ID |
| `dealName` | string | PMP Deal name |
| `description` | string | PMP Deal description |
| `cpm` | integer | PMP deal CPM value |
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


</details>

## Programmatic Guarantee (PG) Deals Details

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
