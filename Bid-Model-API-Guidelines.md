# Bid Model API Guidelines

The Bid Model API allows users to optimize their advertising campaigns for better performance. The user can fine-tune metrics such as where their ads appear (Include/Exclude), campaign priority management, and dimensions by which a campaign is subdivided.

This page will cover the common endpoints and methods associated with the Bid Model API.

## Include/Exclude Management

The **Include** and **Exclude** options allow the user to control where their ads appear. Use the following endpoints:

* `POST` /api/v2/cmp/deviceType/includeExclude
* `POST` /api/v2/cmp/exchange/includeExclude
* `POST` /api/v2/cmp/trafficsource/includeExclude

\
**Header Paramaters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-HOST` | string [required] | Workspace URL |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `ids` | string [required] | ID of entity |
| `isExcluded` | integer [required] | Allow targeted entity (`0`) or block targeted entity (`1`) |
| `campaignId` | integer [required] | Unique campaign ID |

\
Request Sample

```json
{
    "ids": "15",
    "isExcluded": 0,
    "campaignId": 214269
}
```

Response 200 Sample (`deviceType`)

```json
{
    "statusCode": 200,
    "responseObject": {
        "message": "The Device Types have been allowed."
    }
}
```

### Include/Exclude Entities From a Campaign

This API allows the user to optimize a campaign by updating the status of specified entities to either included or excluded with path parameters `campaignId` and `dimensionId`. Use the following endpoint:

* `POST` /api/v3/bm/campaigns/{campaignId}/include-Exclude/dimensions/{dimensionId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer [required] | Unique ID of campaign |
| `dimensionId` | integer [required] | Unique ID of dimension |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `advertiserId` | integer | Unique ID of advertiser |
| `dspId` | integer | | 
| `owId` | integer | Organization workspace ID |
| `uowId` | integer | User organization workspace ID |
| `campaignId` | integer | Unique ID of campaign |
| `ids` | string | Creative ID |
| `isExcluded` | integer | Target entity (`0`); Block entity (`1`)

\
Request Sample (creatives)

```json
{
    "ids": "604675,604084",
    "isExcluded": 0
}
```

Response 200 Sample (creatives)

```json
{
    "success": true,
    "data": "Creatives successfully targeted for the campaign."
}
```

## Campaign Priority Management

Assigning priority to campaigns allows the user to establish a sequential order of bidding to fine-tune their targeting strategy. Use the following endpoint to assign priority (ranging 1 to 10) to multiple `campaignId`s with the same API:

* `PUT` /api/v3/bm/io/{ioId}/bid-models

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `ioId` | integer [required] | Unique identifier for insertion order | 

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

[Note: all objects inside request body are not required]

| Property | Type | Description |
| ---- | ---- | --- |
| `addPriority` | object | Assign new priority to one or multiple campaigns, requires `priority` and `campaignIds` | 
| `updatePriority` | object | Update assigned priority to one or multiple campaigns, requires `priority` and `campaignIds` |
| `deletePriority` | object | Deletes assigned priority from one or multiple campaigns, requires `priority` and `campaignIds` |
| `priority` | integer [required] | Assigned priority: [1 .. 10]
| `campaignIds` | array of integers [required] | Array of unique campaign IDs |

\
Request Sample

```json
{
    "addPriority": {
        "campaignIds": [
            465913,
            453423
        ],
        "priority": 9
    },
    "updatePriority": {
        "campaignIds": [
            465925
        ],
        "priority": 9
    },
    "deletePriority": {
        "campaignIds": [
            465464,
            434232
        ]
    }
}
```

Response 200

```json
{
    "success": true,
    "data": "Priority Updated Successfully"
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
            "error": "Cannot assign priority as campaign is in invalid status"
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

### Further Campaign Priority Management

Add, update, or delete assigned priorities to multiple campaigns using the following endpoints:

* `POST` /api/v3/bm/io/{ioId}/bid-models
* `DELETE` /api/v3/bm/io/{ioId}/bid-models
* `PATCH` /api/v3/bm/io/{ioId}/bid-models

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `ioId` | integer [required] | Unique identifier for insertion order | 

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `priority` | integer [required] | Assigned priority: [1 .. 10]
| `campaignIds` | array of integers [required] | Array of unique campaign IDs |

\
Request Sample

```json
{
    "priority": 1,
    "campaignIdList": [
        123456,
        234567,
        345678,
        456789
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": "Priority Updated Successfully"
}
```

## Get Metrics Report For a Given Campaign and Dimension

Generate a detailed metrics for a specific campaign, segmented by dimension with the following endpoint:

* `POST` api/v3/bm/campaigns/{campaignId}/reports/{dimensionId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer [required] | The campaign ID for which the report is being generated |
| `dimensionId` | integer [required] | The dimension ID for which the report is being generated |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Default: `""` |
| `sortBy` | string | Default: `"-impressions"` |
| `pageNo` | integer | Default: `1` |
| `pageSize` | integer | Default: `50` |
| `timeZoneId` | integer | ID of time zone |
| `startDate` | integer | Unix timestamp of campaign start date |
| `endDate` | integer | Unix timestamp of campaign end date |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `name` | string | |
| `fileName` | string| |
| `activeTable` | string | 
| `columns` | object | Contains `label` and `value` properties
| `label` | string | | 
| `value` | string| | 
| `calledApp` | string | |
| `fileType` | string | Desired file type for generated report
| `token` | string | Access token
| `download` | boolean | Generate download url (`true`)

Sample Request

```json
{
    "name": "Nisha T",
    "fileName": "Stage Shared Advertiser_deal_id_1708536470049",
    "activeTable": "deal_id",
    "columns": [
        {
            "label": "Deal ID",
            "value": "name"
        },
        {
            "label": "eCPM($)",
            "value": "eCPM"
        }
    ],
    "calledApp": "bidModel",
    "fileType": "csv",
    "token": "fd5b502b-3c49-4703-83d9-df1b397011a2",
    "download": true
}
```

Sample Response

```json
{
    "success": true,
    "data": {
        "url": "DownloadURL"
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
            "error": "The campaign ID is missing or invalid. Please provide a valid campaign ID."
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

## Get List of Bid Model Dimensions

This API will provide values of bid-model dimensions and sub-dimensions with the following endpoint:

* `GET` /api/v3/bm/static/dimensions

### Resource Properties

| Dimension ID | Dimension Name | Description |
| :---: | --- | --- |
| `1` | Creative |
| `2` | Inventory |
| `3` | Deal ID | Subdimension of Inventory
| `4` | Open Exchange | Subdimension of Inventory
| `5` | Publisher Category | Subdimension of Inventory
| `6` | Device | |
| `7` | Traffic Type | Subdimension of Device
| `8` | Device Type | Subdimension of Device
| `9` | Location | |
| `10` | State | Subdimension of Location |
| `11` | City | Subdimension of Location |
| `12` | Zip | Subdimension of Location | 
| `13` | Exchange | |

\
Response Sample

```json
{
    "success": true,
    "data": {
        "totalRecords": 5,
        "filteredRecords": 5,
        "dimensions": [
            {
                "name": "creative",
                "id": 1,
                "label": "Creative",
                "order": 1,
                "modellingEnabled": true
            },
            {
                "name": "inventory",
                "id": 2,
                "label": "Inventory",
                "order": 2,
                "modellingEnabled": false,
                "subdimensions": [
                    {
                        "name": "deal_id",
                        "id": 3,
                        "label": "Deal ID",
                        "order": 1,
                        "modellingEnabled": false
                    },
                    {
                        "name": "open_exchange",
                        "id": 4,
                        "label": "Open Exchange",
                        "order": 2,
                        "modellingEnabled": false
                    },
                    {
                        "name": "publisher_category",
                        "id": 5,
                        "label": "Publisher Category",
                        "order": 3,
                        "modellingEnabled": false
                    }
                ]
            },
            {
                "name": "device",
                "id": 6,
                "label": "Device",
                "order": 3,
                "modellingEnabled": false,
                "subdimensions": [
                    {
                        "name": "traffic_type",
                        "id": 7,
                        "label": "Traffic Type",
                        "order": 1,
                        "modellingEnabled": false
                    },
                    {
                        "name": "device_type",
                        "id": 8,
                        "label": "Device Type",
                        "order": 2,
                        "modellingEnabled": false
                    }
                ]
            },
            {
                "name": "location",
                "id": 9,
                "label": "Location",
                "order": 4,
                "modellingEnabled": false,
                "subdimensions": [
                    {
                        "name": "state",
                        "id": 10,
                        "label": "State",
                        "order": 1,
                        "modellingEnabled": false
                    },
                    {
                        "name": "city",
                        "id": 11,
                        "label": "City",
                        "order": 2,
                        "modellingEnabled": false
                    },
                    {
                        "name": "zip",
                        "id": 12,
                        "label": "Zip",
                        "order": 3,
                        "modellingEnabled": false
                    }
                ]
            },
            {
                "name": "exchange",
                "id": 13,
                "label": "Exchange",
                "order": 5,
                "modellingEnabled": false
            }
        ]
    }
}
```

## Get Campaign Dimension Counts

Retrieves counts of dimensions for a specific campaign within a given date range with the following endpoint:

* `GET` /api/v3/bm/campaigns/{campaignId}/dimensions/count

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer [required] | The campaign ID for which the report is being generated |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `startDate` | integer | Unix timestamp for campaign start date | 
| `endDate` | integer | Unix timestamp for campaign end date |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
Sample Response

```json
{
    "success": true,
    "data": {
        "creative": 2,
        "dealId": 0,
        "openExchange": 0,
        "publisherCategory": 0,
        "trafficType": 2,
        "deviceType": 4,
        "state": 0,
        "city": 0,
        "zip": 0,
        "exchange": 18
    }
}
```

<details>
<summary>More Response</summary>

Response 400

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Missing required parameter: 'startDate'. Type: long",
            "field": "startDate"
        }
    ]
}
```

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
            "error": "No campaign found with given campaign Id"
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
