# Bid Model API Guidelines

The Bid Model API allows users to optimize their advertising campaigns for better performance. The user can fine-tune metrics such as where their ads appear (Include/Exclude), campaign priority management, and dimensions by which a campaign is subdivided.

This page will cover the common endpoints and methods associated with the Bid Model API.

## Include/Exclude Management

The **Include** and **Exclude** options allow the user to control where their ads appear. Use the following endpoints:

* `POST` /api/v2/cmp/deviceType/includeExclude
* `POST` /api/v2/cmp/exchange/includeExclude
* `POST` /api/v2/cmp/trafficsource/includeExclude

#### Header Paramaters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-Iaa-Host` | string [required] | |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

| Property | Type | Description |
| ---- | ---- | --- |
| `ids` | string [required] | |
| `isExcluded` | integer [required] | |
| `campaignId | integer [required] | |

#### Request Sample

```json
{
    "ids": "15",
    "isExcluded": 0,
    "campaignId": 214269
}
```

#### Response 200 Sample (deviceType)

```json
{
    "statusCode": 200,
    "responseObject": {
        "message": "Device Types excluded successfully."
    }
}
```

### Include/Exclude Entities From a Campaign

This API allows users to target entities by updating their status to either included or excluded from specified `campaignId` and `dimensionId`. Use the following endpoint:

* `POST` /api/v3/bm/campaigns/{campaignId}/include-Exclude/dimensions/{dimensionId}

#### Path Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer [required] | Unique Id of campaign |
| `dimensionId` | integer [required] | Unique Id of dimension |

#### Header Parameters 

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

| Property | Type | Description |
| ---- | ---- | --- |
| `advertiserId` | integer | Unique ID of advertiser |
| `dspId` | integer | | 
| `owId` | integer | Organization workspace Id |
| `uowId` | integer | User organization workspace Id |
| `campaignId` | integer | Unique Id of campaign |
| `ids` | string | Creative Id |
| `isExcluded` | integer | Target entity = `0`; Block entity = `1`

#### Request Sample (creatives)

```json
{
    "ids": "604675,604084",
    "isExcluded": 0
}
```

#### Response 200 Sample (creatives)

```json
{
    "success": true,
    "data": "Creatives successfully targeted for the campaign."
}
```

## Manage Campaign Priority

Assigning priority to campaigns allows the user to establish a sequential order of bidding to fine-tune their targeting strategy. Use the following endpoint to assign priority (ranging 1 to 10) to multiple `campaignId`s with the same API:

* `PUT` /api/v3/bm/io/{ioId}/bid-models

#### Path Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| Insertion Order | any [required] | Unique identifier for insertion order |
| `ioId` | integer [required] | Unique identifier for insertion order | 

#### Header Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

[Note: all objects inside request body are not required]

| Property | Type | Description |
| ---- | ---- | --- |
| `addPriority` | object | Assign new priority to one or multiple campaigns, requires `priority` and `campaignIds` | 
| `updatePriority` | object | Update assigned priority to one or multiple campaigns, requires `priority` and `campaignIds` |
| `deletePriority` | object | Deletes assigned priority from one or multiple campaigns, requires `priority` and `campaignIds` |
| `priority` | integer [required] | Assigned priority: [1 .. 10]
| `campaignIds` | array of integers [required] | Array of unique campaign Ids |

#### Request Sample

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

#### Path Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| Insertion Order | any [required] | Unique identifier for insertion order |
| `ioId` | integer [required] | Unique identifier for insertion order | 

#### Header Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

| Property | Type | Description |
| ---- | ---- | --- |
| `priority` | integer [required] | Assigned priority: [1 .. 10]
| `campaignIds` | array of integers [required] | Array of unique campaign Ids |

#### Request Sample

```json
{
    "priority": 1,
    "campaignIdList": [
        1,
        2,
        3,
        4
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
