# Master API Guidelines

The master API uses the same Header Parameters for all endpoints:

\
**Header Parameter**

| Property | Type | Description |
| --- | --- | --- |
| `Authorization` | string [required] | Authorization Bearer Token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

## Get Geographical Data

For the following endpoints the same request body schema (shown below) can be used to retrieve paginated lists of geographical data based on provided filters:

| Method/Endpoint | Path | Description |
| --- | --- | --- |
| `POST` /api/v3/master/segment | /zip | Get zip codes with state IDs |
| | /state | Gets state segment |
| | /senate-district | Gets senate district segment |
| | /house-district | Gets house district segment |
| | /gender | Gets gender segment |
| | /dma | Gets DMA code segment |
| | /county | Gets county segment |
| | /country | Gets country segment |
| | /congressional-district | Gets congressional districts |
| | /city | Gets city segment |

\
**Request Body Schema: application/json**

| Property | Type | Description |
|---|---|---|
| `pageNo` [required] | integer | Page number for the required data, deafult: `1` |
| `noOfEntries` [required] | integer | The maximum number of returned results per page, default: `300` |
| `sortBy` [optional] | string | Sort the result set by specific field. For ascending use plus(+) sign and for descending use minus(-) sign, default: `-id` |
| `searchField` [optional] | string | Search the result by provided keyword in the `searchField`, search country records by `name` |
| `campaignId` [optional] | integer | Country records associated with the provided campaign will be returned first, prioritized over other country records |
| `ids` [optional] | array of Integers | Selected country ID List, countries with provided ids will be returned first compared to other records |
| `segmentIds` [optional] | array of Integers | country list filter by country IDs |

\
Request Sample

```json
{
    "pageNo": 1,
    "noOfEntries": 2,
    "sortBy": "+id",
    "searchField": "",
    "segmentIds": [],
    "ids": []
}
```

\
Response 200 Sample (country list)

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 30100001,
                "name": "United States",
                "abbreviation": "US"
            },
            {
                "id": 30100002,
                "name": "India"
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get Location Types

Get a list of location types with the following endpoint:

* `GET` /api/v3/master/segment/locationtype

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "id": 302,
            "name": "State",
            "order": 1
        },
        {
            "id": 309,
            "name": "DMA",
            "order": 2
        },
        {
            "id": 303,
            "name": "County",
            "order": 3
        },
        {
            "id": 304,
            "name": "City",
            "order": 4
        },
        {
            "id": 306,
            "name": "Congressional District",
            "order": 5
        },
        {
            "id": 307,
            "name": "State Senate",
            "order": 6
        },
        {
            "id": 308,
            "name": "State House",
            "order": 7
        }
    ]
}
```

### Get Location Details by Location Type

Get location details by location type and search filters with the following endpoint:

* `GET` /api/v3/master/segment/locationtype-details

\
**Query Parameters**

| Field | Type | Description |
|---|---|---|
| `searchField` | string | Search the result by keyword |
| `locationTypeIds` | string | Filters result by location type IDs, comma separated |

\
Response 200 Sample

```json
{
    "success": true,
    "data": {
        "302": [
            {
                "id": 30200038,
                "name": "Oregon",
                "abbreviation": "OR",
                "parentId": 30100001,
                "geojsonUrl": "https://d3jme5si7t6llb.cloudfront.net/statedata/OR.geojson"
            }
        ],
        "303": [
            {
                "id": 30320708,
                "name": "Baker, OR",
                "parentId": 30200038,
                "geojsonUrl": "https://d3jme5si7t6llb.cloudfront.net/countydata/US/OR/geojson/30320708.geojson"
            }
            {
                "id": 30320709,
                "name": "Benton, OR",
                "parentId": 30200038,
                "geojsonUrl": "https://d3jme5si7t6llb.cloudfront.net/countydata/US/OR/geojson/30320709.geojson"
            }
            ...
        ]
    }
}        
```

<details>
<summary>More Responses</summary>

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
        "error": "Invalid location type ids"
        }
    ]
}
```

</details>

### Get Time Zones

Get a static list of time zones with the following endpoint:

* `GET` /api/v3/master/timezones

\
Response 200 Sample

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "name": "US/Central",
                "id": 423,
                "label": "US/Central"
            },
            {
                "name": "US/Eastern",
                "id": 29,
                "label": "US/Eastern"
            },
            {
                "name": "US/Mountain",
                "id": 21,
                "label": "US/Mountain"
            }
            ...
        ]
    }
}
```

### Get Carriers and States by Country ID

Get a list of carriers or states by country ID with the following endpoints:

* `GET` /api/countries/{country_id}/carriers
* `GET` /api/countries/{country_id}/states

\
**Path Parameters**

| Property | Type | Description |
|---|---|---|
| `country_id` | string | Country ID

\
Sample Response 200 (carriers)

```json
[
    {
        "id": 292,
        "name": "AT&T Mobility",
        "country_id": 246
    },
    {
        "id": 293,
        "name": "AT&T WiFi",
        "country_id": 246
    },
    {
        "id": 294,
        "name": "Cable Vision WiFi",
        "country_id": 246
    }
    ...
]
```

## Get Creative Data

The following endpoints can be used to get details and specs on various Creative properties and lists (most support paginated query parameters):

| Method/Endpoint | Path | Description |
| --- | --- | --- |
| `GET` api/v3/master | /static/creative-types | Gets creative types |
|| /rtb-creative-types | Gets RTB creative types |
|| /creative-sizes | Gets creative sizes, including `standardDimensions`, `creativeDimensions`, and `videoPlayerSizes` |
|| /creative/video/skippability | Gets video skip ability parameters |
|| /creative/video/roll-position | Gets video roll-position parameters |
|| /creative/video/player-size | Gets video player-size parameters |
|| /creative/video/playback-method | Gets video playback-method parameters |
|| /creative/video/placement-type | Gets video placement-type parameters |


\
**Query Parameters**

| Property | Type | Description |
|---|---|---|
| `pageNo` [required] | integer | Page number for the required data, deafult: `1` |
| `limit` [required] | integer | The maximum number of returned results per page, default: `300` |
| `sortBy` [optional] | string | Sort the result set by specific field. For ascending use plus(+) sign and for descending use minus(-) sign, default: `+id` |
| `searchField` [optional] | string | Search the result by provided keyword in the `searchField`, search country records by `name` |
| `ids` [optional] | array of Integers | Selected country ID List, countries with provided ids will be returned first compared to other records |
| `segmentIds` [optional] | array of Integers | Filters for property segment IDs |

\
Response 200 Sample (video skippability)

```json
{
    "success": true,
    "data": {
        "data": [
        {
            "id": 20900001,
            "name": "Skippable"
        },
        {
            "id": 20900002,
            "name": "Non-Skippable"
        },
        {
            "id": 20999999,
            "name": "Unknown"
        }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

## Get More Data

The following endpoints can be used to get lists of various data:

| Method/Endpoint | Path | Description |
| --- | --- | --- |
| `GET` /api | /network_types | Gets network types for targeting |
| | /device_os | Gets Device OS for targeting |
| | /manufacturers | Gets manufacturers for targeting |
|`GET` /api/v3/master | /segment/channel | Gets channels for the inventory app |
|| /timezones | Gets timezones |
|| /verticals/list | Gets values of verticals |
|| /segment/channel | Gets channels for the inventory app |
|| /inventory-types | Gets inventory types with ID and name |
|| /exchanges | Gets exchanges. Optional query parameters:<br>`exchangeIds`: Filters for provided exchange IDs<br>`ids`: Filters for provided exchange IDs, followed by other matching records<br>`pageNo`: Page number for returned data, default: `1`<br>`noOfEnries`: Maximum number of returned results per page<br>`sortBy`: Sort the results by specific field<br> `order`: Sorting order, supported values: `asc` or `desc`, default: `asc`<br>`searchField`: Search the result by provided keyword |
|| /deal-curation-type | Gets deal curation types |
|`POST` /api/v3/master | /adcategories | Gets publisher ad categories. <br>Optional request body value: `adCategoryIds`, see next section for full schema |
|| /segment/dma | Gets paginated list of DMA code segment based on provided filters. Optional request body values: <br>`searchField` supported values: `name` or `abbreviation` <br>`parentSegmentIds` [array of integers]: Filters for DMA code based on associated state ID <br>`segmentIds` [array of integers]: Filters for DMA codes IDs<br>See following section for full schema |
|| /segment/device-type | Gets device types based on provided filters<br>Optional request body values: <br>`segmentIds` [array of integers]: Filters by device type IDs <br>See following section for full schema |
|| /inventory | Gets inventory. Optional request body values: <br>`publisherIds` [array of integers]: Filters for publisher IDs <br>`inventoryIds` [array of integers]: Filters for inventory IDs <br>See following section for full schema |

\
**Request Body Schema: application/json** [required]

For paginated list `POST` method endpoints

| Property | Type | Description |
| --- | --- | --- |
| `pageNo` | integer [required] | Page number for returned data, default: `1` |
| `noOfEntries` | integer [required] | Maximum number of returned results per page |
| `sortBy` | string [optional] | Sort the results by specific field. For ascending use plus(+) sign(ascii value '%2B') and for descending use minus(-) sign. Default value: `-id` |
| `searchField` | string [optional] | Search the result by provided keyword |
| `ids` | array of integers [optional] | Filter for specified IDs, matches will be returned first compared to other records |

\
Response 200 Sample (exchanges)

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 89,
                "name": "LoopMe",
                "urlName": "loopme"
            },
            {
                "id": 88,
                "name": "One Tag",
                "urlName": "onetag"
            },
            {
                "id": 87,
                "name": "Share Through",
                "urlName": "sharethrough"
            }
            ...
        ]
    }
}
```