# Insights API

Audience insights provide in-depth reports of audience characteristics, itnerests, and behaviors to give advertisers a deeper understanding of thier taret audience and create targeted and personalized advertising strategies. This page covers the various methods and endpoints for insights details and management, as well as Voter Level Data reports details and management.

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Get Insights Details

### Get a List of Insights

<span class="badge badge--primary">GET</span><span class="path-text">/api/v3/ins/insights/list</span>

<div class="container">
  <div class="child1">

Get a list of insights availabe in the database.


| Query Parameters | Description |
| ----  | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `pageSize` <br /><span class="type-text">integer</span> | Maximum number of entries per page, default: `20` |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-id` |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

### Get Campaign Bidding Insights

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/campaign/bid-insights/{campaignId}</span>

<div class="container">
  <div class="child1">

Gets the data required for bidding insights of campaign by campaign ID in a given date range (2 weeks maximum), along with the rejection reasons and rejection bids per reason. Also gets total wins during the date range.

| Path Parameters | Description |
| ---- | --- |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID |

| Query Parameters | Description |
| ----| --- |
| `dateRangeStart` <br /><span class="type-text">integer</span> | Unix epoch timestamp, in milliseconds |
| `dateRangeEnd` <br /><span class="type-text">integer</span> | Unix epoch timestamp, in milliseconds |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Get a List of Eligible Audiences

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/audience/list</span>

<div class="container">
  <div class="child1">

Get a list of eligible audiences which have 10k uniques (minimum).

| Query Parameters | Description |
| ---- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `pageSize` <br /><span class="type-text">integer</span> | Maximum number of entries per page, default: `20` |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-id` |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Get Insights Count by Type

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/insights/type-wise-count</span>

<div class="container">
  <div class="child1">

Get a count of insights by type ID. See [list of insights type IDs](#get-list-of-insights-types). 

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "1": 32,
        "3": 20
    }
}
```

</div></div>

---

### Get Matched Audience Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/audience/matched/{audienceId}</span>

<div class="container">
  <div class="child1">

Get matched audience details by audience ID.

| Path Parameters | Description |
| ----| --- |
| `audienceId` <br /><span class="type-text">integer</span> | Audience ID |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

#### Get Matched Audience File URL

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/audience/matched/download/{audienceId}</span>

<div class="container">
  <div class="child1"></div>
  <div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "audienceFileUrl": "https://iqm-data-lake-stage.s3.amazonaws.com/CAM-FILES/Client%3D202029/Audience%3D1099461/1728010319692_DataTrust_NY_4_Cols.csv?response-content-disposition=attachment%3Bfilename%3D1728010319692_DataTrust_NY_4_Cols.csv&response-content-type=application%2Foctet-stream&AWSAccessKeyId=ASIAZSYSEW2IDYRQV256&Signature=bg47k4d9Yr6XEp1%2B2AiQpG6UsH8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJIMEYCIQDZQ0HdONURAdKClNDJtsxRy2Q%2FuhAVl8j8mkg%2BYySOXAIhALLGdASViJ%2BjqGbMUOeNGVzSKJmWlO4Rndg9%2FwYMeFCvKoQECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMNjU4Nzc4NjY2NjQwIgxTA4EPtZELcoAi5R4q2APj0QWXoTRXCAdw7rbtrcGELFLafSFSWkvl2TlAs%2BIXPNNRwL2y2ymFrmlCOxqFCs9DTWR%2FMRvZMmn7CiN%2ByOPem4C8Rp%2BKE6VSTBeMvQrjQIl1l3S0NxluwzOuBiv%2FA2q0%2F2ehoIPkOOl0ecoghzO8%2FZFVPvVjJkWCnm6c8x2MubJXVYZdiOWd2MHaUmMzsIRlvvl4s30JW9iNnHyOdIyHf6JQ2FbYmKSX4SVEPrv7j7kUv3Vr2iffNE%2BQfGYNtQLr7Yu6yjXpko6N6oZ0BpKsw%2BmwgywN%2FWgPBOQUcwZsexrjBkN9%2BMfRWwOKRS%2F6mn80VYRNV%2F2bA0jDzUBVUmATCjmPFx2tovoveIbb7dwm627ulG0yAkJYx4pvn6OFuFQiZ8YMpWd3e9Hdz44Jm01dGZ%2FluW17THYmmIMOmf3UUSSlxjHm6MuzfULBmspjtAFi5apazS8zUVxwMaK2UfcRkWV%2FQjvziaEHNdaI%2FEStWpzz8E9KRApKtPTsU%2BeXtv2ol1O1Z4GgKOqWRquxqr0qD7rwBX2UjE1Vwp86zcQAxZSj84Uqy%2BqVdh1HUX037Tnpt5DIu9zeHQLHDV2KtH9swuDZyjiNa3z8Mmt%2BSO%2F5wzxOgo8srPyYMIyO3rgGOqQBlVBy4y2GJAjMy2fEyseApwBtfXxXtvcet2hHcTZma1iyMjNL9u92XgsVjHY89iBT4cFAfrTn5c8lswph9%2FKyTm%2FoOQpoxPmkoKD5qs1TCuBFXFXMp4d2Clb%2FUkSmqS01aiEkX1%2FrkAF3klbwrC1%2FUKR6%2BaMAahquyYXskHrlqwBHQ9oizw64rkXNIZeSlbfajnNTVmTkhh3QqyEJw9CYZTNN4hk%3D&Expires=1729596011"
    }
}
```

</div></div>

---

## Insights Management

### Create Insights for a Given Audience

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/insights/add</span>

<div class="container">
  <div class="child1">

Create an insight report for a given audience ID.

| Request Schema |  |
| ----  | --- |
| `insightsTypeId` <br /><span class="type-text">integer</span> | [Insights type ID](#get-list-of-insights-types) |
| `sourceIds` <br /><span class="type-text">integer</span> | Source IDs |

</div><div class="child2">

```json title="Request Sample"
{
    "insightsTypeId": 1,
    "sourceIds": [
        567895,
        925436,
        123677
    ]
}
```

```json title="Response 200"
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

</div></div>

---

### Delete Insights Record

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/ins/insights/delete</span>

<div class="container">
  <div class="child1">

Delete records from the database for valid insights IDs passed.

| Query Parameters | Description |
| ---- | --- |
| `insightsIds` <br /><span class="type-text">string</span> | Comma separated insights IDs to delete | 

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Regenerate Insights Report

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/insights/regenerate/{insightsId}</span>

<div class="container">
  <div class="child1">

Regenerates an insights report if the insight fails.

| Path Parameters |  |
| ---- | --- |
| `insightsIds` <br /><span class="type-text">string</span> | Comma separated insights IDs to regenerate |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Insights regenerated successfully."
}
```

</div></div>

---

### Download Insights Report

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/insights/download</span>

<div class="container">
  <div class="child1">

Download insights report for audience (pdf or xlsx) by passing multipart/form-data format.

| Query Parameters | Description |
| ---- | --- |
| `insightsId` <br /><span class="type-text">integer</span> | Insights ID |
| `fileType` <br /><span class="type-text">string</span> | File type of report: `pdf` or `xlsx`

| Request Schema | Description |
| ---- | --- |
| `customLogoFile` <br /><span class="type-text">string</span> | Multipart/form-data format

</div><div class="child2">

```json title="Request Sample"
{
    "customLogoFile": "string"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "insightsReportUrl": "https://domain.com/insights.pdf"
    }
}
```

</div></div>

---

### Send Insights Email

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/send-email</span>

<div class="container">
  <div class="child1">

Send an attached insights report file via email.

| Query Parameters |  |
| ---- | --- |
| `id` <br /><span class="type-text">integer</span> | Insights ID |
| `attachmentType` <br /><span class="type-text">string</span> | File type of report: `pdf` or `xlsx` |
| `recipientEmails` <br /><span class="type-text">string</span> | Comma separated string of emails to send insights report to, up to 15 |

| Request Schema |  |
| ---- | --- |
| `file` <br /><span class="type-text">string</span> | Multipart/form-data format

</div><div class="child2">

```json title="Request Sample"
{
    "file": "string"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Insights-1 pdf email sent successfully."
}
```

</div></div>

---

## Voter Level Data Reports

VLD reports offer insights about users targeted in current or prior political campaigns. These reports include ad exposure, engagement data, demographic data, and voting-history details, by voter. This section covers the methods and endpoints for managing VLD reports.

### VLD Resource Properties

<div class="container">
  <div class="child3">

| Attributes  |  |
| ---- | --- |
| `vldId` <br /><span class="type-text">integer</span> | VLD ID |
| `vldName` <br /><span class="type-text">string</span> | VLD name |
| `vldStatus` <br /><span class="type-text">integer</span> | VLD status type ID |
| `ioId` <br /><span class="type-text">integer</span> | Insertion Order ID |
| `ioName` <br /><span class="type-text">string</span> | Insertion Order name |
| `ioTypeId` <br /><span class="type-text">integer</span> | Insertion Order type ID |
| `vldCreatedOn` <br /><span class="type-text">integer</span> | Unix epoch timestamp of creation date, in milliseconds |
| `vldStartDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of end date, in milliseconds |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID |
| `campaignName` <br /><span class="type-text">string</span> | Campaign name |
| `campaignStatus` <br /><span class="type-text">string</span> | Campaign status type |
| `creativeTypeId` <br /><span class="type-text">integer</span> | Creative type ID |
| `vldReportCreatable` <br /><span class="type-text">boolean</span>| Indicates if VLD report can be generated for the given campaign and date range (`true`)
| `vldChargeableImps` <br /><span class="type-text">integer</span> | The number of chargeable impressions for the requested VLD report
| `vldChargedImps` <br /><span class="type-text">integer</span> | The number of impressions for which the VLD report report is already generated
| `vldChargeableCost` <br /><span class="type-text">integer</span> | Cost to generate the VLD report
| `vldChargedCost` <br /><span class="type-text">integer</span> | Cost of VLD report that is alredy generated
| `fundsAvailable` <br /><span class="type-text">boolean</span> | Indicates if sufficient funds are available in the advertiser's account to generate the VLD report (`true`)
| `effectiveVldRate` <br /><span class="type-text">integer</span> | Margin rate set by the admin and workspace for genrating VLD report

</div></div>

### Get List of VLD Reports

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/vld-reports</span>

<div class="container">
  <div class="child1">

Get a list of VLD reports based on search filters.

| Query Parameters | Description |
| ---- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of entries per page, default: `200` |
| `pageNo` <br /><span class="type-text">integer</span> | Number of pages for retrieved data |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-vldId` |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

### Get List of Campaigns Eligible for VLD Reports

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/vld/campaigns</span>

<div class="container">
  <div class="child1">

Get a list of campaign IDs by satus eligible for VLD report generation.

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Generate VLD Report

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/vld-report</span>

<div class="container">
  <div class="child1">

This API calculates the cost for the impressions for the Voter Level Data Reports based on the impressions and mark up charged on the organization and then creates the VLD reports with the following endpoint:

| Request Schema | Description |
| ---- | --- |
| `vldStartDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of end date, in milliseconds |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID |

</div><div class="child2">

```json title="Request Sample"
{
    "campaignId": 12345,
    "vldStartDate": 1722311000,
    "vldEndDate": 1722315000
}
```

```json title="Response 200"
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

</div></div>

---


#### Compute Cost and Impressions for VLD Report Creation

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/vld-reports/computation</span>

---

### Get Cost Assessment for VLD Report

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/vld-reports/computation</span>

<div class="container">
  <div class="child1">

Calculates the cost for the impressions for the VLD report based on impressions and the mark up charged on the organization with the following endpoint:

| Request Schema |  |
| ---- | --- |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID |
| `vldStartDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of start date, in milliseconds |
| `vldEndDate` <br /><span class="type-text">integer</span> | Unix epoch timestamp of end date, in milliseconds

</div><div class="child2">

```json title="Request Sample"
{
    "campaignId": 1,
    "vldStartDate": 1722311000,
    "vldEndDate": 1722315000
}
```

```json title="Response 200"
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

</div></div>

---

### Download VLD Insight Report

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ins/vld-report/download</span>

<div class="container">
  <div class="child1">

Get a donwload link for a VLD insight report in CSV or XLSX format.

| Request Schema | Description |
| ---- | --- |
| `fileTypeId` <br /><span class="type-text">integer</span> | File type ID <br />XLSX: `1` <br />CSV: `2` |
| `vldId` <br /><span class="type-text">integer</span> | VLD ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "vldReportUrl": "https://tem.domain.s3.amazonaws.com/vld-campaigns/ds/2024-08-20/503481_Insights_1.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240820T112818Z&X-Amz-"
    }
}
```

</div></div>

---

### Delete VLD Report

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/ins/vld-report</span>

<div class="container">
  <div class="child1">

Deletes VLD reports that are not marked as deleted and have a 'failed' status, requires user authorization and checks if the provided VLD IDs are valid. Use the following endpoint:

| Query Parameters |  |
| ---- | --- |
| `vldId` <br /><span class="type-text">integer</span> | VLD ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "message": "255944_VLD_Insights_2 deleted successfully"
    }
}
```

</div></div>

---

## Get More Insights Details

### Get List of Insights Types

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/static/insights/type/list</span>

<div class="container">
  <div class="child1">

Get a list of insights types by ID.

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Get List of Insights Status

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ins/static/insights/status/list</span>

<div class="container">
  <div class="child1">

Get a list of insights status types.

</div><div class="child2">

```json title="Response 200"
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

</div></div
>