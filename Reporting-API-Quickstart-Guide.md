# Quickstart Guide: Run a Report

IQM’s REST API enables you to interact with most of IQM’s offerings. 

Getting started with running your first reports is easy; just use the following endpoints:

* `POST` /api/v3/ua/login
* `GET` /api/v2/adv/static/timezones
* `GET` /api/v3/ra/report/dimension-metrics/detail
* `POST` /api/v3/ra/report/execute

## About IQM Reports

The IQM APIs provide access to all dimensions and KPIs of your ad-serving reporting data in JSON format. You can use the APIs to connect to applications of your choice.

Reports can be either **daily** or **aggregated**. The daily report will include the date as a dimension and provide the data breakdown by date. Reports provide five top-level dimensions of filtering support, and you can filter on multiple values for each dimension.

You can run a report containing up to three months of data for any dimension combination or up to one year for the campaign dimension. You must run multiple reports if you need more than that amount of data.

## Run a report using the IQM API

This quick start will help you run a basic IQM report.  At a minimum, you must log in, select dimensions and metrics, choose a time zone, and execute your report. Once you have accomplished these basics, you can continue learning more about our API through the [documentation](https://app.iqm.com/docs).

1. Log In
      * Optional if you have already logged in and have a token.
1. Request Dimensions and Metrics
      * Optional if you know what you need or have already requested before.
1. Request Time Zones
      * Optional if you already requested before.
1. Execute the Report
      * Execute the report with parameters from the previous steps.

### Step 1: Log in

To log in, the `Authorization: Basic` header is required. The Login API returns an OAuth-compliant response with an Organization Workspace ID (OWID), which is a unique identifier for each organization. This ID will be used for any further API communications.

* `POST` /api/v3/ua/login

#### HEADER PARAMETERS

| Property | Type| Example |
| ---- | ---- | --- |
| `Authorization` | string (required) | `Basic N3BuaWJrdWpleTFvanJnbnNsbjU6MTIzNDU2` |
| `X-Iaa-Host` | string (required) | `api.iqm.com` |

#### REQUEST BODY SCHEMA: application/json

| Property | Type | Description |
| ---- | ---- | --- |
| `grantType` | string (required) | [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string (required) | Your user account email |
| `password` | string (required) | Your user accout password |

##### Request

```json
{
   "grantType": "password",
   "email": "pratik.t+ihp@iqm.com",
   "password": "123456"
}
```

##### Response 200

```json
{
   "success": true,
   "data":
   {
      "access_token": "106adb25-37b0-4cab-8381-d682fe7cc3c8",
      "refresh_token": "eac4c1f6-781e-4b04-baff-9c2e415d1f64",
      "scope": "read write",
      "token_type": "bearer",
      "expires_in": 35999,
      "owId": 200001
   }
}
```

<details>
<summary>More Response Samples</summary>

##### Response 400

```json
{
   "success": false,
   "data":
   {
      "status": "On Hold",
      "reason": "The particular account is kept on hold due to missed payment dates for last 3 months.",
      "supportEmail": "support@iqm.com"
   },
   "errorObjects":
   [
      {
         "error": "User is not allowed to access provided customer",
         "reason": "User is not associated with any active organization."
      }
   ]
}
```

##### Response 403

```json
{
   "success": false,
   "errorObjects":
   [
      {
         "error": "User doesn't exist or user is not allowed to provided workspace."
      }
   ]
}
```

</details><br>

For further information see the complete [Login API Documentation](https://app.iqm.com/docs/?path=tag/User-Management-API/operation/Login).

### Step 2: Request dimensions and metrics

Choose the dimensions and metrics you want to see in your report. This API offers Dimension and Metrics information grouped by category.
 See [full documentation on dimensions and metrics](https://help.iqm.com/en/articles/7826036-dimensions-and-metrics) we support.

Reports will be in table format. The metrics comprise the columns, and the dimensions comprise the rows. Necessary information about campaigns is found in the columns.

Available dimensions are:

* Insertion Order specifics
  * Insertion Order
  * Insertion Order ID
  * Insertion Order Start Date
  * Insertion Order End Date
* Campaign specifics
  * Campaign
  * Campaign ID
  * Campaign Start Date
  * Campaign End Date
  * Campaign Group
  * Campaign Group ID
  * Hour
  * Day
* Creative specifics
  * Creative
  * Creative ID
  * Creative Type
  * Creative Group
  * Playback Method
  * Player Size
  * Placement Type
  * Rol Type
  * Skippability
* Demographics
  * Age group
  * Gender
  * Ethnicity
  * Language
  * Income Range
* Technologies
  * Device Type
  * Manufacturer
  * Carrier
  * Connection Type
  * Operating System
* Deliveries
  * Channel
  * Site and app
  * Exchange
  * Site and app ID
  * Private Deal
  * Publisher Category
* Locations
  * Country
  * State
  * City
  * County (US-only)
  * Zip Code (postal code)
  * Congressional District (US-only)
  * State Senate (US-only)
  * State House (US-only)
  * DMA (US-only)
* Customers
  * Customer
  * Customer ID

Available metrics are:

* Budget
  * Daily budget
  * IO budget
  * Total budget
  * Max bid
  * Daily budget completion %
* Counts
  * Impressions
  * Clicks
  * Reach
  * Frequency
* Rates
  * CTR
  * Win rate
  * VCR
  * Viewability
* Spending
  * Total spent
  * Data cost
  * Media spent
  * Platform spent
  * Workspace spent
* Earnings
  * Platform earnings
  * Workspace earnings
* Cost
  * eCPM
  * eCPC
  * CPCV
* Video
  * Video start
  * Video 25%
  * Video 50%
  * Video 75%
  * Video 100%
  * Hours viewed
* Conversion
  * Total conversions
  * Total Attributed Conversions
  * Total Attributed View-Through Conversions
  * Total Attributed Click-Through Conversions
  * Cost Per Attributed Conversions
  * Total Conversion Value
  * Attributed Conversion Rate
  * ROAS

   For more information see this [help article about Conversions](https://help.iqm.com/en/articles/7329794-understanding-conversion-metrics-in-the-iqm-platform).

* `GET` /api/v3/ra/report/dimension-metrics/detail

##### HEADER PARAMETERS

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string | Authorization Bearer Token |
| `X-IAA-OW-ID` | string |  Organization Workspace Id Header |

##### Response 200

```json
{
   "success": true,
   "data":
   {
      "metrics":
      [
         {
         "Budget":
            [
               {
                  "id": 1,
                  "label": "Daily Budget",
                  "order": 1,
                  "fieldDataType": "currencyUSD",
                  "aggregationType": "sum",
                  "description": "Amount up to which you allow platform to spend on average each day",
                  "defaultEnabled": false,
                  "key": "dailyBudget",
                  "dependentDimensions": [ 1, 2, 43, 44 ]
               },
               {
                  "id": 2,
                  "label": "Total Budget",
                  "order": 2,
                  "defaultEnabled": false,
                  "key": "totalBudget",
                  "dependentDimensions": [ 1, 2, 43, 44 ]
               }
            ]
         },
         {
            "Counts":
            [
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
      "dimensions":
      [
         {
            "Campaign Specifics":
               [
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
             "Locations":
               [
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

```

<details>
<summary>More Response Samples</summary>

##### Response 403

```json
{
   "success": false,
   "errorObjects":
   [
      {
         "error": "Forbidden!"
      }
   ]
}
```

##### Response 500

```json
{
   "success": false,
   "errorObjects":
   [
      {
         "error": "server encountered an error !"
      }
   ]
}
```

</details><br>

For further information see the complete [Dimension and Metrics Details API Documentation](https://app.iqm.com/docs/?path=tag/Report-API/operation/getDimensionAndMetricDetails).

### Step 3: Select time zones

After you’ve chosen your metrics and dimensions, choose the time zone to target. You can only include one-time zone per report. Run multiple reports if you want to see results for numerous time zones.

Use the Timeszones API to generate a list of time zone IDs to refer to in API calls. Use these IDs to target time zones in your report.

* `GET` /api/v2/adv/static/timezones

##### HEADER PARAMETERS

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string | Authorization Bearer Token |
| `X-IAA-OW-ID` | string |  Organization Workspace Id Header |

##### Response 200

```json
{
   "statusCode":200,
   "responseObject":[
      {
         "name":"US/Central",
         "id":423,
         "label":"US/Central"
      }
   ]
}
```

For further information see the complete [Timezone API documentation](https://app.iqm.com/docs/?path=tag/Master-API/operation/Timezones).

### Step 4: Execute your report

Run your report based on Report Data.

The report will default to the previous three months if you don’t include a start and end date.

All columns are optional, but you must include some for running the report.

At least one dimension is required.

* `POST` /api/v3/ra/report/execute

##### HEADER PARAMETERS

| Property | Type| Example |
| ---- | ---- | --- |
| `x-iaa-api-token` | string | `{{advertiser_api_token}}` |

##### REQUEST BODY SCHEMA: application/json required

| Property | Type| Example |
| ---- | ---- | --- |
| `startDate` | integer | `int64` - Unix timestamp |
| `endDate` | integer | `int64` - Unix timestamp | 
| `dimensions` | string | List of dimensions for the report obtained from dimensions and metrics details API |
| `customerIds` | Array of integers | `int32` List of customers IDs to include in the report, leave empty array [ ] to include all, optional for workspace users only. |
| `columns` | Array of strings | List of metrics for the report obtained from dimensions and metrics details API | 
| `timezoneId` | integer | `int32` Timezone ID from the timezones API |
| `requestType` | integer | `int32` ID to identify if the report request is Daily ["1"] or Aggregated ["2"]. |
| `reportAggregated` | string | Field to identify if the first report dimension is Aggregated ["1"] or not["0"]. |
|`timezoneName` | string | Timezone name from timezones API |
| `filters` | object | Filter values to filter dimensions |
| `pageNo` | integer | `int32` Pagination parameter, page number. |
| `noOfEntries` | integer | `int32` Pagination paramter, records per page. |
| `sortBy` | string | Dimension or metric to sort by, if prefixed by “-” then descending “-impressions”. |

##### Request

```json
{
   "customerIds":[
      
   ],
   "startDate":1690550314033,
   "endDate":1698326314033,
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
   "timezoneId":29,
   "counter":1,
   "pageNo":1,
   "noOfEntries":20,
   "sortBy":"-impressions"
}
```

##### Response 200

```json
{
   "success":true,
   "data":{
      "total":{
         "CTR":0.481871,
         "totalRecords":12,
         "VCR":95.481106,
         "totalBudget":null,
         "dataCost":0.0,
         "budgetMappingDataCost":null,
         "ioId":null,
         "ioBudgetTypeId":null,
         "campaignTimezone":null,
         "eCPM":12.334902368021696,
         "bidImpressions":2976779,
         "mediaSpent":366.05056267341183,
         "startCount":2567,
         "campaignType":null,
         "ioBudget":null,
         "campaignId":null,
         "spent":366.05056267341183,
         "impressions":29676,
         "completeCount":2451,
         "budgetMappingSpent":null,
         "dailyBudget":null,
         "maxBid":null,
         "clicks":143,
         "campaign":null,
         "ioName":null,
         "budgetCompletion":null,
         "status":null
      },
      "totalRecords":12,
      "data":[
         {
            "CTR":0.178300,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":40.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":6.999405681683113,
            "bidImpressions":23581,
            "mediaSpent":58.88600000000003,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22844,
            "spent":58.88600000000003,
            "impressions":8413,
            "completeCount":0,
            "budgetMappingSpent":58.88600000000002,
            "dailyBudget":25.0,
            "maxBid":7.0,
            "clicks":15,
            "campaign":"Bright Horizons: Illuminating Your Path",
            "ioName":"Default Insertion Order",
            "budgetCompletion":147.21500000000006,
            "status":"expired"
         },
         {
            "CTR":0.317100,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":50.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":7.54409543944428,
            "bidImpressions":779956,
            "mediaSpent":49.95700000000002,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22950,
            "spent":49.95700000000002,
            "impressions":6622,
            "completeCount":0,
            "budgetMappingSpent":49.95700000000001,
            "dailyBudget":5.0,
            "maxBid":5.0,
            "clicks":21,
            "campaign":"Next Chapter: Unveiling Future Possibilities",
            "ioName":"Default Insertion Order",
            "budgetCompletion":99.91400000000002,
            "status":"expired"
         },
         {
            "CTR":0.270300,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":80.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":17.49336347425682,
            "bidImpressions":1023343,
            "mediaSpent":71.19798934022526,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22843,
            "spent":71.19798934022526,
            "impressions":4070,
            "completeCount":0,
            "budgetMappingSpent":71.19798934022528,
            "dailyBudget":10.0,
            "maxBid":10.0,
            "clicks":11,
            "campaign":"Fresh Perspectives: A New View on Life",
            "ioName":"Default Insertion Order",
            "budgetCompletion":88.9974866752816,
            "status":"expired"
         },
         {
            "CTR":0.961200,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":10.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"America/Chicago",
            "eCPM":2.9996703782638954,
            "bidImpressions":48286,
            "mediaSpent":9.985902689240508,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22875,
            "spent":9.985902689240508,
            "impressions":3329,
            "completeCount":0,
            "budgetMappingSpent":9.985902689240508,
            "dailyBudget":5.0,
            "maxBid":3.0,
            "clicks":32,
            "campaign":"Elevate Everyday: Lifting Life's Experience",
            "ioName":"Default Insertion Order",
            "budgetCompletion":99.85902689240508,
            "status":"expired"
         },
         {
            "CTR":0.229400,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":60.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":24.865059716102436,
            "bidImpressions":846787,
            "mediaSpent":65.04699621732398,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":23004,
            "spent":65.04699621732398,
            "impressions":2616,
            "completeCount":0,
            "budgetMappingSpent":65.04699621732398,
            "dailyBudget":25.0,
            "maxBid":25.0,
            "clicks":6,
            "campaign":"Pathfinders: Navigating Success",
            "ioName":"Default Insertion Order",
            "budgetCompletion":108.41166036220665,
            "status":"expired"
         },
         {
            "CTR":0.158600,
            "totalRecords":null,
            "VCR":95.398651,
            "totalBudget":100.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1686,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":39.63124504361618,
            "bidImpressions":87831,
            "mediaSpent":99.95000000000002,
            "startCount":2521,
            "campaignType":"cpv",
            "ioBudget":105.0,
            "campaignId":22870,
            "spent":99.95000000000002,
            "impressions":2522,
            "completeCount":2405,
            "budgetMappingSpent":99.95000000000002,
            "dailyBudget":50.0,
            "maxBid":40.0,
            "clicks":4,
            "campaign":"Green Leap: Sustaining Tomorrow",
            "ioName":"Momentum: Moving Forward Together",
            "budgetCompletion":99.95000000000002,
            "status":"expired"
         },
         {
            "CTR":2.082300,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":12.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":4.999841166878848,
            "bidImpressions":13389,
            "mediaSpent":10.084679633594636,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22999,
            "spent":10.084679633594636,
            "impressions":2017,
            "completeCount":0,
            "budgetMappingSpent":10.084679633594636,
            "dailyBudget":10.0,
            "maxBid":5.0,
            "clicks":42,
            "campaign":"Horizon Shift: Beyond the Now",
            "ioName":"Default Insertion Order",
            "budgetCompletion":84.03899694662196,
            "status":"expired"
         },
         {
            "CTR":20.588200,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":10.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"America/Chicago",
            "eCPM":1.999846853748152,
            "bidImpressions":128,
            "mediaSpent":0.06799479302743718,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22718,
            "spent":0.06799479302743718,
            "impressions":34,
            "completeCount":0,
            "budgetMappingSpent":0.06799479302743719,
            "dailyBudget":5.0,
            "maxBid":2.0,
            "clicks":7,
            "campaign":"Spark Ignition: Fueling Passion",
            "ioName":"Default Insertion Order",
            "budgetCompletion":0.6799479302743718,
            "status":"expired"
         },
         {
            "CTR":0.000000,
            "totalRecords":null,
            "VCR":100.000000,
            "totalBudget":100.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1616,
            "ioBudgetTypeId":1,
            "campaignTimezone":"US/Eastern",
            "eCPM":10.000000000000002,
            "bidImpressions":153307,
            "mediaSpent":0.26000000000000006,
            "startCount":26,
            "campaignType":"cpv",
            "ioBudget":1810.0,
            "campaignId":19870,
            "spent":0.26000000000000006,
            "impressions":26,
            "completeCount":26,
            "budgetMappingSpent":6.940000000000002,
            "dailyBudget":5.0,
            "maxBid":10.0,
            "clicks":0,
            "campaign":"Vista Vision: Broadening Your Scope",
            "ioName":"Momentum: Moving Forward Together",
            "budgetCompletion":6.940000000000001,
            "status":"running"
         },
         {
            "CTR":0.000000,
            "totalRecords":null,
            "VCR":100.000000,
            "totalBudget":100.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"Asia/Kolkata",
            "eCPM":30.00000000000001,
            "bidImpressions":164,
            "mediaSpent":0.6000000000000002,
            "startCount":20,
            "campaignType":"cpv",
            "ioBudget":553523.7423799998,
            "campaignId":22951,
            "spent":0.6000000000000002,
            "impressions":20,
            "completeCount":20,
            "budgetMappingSpent":0.6000000000000002,
            "dailyBudget":30.0,
            "maxBid":30.0,
            "clicks":0,
            "campaign":"Life in HD: High Definition Living",
            "ioName":"Default Insertion Order",
            "budgetCompletion":0.6000000000000002,
            "status":"expired"
         },
         {
            "CTR":60.000000,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":5.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1686,
            "ioBudgetTypeId":1,
            "campaignTimezone":"America/Chicago",
            "eCPM":2.0,
            "bidImpressions":5,
            "mediaSpent":0.01,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":105.0,
            "campaignId":22873,
            "spent":0.01,
            "impressions":5,
            "completeCount":0,
            "budgetMappingSpent":0.01,
            "dailyBudget":3.0,
            "maxBid":2.0,
            "clicks":3,
            "campaign":"Momentum: Moving Forward Together",
            "ioName":"Momentum: Moving Forward Together",
            "budgetCompletion":0.2,
            "status":"expired"
         },
         {
            "CTR":100.000000,
            "totalRecords":null,
            "VCR":0.000000,
            "totalBudget":5.0,
            "dataCost":0.0,
            "budgetMappingDataCost":0.0,
            "ioId":1706,
            "ioBudgetTypeId":1,
            "campaignTimezone":"America/Chicago",
            "eCPM":2.0,
            "bidImpressions":2,
            "mediaSpent":0.004,
            "startCount":0,
            "campaignType":"cpm",
            "ioBudget":553523.7423799998,
            "campaignId":22872,
            "spent":0.004,
            "impressions":2,
            "completeCount":0,
            "budgetMappingSpent":0.004,
            "dailyBudget":3.0,
            "maxBid":2.0,
            "clicks":2,
            "campaign":"Renaissance of Ideas: Crafting the Future",
            "ioName":"Default Insertion Order",
            "budgetCompletion":0.08,
            "status":"expired"
         }
      ],
      "filteredRecords":12
   }
}
```

For further information see the complete [Execute Report Data API](https://app.iqm.com/docs/?path=tag/Report-API/operation/executeReportDatas).

## Best Practices

The message rate limit is 20 requests per minute. Exceeding this limit will cause a 429 (too many requests) error.

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.

## FAQ

### What are the most commonly used dimensions in reports?

The most frequently used dimensions and combinations of dimensions are:

* Insertion Order
* Insertion Order & Campaign
* Campaign & Creative
* Campaign & Inventory
* Campaign & Age
* Campaign & Zip Code
* Campaign & Age & Gender
* Campaign & Device
* Campaign & City
* Campaign & Gender
* Campaign & Channel
