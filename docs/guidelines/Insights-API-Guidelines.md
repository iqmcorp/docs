# Insights API

Audience insights provide in-depth reports of audience characteristics, itnerests, and behaviors to give advertisers a deeper understanding of thier taret audience and create targeted and personalized advertising strategies. This page covers the various methods and endpoints for insights details and management, as well as Voter Level Data reports details and management.

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Get Insights Details

### Get a List of Insights

Get a list of insights availabe in the database with the following endpoint:

* `GET` /api/v3/ins/insights/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `pageSize` | integer | Maximum number of entries per page, default: `20` |
| `pageNo` | integer | Number of pages for retrieved data |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-id` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 1,
        "filterRecords": 1,
        "insightsData": [
            {
                "id": 123,
                "typeId": 1,
                "statusId": 2,
                "name": "demo_insights",
                "sourceId": 123,
                "createdAt": 1687848574780
            }
        ]
    }
}
```

### Get Campaign Bidding Insights

Gets the data required for bidding insights of campaign by campaign ID in a given date range (2 weeks maximum), along with the rejection reasons and rejection bids per reason. Also gets total wins during the date range. Use the following endpoint:

`GET` `/api/v3/ins/campaign/bid-insights/{campaignId}`

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer | Campaign ID |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `dateRangeStart` | integer | Unix epoch timestamp, in milliseconds |
| `dateRangeEnd` | integer | Unix epoch timestamp, in milliseconds |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRequests": 100,
        "rejectionList": {
            "campaignSettings": {
                "title": "Campaign Settings",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Campaign Settings set in the campaign.",
                "subReasonInfo": {}
            },
            "ioBudget": {
                "title": "IO Budget",
                "rejectedBids": 0,
                "description": null,
                "subReasonInfo": {}
            },
            "inventoryTargeting": {
                "title": "Inventory Targeting",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Inventory Targeting.",
                "subReasonInfo": {}
            },
            "campaignBidPrice": {
                "title": "Campaign Bid Price",
                "rejectedBids": 0,
                "description": "Campaign is filtered because the bid price is lower than the floor price received from the exchange.",
                "subReasonInfo": {}
            },
            "locationTargeting": {
                "title": "Location Targeting",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Location Targeting.",
                "subReasonInfo": {}
            },
            "deviceTargeting": {
                "title": "Device Targeting",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Device Targeting.",
                "subReasonInfo": {}
            },
            "creativeSettings": {
                "label": "Creative Settings",
                "rejectedBids": 100,
                "description": "Campaign is filtered due to non-matching creative dimensions found in the request",
                "subReasonInfo": {
                    "creativeDimension": {
                        "label": "Creative Dimensions",
                        "droppedRequests": 100,
                        "description": "Campaign is filtered due to non-matching creative dimensions found in the request."
                    }
                }
            },
            "advanceTargeting": {
                "title": "Advanced Targeting",
                "rejectedBids": 0,
                "description": null,
                "subReasonInfo": {}
            },
            "audienceTargeting": {
                "title": "Audience Targeting",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Audience Targeting.",
                "subReasonInfo": {}
            },
            "bidStrategy": {
                "title": "Bid Strategy",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to bid strategy setting applied in campaign.",
                "subReasonInfo": {}
            },
            "campaignBudget": {
                "title": "Campaign Budget",
                "rejectedBids": 0,
                "description": "Campaign is filtered because the campaign budget is now unavailable for further bidding.",
                "subReasonInfo": {}
            },
            "demographicsTargeting": {
                "title": "Demographics Targeting",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Demographics Targeting.",
                "subReasonInfo": {}
            },
            "undefined": {
                "title": "Undefined",
                "rejectedBids": 0,
                "description": "Campaign is filtered due to Undefined reasons.",
                "subReasonInfo": {}
            }
        },
        "topMainReasons": {
            "creativeSettings": 100
        },
        "topSubReasons": {
            "creativeDimension": 100
        },
        "totalBids": 0,
        "lostBids": 0,
        "totalWins": 0
    }
}
```

Response 422 (invalid start date)

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Date Range End must be greater than Date Range Start"
        }
    ]
}
```

### Get a List of Eligible Audiences

Get a list of eligible audiences which have 10k uniques (minimum) with the following endpoint:

`GET` /api/v3/ins/audience/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `pageSize` | integer | Maximum number of entries per page, default: `20` |
| `pageNo` | integer | Number of pages for retrieved data |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-id` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 10,
        "filteredRecords": 3,
        "insightsData": [
            {
                "id": 12345,
                "audienceName": "audience1",
                "matchRate": 58.99,
                "uniques": 52432
            },
            {
                "id": 12365,
                "audienceName": "audience2",
                "matchRate": 78.88,
                "uniques": 72786
            },
            {
                "id": 12376,
                "audienceName": "audience3",
                "matchRate": 34.88,
                "uniques": 31122
            }
        ]
    }
}
```

### Get Insights Count by Type

Get a count of insights by type ID with the following endpoint:

* `GET` /api/v3/ins/insights/type-wise-count

\
Response 200

```json
{
    "success": true,
    "data": {
        "1": 32,
        "3": 20
    }
}
```

### Get Matched Audience Details

Get matched audience details by audience ID with the following endpoint:

* `GET` `/api/v3/ins/audience/matched/{audienceId}`

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `audienceId` | integer | Campaign ID |

\
Reponse 200

```json
{
    "success": true,
    "data": {
        "matchedAudienceData": {
            "audienceName": "Data Trust NY 4 Cols",
            "matchRate": 90.0,
            "uniques": 90,
            "createdDate": 1728010319,
            "fileTotalCount": 100,
            "dataCost": 2.0,
            "audienceStatusName": "Ready",
            "s3FileName": "1728010319692_DataTrust_NY_4_Cols.csv"
        }
    }
}
```

#### Get Matched Audience File URL

* `GET` `/api/v3/ins/audience/matched/download/{audienceId}`

Response 200

```json
{
    "success": true,
    "data": {
        "audienceFileUrl": "https://iqm-data-lake-stage.s3.amazonaws.com/CAM-FILES/Client%3D202029/Audience%3D1099461/1728010319692_DataTrust_NY_4_Cols.csv?response-content-disposition=attachment%3Bfilename%3D1728010319692_DataTrust_NY_4_Cols.csv&response-content-type=application%2Foctet-stream&AWSAccessKeyId=ASIAZSYSEW2IDYRQV256&Signature=bg47k4d9Yr6XEp1%2B2AiQpG6UsH8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJIMEYCIQDZQ0HdONURAdKClNDJtsxRy2Q%2FuhAVl8j8mkg%2BYySOXAIhALLGdASViJ%2BjqGbMUOeNGVzSKJmWlO4Rndg9%2FwYMeFCvKoQECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMNjU4Nzc4NjY2NjQwIgxTA4EPtZELcoAi5R4q2APj0QWXoTRXCAdw7rbtrcGELFLafSFSWkvl2TlAs%2BIXPNNRwL2y2ymFrmlCOxqFCs9DTWR%2FMRvZMmn7CiN%2ByOPem4C8Rp%2BKE6VSTBeMvQrjQIl1l3S0NxluwzOuBiv%2FA2q0%2F2ehoIPkOOl0ecoghzO8%2FZFVPvVjJkWCnm6c8x2MubJXVYZdiOWd2MHaUmMzsIRlvvl4s30JW9iNnHyOdIyHf6JQ2FbYmKSX4SVEPrv7j7kUv3Vr2iffNE%2BQfGYNtQLr7Yu6yjXpko6N6oZ0BpKsw%2BmwgywN%2FWgPBOQUcwZsexrjBkN9%2BMfRWwOKRS%2F6mn80VYRNV%2F2bA0jDzUBVUmATCjmPFx2tovoveIbb7dwm627ulG0yAkJYx4pvn6OFuFQiZ8YMpWd3e9Hdz44Jm01dGZ%2FluW17THYmmIMOmf3UUSSlxjHm6MuzfULBmspjtAFi5apazS8zUVxwMaK2UfcRkWV%2FQjvziaEHNdaI%2FEStWpzz8E9KRApKtPTsU%2BeXtv2ol1O1Z4GgKOqWRquxqr0qD7rwBX2UjE1Vwp86zcQAxZSj84Uqy%2BqVdh1HUX037Tnpt5DIu9zeHQLHDV2KtH9swuDZyjiNa3z8Mmt%2BSO%2F5wzxOgo8srPyYMIyO3rgGOqQBlVBy4y2GJAjMy2fEyseApwBtfXxXtvcet2hHcTZma1iyMjNL9u92XgsVjHY89iBT4cFAfrTn5c8lswph9%2FKyTm%2FoOQpoxPmkoKD5qs1TCuBFXFXMp4d2Clb%2FUkSmqS01aiEkX1%2FrkAF3klbwrC1%2FUKR6%2BaMAahquyYXskHrlqwBHQ9oizw64rkXNIZeSlbfajnNTVmTkhh3QqyEJw9CYZTNN4hk%3D&Expires=1729596011"
    }
}
```

## Insights Management

### Create Insights for a Given Audience

Create an insight report for a given audience ID with the following endpoint:

* `POST` /api/v3/ins/insights/add

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `insightsTypeId` | integer | [Insights type ID](#get-list-of-insights-types) |
| `sourceIds` | integer | Source IDs |

\
Request Sample

```json
{
    "insightsTypeId": 1,
    "sourceIds": [
        567895,
        925436,
        123677
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "invalidSourceIds": [],
        "insightsData": [
            {
                "id": 1213,
                "typeId": 1,
                "statusId": 2,
                "sourceName": "Data Trust NY 4 Cols",
                "name": "Data Trust NY 4 Cols_insights",
                "sourceId": 1099461,
                "createdAt": 1728366883518
            }
        ]
    }
}
```

### Delete Insights Record

Delete records from the database for valid insights IDs passed in the following endpoint:

* `DELETE` /api/v3/ins/insights/delete

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `insightsIds` | integer | Comma separated insights IDs to delete | 

\
Response 200

```json
{
    "success": true,
    "data": {
        "deletedIds": [
            35,
            34
        ],
        "invalidIds": [
            33,
            1
        ]
    }
}
```

### Regenerate Insights Report

Regenerates an insights report if the insight fails with the following endpoint:

* `POST` `/api/v3/ins/insights/regenerate/{insightsId}`

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `insightsIds` | array of integers | Insights IDs to regenerate |

\
Response 200

```json
{
    "success": true,
    "data": "Insights regenerated successfully."
}
```

### Download Insights Report

Download insights report for audience (pdf or xlsx) by passing multipart/form-data format with the following endpoint:

* `POST` /api/v3/ins/insights/download

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `insightsId` | integer | Insights ID |
| `fileType` | string | File type of report: `pdf` or `xlsx`

\
**Request Body Schema**

| Property | Type | Description |
| ---- | ---- | --- |
| `customLogoFile` | string | Multipart/form-data format

\
Request Sample

```json
{
    "customLogoFile": "string"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "insightsReportUrl": "https://domain.com/insights.pdf"
    }
}
```

### Send Insights Email

Send an attached insights report file via email with the following endpoint:

* `POST` /api/v3/ins/send-email

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | integer | Insights ID |
| `attachmentType` | string | File type of report: `pdf` or `xlsx` |
| `recipientEmails` | string | Comma separated string of emails to send insights report to, up to 15 |

\
**Request Body Schema**
| Property | Type | Description |
| ---- | ---- | --- |
| `file` | string | Multipart/form-data format

\
Request Sample

```json
{
    "file": "string"
}
```

Response 200

```json
{
    "success": true,
    "data": "Insights-1 pdf email sent successfully."
}
```

## Voter Level Data Reports

VLD reports offer insights about users targeted in current or prior political campaigns. These reports include ad exposure, engagement data, demographic data, and voting-history details, by voter. This section covers the methods and endpoints for managing VLD reports.

### VLD Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `vldId` | integer | VLD ID |
| `vldName` | string | VLD name |
| `vldStatus` | integer | VLD status type ID |
| `ioId` | integer | Insertion Order ID |
| `ioName` | string | Insertion Order name |
| `ioTypeId` | integer | Insertion Order type ID |
| `vldCreatedOn` | integer | Unix epoch timestamp of creation date, in milliseconds |
| `vldStartDate` | integer | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` | integer | Unix epoch timestamp of end date, in milliseconds |
| `campaignId` | integer | Campaign ID |
| `campaignName` | string | Campaign name |
| `campaignStatus` | string | Campaign status type |
| `creativeTypeId` | integer | Creative type ID |
| `vldReportCreatable` | boolean | Indicates if VLD report can be generated for the given campaign and date range (`true`)
| `vldChargeableImps` | integer | The number of chargeable impressions for the requested VLD report
| `vldChargedImps` | integer | The number of impressions for which the VLD report report is already generated
| `vldChargeableCost` | integer | Cost to generate the VLD report
| `vldChargedCost` | integer | Cost of VLD report that is alredy generated
| `fundsAvailable` | boolean | Indicates if sufficient funds are available in the advertiser's account to generate the VLD report (`true`)
| `effectiveVldRate` | integer | Margin rate set by the admin and workspace for genrating VLD report

### Get List of VLD Reports

Get a list of VLD reports based on search filters with the following endpoint:

`GET` /api/v3/ins/vld-reports

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `noOfEntries` | integer | Maximum number of entries per page, default: `200` |
| `pageNo` | integer | Number of pages for retrieved data |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-vldId` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 10,
        "vldReportDataList": [
            {
                "vldId": 10,
                "vldName": "530667_VLD_Insights_7",
                "campaignName": "prod-campaign-21145",
                "campaignId": 21145,
                "vldStatusId": 3,
                "startDate": 1603152000,
                "endDate": 1603411200,
                "ioId": 5,
                "ioName": "Corporate, Inc.",
                "isCampaignEligible": false,
                "vldCreatedOn": 1721253632,
                "creativeTypeId": 11,
                "campaignVldTimezoneId": 29,
                "ioTypeId": 1
            },
            {
                "vldId": 9,
                "vldName": "530667_VLD_Insights_6",
                "campaignName": "Campaign-4949",
                "campaignId": 4949,
                "vldStatusId": 3,
                "startDate": 1603152000,
                "endDate": 1603411200,
                "ioId": 15,
                "ioName": "Quinton for Mayor",
                "isCampaignEligible": false,
                "vldCreatedOn": 1720325578,
                "creativeTypeId": 14,
                "campaignVldTimezoneId": 29,
                "ioTypeId": 1
            }
        ],
        "filteredRecords": 10
    }
}
```

### Get List of Campaigns Eligible for VLD Reports

Get a list of campaign IDs by satus eligible for VLD report generation with the following endpoint:

* `GET` /api/v3/ins/vld/campaigns

\
Response 200

```json
{
  "success": true,
  "data": {
    "running": [
        12345,
        12543
    ],
    "paused": [
        54321,
        34521
    ],
    "expired": [
        33452,
        22453
    ]
  }
}
```

### Generate VLD Report

This API calculates the cost for the impressions for the Voter Level Data Reports based on the impressions and mark up charged on the organization and then creates the VLD reports with the following endpoint:

* `POST` /api/v3/ins/vld-report

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `vldStartDate` | integer | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` | integer | Unix epoch timestamp of end date, in milliseconds |
| `campaignId` | integer | Campaign ID |

\
Request Sample

```json
{
    "campaignId": 12345,
    "vldStartDate": 1722311000,
    "vldEndDate": 1722315000
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "vldReportCreated": true,
        "campaignId": 1,
        "campaignName": "Campaign Name",
        "campaignStatus": "running",
        "vldStartDate": 1722311000,
        "vldEndDate": 1722315000,
        "vldChargeableImps": 1000,
        "vldChargedImps": 100,
        "vldChargeableCost": 1000,
        "vldChargedCost": 100,
        "fundsAvailable": true
    }
}
```

#### Compute Cost and Impressions for VLD Report Creation

* `POST` /api/v3/ins/vld-reports/computation

### Get Cost Assessment for VLD Report

Calculates the cost for the impressions for the VLD report based on impressions and the mark up charged on the organization with the following endpoint:

* `POST` /api/v3/ins/vld-reports/computation

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer | Campaign ID |
| `vldStartDate` | integer | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` | integer | Unix epoch timestamp of end date, in milliseconds

\
Request Sample

```json
{
    "campaignId": 1,
    "vldStartDate": 1722311000,
    "vldEndDate": 1722315000
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "vldReportCreated": true,
        "campaignId": 1,
        "campaignName": "Campaign Name",
        "campaignStatus": "running",
        "vldStartDate": 1722311000,
        "vldEndDate": 1722315000,
        "vldChargeableImps": 1000,
        "vldChargedImps": 100,
        "vldChargeableCost": 1000,
        "vldChargedCost": 100,
        "fundsAvailable": true
    }
}
```

### Download VLD Insight Report

Get a donwload link for a VLD insight report in CSV or XLSX format with the following endpoint:

* `POST` /api/v3/ins/vld-report/download

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `fileTypeId` | integer | File type ID <br />XLSX: `1` <br />CSV: `2` |
| `vldId` | integer | VLD ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "vldReportUrl": "https://tem.domain.s3.amazonaws.com/vld-campaigns/ds/2024-08-20/503481_Insights_1.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240820T112818Z&X-Amz-"
    }
}
```

### Delete VLD Report

Deletes VLD reports that are not marked as deleted and have a 'failed' status, requires user authorization and checks if the provided VLD IDs are valid. Use the following endpoint:

* `DELETE` /api/v3/ins/vld-report

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `vldId` | integer | VLD ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "message": "255944_VLD_Insights_2 deleted successfully"
    }
}
```

## Get More Insights Details

### Get List of Insights Types

Get a list of insights types by ID with the following endpoint:

* `GET` /api/v3/ins/static/insights/type/list

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "insightsTypeData": [
            {
                "id": 1,
                "name": "audiences",
                "label": "Audience Insights",
                "order": 1
            },
            {
                "id": 3,
                "name": "voter_level_data",
                "label": "Voter Level Data",
                "order": 3
            }
        ]
    }
}
```

### Get List of Insights Status

Get a list of insights status types with the following endpoing:

* `GET` /api/v3/ins/static/insights/status/list

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 3,
        "filterRecords": 3,
        "insightsStatusData": [
            {
                "id": 1,
                "name": "processing",
                "label": "Processing",
                "order": 1
            },
            {
                "id": 2,
                "name": "ready",
                "label": "Ready",
                "order": 2
            },
            {
                "id": 3,
                "name": "failed",
                "label": "Failed",
                "order": 3
            }
        ]
    }
}
```