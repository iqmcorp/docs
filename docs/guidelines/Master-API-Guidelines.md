# Master API

The master API uses the same Header Parameters for all endpoints:

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Get Geographical Data

For the following endpoints the same request body schema (shown below) can be used to retrieve paginated lists of geographical data based on provided filters:

| Method | Path | Description |
| --- | --- | --- |
| <span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/zip</span> | Get zip codes with state IDs |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/state</span>  | Gets state segment |
| <span class="badge badge--success">POST</span>| <span class="path-text">/api/v3/master/segment/senate-district</span>  | Gets senate district segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/house-district</span>  | Gets house district segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/gender</span>  | Gets gender segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/dma</span>  | Gets DMA code segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/county</span>  | Gets county segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/country</span>  | Gets country segment |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/segment/congressional-district</span>  | Gets congressional districts |
|<span class="badge badge--success">POST</span> |<span class="path-text">/api/v3/master/segment/city</span>  | Gets city segment |

<div class="container">
  <div class="child1">

| Request Schema |  |
|---|---|
| `pageNo` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Page number for the required data, deafult: `1` |
| `noOfEntries` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | The maximum number of returned results per page, default: `300` |
| `sortBy`<br /><span class="type-text">string</span> <span class="required-text">optional</span> | Sort the result set by specific field. For ascending use plus(+) sign and for descending use minus(-) sign, default: `-id` |
| `searchField`<br /><span class="type-text">string</span>  <span class="required-text">optional</span> | Search the result by provided keyword in the `searchField`, search country records by `name` |
| `campaignId` <br /><span class="type-text">integer</span>  <span class="required-text">optional</span> | Country records associated with the provided campaign will be returned first, prioritized over other country records |
| `ids`<br /><span class="type-text">array of integers</span>  <span class="required-text">optional</span> | Selected country ID List, countries with provided ids will be returned first compared to other records |
| `segmentIds`<br /><span class="type-text">array of integers</span>  <span class="required-text">optional</span> | country list filter by country IDs |

</div><div class="child2">

```json title="Request Sample"
{
    "pageNo": 1,
    "noOfEntries": 2,
    "sortBy": "+id",
    "searchField": "",
    "segmentIds": [],
    "ids": []
}
```

```json title="Response 200 (country list)
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

</div></div>

---

### Get Location Types

<span class="badge badge--primary">GET</span> <span class="path-text">pa/api/v3/master/segment/locationtypeth</span>

<div class="container">
  <div class="child1">

Get a list of location types.

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Get Location Details by Location Type

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/master/segment/locationtype-details</span>

<div class="container">
  <div class="child1">

Get location details by location type and search filters.

| Query Parameters  |  |
|---|---|
| `searchField` <br /><span class="type-text">string</span> | Search the result by keyword |
| `locationTypeIds` <br /><span class="type-text">string</span> | Filters result by location type IDs, comma separated |

</div><div class="child2">

```json title="Response 200"
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

```json title="Response 422"
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

</div></div>

---

### Get Time Zones

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/master/timezones</span>

<div class="container">
  <div class="child1">

Get a static list of time zones IDs.

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

### Get Carriers and States by Country ID
 
<span class="badge badge--primary">GET</span> <span class="path-text">/api/countries/{country_id}/carriers</span>
<br /><span class="badge badge--primary">GET</span> <span class="path-text">/api/countries/{country_id}/states</span>

<div class="container">
  <div class="child1">

Get a list of carriers or states by country ID.

| Path Parameters | |
|---|---|
| `country_id` <br /><span class="type-text">string</span> | Country ID

</div><div class="child2">

```json title="Response 200 (carriers)"
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
  },
  {
    "id": 295,
    "name": "Cellular One",
    "country_id": 246
  },
  {
    "id": 296,
    "name": "Cellular South",
    "country_id": 246
  },
  {
    "id": 297,
    "name": "Charter WiFi",
    "country_id": 246
  },
  {
    "id": 298,
    "name": "Cincinnati Bell US",
    "country_id": 246
  },
  {
    "id": 299,
    "name": "Cox Communications",
    "country_id": 246
  },
  {
    "id": 300,
    "name": "Cricket",
    "country_id": 246
  },
  {
    "id": 301,
    "name": "Earthlink",
    "country_id": 246
  },
  {
    "id": 302,
    "name": "Metro PCS",
    "country_id": 246
  },
  {
    "id": 303,
    "name": "Nextel",
    "country_id": 246
  },
  {
    "id": 304,
    "name": "Qwest WiFi",
    "country_id": 246
  },
  {
    "id": 305,
    "name": "Qwest Wireless",
    "country_id": 246
  },
  {
    "id": 306,
    "name": "Sprint WiFi",
    "country_id": 246
  },
  {
    "id": 307,
    "name": "Sprint Wireless",
    "country_id": 246
  },
  {
    "id": 308,
    "name": "T-Mobile",
    "country_id": 246
  },
  {
    "id": 309,
    "name": "TracFone",
    "country_id": 246
  },
  {
    "id": 310,
    "name": "U.S. Cellular",
    "country_id": 246
  },
  {
    "id": 311,
    "name": "Verizon WiFi",
    "country_id": 246
  },
  {
    "id": 312,
    "name": "Verizon Wireless",
    "country_id": 246
  },
  {
    "id": 313,
    "name": "XO Communications",
    "country_id": 246
  },
  {
    "id": 346,
    "name": "Alaska Communications System",
    "country_id": 246
  },
  {
    "id": 349,
    "name": "ALLTEL Corporation",
    "country_id": 246
  },
  {
    "id": 352,
    "name": "BATELCO",
    "country_id": 246
  },
  {
    "id": 353,
    "name": "Bell Mobility",
    "country_id": 246
  },
  {
    "id": 355,
    "name": "Bluegrass Cellular",
    "country_id": 246
  },
  {
    "id": 358,
    "name": "Centennial",
    "country_id": 246
  },
  {
    "id": 361,
    "name": "Clearwire",
    "country_id": 246
  },
  {
    "id": 363,
    "name": "Dobson",
    "country_id": 246
  },
  {
    "id": 365,
    "name": "Essar",
    "country_id": 246
  },
  {
    "id": 400,
    "name": "Choice Phone LLC",
    "country_id": 246
  }
]
```

</div></div>

---

## Get Creative Data

The following endpoints can be used to get details and specs on various Creative properties and lists (most support paginated query parameters):

| Method | Path | Description |
| --- | --- | --- |
| <span class="badge badge--primary">GET</span>  | <span class="path-text">api/v3/master/static/creative-types</span> | Gets creative types |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/rtb-creative-types</span> | Gets RTB creative types |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative-sizes</span> | Gets creative sizes, including `standardDimensions`, `creativeDimensions`, and `videoPlayerSizes` |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative/video/skippability</span> | Gets video skip ability parameters |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative/video/roll-position</span> | Gets video roll-position parameters |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative/video/player-size</span> | Gets video player-size parameters |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative/video/playback-method</span> | Gets video playback-method parameters |
|<span class="badge badge--primary">GET</span>| <span class="path-text">api/v3/master/creative/video/placement-type</span> | Gets video placement-type parameters |

<div class="container">
  <div class="child1">

| Query Parameters |  |
|---|---|
| `pageNo` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Page number for the required data, deafult: `1` |
| `limit` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | The maximum number of returned results per page, default: `300` |
| `sortBy` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Sort the result set by specific field. For ascending use plus(+) sign and for descending use minus(-) sign, default: `+id` |
| `searchField` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Search the result by provided keyword in the `searchField`, search country records by `name` |
| `ids` <br /><span class="type-text">array of integers</span> <span class="required-text">optional</span> | Selected country ID List, countries with provided ids will be returned first compared to other records |
| `segmentIds` <br /><span class="type-text">array of integers</span> <span class="required-text">optional</span> | Filters for property segment IDs |

</div><div class="child2">

```json title="Response 200 (video skippability)"
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

</div></div>

---

## Get More Data

The following endpoints can be used to get lists of various data:

| Method | Path | Description |
| --- | --- | --- |
| <span class="badge badge--primary">GET</span>  | <span class="path-text">/api/network_types</span> | Gets network types for targeting |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/device_os</span> | Gets Device OS for targeting |
|<span class="badge badge--primary">GET</span> | <span class="path-text">/api/manufacturers</span> | Gets manufacturers for targeting |
|<span class="badge badge--primary">GET</span>  | <span class="path-text">/api/v3/master/segment/channel</span> | Gets channels for the inventory app |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/timezones</span> | Gets timezones |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/verticals/list</span> | Gets values of verticals |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/segment/channel</span> | Gets channels for the inventory app |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/inventory-types</span> | Gets inventory types with ID and name |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/exchanges</span> | Gets exchanges. Optional query parameters:<br />`exchangeIds`: Filters for provided exchange IDs<br />`ids`: Filters for provided exchange IDs, followed by other matching records<br />`pageNo`: Page number for returned data, default: `1`<br />`noOfEnries`: Maximum number of returned results per page<br />`sortBy`: Sort the results by specific field<br /> `order`: Sorting order, supported values: `asc` or `desc`, default: `asc`<br />`searchField`: Search the result by provided keyword<br /> |
|<span class="badge badge--primary">GET</span>| <span class="path-text">/api/v3/master/deal-curation-type | Gets deal curation types |
|<span class="badge badge--success">POST</span> | <span class="path-text">/api/v3/master/adcategories</span> | Gets publisher ad categories. <br />Optional request body value: `adCategoryIds`, see next section for full schema<br /> |
|<span class="badge badge--success">POST</span>|<span class="path-text">/api/v3/master/segment/dma</span> | Gets paginated list of DMA code segment based on provided filters. Optional request body values: <br />`searchField` supported values: `name` or `abbreviation` <br />`parentSegmentIds` [array of integers]: Filters for DMA code based on associated state ID <br />`segmentIds` [array of integers]: Filters for DMA codes IDs<br />See following section for full schema |
|<span class="badge badge--success">POST</span>| <span class="path-text">/api/v3/master/segment/device-type</span> | Gets device types based on provided filters<br />Optional request body values: <br />`segmentIds` [array of integers]: Filters by device type IDs <br />See following section for full schema<br /> |
|<span class="badge badge--success">POST</span>| <span class="path-text">/api/v3/master/inventory</span> | Gets inventory. Optional request body values: <br />`publisherIds` [array of integers]: Filters for publisher IDs <br />`inventoryIds` [array of integers]: Filters for inventory IDs <br />See following section for full schema<br /> |

<div class="container">
  <div class="child1">

Request body <span class="required-text">REQUIRED</span> for paginated list `POST` method endpoints.

| Request Schema |  |
| --- | --- |
| `pageNo` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Page number for returned data, default: `1` |
| `noOfEntries` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Maximum number of returned results per page |
| `sortBy` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Sort the results by specific field. For ascending use plus(+) sign(ascii value '%2B') and for descending use minus(-) sign. Default value: `-id` |
| `searchField` <br /><span class="type-text">string</span>  <span class="required-text">optional</span> | Search the result by provided keyword |
| `ids` <br /><span class="type-text">array of integers</span>  <span class="required-text">optional</span> | Filter for specified IDs, matches will be returned first compared to other records |

</div><div class="child2">

```json title="Response 200 (exchanges)"
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

</div></div>