# Conversions API

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Conversion Details

This section covers the various methods and endpoints for getting conversion details and lists. 

### Get Conversion Details by ID

Get details about a conversion from its ID with the following endpoint:

* `GET` /api/v3/conversion/{conversionId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionId` | integer | Conversion ID |
| `typeId` | integer | Type of conversion for which the details will be returned <br>Pixel: `1` <br>Postback: `2` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "id": 3121,
        "name": "PixelConversion",
        "uuid": "7e955ccbb92340f7b28c744eb876c9c6",
        "typeId": 1,
        "owId": 202017,
        "createdByUowId": 12121,
        "modifiedByUowId": 12121,
        "attributionId": 1,
        "statusId": 1,
        "customFields": [
            "field_1",
            "field_2",
            "field_3"
        ],
        "financialMetrics": "field_1",
        "piggybackData": {
            "url": "http://thisPiggybackUrl.com/piggy",
            "type": 1
        },
        "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/7e955ccbb92340f7b28c744eb876c9c6?cv={CONVERSION_VALUE}' async></script>",
        "conversionSetting": {
        "conversionDuration": {
            "view": 10,
            "click": 10
        },
        "repeatConversion": {
            "count": 1,
            "frequency": 1,
            "unit": "Day"
        },
        "crossModelling": true
        }
    }
}
```

### Get List of Conversions

Get a list of conversions with details and filters with the following endpoint: 

* `GET` /api/v3/conversions/list

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-created` | 
| `conversionsId` | string | Conversion ID
| `typeIds` | string | Filters by conversion type ID<br>Pixel: `1` <br>Postback: `2`
| `statusIds` | string | Filters by conversion status ID<br>Active:`1` <br>Pending:`2` |
| `postbackPartnerIds` | string | Filters by postback conversion type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 2539,
                "name": "conversion-197",
                "postbackPartnerName": null,
                "status": "Active",
                "type": "Pixel",
                "created": 1677805806,
                "totalConversion": 0,
                "owId": 201352,
                "createdByUowId": 6255,
                "modifiedByUowId": 6255,
                "uuid": "8f3165d0-b714-440e-bc1d-621127fa5fad",
                "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/8f3165d0-b714-440e-bc1d-621127fa5fad?cv={CONVERSION_VALUE}' async></script>",
                "attributedConversion": 0,
                "attributedViewThroughConversion": 0,
                "attributedClickThroughConversion": 0,
                "pixelFinancialMetric": "test_metric",
                "postbackPartnerLogoUrl": "https://logo-bucket/partners/kochava.com",
                "campaignCount": 0
            }
        ],
        "totalRecords": 8,
        "filteredRecords": 1
    }
}
```

### Get Conversion Count by Type

Get a count of conversions based on type with the following endpoint:

* `GET` /api/v3/conversion/type-wise-count

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword | 

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "conversionType": "PIXEL",
            "conversionCount": 1,
            "order": 1
        },
        {
            "conversionType": "POSTBACK",
            "conversionCount": 9,
            "order": 2
        }
    ]
}
```

### Get Campaign Details by Conversion ID

Get a list of campaign details by conversion ID with the following endpoint:

* `GET` /api/v3/conversion/attached/campaigns/list

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionId` | integer | Conversion ID |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "campaignId": 1000,
            "campaignName": "Campaign 1",
            "creativeTypeId": 17, 
            "status": "expired",
            "startTime": 1888705936,
            "endTime": 1669420800,
            "ioId": 1,
            "ioName": "Insertion Order Name",
            "ioStatusId": 1,
            "ioBudgetTypeId": 1
        }
    ], 
    "totalRecords": 4,
    "filterRecords": 1
}
```

### Get Campaign Details by Conversion ID in Group or Basic

Get a list of campaign details by conversin ID in group details or basic details with the following endpoint:

* `GET` /api/v3/conversion/allowed/campaign-list

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionId` | integer | Conversion ID |
| `owId` | integer | Organization Workspace ID |
| `isGroup` | boolean | Flag for fetching group details (`true`) or basic details (`false`) |
| `limit` | integer | Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-ioId`, `-campaignId` |
| `searchField` | string | Search results by keyword |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "ioId": 1215,
            "ioName": "new name",
            "ioBudgetTypeId": 1,
            "ioStatusId": 0,
            "created": 1693886215726,
            "lastModified": 1695216128000,
            "owId": 201427,
            "uowId": 111357,
            "campaignCount": 1,
            "campaigns": [
                {
                    "id": 437060,
                    "campaignId": 437060,
                    "name": "Test-CB-2229",
                    "creativeTypeId": 11,
                    "status": "running",
                    "startTime": 1793972800,
                    "endTime": 0,
                    "createdAt": 1694153838,
                    "modifiedAt": 1695945600000,
                    "owId": 201427,
                    "ioId": 0,
                    "ioName": null
                }
            ]
        }
    ]
}
```

## Conversions Management

### Create Postback Conversion

The following endpoint facilitates the insertion of postback type conversion records:

* `POST` /api/v3/conversion/postback/add

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `name` | string | Name for postback conversion |
| `partnerTypeId` | string | Partner type ID |
| `impressionsUrl` | string | Impressions URL |
| `clickUrl` | string | Click URL |

\
Request Sample

```json
{
    "name": "testing postback",
    "partnerTypeId": "1",
    "impressionUrl": "https://imp.control.kochava.com/track/impression?campaign_id=kodragons-blade-1svu3szpd4b2be3253705&network_id=3603",
    "clickUrl": "https://control.kochava.com/v1/cpi/click?campaign_id?campaign_id=kodragons-blade-1svu3szpd4b2be3253705&network_id=3603"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 3215,
        "name": "testing postback",
        "partnerName": null,
        "status": "Active",
        "type": "Postback",
        "created": 1687460629,
        "totalConversions": 0,
        "owId": 202017,
        "createdByUowId": 108658,
        "modifiedByUowId": 108658,
        "uuid": "879127abaab7459585b602b1f25dec41",
        "attributedConversions": 0,
        "attributedViewThroughConversions": 0,
        "attributedClickThroughConversions": 0,
        "pixelFinancialMetric": null,
        "postbackPartnerLogoURL": "http://partnerUrl/partnerName",
        "partnerUrl": "http://partnerUrl/partnerName"
    }
}
```

### Create Pixel Conversion

Create a pixel type conversion with the following endpoint:

* `POST` /api/v3/conversion/pixel/add

\
**Request Body Schema: application/json**

| Property | Subproperty | Type | Description |
| ---- | ---- | --- | --- |
| `name` || string | Name of pixel conversion |
| `attribtionId` || string |
| `customFields` || array of strings |
| `financialMetrics` || string |
| `piggybackData` || object | asdf
| |`url` | string | Part of `piggyBackData` object |
| |`type` | integer | Part of `piggyBackData` object |
| `conversionSetting`| | object
||`conversionDuration` | | object
| |`view` || integer | [`1`...`30`] |
| |`click` || integer | [`7`...`60`]  |
||
| `repeatConversion`| [object] |  |
| `count` || integer | Part of `repeatConversion` |
|  `frequency` || integer | Part of `repeatConversion` |
|  `unit` || integer | Part of `repeatConversion` |
||
| |`crossModeling` || boolean | Part of `conversionSetting` | 
||



<table border="1">
        <thead>
    <tr>
        <th class="tg-0pky" colspan="3">Property</th>
        <th class="tg-0pky">Type</th>
        <th class="tg-0pky">Description</th>
    </tr></thead>
    <tr>
        <td colspan="3"><code>financialMetrics</code</td>
        <td>string</td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" style="border-bottom: dotted"><code>piggyBackData</code>
        <td>object</td>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>url</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>type</td>
                    <td>integer</td>
                </tr>
        <td colspan="3" style="border-bottom: dotted"><code>conversionSetting</code>
        <td>object</td>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>conversionDuration</td>
                    <td>object</td>
                </tr>
                <tr>
                    <td style="border-right: hidden"></td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>view</td>
                    <td>integer</td>
                </tr>
                    <tr>
                    <td style="border-right: hidden"></td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td ><code>click</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>repeatConversion</td>
                    <td>object</td>
                </tr>
                    <tr>
                    <td style="border-right: hidden"></td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>count</td>
                    <td>integer</td>
                </tr>
                    <tr>
                    <td style="border-right: hidden"></td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>frequency</td>
                    <td>integer</td>
                </tr>
                      <tr>
                    <td style="border-right: hidden"></td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>unit</td>
                    <td>string</td>
                </tr>
                  <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>crossModelling</td>
                    <td>boolean</td>
                </tr>
</table>