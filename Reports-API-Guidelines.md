# Reports API

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Reports Details

Get a list of reports with the following endpoints:

* `GET` /api/v3/ra/reports/list
* `POST` /api/v3/ra/reports/list

\
**Query Parameters/Request Body Schema**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerIds` | string | Filters by comma separated customer IDs <br>Passing `all` gets all eligible customer's report, default: `all` |
| `sortBy` | string | Sorts by given field with `-` and `+` prefix <br>Supported values: `id`, `name`, `startDate`, `modifyDate`<br>Default: `-modifyDate` |
| `searchField` | string | Filters by searched keyword |
| `limit` | integer | Number of records to be returned, default: `20` |
| `pageNo` | integer | Defines page entries to return, default: `1` |

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

## Reports Management

### Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | integer | Gets data for this report ID |
| `dimensions` | JSON string | Represents dimension details |
| `columns` | array of strings | Metrics for showing serving result |
| `customerIds` | array of integers | Gets data for these customer IDs |
| `filters` | JSON string | Supports: `campaignId`, `creativeTypeId`, and `campaignStatus` |
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

Create a new report based on given fields (see [Resource Properties](/Reports-API-Guidelines.md#resource-properties)) with the following endpoint:

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

### Schedule a Report

Create and save a report scheule with the following endpoint:

`POST` /api/v3/ra/report/email/schedule

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `reportId` | integer | Report  ID |
| `subscriberEmails` | array of strings | List of emails to send report to |
| `fileType` | integer | Report file type, CSV (`1`) or XLS (`2`) |
| `deliveryFrequency` | integer | Delivery frequency, Once (`1`), Daily (`2`), Weekly (`3`), Monthly (`4`)
| `deliveryDay` | string | Specifies day-time when the report will be sent, related to delivery frequency. <br>Weekly: `SUNDAY`, `MONDAY`, ... <br>Monthly: `FIRST`, `LAST`, `1`,`2`, ..., `29` |
| `eventEndDate` | integer | [Required, if `deliveryFrequency` is not ONCE] Unix epoch timestamp
| `runningTotalEnabled` | boolean | Flag to indicate if the 'Total' Running is enabled for the report. Only supported with 'Campaign' dimension. If `true`, start date for report will be earliest campaign start date, ending with report end date. 
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
