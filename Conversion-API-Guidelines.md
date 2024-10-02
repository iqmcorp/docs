# Conversions API

IQM's Conversions API allows the user to manage and get details on conversions.

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

This section covers the various methods and endpoints for managing conversions.

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

<table>
        <thead>
    <tr>
        <th class="tg-0pky" colspan="3">Property</th>
        <th class="tg-0pky">Type</th>
        <th class="tg-0pky">Description</th>
    </tr></thead> 
    <tr>
        <td colspan="3"><code>name</code></td>
        <td>string</td>
        <td>Name for pixel conversion</td>
    </tr>
    <tr>
        <td colspan="3"><code>attributionId</code></td>
        <td>string</td>
        <td>
        <a href="#attributionTypes">Attribution type ID</a>
        </td>
    </tr>
    <tr>
        <td colspan="3"><code>customFields</code></td>
        <td>string</td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3"><code>financialMetrics</code></td>
        <td>string</td>
        <td></td>
    </tr>    
    <tr>
        <td colspan="3"><code>piggybackData</code>
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
                    <td><a href="#piggybackType">Piggyback type ID</a>
                </tr>
        <td colspan="3"><code>conversionSetting</code>
        <td>object</td>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>conversionDuration</td>
                    <td>object</td>
                </tr>
                <tr>
                    <td style="border-right: hidden">|</td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>view</td>
                    <td>integer</td>
                    <td>[<code>1</code>...<code>30</code>]
                </tr>
                    <tr>
                    <td style="border-right: hidden">|</td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td ><code>click</td>
                    <td>integer</td>
                    <td>[<code>7</code>...<code>60</code>]
                </tr>
                <tr>
                    <td style="border-right: hidden">&#8627;</td>
                    <td colspan="2"><code>repeatConversion</td>
                    <td>object</td>
                </tr>
                    <tr>
                    <td style="border-right: hidden">|</td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>count</td>
                    <td>integer</td>
                </tr>
                    <tr>
                    <td style="border-right: hidden">|</td>
                    <td style="border-right: hidden">&#8627;</td>
                    <td><code>frequency</td>
                    <td>integer</td>
                </tr>
                      <tr>
                    <td style="border-right: hidden">|</td>
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

\
Request Sample

```json
{
    "name": "PixelConversion",
    "attributionId": "1",
    "customFields": [
        "field_1",
        "field_2",
        "field_3"
    ],
    "financialMetrics": "field_4",
    "piggybackData": {
        "url": "http://piggybackdata.com/url",
        "type": 1
    },
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
```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 3213,
        "name": "PixelConversion",
        "postbackPartnerName": null,
        "status": "Pending",
        "type": "Pixel",
        "created": 1687459918,
        "totalConversions": 0,
        "owId": 202017,
        "createdByUowId": 108658,
        "modifiedByUowId": 108658,
        "uuid": "a574ca49cc244c3bb3089491a11aae43",
        "attributedConversions": 0,
        "attributedViewThroughConversions": 0,
        "attributedClickThroughConversions": 0,
        "pixelFinancialMetric": "name",
        "postbackPartnerLogoURL": null,
        "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/8f3165d0-b714-440e-bc1d-621127fa5fad?cv={CONVERSION_VALUE}' async></script>",
        "partnerUrl": null
    }
}
```

### Delete Conversion

This API provides a soft delete functionality for conversions with the following endpoint:

* `DELETE` /api/v3/conversion/delete

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionIds` | string | Comma separated conversion IDs to delete|

\
Response 200

```json
{
    "success": true,
    "data": "Conversion has been deleted successfully!"
}
```


### Update Postback Conversion

Update the name of a postback type conversion with the following endpoint:

* `PATCH` /api/v3/conversion/postback/update

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | string | Postback Conversion ID |
| `name` | string | New postback conversion name |

\
Request Sample

```json
{
    "id": "3114",
    "name": "Postback Conversion Update testing"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 3114,
        "name": "Postback Conversion Update testing"
    }
}
```

### Update Pixel Conversion

Update the name and piggyback data of a pixel type conversion with the following endpoint: 

* `PATCH` /api/v3/conversion/pixel/update

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | string | Postback Conversion ID |
| `name` | string | New postback conversion name |
| `piggybackData` | object | 
| &#8627;`url` | string |
| &#8627;`type` | string | 

\
Request Sample

```json
{
    "id": "3114",
    "name": "Pixel Conversion Update testing",
    "piggybackData": {
        "url": "update piggybackData",
        "type": "1"
    }
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 3114,
        "name": "Pixel Conversion Update testing",
        "piggybackData": {
        "url": "update piggybackData",
        "type": 1
        }
    }
}
```

### Assign Conversion to a Campaign

Assign a conversion to a campaign while validating conversion IDs and campaign IDs with the following endpoint:

* `PATCH` /api/v3/conversion/assign-to/campaign

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `assignConversionToCampaign` | string | Map containing details list of `campaignId`s which need to be added/removed

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionIdList` | array of integers | Conversion IDs to assign |
| `addCampaignsList` | array of integers | Campaign IDs to assign conversions to |
| `removeCampaignsList` | array of integers | Campaign IDs to remove assigned conversions from |

\
Request Sample

```json
{
    "conversionIdList": [
        3925
    ],
    "addCampaignsList": [
        25396,
        256374,
        234567
    ],
    "removeCampaignsList": [
        256321,
        256432,
        256433
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "conversionIdsList": 3925,
        "validAddCampaignIdsList": [
            253396,
            256374
        ],
        "invalidAddCampaignIdsList": [
            234567
        ],
        "validRemoveCampaignIdsList": [
            256321,
            256432
        ],
        "invalidRemoveCampaignIdsList": [
            256433
        ]
    }
}
```

### Send Email for Pixel Integration

Send an email containing information of integration pixel in html with the following endpoint:

* `POST` /api/v3/conversion/pixel/send-email

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `conversionId` | string | Conversion ID
| `recipients` | string | Comma separated emails to send pixel integration to |
| `emailSubject` | string | Subject of email | 
| `emailText` | string | Text of email | 

\
Request Sample 

```json
{
    "conversionId": "3114",
    "recipients": "username@gmail.com,anotherUser@yahoo.com",
    "emailSubject": "Integrate Pixel Conversion",
    "emailText": "Hello ${userName} has sent you a pixel code to integrate. Please follow the steps below to integrate the pixel code."
}
```

Response 200

```json
{
    "success": true,
    "data": "Pixel conversion e-mail sent successfully."
}
```

## Get More Conversion Details

This section covers the methods and endpoints for getting more details and static lists about conversions. 

### Get List of Partner Types for Postback Conversions

Get list of partner details for postback converisions like logo and name with the folowing endpoint:

* `GET` /api/v3/conversion/static/postback/partner-type

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
|`searchField` | string | Search results by keyword |
| `partnerTypeIds` | string | Filters by partner type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "Kochava",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/kochava.com",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "Singular",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/singular.net",
                "order": 2,
                "active": true
            },
            {
                "id": 3,
                "name": "Appsflyer",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/appsflyer.com",
                "order": 3,
                "active": true
            },
            {
                "id": 4,
                "name": "Adjust",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/adjust.com",
                "order": 4,
                "active": true
            }
        ],
        "totalRecords": 4,
        "filteredRecords": 4
    }
}
```

### Get List of Pixel Conversion Advanced Setting Default Values

Get a list and details about default values of advanced settings for pixel based conversions with the following endpoint: 

* `GET` /api/v3/conversion/static/pixel/conversion-default-advanced-setting-data

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
        {
            "id": 1,
            "name": "post_click_interval",
            "displayName": "Post Click Interval",
            "value": "15",
            "active": true
        },
        {
            "id": 2,
            "name": "post_view_interval",
            "displayName": "Post View Interval",
            "value": "28",
            "active": true
        },
        {
            "id": 3,
            "name": "cross_device",
            "displayName": "Cross Device",
            "value": "true",
            "active": true
        }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

### Get List of Conversion Types

Get a list and details of conversion types with the following endpoint:

* `GET` /api/v3/conversion/static/conversion-type

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
|`searchField` | string | Search results by keyword |
| `conversionTypeIds` | string | Filters by conversion type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "pixel",
                "displayName": "Pixel",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "postback",
                "displayName": "Postback",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get List of Conversion Status

Get a list of conversion status with the following endpoint:

* `GET` /api/v3/conversion/static/conversion-status

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
|`searchField` | string | Search results by keyword |
| `statusIds` | string | Filters by status type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "active",
                "displayName": "Active",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "pending",
                "displayName": "Pending",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get List of Conversion Piggyback Types

<a id="piggybackType"></a>
Get a list of conversion piggyback types with the following endpoint:

* `GET` /api/v3/conversion/static/conversion-piggyback-type

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
|`searchField` | string | Search results by keyword |
| `piggybackTypeIds` | string | Filters by piggyback type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "image_pixel",
                "displayName": "Image Pixel",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "javascript_pixel",
                "displayName": "Javascript Pixel",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get List of Conversion Attribute Types

<a id="attributionTypes"></a>
Get a list of conversion attribute types with the following endpoint:

* `GET` /api/v3/conversion/static/conversion-attribution-type

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
|`searchField` | string | Search results by keyword |
| `attributionTypeIds` | string | Filters by attribution type IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "hybrid",
                "displayName": "Hybrid",
                "order": 1,
                "description": "Hybrid attribution combines both click-based and view-based methods to assign credit for a conversion either to an ad that was last clicked or to an ad that was last viewed.",
                "active": true
            },
            {
                "id": 3,
                "name": "view_based",
                "displayName": "View Based",
                "order": 2,
                "description": "View-based attribution gives credit to an ad that a user saw, but did not necessarily interact with, before making a conversion.",
                "active": true
            },
            {
                "id": 2,
                "name": "click_based",
                "displayName": "Click Based",
                "order": 3,
                "description": "Click-based attribution assigns credit for a conversion to the last ad that a user clicked on before making a purchase or taking an action.",
                "active": true
            }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

