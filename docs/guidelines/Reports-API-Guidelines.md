# Reports API

Get details and track data of various metrics of a campaign with this API. 

See the quckstart guides on [creating a report](/docs/quickstart-guides/Reporting-API-Quickstart-Guide.md) and [scheduling a report](/docs/quickstart-guides/Schedule-Report-API-Quickstart-Guide.md). 

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Reports Details

This section covers the various methods and endpoints for getting lists and details of reports.

### Get a List of Reports

Get a list of reports with the following endpoints:

* `GET` /api/v3/ra/reports/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerIds` | string | Filters by comma separated customer IDs <br>Passing `all` gets all eligible customer's report, default: `all` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`) <br>Supported values: `id`, `name`, `startDate`, `modifyDate`<br>Default: `-modifyDate` |
| `searchField` | string | Filters by searched keyword |
| `limit` | integer | Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "reportName": "Campaign by Gender by Device type",
                "startDate": 1650177200,
                "endDate": 1666938296,
                "dimensions": "[{\"filter\":\"campaign\",\"value\":[123,234,345,456]},{\"filter\":\"gender\",\"value\":[10200002]},{\"filter\":\"device_type\",\"value\":[20300001,20300003]}]",
                "customerIds": null,
                "customerDetails": null,
                "timezoneId": 11,
                "reportSchedulingEventDetails": {
                    "eventId": 29,
                    "deliveryFrequency": 3,
                    "fileType": 2,
                    "subscriberEmails": [
                        "demoUser1@gmail.com",
                        "demoUser2@iqm.com"
                    ],
                    "eventEndDate": 1671148799999,
                    "deliveryDay": "Friday"
                }
            },
            {
                "id": 2,
                "reportName": "Campaigns by Zip Codes with filters",
                "startDate": 1660521600,
                "endDate": 1668470399,
                "dimensions": "[{\"filter\": \"campaign\"}, {\"value\": [123, 234, 345, 456], \"filter\": \"zip5\"}]",
                "customerIds": null,
                "customerDetails": null,
                "timezoneId": 12,
                "reportSchedulingEventDetails": {}
            },
            {
                "id": 3,
                "reportName": "Creatives by Income Ranges and Operating System with filters",
                "startDate": 1660521600,
                "endDate": 1668470399,
                "timezoneId": 11,
                "dimensions": "[{\"filter\": \"creative\"}, {\"value\": [10300002, 10300003], \"filter\": \"income_group\"}, {\"value\": [20200001, 20200002, 20200003], \"filter\": \"os\"}]",
                "customerIds": [
                    200,
                    201
                ],
                "customerDetails": [
                    {
                        "owId": 200,
                        "organizationName": "Test Organization",
                        "organizationLogo": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/organization-profile/200/1637314301025.png",
                        "statusId": 1,
                        "status": "Active",
                        "supportEmail": "demoSupport@gmail.com",
                        "timezone": 29
                    }
                ],
                "reportSchedulingEventDetails": {}
            }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

### Get Report Details by `POST` Method

A list of reports can also be retrieved using the `POST` method with the following endpoint:

* `POST` /api/v3/ra/reports/list

\
**Request Body Schema**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerIds` | string | Filters by comma separated customer IDs <br>Passing `all` gets all eligible customer's report, default: `all` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`) <br>Supported values: `id`, `name`, `startDate`, `modifyDate`<br>Default: `-modifyDate` |
| `searchField` | string | Filters by searched keyword |
| `noOfEntries` | integer |Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |

\
Request Sample

```json
{
    "customerIds": "123,234,345",
    "pageNo": 1,
    "noOfEntries": 30,
    "sortBy": "+id",
    "searchField": "search field"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "reportName": "Campaign by Gender by Device type",
                "startDate": 1650177200,
                "endDate": 1666938296,
                "dimensions": "[{\"filter\":\"campaign\",\"value\":[123,234,345,456]},{\"filter\":\"gender\",\"value\":[10200002]},{\"filter\":\"device_type\",\"value\":[20300001,20300003]}]",
                "customerIds": null,
                "customerDetails": null,
                "timezoneId": 11,
                "reportSchedulingEventDetails": {
                    "eventId": 29,
                    "deliveryFrequency": 3,
                    "fileType": 2,
                    "subscriberEmails": [
                        "demoUser1@gmail.com",
                        "demoUser2@iqm.com"
                    ],
                    "eventEndDate": 1671148799999,
                    "deliveryDay": "Friday"
                }
            }
            ...
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

### Get Report by ID

Get report data by report ID with the following endpoint:

* `GET` /api/v3/ra/report/{reportId}

**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "id": 123,
        "reportName": "Campaign by Gender by Device type",
        "startDate": 1650177000,
        "endDate": 1666938000,
        "dimensions": "[{\"filter\":\"campaign\"},{\"filter\":\"gender\",\"value\":[10200002]},{\"filter\":\"device_type\",\"value\":[20300001,20300003]}]",
        "columns": [
            "gender",
            "deviceType",
            "campaignId",
            "campaignName",
            "startTime",
            "endTime",
            "maxBid",
            "budgetDay",
            "budgetTotal",
            "impressions",
            "clicks"
        ],
        "timezoneId": 29,
        "requestType": 1,
        "reportSchedulingEventDetails": {
            "eventId": 18,
            "deliveryFrequency": 3,
            "fileType": 2,
            "subscriberEmails": [
                "demoUser1@gmail.com",
                "demoUser2@iqm.com"
            ],
            "eventEndDate": 1671148799,
            "deliveryDay": "Friday",
            "runningTotalEnabled": 0,
            "earliestCampaignStartDate": 0
        }
    }
}
```

## Reports Management

This section covers the various methods and endpoints for managing reports.

See the quickstart guide on creating a report [here](/docs/quickstart-guides/Reporting-API-Quickstart-Guide.md).

### Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | integer | Gets data for this report ID |
| `dimensions` | JSON string | Represents dimension details serialized as a string |
| `columns` | array of strings | Metrics for showing serving result |
| `customerIds` | array of integers | Gets data for these customer IDs |
| `filters` | JSON string | Serialized string. Supports: `campaignId`, `creativeTypeId`, and `campaignStatus` |
| `searchField` | string | Filters data by keyword |
| `requestType` | integer | Denotes Daily (`1`) or Aggregate (`2`) report request |
| `reportAggregated` | string | Identifies whether report is Aggregated (`1`) or not (`0`) |
| `startDate` | integer | Unix epoch timestamp, milliseconds |
| `endDate` | integer | Unix epoch timestamp, milliseconds |
| `timezoneId` | integer | Timezone ID |
| `timezoneName` | string | Timezone name |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-impressions` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `noOfEntries` | integer | Maximum number of entries returned, default: `50` |

### Create Report

Create a new report based on given fields (see [Resource Properties](#resource-properties)) with the following endpoint:

* `POST` /api/v3/ra/report/add

\
Sample Request Body

```json
{
    "reportName": "Campaign by Gender by Device type with customer and filtering",
    "customerIds": [
        200,
        201
    ],
    "startDate": 1650177200000,
    "endDate": 1666938296000,
    "dimensions": "[{\"filter\":\"campaign\",\"value\":[123,234,345,456]},{\"filter\":\"gender\",\"value\":[10200002]},{\"filter\":\"device_type\",\"value\":[20300001,20300003]}]",
    "columns": [
        "gender",
        "deviceType",
        "campaignId",
        "campaignName",
        "startTime",
        "endTime",
        "maxBid",
        "budgetDay",
        "budgetTotal",
        "impressions",
        "clicks"
    ],
    "requestType": 1,
    "reportAggregated": "0",
    "timezoneId": 29,
    "timezoneName": "US/Eastern",
    "reportSchedulingEventDetails": {
        "runningTotalEnabled": 0,
        "deliveryFrequency": 3,
        "deliveryDay": "Friday",
        "fileType": 2,
        "subscriberEmails": [
            "demoUser1@gmail.com",
            "demoUser1@gmail.com"
        ],
        "eventEndDate": 1671148799999
    }
}
```

Response 200

```json
{
    "success": true,
    "data": 1001
}
```

### Execute a Report

Once a report is created, execute it with the following endpoint:

* `POST` api/v3/ra/report/execute

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | integer | Executes report by report ID |

\
Request Body Sample

```json
{
    "id": 1001
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "total": {
            "CTR": 0.26809,
            "date": null,
            "deviceTypeId": null,
            "VCR": 51.452171,
            "budgetDay": null,
            "gender": null,
            "budgetPacing": null,
            "dataCost": 0,
            "totalRecords": 135,
            "campaignTimezone": null,
            "eCPM": 4.503114298538752,
            "bidImpressions": 4678583,
            "startTime": null,
            "mediaSpent": 8485.86672119556,
            "eCPC": 1.6797044182889074,
            "deviceType": null,
            "startCount": 351095,
            "campaignType": null,
            "campaignId": null,
            "spent": 8485.86672119556,
            "impressions": 1884444,
            "eCPCV": 0.021560143713093907,
            "completeCount": 180646,
            "budgetTotal": null,
            "maxBid": null,
            "clicks": 5052,
            "endTime": null,
            "campaignName": null,
            "status": null
        },
        "data": [
            {
                "CTR": 0.2796,
                "date": "2022-01-30",
                "deviceTypeId": 20300001,
                "VCR": 0,
                "budgetDay": 0.07,
                "gender": "Unknown",
                "budgetPacing": true,
                "dataCost": 0,
                "totalRecords": null,
                "campaignTimezone": "America/Costa_Rica",
                "eCPM": 2.9999999999999996,
                "bidImpressions": 628344,
                "startTime": 1643428296,
                "mediaSpent": 457.09799999999996,
                "eCPC": 1.073,
                "deviceType": "Mobile",
                "startCount": 0,
                "campaignType": "cpm",
                "campaignId": 15474,
                "spent": 457.09799999999996,
                "impressions": 152366,
                "eCPCV": 0,
                "completeCount": 0,
                "budgetTotal": 1549,
                "maxBid": 3,
                "clicks": 426,
                "endTime": 1644192000,
                "campaignName": "Costa Rica MEMES COMPILADOS Profile: All Gender: All Ages: 18 to 45 Geo: Heredia, Alajuela, Cartago and San Jose",
                "status": "expired"
            },
            {
                "CTR": 0.2122,
                "date": "2022-01-30",
                "deviceTypeId": 20300001,
                "VCR": 0,
                "budgetDay": 0.21,
                "gender": "Unknown",
                "budgetPacing": true,
                "dataCost": 0,
                "totalRecords": null,
                "campaignTimezone": "America/Costa_Rica",
                "eCPM": 2.9999999999999996,
                "bidImpressions": 271620,
                "startTime": 1643423160,
                "mediaSpent": 418.48799999999994,
                "eCPC": 1.4138108108108107,
                "deviceType": "Mobile",
                "startCount": 0,
                "campaignType": "cpm",
                "campaignId": 15472,
                "spent": 418.48799999999994,
                "impressions": 139496,
                "eCPCV": 0,
                "completeCount": 0,
                "budgetTotal": 1548,
                "maxBid": 3,
                "clicks": 296,
                "endTime": 1644192000,
                "campaignName": "Costa Rica Universidad Latina Profile: All Gender: All Ages: 18 to 75 Geo: All Costa Rica",
                "status": "expired"
            },
            {
                "CTR": 0.1065,
                "date": "2022-01-30",
                "deviceTypeId": 20300001,
                "VCR": 0,
                "budgetDay": 0.43,
                "gender": "Unknown",
                "budgetPacing": true,
                "dataCost": 0,
                "totalRecords": null,
                "campaignTimezone": "America/Costa_Rica",
                "eCPM": 3.000024952590078,
                "bidImpressions": 239865,
                "startTime": 1643431623,
                "mediaSpent": 360.68699999999995,
                "eCPC": 2.8178671874999996,
                "deviceType": "Mobile",
                "startCount": 0,
                "campaignType": "cpm",
                "campaignId": 15477,
                "spent": 360.68699999999995,
                "impressions": 120228,
                "eCPCV": 0,
                "completeCount": 0,
                "budgetTotal": 1551,
                "maxBid": 3,
                "clicks": 128,
                "endTime": 1644192000,
                "campaignName": "Costa Rica TICOS AL DIA 24-25 ENE Profile: All Gender: All Ages: 18 to 25 and 60+ and over Geo: Heredia, Alajuela, Cartago and San Jose",
                "status": "expired"
            },
            {
                "CTR": 0.3118,
                "date": "2022-01-31",
                "deviceTypeId": 20300001,
                "VCR": 0,
                "budgetDay": 0.07,
                "gender": "Unknown",
                "budgetPacing": true,
                "dataCost": 0,
                "totalRecords": null,
                "campaignTimezone": "America/Costa_Rica",
                "eCPM": 2.9999999999999996,
                "bidImpressions": 280562,
                "startTime": 1643428296,
                "mediaSpent": 219.36299999999997,
                "eCPC": 0.9621184210526315,
                "deviceType": "Mobile",
                "startCount": 0,
                "campaignType": "cpm",
                "campaignId": 15474,
                "spent": 219.36299999999997,
                "impressions": 73121,
                "eCPCV": 0,
                "completeCount": 0,
                "budgetTotal": 1549,
                "maxBid": 3,
                "clicks": 228,
                "endTime": 1644192000,
                "campaignName": "Costa Rica MEMES COMPILADOS Profile: All Gender: All Ages: 18 to 45 Geo: Heredia, Alajuela, Cartago and San Jose",
                "status": "expired"
            },
            {
                "CTR": 0.3154,
                "date": "2022-01-30",
                "deviceTypeId": 20300001,
                "VCR": 0,
                "budgetDay": 1,
                "gender": "Unknown",
                "budgetPacing": true,
                "dataCost": 0,
                "totalRecords": null,
                "campaignTimezone": "America/Costa_Rica",
                "eCPM": 3,
                "bidImpressions": 233754,
                "startTime": 1643131598,
                "mediaSpent": 211.161,
                "eCPC": 0.9511756756756757,
                "deviceType": "Mobile",
                "startCount": 0,
                "campaignType": "cpm",
                "campaignId": 15455,
                "spent": 211.161,
                "impressions": 70387,
                "eCPCV": 0,
                "completeCount": 0,
                "budgetTotal": 1749,
                "maxBid": 3,
                "clicks": 222,
                "endTime": 1644192000,
                "campaignName": "Costa Rica MEMES COMPILADOS Profile: Undecided Gender: All Ages: 18 to 35 Geo: Heredia, Alajuela, Cartago, San Jose",
                "status": "expired"
            }
        ],
        "totalRecords": 135
    }
}
```

### Delete a Report

Delete a report and its scheduling data by ID with the following endpoint:

* `DELETE` /api/v3/ra/report/{reportId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID |

\
Response 200

```json
{
    "success": true,
    "data": "Report with id 123 deleted successfully"
}
```

### Edit a Report

Edit a report's data based on given field with the following endpoint:

* `PATCH` /api/v3/ra/report/{reportId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerIds` | array of integers | Customer IDs to add to report. Parameter only available to update by workspace users or users with customers | 
| `startDate` | integer | Unix epoch timestamp of start date for report |
| `endDate` | integer | Unix epoch timestamp of end date for report |
| `reportName` | string | Updated report name |
| `timezoneId` | integer | Timezone ID |
| `timezoneName` | string | Timezone Name |
| `dimensions` | JSON | Dimensions to filter by in serialized JSON format |
| `columns` | array of strings | List of metrics for the report obtained rom dimensions and metrics details API |
| `requestType` | integer | ID for whether report is daily (`1`) or aggregated (`2`) |
| `reportAggregated` | integer | ID for whether first report dimension is aggregated (`1`) or not (`0`) |
|  `reportSchedulingEventDetails` | object | Contains parameters for updating scheduling details |
| `eventId` | integer | ID for schedule event, part of `reportSchedulingEventDetails` object |
| `deliveryFrequency` | integer | Delivery frequency type ID <br>Once: `1` <br>Daily: `2` <br>Weekly: `3` <br>Monthly: `4` <br>Part of `reportSchedulingEventDetails` |
| `fileType` | integer | Report file type ID <br>CSV: `1` <br>XLS: `2` <br>Part of `reportSchedulingEventDetails` |
| `subscriberEmails` | array of strings | List of emails to which the report will be sent. <br>Part of `reportSchedulingEventDetails` |
| `eventEndDate` | integer | Unix epoch timestamp of report schedule event end date, in milliseconds. <br>Part of `reportSchedulingEventDetails` |
| `deliveryDay` | string | [Required, if `deliveryFrequecy` is not "once"] Delivery day to specify the day-time when the report should be sent. <br>Weekly delivery day: [`sunday`, `monday`, ...] <br>Monthly delivery day: [`first`, `last`, `2`,`3`, ... `29`] <br> Part of `reportSchedulingEventDetails` |

\
Request Sample

```json
{
   "startDate":1727798981000,
   "endDate":1730304581000,
   "reportName": "new report",
   "dimensions":"[{\"filter\":\"ioName\"},{\"filter\":\"campaign\"}]",
   "columns":[
      "impressions",
      "clicks",
      "CTR",
      "VCR",
      "spent",
      "dataCost",
      "mediaSpent",
      "eCPM"
   ],
   "requestType":2,
   "reportAggregated":"0",
   "timezoneName":"US/Eastern",
   "timezoneId":29
}
```

Response 200

```json
{
    "success": true,
    "data": "Report with id 123 updated successfully"
}
```

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "User does not have access for report's customers"
        }
    ]
}
```

### Duplicate a Report

Create a copy of a report with its ID and the following endpoint:

* `POST` /api/v3/report/duplicate

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID to duplicate |
| `reportName` | string | Name for duplicated report |

\
Request Sample

```json
{
    "id": 123,
    "reportName": "Report name"
}
```

Response 200

```json
{
    "success": true,
    "data": "Report duplicated successfully with id 124"
}
```

## Scheduling Management

This section covers the various methods and endpoints for managing scheduled reports.

See the quickstart guide on scheduling a report [here](/docs/quickstart-guides/Schedule-Report-API-Quickstart-Guide.md).

### Schedule a Report

Create and save a report scheule with the following endpoint:

`POST` /api/v3/ra/report/email/schedule

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report  ID |
| `subscriberEmails` | array of strings | List of emails to which the report will be sent |
| `fileType` | integer | Report file type ID <br>CSV: `1` <br>XLS: `2` |
| `deliveryFrequency` | integer | Delivery frequency type ID <br>Once: `1` <br>Daily: `2` <br>Weekly: `3` <br>Monthly: `4` |
| `deliveryDay` | string | [Required, if `deliveryFrequecy` is not "once"] Delivery day to specify the day-time when the report should be sent. <br>Weekly delivery day: [`sunday`, `monday`, ...] <br>Monthly delivery day: [`first`, `last`, `2`,`3`, ... `29`] |
| `eventEndDate` | integer | [Required if `deliveryFrequency` is not "once"] Unix epoch timestamp, time when scheduled report will stop
| `runningTotalEnabled` | boolean | Flag to indicate if the 'Total' Running is enabled for the report. Only supported with 'Campaign' dimension. If `true`, start date for report will be earliest campaign start date, ending with report end date |
| `earliestCampaignStartDate` | integer | [Required with `runningTotalEnabled` as `true`] Unix epoch timestamp, milliseconds. This is the campaign's earliest start date from the selected campaigns, which will be set as the start date of the report-time-period |

\
Request Sample

```json
{
    "reportId": 1234,
    "subscriberEmails": [
        "sample_email1@example.com",
        "sample_email2@example.com"
    ],
    "fileType": 2,
    "deliveryFrequency": 4,
    "eventEndDate": 1670674106000,
    "deliveryDay": "4",
    "runningTotalEnabled": true,
    "earliestCampaignStartDate": 1670674108900
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "scheduledData": {
            "earliestCampaignStartDate": 0,
            "reportId": 1234,
            "deliveryFrequency": 4,
            "fileType": 1,
            "subscriberEmails": [
                "sample_email@sample.com",
                "sample_email2@sample.com"
            ],
            "eventEndDate": 1696270980000,
            "deliveryDay": "5",
            "runningTotalEnabled": false
        },
        "message": "Report schedule has been successfully updated."
    }
}
```

### Update a Report Schedule

Update a report schedule with the following endpoint:

* `PATCH` /api/v3/ra/report/email/schedule/{reportId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID |

\
**Request Body Schema: application/json**

Include whichever fields to be updated in the request body:

| Property | Type | Description |
| ---- | ---- | --- |
| `subscriberEmails` | array of strings | List of emails to which the report will be sent | 
| `fileType` | integer | Report file type ID <br>CSV: `1` <br>XLS: `2` |
| `deliveryFrequency` | integer | Delivery frequency type ID <br>Once: `1` <br>Daily: `2` <br>Weekly: `3` <br>Monthly: `4` |
| `deliveryDay` | string | [Required, if `deliveryFrequecy` is not "once"] Delivery day to specify the day-time when the report should be sent. <br>Weekly delivery day: [`sunday`, `monday`, ...] <br>Monthely delivery day: [`first`, `last`, `2`,`3`, ... `29`] |
| `eventEndDate` | integer | [Required if `deliveryFrequency` is not "once"] Unix epoch timestamp, time when scheduled report will stop
| `runningTotalEnabled` | boolean | Flag to indicate if the 'Total' Running is enabled for the report. Only supported with 'Campaign' dimension. If `true`, start date for report will be earliest campaign start date, ending with report end date |
| `earliestCampaignStartDate` | integer | [Required with `runningTotalEnabled` as `true`] Unix epoch timestamp, milliseconds. This is the campaign's earliest start date from the selected campaigns, which will be set as the start date of the report-time-period |

\
Request Sample
```json
{
    "subscriberEmails": [
        "sample_email1@example.com",
        "sample_email2@example.com",
        "sample_email3@example.com"
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "scheduledData": {
            "earliestCampaignStartDate": 0,
            "reportId": 1234,
            "deliveryFrequency": 4,
            "fileType": 1,
            "subscriberEmails": [
                "sample_email1@example.com",
                "sample_email2@example.com",
                "sample_email3@example.com"
            ],
            "eventEndDate": 1696270980000,
            "deliveryDay": "4",
            "runningTotalEnabled": false
        },
        "message": "Report schedule has been successfully updated."
    }
}
```

### Delete Report Schedule

Remove a report schedule with the following endpoing:

* `DELETE` /api/v3/ra/report/email/schedule/{reportId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "message": "Report event is removed."
    }
}
```

### Unsubscribe an Email from All Scheduled Reports

Unsubscribe an email from all scheduled reports or an organization with the following endpoint:

* `GET` /api/v3/ra/report/email/schedule/unsubscribe-all

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `token` | string | Generated on the server when populating the email template dispatched to the end user. End user is able to unsubscribe the email address by opening the link in browser |

### Unsubscribe an Email from a Report Schedule

Unsubscribe an email from a report schedule with the following endpoint:

* `GET` /api/v3/ra/report/email/schedule/unsubscribe

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `token` | string | Generated on the server when populating the email template dispatched to the end user. End user is able to unsubscribe the email address by opening the link in browser |

## Get More Report Details

This section covers more endpoints for getting various details about reports.

### Get URL for Report Download

Run a report and get a S3 file URL for download with the following endpoint:

* `POST` /api/v3/ra/report/download

\
**Request Body Schema: application/json**

Refer to the [resource properties](#resource-properties) table for supported parameters.

\
Request Sample

```json
{
    "id": 123
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "url": "https://bucketname.s3.amazonaws.com/csv/123/reportname__1677643612992.csv"
    }
}
```

### Get a List of Conversion's Custom Fields

Get a list of conversion's custom fields by filter parameters with the following endpoint:

* `POST` /api/v3/ra/conversion/custom-field/list

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | array of integers | Filters list by customer IDs, default is all assigned customers |
| `searchField` | string | Filters by keyword or ID | 
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-id` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `noOfEntries` | integer | Maximum number of entries returned, default: `20` |

\
Request Body Sample

```json
{
    "customerIds": [
        123,
        234,
        345
    ],
    "pageNo": 1,
    "noOfEntries": 30,
    "sortBy": "+id",
    "searchField": "Pixel"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 10,
        "filterRecords": 3,
        "customFieldData": [
            {
                "id": 3114,
                "pixelName": "Pixel Conversion 1",
                "customFieldName": "sample_one"
            },
            {
                "id": 3114,
                "pixelName": "Pixel Conversion 1",
                "customFieldName": "sample_two"
            },
            {
                "id": 3221,
                "pixelName": "Pixel Conversion 2",
                "customFieldName": "product_sales"
            }
        ]
    }
}
```

### Get Report Request Types

Get a static list of report request type with the following endpoint:

* `GET` /api/v3/rb/static/report-request-type

\
Response 200

```json
{
    "success": true,
    "data": [
        {
        "name": "daily",
        "id": 1,
        "label": "Daily"
        },
        {
        "name": "total",
        "id": 2,
        "label": "Aggregated"
        }
    ]
}
```

### Get Report File Types

Get a static list of report file types with the following endpoint:

* `GET` /api/v3/rb/static/report-file-type

\
Response 200

```json
{
    "success": true,
    "data": [
        {
        "name": "csv",
        "id": 1,
        "label": "CSV"
        },
        {
        "name": "xlsx",
        "id": 2,
        "label": "XLS"
        }
    ]
}
```

### Get Report Delivery Frequency Types

Get a static list of report delivery frequency types with the following endpoint:

* `GET` /api/v3/rb/static/report-delivery-frequency

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "One Time Now",
            "id": 1,
            "label": "One time now"
        },
        {
            "name": "DAY",
            "id": 2,
            "label": "Daily until"
        },
        {
            "name": "WEEK",
            "id": 3,
            "label": "Weekly until"
        },
        {
            "name": "MONTH",
            "id": 4,
            "label": "Monthly until"
        }
    ]
}
```

### Get Dimensions and Metrics Details

Get dimensions and metrics information grouped by category (see [complete table](https://help.iqm.com/en/articles/7826036-dimensions-and-metrics)) with the following endpoint:

* `GET` /api/v3/ra/report/dimension-metrics/detail

\
Response 200

```json
{
    "success": true,
    "data": {
        "metrics": [
            {
                "Budget": [
                    {
                        "id": 1,
                        "label": "Daily Budget",
                        "order": 1,
                        "fieldDataType": "currencyUSD",
                        "aggregationType": "sum",
                        "description": "Amount up to which you allow platform to spend on average each day",
                        "defaultEnabled": false,
                        "key": "dailyBudget",
                        "dependentDimensions": [
                            1,
                            2,
                            43,
                            44
                        ]
                    },
                    {
                        "id": 2,
                        "label": "Total Budget",
                        "order": 2,
                        "defaultEnabled": false,
                        "key": "totalBudget",
                        "dependentDimensions": [
                            1,
                            2,
                            43,
                            44
                        ]
                    }
                ]
            },
            {
                "Counts": [
                    {
                        "id": 5,
                        "label": "Impressions",
                        "order": 1,
                        "defaultEnabled": true,
                        "key": "impressions",
                        "dependentDimensions": null
                    }
                ]
            }
        ],
        "dimensions": [
            {
                "Campaign Specifics": [
                    {
                        "id": 1,
                        "label": "Campaign",
                        "order": 1,
                        "isFilterSupported": true,
                        "isRowToColumn": false,
                        "isCustomerDependent": true,
                        "fieldDataType": "text",
                        "description": "Campaign Name",
                        "groupId": 1,
                        "key": "campaign"
                    },
                    {
                        "id": 2,
                        "label": "Campaign ID",
                        "order": 2,
                        "isFilterSupported": true,
                        "isRowToColumn": false,
                        "isCustomerDependent": true,
                        "fieldDataType": "text",
                        "description": "Unique system-generated number assigned to each Campaign",
                        "groupId": 1,
                        "key": "campaignId"
                    }
                ]
            },
            {
                "Locations": [
                    {
                        "id": 34,
                        "label": "Country",
                        "order": 1,
                        "isFilterSupported": true,
                        "isRowToColumn": false,
                        "isCustomerDependent": false,
                        "fieldDataType": "country",
                        "description": "Country the ad ran in",
                        "groupId": 29,
                        "key": "country"
                    },
                    {
                        "id": 35,
                        "label": "State",
                        "order": 2,
                        "isFilterSupported": true,
                        "isRowToColumn": false,
                        "isCustomerDependent": false,
                        "fieldDataType": "regionCode",
                        "description": "State the ad ran in",
                        "groupId": 30,
                        "key": "state"
                    }
                ]
            }
        ]
    }
}
```

## Error Handling

This section will cover definitions and examples of common error codes encountered

### Status codes

We use standard HTTP status codes. The error codes you’ll most likely see are:

| Code | Definition |
| ---  |--- |
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 403 | Forbidden |
| 408 | Request Timeout |
| 412 | Precondition Failed |
| 422 | Unprocessable Entity |
| 500 | Internal Service Error|

Please refer to [MDN documentation on status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Examples

Response 400

```json
{
    "timestamp": "2024-09-30T22:01:35.725+0000",
    "status": 400,
    "error": "Bad Request",
    "message": "JSON parse error: Unexpected character ('k' (code 107)): was expecting double-quote to start field name; nested exception is com.fasterxml.jackson.core.JsonParseException: Unexpected character ('k' (code 107)): was expecting double-quote to start field name\n at [Source: (PushbackInputStream); line: 2, column: 2]",
    "path": "/api/v3/report/by-campaign"
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

Response 422 Sample (report download)

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Please select columns for report download",
            "field": "columns"
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
