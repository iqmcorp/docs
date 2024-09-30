# Campaign API Guidelines

This page will cover the common endpoints and methods for managing campaigns in IQM's rest API.

Refer to the quickstart guide for instructions on [how to start a new campaign](/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide.md). 

## Get Campaign Details

Get a campaign's basic details and targeting details by ID with the following endpoint:

* `GET` /api/v2/cmp/campaign/{campaignId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer | Campaign's unique ID |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `isSpentRequired` | boolean | Flag to get the campaign spent; default: `false`

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

### Resource Properties

| Property | Type | Description |
|---|---|---|
| `id` | integer | campaign ID |
| `campaignName` | string | campaign Name |
| `advertiserDomain` | string | campaign Advertiser Domain |
| `creativeType` | integer | creative type ID |
| `totalBudgetPacing` | boolean | false indicates off true indicates on |
| `budgetDay` | integer | daily budget of campaign |
| `budgetTotal` | integer | total budget fo campign |
| `maxBid` | integer | max bid of budget for serving |
| `status` | string | status of campaign |
| `dspMargin` | integer | for dsp margin |
| `platformMargin` | integer | for platform margin |
| `userDealMargin` | integer | for user deal margin |
| `spentScale` | boolean | spent scale for campaign |
| `conversionType` | string | conversion type of campaign |
| `spent` | integer | campaign spent |
| `bidOptimization` | integer | bid optimization true/false |
| `bidPacing` | boolean | bid pacing on/ off |
| `impressionCapping` | integer | impressionCapping on/off |
| `exchanges` | string | comma seprated exchange IDs |
| `stateIds` | string | comma seprated state IDs |
| `countryId` | integer | country ID |
| `locationDetails` | Json | location by uploaded file with targeting type |
| `campaignIabCategoryIds` | string | comma seprated campaign iab categories |
| `rejectionReason` | string | Reason of rejecting campaign |
| `creativesPlacementMapping` | json | ad placement mapping with creatives. (present in case of audio and video campaigns) |
| `organizationName` | string | Organization name |
| `userName` | string | Name of user |
| `userEmail` | string | Email of user |
| `conversionIds` | string | comma separated conversions IDs. |

\
Response 200 Sample

```json
{
    "statusCode": 200,
    "responseObject": {
        "owId": 203578,
        "parentOrganizationName": "Signup testing 1",
        "id": 537599,
        "uowId": 188494,
        "campaignName": "TestCampaign",
        "advertiserDomain": "https://iqm.com",
        "creativeType": 11,
        "campaignType": 1,
        "totalBudgetPacing": true,
        "isTvAd": false,
        "budgetDay": 1199.08,
        "budgetTotal": 50000.0,
        "maxBid": 15.0,
        "timezone": 29,
        "startTime": 1726518001,
        "endTime": 1727668800,
        "status": "pending",
        "dspMargin": 0,
        "platformMargin": 0,
        "userDealMargin": 0,
        "spentScale": false,
        "creativeIds": "676384",
        "conversionType": "None",
        "bidOptimization": true,
        "bidPacing": true,
        "isBidShading": false,
        "impressionCapping": 0,
        "maxDayImpressions": 0,
        "maxDayClicks": 0,
        "maxDayConversions": 0,
        "totalImpressions": 0,
        "totalClicks": 0,
        "totalConversions": 0,
        "deviceType": "13,15,11,12",
        "trafficType": "11,12",
        "exchanges": "",
        "isLocationWithOrFilter": true,
        "countryId": "30100001",
        "locationDetails": {},
        "isCampaignFromNewPlatform": true,
        "organizationName": "User's Org",
        "userEmail": "User@iqm.com",
        "userName": "User",
        "conversionTypeId": 0,
        "isUnapprovedAudienceTargeted": false,
        "isAllAudienceUnapproved": false,
        "createDate": 1726517360,
        "ioId": 15844,
        "ioName": "Test2",
        "prebidAudienceSegmentIdList": [],
        "campaignTypeId": 1,
        "budgetTypeId": 1,
        "isAdvanceAudioVideoTargeted": false,
        "isEstimatorAvailable": true,
        "isEditAccess": true,
        "isMarginSet": false,
        "isApprovalAccess": false,
        "isParentInvoiceTemplateSet": true
    }
}
```

### More Campaign Details

Other details can be fetched with a simple `GET` operation and filtered by various query parameters with the following endpoints:

| Method | Endpoint | Description |
| ---- | ---- | --- |
| `GET` | /api/v2/cmp/campaigns/data | Returns list of campaigns based on set of filters and `conversionId` query parameter. See documentation [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/Getcampaigndata).
| `GET` | /api/v2/cmp/campaigns/list | Returns a paginated list of campaigns with their basic details. See query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/GetCampaignList).
| `GET` | /api/v2/cmp/campaign/budgetInfo | Get campaign budget info and graph details, see query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/CampaignBudgetInfo). 
| `GET` | /api/v2/cmp/campaigngroup/campaign/list | Get the list of existing campaign groups wiht associated campaigns (basic details), see query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/Campaignlistbycampaigngroup). 
| `GET` | /api/v2/cmp/campaign/start | Get campaign start date

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string [required] | Workspace URL |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
Response 200 Sample (list of campaigns)

```json
{
    "statusCode": 200,
    "recordsTotal": 2,
    "pageNumber": 1,
    "pageSize": 10,
    "draw": 0,
    "recordsFiltered": 2,
    "data": [
        {
            "id": "537599",
            "name": "TestCampaign",
            "status": "pending",
            "owId": 203578,
            "uowId": 188494,
            "userEmail": "user5@iqm.com",
            "advertiser_email": null,
            "advertiser_id": 0,
            "campaign_type": "CPM",
            "creative_type": "Image",
            "dsp_id": 0,
            "start_date": 1726518001,
            "end_date": 1727668800,
            "creative_type_id": 11,
            "total_budget": 50000.0
        },
        {
            "id": "537123",
            "name": "Test1",
            "status": "pending",
            "owId": 203578,
            "uowId": 188494,
            "userEmail": "user5@iqm.com",
            "advertiser_email": null,
            "advertiser_id": 0,
            "campaign_type": "CPM",
            "creative_type": "Image",
            "dsp_id": 0,
            "start_date": 1727755200,
            "end_date": 1730347200,
            "creative_type_id": 11,
            "total_budget": 9900.0
        }
    ]
}
```


## Update Campaign

Update various aspects of a campaign, use the following Header Parameters for each request:

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string [required] | Workspace URL |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

### Change Campaign Name

Change the name of a campaign with the following endpoint:

* `PATCH` /api/v3/cmp/campaign/update-name/{campaignId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignId` | integer | Campaign's unique ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignName` | string | New name for campaign

\
Request Sample

```json
{
    "campaignName": "New Campaign Name"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "message": "campaignName updated successfully"
    }
}
```

### Change Campaign End Date

Change the end date of multiple campaigns with the following endpoint:

* `PUT` /api/v2/cmp/campaigns/update-end-date

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `endDate` | integer | Unix timestamp of desired end date |
| `campaignIds` | integer | IDs of campaigns to change end date |

\
Request Sample

```json
{
    "endDate": 1632132540,
    "campaignIds": 192476
}
```

Response Sample

```json
{
    "statusCode": 200,
    "responseObject": {
        "status": true
    }
}
```

### Change Campaign Budget

Update the total budget, daily budget, and max bid of multiple campaigns wiht the following endpoint:

* `PUT` /api/v2/cmp/campaigns/update_budget

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignIds` | string | Comma separated campaign IDs |
| `maxBid` | integer | Max bid of campaign
| `totalBudget` | integer | Total budget of campaign
| `dailyBudget` | integer | Daily Budget of campaign
| `totalBudgetUpdateType` | string | Used in the case of a total budget update. There are three possibilities for this parameter. <br>`change`: Replace total budget with given value.<br>`addition`: Add budget to the current total budget.<br>`distribution`: Distribute given total budget in selected campaigns equally.<br>Default value: `change`

\
Request Sample

```json
{
    "totalBudgetUpdateType": "change",
    "campaignIds": 192476,
    "dailyBudget": 1001
}
```

Response 200

```json
{
    "statusCode": 200,
    "responseObject": {
        "reason": [
            {
                "errorMessage": "max bid cannot be less than minimum bid 3.0",
                "id": "4120",
                "campaignName": "test cust aud dev"
            },
            {
                "errorMessage": "For given campaign_type max bid cannot be less than 1.00 or greater than 1000.",
                "id": "4121",
                "campaignName": "Vast copy"
            }
        ],
        "modified_data": [
            {
                "campaingId": 1,
                "maxBid": 34,
                "totalBudget": 35,
                "dailyBudget": 36,
                "endDate": 12312312312
            }
        ],
        "status": false
    }
}
```

### Update Campaign by Field

Any campaign property can be updated with the following endpoint:

* `PATCH` /api/v2/cmp/campaign/{campaignId}

\
**Request Body Schema: application/json**

Refer to [resource properties](#resource-properties) at the beginning of this page. Include wichever fields need updating in the requst body detail.

If campaign is in `DRAFT` status, this API will automatically update status from `DRAFT` to `PENDING`. In all other cases status will not be updated.

See complete documentation [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/editCampaignPatch).

## More Campaign Management

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

### Get Campaign Count by Status

This API returns a count of campaigns for each status type with the following endpoint:

* `POST` /api/v3/cmp/campaigns/count

\
**Request Body Schema: application/json**


| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated, returns campaign counts for given OwIDs (can =`all`)
| `ioIds`| string | Comma separated, returns campaign counts for given IO IDs (with `owIds`= `all`)
| `campaignTypeIds` | string | Comma separated, returns campaign counts for given Campaign Type (`ioIds` also required)
| `campaignExpiredAfterEpoch` | integer | Unix epoch timestamp expiration
| `searchField` | string | Returns campaign counts for field matched campaign ID or Name


\
Request Sample
```json
{
    "owIds": "all",
    "ioIds": "1,2,3"
}
```

Response 200

```json
{
    "success": true,
    "data": [
        {
            "order": 0,
            "status_key": "running",
            "status_label": "Running",
            "status_count": 10
        },
        {
            "order": 1,
            "status_key": "pending",
            "status_label": "Pending",
            "status_count": 11
        },
        {
            "order": 2,
            "status_key": "paused",
            "status_label": "Paused",
            "status_count": 22
        },
        {
            "order": 5,
            "status_key": "deleted",
            "status_label": "Deleted",
            "status_count": 33
        },
        {
            "order": 6,
            "status_key": "expired",
            "status_label": "Expired",
            "status_count": 44
        },
        {
            "order": 3,
            "status_key": "draft",
            "status_label": "Draft",
            "status_count": 55
        },
        {
            "order": 7,
            "status_key": "rejected",
            "status_label": "Rejected",
            "status_count": 66
        },
        {
            "order": 8,
            "status_key": "all",
            "status_label": "ALL",
            "status_count": 77
        }
    ]
}
```

## Get Insertion Order Details

Insertion Orders specify the parameters or details of an advertising campaign.

The campaign API allows the user to retrieve Insertion Order (IO) details with the following endpoint:

* `POST` /api/v3/cmp/io/basic/list

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

### Resource Properties

| Property | Type | Description |
|---|---|---|
| `ioId` | integer | Insertion Order ID
| `ioName` | string | Insertion Order name
| `owId` | integer | Organization
| `createdByUowId` | integer | User Organization Worskpace ID associated with IO creation
| `modifiedByUowId` | integer | User Organization Worskpace ID associated with IO modification
| `ioStartTime` | integer | Unix epoch timestamp of IO start time
| `ioEndTime` | integer | Unix epoch timestamp of IO end time
| `ioTotalBudget` | integer | Budget of IO
| `ioTimeZoneId` | integer | Time Zone ID
| `isAutoSumIoTotalBudget` | boolean | True: Keep IO budget same as total budget of all included campaigns
| `ioBudgetDistributionMethodId` | integer | Budget Distribution Method ID
| `ioBudgetTypeId` | integer | Budget type ID 
| `ioTotalImpression` | integer | Number of impressions 
| `ioStatusID` | integer | Status ID
| `ioNextPerformanceCheck` | integer | Unix epoch timestamp of next performance check
| `ioLastPriorityShift` | integer | Unix epoch timestamp
| `ioCurrentPriority` | integer | Current IO campaigns priority
| `isIoPrioritise` | integer | All child campaigns will be considered with or withot priority

\
**Request Body Schema: application/json**

| Property | Type | Description |
|---|---|---|
| `owIdList` | List of Integers | List of `owIds` for which IO details required. |
| `ioIdList` | List of integers | List of `ioIds` for which IO details required . |
| `ioBudgetTypeIdsList` | List of integers | List of `ioBudgetTypeIds` for which IO details are required . |
| `ioStatusIdsList` | List of integers | List of `ioStatusIds` for which IO details are required . |
| `ids` | List of integers | List of `ioIds` for which IO details required at the top . |
| `isAllOWIds` | boolean | Flag for consider all the owId for IO details (`true` = consider all the owId for which user has access, `false` = consider only provided owIds). |
| `pageNo` | integer | page number for required data. |
| `noOfEntries` | integer | Number of records per page. |
| `searchField` | String | Name of search field (Support is available for name and ID). |
| `sortBy` | String | Comma separated names of the sorting field. it support multiple column sorting. for descending order user -(minus) and +(plus)(ascii value '%2B') for ascending order. i.g. `ioId`, `ioName`, `ioStartTime`, `ioEndTime`, `ioTotalBudget`. |
| `offset` | integer | Offset is alternative of page number. Offset is number of records to be skipped |

\
Request Sample

```json
{
    "pageNo": 1,
    "noOfEntries": 20,
    "ioIdList": [
        12,
        34
    ],
    "ids": [
        2
    ],
    "searchField": "io name",
    "sortBy": "-ioId",
    "ioBudgetTypeIdsList": [
        2
    ],
    "ioStatusIdsList": [
        1,
        2,
        3
    ],
    "offset": 1
}
```

Response Sample

```json
{
    "success": true,
    "data": {
        "totalRecords": 3,
        "ioBasicDetailsList": [
            {
                "ioId": 1630,
                "ioName": "phase 2 test",
                "ioStartTime": 1792179297123,
                "ioEndTime": 1793179297123,
                "ioTimeZoneId": 29,
                "ioTotalBudget": 0,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioStatusId": 1,
                "ioTotalImpressions": 0,
                "isBudgetAutoSum": true
            },
            {
                "ioId": 741,
                "ioName": "testdatasync",
                "ioStartTime": 1692860161542,
                "ioEndTime": 1696226400000,
                "ioTimeZoneId": 21,
                "ioTotalBudget": 100001,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioTotalImpressions": 0,
                "ioStatusId": 1,
                "isBudgetAutoSum": true
            },
            {
                "ioId": 738,
                "ioName": "IO Bharat",
                "ioStartTime": 1693251767612,
                "ioEndTime": 1693353600000,
                "ioTimeZoneId": 29,
                "ioTotalBudget": 1100,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioStatusId": 2,
                "ioTotalImpressions": 0,
                "isBudgetAutoSum": true
            }
        ],
        "filteredRecords": 3
    }
}
```

### Get List of Campaign Details Grouped by Insertion Order ID

Get a list of campaign details grouped by Insertion Order ID (`ioId`) with supported filters with the following endpoint:

* `POST` /api/v3/cmp/io/campaign/basic/list

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

Optional parameters to filter/sort results

| Property | Type | Description |
| ---- | ---- | --- |
| `pageNo` | integer | Page number for the desired data. Default: `1`
| `noOfEntries` | integer | The maximum number of returned results per page. Default: `20` 
| `sortBy` | string | Sort the result by specific field. For ascending use plus(+) sign(ascii value '%2B') and for descending use minus(-) sign. Supported values are as follows: `ioId`, `ioName`, `ioStartTime`, `ioEndTime`, `ioTotalBudget`, `campaignId`, `isRecordTargeted` 
| `searchField` | string | Search the result by keyword |
| `ioIdsList` | array of integers | Filter by Insertion Order IDs. Records matching provided IDs will be returned first, before others
| `campaignTypeIds` | array of integers | Returns selected campaign type IDs e.g. 'advanced campaign' or 'PG campaign', 'records matching'
| `ids` | array of integers | Filters for Campaign IDs
| `ioIds` | array of integers | Filters for Insertion Order IDs
| `status` | array of string | Filters for types of Campaign Status
| `creativeTypeIds` | array of integers | Filters for Creative Type IDs
| `ioBudgetTypeIds` | array of integers | Filters for Budget Type IDs
| `owIds` | array of integers | Filters for customer Organization Workspace IDs
| `offset` | integer | Offset is alternative of page number. Offset is number of records to be skipped |

\
Request Sample

```json
{
    "creativeTypeIds": [
        11,
        14
    ],
    "owIds": [
        201427
    ],
    "ids": [
        321743
    ],
    "searchField": "default",
    "pageNo": 1,
    "noOfEntries": 20,
    "sortBy": "+ioId",
    "status": [
        "running",
        "pending"
    ],
    "ioIds": [
        363
    ],
    "campaignTypeIds": [
        1
    ],
    "ioBudgetTypeIds": [
        1
    ],
    "offset": 1
}
```

Response 200 

```json
{
    "success": true,
    "data": {
        "totalRecords": 272,
        "ioCampaignsList": [
        {
            "ioId": 4091,
            "ioName": "Future start date",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1700726026913,
            "lastModified": 1700726065000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 450700,
                "campaignId": 450700,
                "name": "future date campaign",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1732690800,
                "endTime": 1767164400,
                "createdAt": 1701078853,
                "modifiedAt": 1707091200000,
                "owId": 201353,
                "timezoneId": 21,
                "targetedAudienceIds": [
                1010324,
                1054144,
                1060433,
                1063317
                ]
            }
            ]
        },
        {
            "ioId": 3979,
            "ioName": "Test IO for campaign popup",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1700476689502,
            "lastModified": 1701248369000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 451031,
                "campaignId": 451031,
                "name": "no end date",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1701249000,
                "createdAt": 1701248369,
                "modifiedAt": 1707091200000,
                "owId": 201353,
                "timezoneId": 21,
                "targetedAudienceIds": [
                    1010324,
                    1054144,
                    1060433,
                    1063317
                ]
            }
            ]
        },
        {
            "ioId": 225,
            "ioName": "Beatrice King",
            "ioBudgetTypeId": 1,
            "ioStatusId": 2,
            "created": 1677925263000,
            "lastModified": 1700888400000,
            "owId": 201353,
            "uowId": 112037,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 450277,
                "campaignId": 450277,
                "name": "prod-campaign-20935 copy",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1700819565,
                "endTime": 1709182800,
                "createdAt": 1700818673,
                "modifiedAt": 1707177600000,
                "owId": 201353,
                "timezoneId": 29,
                "targetedAudienceIds": null
            }
            ]
        },
        {
            "ioId": 48,
            "ioName": "UAW",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1665500839000,
            "lastModified": 1704704810000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 20731,
                "campaignId": 20731,
                "name": "prod-campaign-20731",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1676700273,
                "endTime": 1711857600,
                "createdAt": 1676700278,
                "modifiedAt": 1707177600000,
                "owId": 201353,
                "timezoneId": 29,
                "targetedAudienceIds": null
            }
            ]
        }
        ],
        "filteredRecords": 4
    }
}
```

### Get List of Campaigns and Report Details by Insertion ID

Get a list of campaigns with detailed report by Insertion Order ID (`ioId`) with supported filters with the following endpoint:

* `POST` /api/v3/cmp/io/campaigns/list

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

Optional parameters to filter/sort results

| Property | Type | Description |
| ---- | ---- | --- |
| `pageNo` | integer | Page number for the desired data. Default: `1`
| `noOfEntries` | integer | The maximum number of returned results per page. Default: `20` 
| `sortBy` | string | Sort the result by specific field. For ascending use plus(+) sign(ascii value '%2B') and for descending use minus(-) sign. Supported values are as follows: `clicks`, `impressions`, `bidImpressions`, `startCount`, `firstCount`, `midCount`, `thirdCount`, `completeCount`, `dataCost`, `spent`, `mediaSpent`, `winRate`, `VCR`, `eCPC`, `eCPM`, `eCPI`, `CTR`, `CVR`, `eCPCV`, `eCPV`, `budgetDay`, `budgetTotal`, `campaignId`, `campaignName`, `maxBid`, `startTime`, `endTime`, `campaignType`, `status`, `budgetDay`, `budgetTotal`, `reach`, `frequency`, `mappingDataCost`, `mappingSpent`, `percentageOfTotalSpent`, `organizationName`, `audioVideoViewed`, `campaignTimezone`, `pixalateViewAbility`, `ioName`, `ioId`, `targetImpression`, `creativesCount`, `pacingPercentage`, `dailyPacingPercentage`, `prebidCost`, `ioTotalImpressions`, `dailyImpressions`,`campaignPriority` ,`totalAttributedConversion`, `totalAttributedViewThroughConversion`,`totalAttributedClickThroughConversion`,`costPerAttributedConversion`,`totalAttributedConversionRate` |
| `searchField` | string | Search the result by keyword |
| `ioIdsList` | array of integers | Filter by Insertion Order IDs. Records matching provided IDs will be returned first, before others
| `budgetTypeIdList` | array of integers | Filters for selected Budget Type IDs e.g. "impression based" or "budget based". Records matching the provided IDs will be returned
| `campaignIds` | array of integers | Filters for selected Campaign IDs. Records matching the provided IDs will be returned first, before others
| `timeZoneId` | integer | Filters campaigns for specified Time Zone ID
| `campaignStatusList` | array of strings | Filters campaigns by specified Campaign Status
| `creativeTypeIds` | string | Filters campaigns by specified Creative Type ID
| `owIds` | string | Filters campaigns by specified customer Organization Workspace ID

\
Request Sample

```json
{
    "campaignStatusList": [
        "running"
    ],
    "timezoneId": 29,
    "owIds": "200425,201427",
    "ids": [
        1,
        2
    ],
    "ioIdsList": [
        1,
        2,
        38
    ],
    "budgetTypeIdList": [
        1
    ],
    "campaignIds": "1,2,3",
    "sortBy": "+campaignName",
    "creativeTypeIds": "14",
    "searchField": "campaign"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "recordsTotal": {
            "clicks": 0,
            "totalCount": 1,
            "winRate": 0,
            "logoURL": null,
            "avatarURL": null,
            "budgetDay": 0,
            "budgetSpent": 0,
            "budgetTotal": 56.339999999999904,
            "dataCost": 0,
            "mediaBudget": 0,
            "owId": 0,
            "orgId": 0,
            "impressions": 0,
            "industry": 0,
            "mediaSpent": 0,
            "spent": 0,
            "workspaceSpent": 0,
            "platformSpent": 0,
            "customerSpent": 0,
            "platformEarning": 0,
            "workspaceEarning": 0,
            "organizationName": null,
            "companySize": 0,
            "workspaceName": null,
            "workspaceId": 0,
            "workspaceDomain": null,
            "workspaceOrganizationName": null,
            "bidImpressions": 0,
            "startCount": 0,
            "firstCount": 0,
            "midCount": 0,
            "thirdCount": 0,
            "completeCount": 0,
            "audioVideoActualBids": 0,
            "audioVideoActualImpressions": 0,
            "eCPC": 0,
            "eCPM": 0,
            "eCPI": 0,
            "eCPCV": 0,
            "eCPV": 0,
            "totalAttributedConversion": 0,
            "totalAttributedViewThroughConversion": 0,
            "totalAttributedClickThroughConversion": 0,
            "costPerAttributedConversion": 0,
            "totalAttributedConversionRate": 0,
            "reach": 0,
            "frequency": 0,
            "date": null,
            "campaignId": 0,
            "campaignName": null,
            "maxBid": 0,
            "startTime": 0,
            "endTime": 0,
            "campaignType": null,
            "status": null,
            "mappingDataCost": 0,
            "mappingSpent": 0,
            "campaignTimezone": null,
            "creativeType": null,
            "budgetPacing": false,
            "isCampaignFromNewPlatform": false,
            "percentageOfTotalSpent": 0,
            "uowId": 0,
            "audioVideoViewed": 0,
            "ioId": 0,
            "ioName": null,
            "ioTimezone": 0,
            "ioBudgetDistributionMethod": 0,
            "ioStartTime": 0,
            "ioEndTime": 0,
            "ioTotalBudget": 0,
            "isAutoSumIoTotalBudget": false,
            "ioBudgetTypeId": 0,
            "ioTotalImpressions": null,
            "pacingPercentage": null,
            "actualSpent": 0,
            "expectedSpent": 0,
            "campaignDuration": null,
            "remainingDuration": 0,
            "dailyPacingPercentage": null,
            "expectedDailySpent": 0,
            "actualDailySpent": 0,
            "ioStatusId": 0,
            "exchangeId": 0,
            "creativesCount": null,
            "exchangeName": null,
            "budgetTypeId": 0,
            "targetImpression": null,
            "dailyImpression": 0,
            "budgetTotalCombined": 100,
            "budgetDayCombined": 10,
            "campaignPriority": null,
            "ioTotalBudgetCombined": 1000,
            "CTR": 0,
            "VCR": 0,
            "CVR": 0
        },
        "recordsList": [
            {
                "clicks": 0,
                "totalCount": 0,
                "winRate": 0,
                "logoURL": null,
                "avatarURL": null,
                "budgetDay": 5,
                "budgetSpent": 0,
                "budgetTotal": 13,
                "dataCost": 0,
                "mediaBudget": 0,
                "owId": 201427,
                "orgId": 0,
                "impressions": 0,
                "industry": 0,
                "mediaSpent": 0,
                "spent": 0,
                "workspaceSpent": 0,
                "platformSpent": 0,
                "customerSpent": 0,
                "platformEarning": 0,
                "workspaceEarning": 0,
                "organizationName": "Organisation Name",
                "companySize": 0,
                "workspaceName": null,
                "workspaceId": 0,
                "workspaceDomain": null,
                "workspaceOrganizationName": null,
                "bidImpressions": 0,
                "startCount": 0,
                "firstCount": 0,
                "midCount": 0,
                "thirdCount": 0,
                "completeCount": 0,
                "audioVideoActualBids": 0,
                "audioVideoActualImpressions": 0,
                "eCPC": 0,
                "eCPM": 0,
                "eCPI": 0,
                "eCPCV": 0,
                "eCPV": 0,
                "totalAttributedConversion": 0,
                "totalAttributedViewThroughConversion": 0,
                "totalAttributedClickThroughConversion": 0,
                "costPerAttributedConversion": 0,
                "totalAttributedConversionRate": 0,
                "reach": 0,
                "frequency": 0,
                "date": null,
                "campaignId": 445615,
                "campaignName": "Campaign For Child",
                "maxBid": 4,
                "startTime": 1698445456,
                "endTime": 1698739200,
                "campaignType": "cpv",
                "status": "pending",
                "mappingDataCost": 0,
                "mappingSpent": 0,
                "campaignTimezone": "US/Alaska",
                "creativeType": "Video",
                "budgetPacing": true,
                "isCampaignFromNewPlatform": true,
                "percentageOfTotalSpent": 0,
                "uowId": 9480,
                "audioVideoViewed": 0,
                "ioId": 2991,
                "ioName": "Insertion Order For Donation",
                "ioTimezone": 420,
                "ioBudgetDistributionMethod": 0,
                "ioStartTime": 1698446340000,
                "ioEndTime": 1698739200000,
                "ioTotalBudget": 26415,
                "isAutoSumIoTotalBudget": true,
                "ioBudgetTypeId": 0,
                "ioTotalImpressions": null,
                "pacingPercentage": 12.31,
                "actualSpent": 123,
                "expectedSpent": 212,
                "campaignDuration": 5,
                "remainingDuration": 2,
                "dailyPacingPercentage": null,
                "expectedDailySpent": 123,
                "actualDailySpent": 0,
                "ioStatusId": 1,
                "exchangeId": 0,
                "creativesCount": 2,
                "exchangeName": null,
                "budgetTypeId": 1,
                "targetImpression": null,
                "dailyImpression": 0,
                "budgetTotalCombined": 100,
                "budgetDayCombined": 10,
                "campaignPriority": 1,
                "ioTotalBudgetCombined": 1000,
                "CTR": 0,
                "VCR": 0,
                "CVR": 0
            }
        ],
        "totalCount": 2
    }
}
```

## Insertion Order Management

Manage various aspects of an Insertion Order, use the following Header Parameters for each request:

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string [required] | Workspace URL |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |


### Create an Insertion Order 

Create a new Insertion Order based on budget or impressions with the following endpoint:

* `POST` /api/v3/cmp/io/add

Reference the [IO resource properties](#resource-properties-1) above for the value descriptions. Required values:

* `ioName`
* `ioStartTime`
* `ioEndTime`
* `ioTotalBudget` (for budget-based IO)
* `ioTimeZoneId`
* `isAutoSumIoTotalBudget`
* `ioBudgetTypeId`
* `ioStatusId` (for impression-based IO)
* `ioBudgetDistributionMethodId`

\
Sample Request (budget based IO)

```json
{
    "ioName": "IO Name 1",
    "ioStartTime": 1690898148000,
    "ioEndTime": 1690898888000,
    "ioTotalBudget": 1000,
    "ioTimeZoneId": 29,
    "isAutoSumIoTotalBudget": true,
    "ioBudgetTypeId": 1,
    "ioBudgetDistributionMethodId": 1
}
```

Response 200 Sample

```json
{
    "success": true,
    "data": {
        "ioId": 6,
        "ioName": "IO Name 1",
        "ioStartTime": 1690898148000,
        "ioEndTime": 1690898888000,
        "ioTotalBudget": 0,
        "ioTimeZoneId": 29,
        "ioBudgetTypeId": 1,
        "ioBudgetDistributionMethodId": 1,
        "isAutoSumIoTotalBudget": true,
        "ioTotalImpressions": null
    }
}
```


### Duplicate an Insertion Order

Duplicate a single IO, and all campaigns within that IO with the following endpoint:

* `POST` /api/v3/cmp/io/duplicate

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `ioExistingCampaignIds` | array of integers | Campaign IDs within specified IO (`ioId`)
| `ioId` | integer | Specified IO to duplicate
| `ioTimeZoneId` | integer | Time Zone ID
| `ioEndTime` | integer | Unix epoch of IO end time
| `ioStartTime` | integer | Unix epoch of IO start time

\
Request Sample

```json
{
    "ioStartTime": 1698295604000,
    "ioEndTime": 1698258600000,
    "ioId": 223,
    "ioTimeZoneId": 105,
    "ioExistingCampaignIds": [
        12345,
        67890,
        21345
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "duplicatedCampaignIds": [
        12345,
        54321
        ],
        "duplicatedIOId": 271
    }
}
```

### Delete an Insertion Order

Delete one or multiple IOs and all campaigns attached to them with the following endpoint:

* `POST` /api/v3/cmp/io/delete

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `ioIdsList` | array of integers | Insertion Order IDs

\
Request Sample

```json
{
    "ioIdsList": [
        1,
        2,
        3
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": "3 Insertion Orders deleted successfully"
}
```

### More Insertion Order Management

Update the details, end dates, and budgets of insertion orders with the following methods and endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| `PATCH` | /api/v3/cmp/io/{ioId} | Update details of specified IO. See IO [resource properties](#resource-properties-1) above for supported values
| `PATCH` | /api/v3/cmp/io/update-end-date | Update the end date for a given list of IOs. See [full documentation](https://api.iqm.com/docs?path=tag/Campaign-API/operation/updateIOEndDate)
| `PATCH` | /api/v3/cmp/io/update-budget | Update the budget for a given list of IOs. See [full documentation](https://api.iqm.com/docs?path=tag/Campaign-API/operation/updateIOBudgetByIOList)

\
**Path Parameters** (where applicable)

| Property | Type | Description |
| ---- | ---- | --- |
| `ioId` | integer | Insertion Order ID

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
Request Sample (update details)

```json
{
    "ioName": "IO Name 1",
    "ioStartTime": 1690898148000,
    "ioEndTime": 1690898888000,
    "ioTotalBudget": 1000,
    "ioTotalImpressions": 0,
    "ioTimeZoneId": 29,
    "ioBudgetTypeId": 1,
    "isAutoSumIoTotalBudget": true
}
```

Response 200 Sample (update details)

```json
{
    "success": true,
    "data": "IO Name 1 saved successfully."
}
```

Request Sample (update budget)

```json
{
    "ioIdsList": [
        1,
        2,
        3
    ],
    "budget": 169089.909,
    "budgetUpdateType": "add"
}
```

Response 200 Sample (update budget)

```json
{
    "success": true,
    "data": "Budget updated successfully"
}
```