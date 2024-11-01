# Quickstart Guide: Schedule a Report

IQM's API allows you to create report scheduling events.

Scheduling reports is easy; just use the following endpoint:

* `POST` /api/v3/ua/login
* `POST` /api/v3/ra/report/email/schedule

## About IQM Reports

The IQM APIs provide access to all dimensions and KPIs of your ad-serving reporting data in JSON format. You can use the APIs to connect to applications of your choice.

Reports can be either **daily** or **aggregated**. The daily report will include the date as a dimension and provide the data breakdown by date. Reports provide five top-level dimensions of filtering support, and you can filter on multiple values for each dimension.

You can run a report containing up to three months of data for any dimension combination or up to one year for the campaign dimension. You must run multiple reports if you need more than that amount of data.

## Schedule a Report

This quick start guide will help you create a report scheduling event. At a minimum, you must log in, have a campaign started, in order to execute reports. Once these steps have been completed, you can create a scheduling event.

1. Log In
    * Optional if you have already logged in and have a token
1. Schedule a Report
    * Execute scheduling event with frequency, day, and end date parameters

### Step 1: Log In

To log in, the `Authorization: Basic` header is required. The Login API returns an OAuth-compliant response with an Organization Workspace ID (`owId`), which is a unique identifier for each organization. This ID will be used for any further API communications.

* `POST` /api/v3/ua/login

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string  | Authorization bearer token. See [Authentication Guide](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string | Workspace URL |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `grantType` | string (required) | [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string (required) | Your user account email |
| `password` | string (required) | Your user accout password |

### Step 2: Schedule a Report

Decide the delivery frequency, day, and end date of scheduled reports. This API will save the delivery information and return a success message.

* `POST /api/v3/ra/report/email/schedule`

\
**Request Body Schema: application/json**

| Property | Type | Description |
|---|---|---|
| `reportId` | integer [required] | The unique report ID, event will be created on this report ID. |
| `subscriberEmails` | Array of strings [required] | List of emails to which the report will be sent. |
| `fileType` | integer [required] | Report file type ID. The report will be sent in the selected file format. E.g. [1 = CSV, 2 = XLS] |
| `deliveryFrequency` | integer [required] | Delivery frequency type ID for the emails to be sent. E.g. [1 = Once, 2 = Daily, 3 = Weekly, 4 = Monthly] |
| `deliveryDay` | string [required] | If delivery is not 'Once', specify the day/date when the report should be sent. E.g. [Day: "Sunday", "Monday", ...] or [Monthly: "First", "Last", "1", "2", ..., "29"] |
| `eventEndDate` | integer [Required] | If delivery is not "Once", this should be a long, TIME EPOCH in UNIX format, in milliseconds. This is event's end date, Scheduled report will be stopped after the `eventEndDate` is exceeded. |
| `runningTotalEnabled` | boolean [Optional] | Flag to indicate if the 'Total' Running is enabled for the report. This flag is supported only with 'Campaign' dimension. If this is true the start-date for the report duration should be the EARLIEST campaign start date, so the report-time-period will be from the Earliest-campaign-start-date to the report-end-date. |
| `earliestCampaignDate` | integer [Required] | With `runningTotalEnabled` as `true`, this should be a long TIME EPOCH in UNIX format, in milliseconds. This is campaign's EARLIEST start date from the selected campaigns, which will be set as the start date of the report-time-period. |

\
Request Sample

```json
{
  "reportId": 1235,
  "subscriberEmails": [
    "sample_email1@example.com",
    "sample_email2@example.com"
  ],
  "fileType": 2,
  "deliveryFrequency": 3,
  "eventEndDate": 1670674106000,
  "deliveryDay": "MONDAY",
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
      "reportId": 12345,
      "deliveryFrequency": 3,
      "fileType": 1,
      "subscriberEmails": [
        "sample_email@sample.com",
        "sample_email2@sample.com"
      ],
      "eventEndDate": 1696270980000,
      "deliveryDay": "MONDAY",
      "runningTotalEnabled": false
    },
    "message": "Report schedule has been successfully updated."
  }
}
```

For further information see the complete [Save Report Scheduling Event API Documentation](https://api.iqm.com/docs?path=tag/Report-API/operation/saveReportScheduleEvent).
