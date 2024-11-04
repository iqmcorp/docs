# Bid Model API

The Bid Model API allows users to optimize their advertising campaigns for better performance. The user can fine-tune metrics such as where their ads appear (Include/Exclude), campaign priority management, and dimensions by which a campaign is subdivided.

This page will cover the common endpoints and methods associated with the Bid Model API.

## Authorization

---

<div class="container">
<div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Include/Exclude Management

<br /><span class="badge badge--success">POST</span> <span class="path-text">/api/v2/cmp/deviceType/includeExclude</span>
<br /><span class="badge badge--success">POST</span> <span class="path-text">/api/v2/cmp/exchange/includeExclude</span>
<br /><span class="badge badge--success">POST</span> <span class="path-text">/api/v2/cmp/trafficsource/includeExclude</span>

<div class="container">
  <div class="child1">

The **Include** and **Exclude** options allow the user to control where their ads appear.

| Attributes                                                                             |                                                                                                                       |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <span class="code-text">ids</span> <br /><span class="type-text">string</span>         | ID of entity                                                                                                          |
| <span class="code-text">isExcluded</span> <br /><span class="type-text">integer</span> | Allow targeted entity: <span class="code-text">0</span> <br />Block targeted entity: <span class="code-text">1</span> |
| <span class="code-text">campaignId</span> <br /><span class="type-text">integer</span> | Campaign ID                                                                                                           |

</div>
  <div class="child2">

```json title="Request Sample"
{
  "ids": "15",
  "isExcluded": 0,
  "campaignId": 214269
}
```

```json title="Response 200 (device type)"
{
  "statusCode": 200,
  "responseObject": {
    "message": "The Device Types have been allowed."
  }
}
```

</div></div>

---

### Include/Exclude Entities From a Campaign

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/bm/campaigns/{campaignId}/include-Exclude/dimensions/{dimensionId}</span>

<div class="container">
  <div class="child1">

Optimize a campaign by updating the status of specified entities to be either included or excluded with path parameters <span class="code-text">campaignId</span> and <span class="code-text">dimensionId`</span>

| Path                                                                                    |                        |
| --------------------------------------------------------------------------------------- | ---------------------- |
| <span class="code-text">campaignId</span> <br /><span class="type-text">integer</span>  | Unique ID of campaign  |
| <span class="code-text">dimensionId</span> <br /><span class="type-text">integer</span> | Unique ID of dimension |

| Attributes                                                                              |                                                                                                    |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span class="code-text">advertiserId</span><br /><span class="type-text">integer</span> | Unique ID of advertiser                                                                            |
| <span class="code-text">dspId</span> <br /><span class="type-text">integer</span>       | Demand Side Platform ID                                                                            |
| <span class="code-text">owId</span> <br /><span class="type-text">integer</span>        | Organization workspace ID                                                                          |
| <span class="code-text">uowId</span> <br /><span class="type-text">integer</span>       | User organization workspace ID                                                                     |
| <span class="code-text">campaignId</span> <br /><span class="type-text">integer</span>  | Unique ID of campaign                                                                              |
| <span class="code-text">ids</span> <br /><span class="type-text">string</span>          | Creative ID                                                                                        |
| <span class="code-text">isExcluded</span> <br /><span class="type-text">integer</span>  | Target entity:<span class="code-text">0</span> <br />Block entity:<span class="code-text">1</span> |

</div>
  <div class="child2">

```json title="Request Sample (creatives)"
{
  "ids": "604675,604084",
  "isExcluded": 0
}
```

```json title="Response 200 (creatives)"
{
  "success": true,
  "data": "Creatives successfully targeted for the campaign."
}
```

</div></div>

---

## Campaign Priority Management

<span class="badge badge--warning">PUT</span> <span class="path-text">/api/v3/bm/io/{ioId}/bid-models</span>

<div class="container">
  <div class="child1">

Assigning priority to campaigns allows the user to establish a sequential order of bidding to fine-tune their targeting strategy. Assign priority (ranging 1 to 10) to multiple <span class="code-text">campaignId</span>.

| Path                                                                             |                    |
| -------------------------------------------------------------------------------- | ------------------ |
| <span class="code-text">ioId</span> <br /><span class="type-text">integer</span> | Insertion Order ID |

| Attributes                                                                                                                                   |                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <span class="code-text">addPriority</span> <br /><span class="type-text">object</span>                                                       | Assign new priority to one or multiple campaigns                                           |
| <span class="code-text">updatePriority</span> <br /><span class="type-text">object</span>                                                    | Update assigned priority to one or multiple campaigns                                      |
| <span class="code-text">deletePriority</span> <br /><span class="type-text">object</span>                                                    | Deletes assigned priority from one or multiple campaigns                                   |
| <span class="code-text">priority</span> <br /><span class="type-text">integer</span> <span class="required-text">required</span>             | Assigned priority: [<span class="code-text">1</span> .. <span class="code-text">10</span>] |
| <span class="code-text">campaignIds</span><br /><span class="type-text">array of integers</span> <span class="required-text">required</span> | Campaign IDs                                                                               |

</div>
  <div class="child2">

```json title="Request Sample"
{
  "addPriority": {
    "campaignIds": [465913, 453423],
    "priority": 9
  },
  "updatePriority": {
    "campaignIds": [465925],
    "priority": 9
  },
  "deletePriority": {
    "campaignIds": [465464, 434232]
  }
}
```

```json title="Response 200"
{
  "success": true,
  "data": "Priority Updated Successfully"
}
```

<details>
<summary>More Responses</summary>

```json title="Respone 403"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Forbidden!"
    }
  ]
}
```

```json title="Response 422"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Cannot assign priority as campaign is in invalid status"
    }
  ]
}
```

```json title="Response 500"
{
  "success": false,
  "errorObjects": [
    {
      "error": "server encountered an error !"
    }
  ]
}
```

</details></div></div>

---

### Further Campaign Priority Management

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/bm/io/{ioId}/bid-models</span>
<br /><span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/bm/io/{ioId}/bid-models</span>
<br /><span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/bm/io/{ioId}/bid-models</span>

<div class="container">
  <div class="child1">

Add, update, or delete assigned priorities to multiple campaigns.

| Path                                                                             |                    |
| -------------------------------------------------------------------------------- | ------------------ |
| <span class="code-text">ioId</span> <br /><span class="type-text">integer</span> | Insertion Order ID |

| Attributes                                                                                                                                    |                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <span class="code-text">priority</span> <br /><span class="type-text">integer</span> <span class="required-text">required</span>              | Assigned priority: [<span class="code-text">1</span> .. <span class="code-text">10</span>] |
| <span class="code-text">campaignIds</span> <br /><span class="type-text">array of integers</span> <span class="required-text">required</span> | Campaign IDs                                                                               |

</div>
<div class="child2">

```json title="Request Sample"
{
  "priority": 1,
  "campaignIdList": [123456, 234567, 345678, 456789]
}
```

```json title="response 200"
{
  "success": true,
  "data": "Priority Updated Successfully"
}
```

</div></div>

---

## Get Metrics Report For a Given Campaign and Dimension

<span class="badge badge--success">POST</span> <span class="path-text">api/v3/bm/campaigns/{campaignId}/reports/{dimensionId}</span>

<div class="container">
  <div class="child1">

Generate a detailed metrics for a specific campaign, segmented by dimension.

<table>
    <th>Path parameters</th>
    <tr>
        <td>
            <span class="code-text">campaignId</span><br /><span class="type-text">integer</span> <span class="required-text">required</span>
        </td>
        <td>
            Campaign ID
        </td>
    </tr>
    <tr>
        <td>
            <span class="code-text">dimensionId</span><br /><span class="type-text">integer</span> <span class="required-text">required</span>
            </td>
        <td>
            Dimension ID
        <td>
</table>

<table>
    <th>Query parameter</th>
    <tr>
        <td>
            <span class="code-text">searchField</span><br /><span class="type-text">string</span>
        </td>
        <td>
            Search results by keyword
        </td>
    </tr>
        <tr>
        <td>
            <span class="code-text">sortBy</span><br /><span class="type-text">string</span>
        </td>
        <td>
            Sorts by ascending (<span class="code-text">+</span>) or descending (<span class="code-text">-</span>) <br />Default: <span class="code-text">"-impressions"</span>
        </td>
    </tr>
        <tr>
        <td>
            <span class="code-text">pageNo</span><br /><span class="type-text">integer</span>
        </td>
        <td>
            Page number for the data <br />Default: <span class="code-text">1</span>
        </td>
    </tr>
        <tr>
        <td>
            <span class="code-text">pageSize</span><br /><span class="type-text">integer</span>
        </td>
        <td>
            Maximum number of results returned <br />Default: <span class="code-text">50</span>
        </td>
    </tr>
        <tr>
        <td>
            <span class="code-text">timeZoneId</span><br /><span class="type-text">integer</span>
        </td>
        <td>
            Timezone ID
        </td>
    </tr>
           <tr>
        <td>
            <span class="code-text">startDate</span><br /><span class="type-text">integer</span>
        </td>
        <td>
            Unix epoch timestamp of campaign start date, in milliseconds
        </td>
    </tr>
           <tr>
        <td>
            <span class="code-text">endDate</span><br /><span class="type-text">integer</span>
        </td>
        <td>
             Unix epoch timestamp of campaign start date, in milliseconds
        </td>
    </tr>
</table>

<table>
  <th>Request Attributes</th>
    <tr>
    <td><span class="code-text">fileName</span><br /><span class="type-text">string</span></td>
    <td>File name</td>
  </tr>
    <tr>
    <td><span class="code-text">columns</span><br /><span class="type-text">object</span>
    </td>  
    <td>Object containing <span class="code-text">label</span> and <span class="code-text">value</span></td>
    </tr>
    <tr>
    <td><span class="code-text">label</span><br /><span class="type-text">string</span></td>
    <td>Serves as the header row in the downloaded CSV/XLSX file, each label corresponds to a data field, displayed as the column header in the file</td>
  </tr>
    <tr>
    <td><span class="code-text">value</span><br /><span class="type-text">string</span></td>
    <td>Represents the data key used to retrieve values from the result map sourced from the database, ensures each column in the CSV/XLSX file accurately reflects the relevant data, with applied formatting and time-zone adjustments as needed</td>
  </tr>
    <tr>
    <td><span class="code-text">fileType</span><br /><span class="type-text">string</span></td>
    <td>File type ID</td>
  </tr>
    <tr>
    <td><span class="code-text">token</span><br /><span class="type-text">string</span></td>
    <td>Access token</td>
  </tr>
    <tr>
    <td><span class="code-text">download</span><br /><span class="type-text">boolean</span></td>
    <td>Generate download URL: <span class="code-text">true</span> </td>
  </tr>
</table>

</div>
<div class="child2">

```json title="Request Sample"
{
  "name": "Nisha T",
  "fileName": "Stage Shared Advertiser_deal_id_1708536470049",
  "activeTable": "deal_id",
  "columns": [
    {
      "label": "Deal ID",
      "value": "name"
    },
    {
      "label": "eCPM($)",
      "value": "eCPM"
    }
  ],
  "calledApp": "bidModel",
  "fileType": "csv",
  "token": "fd5b502b-3c49-4703-83d9-df1b397011a2",
  "download": true
}
```

```json title="Response 200"
{
  "success": true,
  "data": {
    "url": "DownloadURL"
  }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 403"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Forbidden!"
    }
  ]
}
```

```json title="Response 422"
{
  "success": false,
  "errorObjects": [
    {
      "error": "The campaign ID is missing or invalid. Please provide a valid campaign ID."
    }
  ]
}
```

```json title="Response 500"
{
  "success": false,
  "errorObjects": [
    {
      "error": "server encountered an error !"
    }
  ]
}
```

</details></div></div>

---

## Get List of Bid Model Dimensions


<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/bm/static/dimensions</span>

<div class="container">
  <div class="child1">

This API will provide values of bid-model dimensions and sub-dimensions.

### Resource Properties

| Attributes      |     |
| ------- | ------------------ |
| <span class="code-text">1</span>  | Creative          |
| <span class="code-text">2</span>   | Inventory        |
| <span class="code-text">3</span> | Deal ID          |
|<span class="code-text">4</span> | Open Exchange     |
| <span class="code-text">5</span> | Publisher Category |
| <span class="code-text">6</span>   | Device             |
| <span class="code-text">7</span> | Traffic Type       |
| <span class="code-text">8</span> | Device Type       |
| <span class="code-text">9</span>   | Location           |
| <span class="code-text">10</span>| State              |
| <span class="code-text">11</span> | City               |
| <span class="code-text">12</span> | Zip                |
|<span class="code-text">13</span>   | Exchange        |

</div>
 <div class="child2">


```json title="Response 200"
{
  "success": true,
  "data": {
    "totalRecords": 5,
    "filteredRecords": 5,
    "dimensions": [
      {
        "name": "creative",
        "id": 1,
        "label": "Creative",
        "order": 1,
        "modellingEnabled": true
      },
      {
        "name": "inventory",
        "id": 2,
        "label": "Inventory",
        "order": 2,
        "modellingEnabled": false,
        "subdimensions": [
          {
            "name": "deal_id",
            "id": 3,
            "label": "Deal ID",
            "order": 1,
            "modellingEnabled": false
          },
          {
            "name": "open_exchange",
            "id": 4,
            "label": "Open Exchange",
            "order": 2,
            "modellingEnabled": false
          },
          {
            "name": "publisher_category",
            "id": 5,
            "label": "Publisher Category",
            "order": 3,
            "modellingEnabled": false
          }
        ]
      },
      {
        "name": "device",
        "id": 6,
        "label": "Device",
        "order": 3,
        "modellingEnabled": false,
        "subdimensions": [
          {
            "name": "traffic_type",
            "id": 7,
            "label": "Traffic Type",
            "order": 1,
            "modellingEnabled": false
          },
          {
            "name": "device_type",
            "id": 8,
            "label": "Device Type",
            "order": 2,
            "modellingEnabled": false
          }
        ]
      },
      {
        "name": "location",
        "id": 9,
        "label": "Location",
        "order": 4,
        "modellingEnabled": false,
        "subdimensions": [
          {
            "name": "state",
            "id": 10,
            "label": "State",
            "order": 1,
            "modellingEnabled": false
          },
          {
            "name": "city",
            "id": 11,
            "label": "City",
            "order": 2,
            "modellingEnabled": false
          },
          {
            "name": "zip",
            "id": 12,
            "label": "Zip",
            "order": 3,
            "modellingEnabled": false
          }
        ]
      },
      {
        "name": "exchange",
        "id": 13,
        "label": "Exchange",
        "order": 5,
        "modellingEnabled": false
      }
    ]
  }
}
```

</div></div>

---

## Get Campaign Dimension Counts

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/bm/campaigns/{camapaignId}/dimensions/count</span>

<div class="container">
  <div class="child1">

Retrieves counts of dimensions for a specific campaign within a given date range.

\
**Path Parameters**

| Path Parameters     |                                               |
| ------------ | ------------------------------------------------------- |
| <span class="code-text">campaignId</span> <br /><span class="type-text">integer</span> <span class="required-text">required</span> | The campaign ID for which the report is being generated |

\
**Query Parameters**

| Query Parameters  |                                                    |
| ----------- | -------------------------------------------------------------- |
| <span class="code-text">startDate</span> <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) for campaign start date |
| <span class="code-text">endDate</span>   <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) for campaign end date   |                                                                             |


</div><div class="child2">


```json title="Response 200"
{
  "success": true,
  "data": {
    "creative": 2,
    "dealId": 0,
    "openExchange": 0,
    "publisherCategory": 0,
    "trafficType": 2,
    "deviceType": 4,
    "state": 0,
    "city": 0,
    "zip": 0,
    "exchange": 18
  }
}
```

<details>
<summary>More Responses</summary>


```json title="Response 400"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Missing required parameter: 'startDate'. Type: long",
      "field": "startDate"
    }
  ]
}
```

```json title="Response 403"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Forbidden!"
    }
  ]
}
```

```json title="Response 422"
{
  "success": false,
  "errorObjects": [
    {
      "error": "No campaign found with given campaign Id"
    }
  ]
}
```

```json title="Respone 500"
{
  "success": false,
  "errorObjects": [
    {
      "error": "server encountered an error !"
    }
  ]
}
```

</details></div></div>
