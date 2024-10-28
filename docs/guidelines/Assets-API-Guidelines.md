---
hide_table_of_contents: true
---

# Assets Guidelines

## Authorization

---

<div class="container">
<div class="child1">

<h4>Header Parameters</h4>

<table>
    <tr>
        <td><span class="code-text">Authorization</span> <br /><span class="type-text">string</span> <span class="required-text">required</span></td>
        <td>Authorization bearer token <br />See <a href="../Quickstart Guides/Authentication-Quickstart-Guide.md">Authentication Guide</a> </td>
    </tr>
    <tr>
        <td><span class="code-text">X-IAA-OW-ID</span> <br /><span class="type-text">integer</span> <span class="required-text">required</span></td>
        <td>Organization Workspace ID </td>
    </tr>
</table>

</div></div>

## Get Assets Details

---

### Get a List of All Assets

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/asset/list</span>

<div class="container">
<div class="child1">

<h4>Attributes</h4>

<table>
    <tr>
        <td>
            <span class="code-text">id</span> <br /><span class="type-text">integer</span>
        </td>
        <td>Asset ID
        </td>
    </tr>
        <tr>
        <td>
            <span class="code-text">storagePath</span> <br /><span class="type-text">string</span>
        </td>
        <td>File path of asset
        </td>
    </tr>
          <tr>
        <td>
            <span class="code-text">cdnUrl</span> <br /><span class="type-text">string</span>
        </td>
        <td>URL of asset
        </td>
    </tr>
          <tr>
        <td>
            <span class="code-text">created</span> <br /><span class="type-text">integer</span>
        </td>
        <td>Unix epoch timestamp of asset creation, in milliseconds
        </td>
    </tr>
          <tr>
        <td>
            <span class="code-text">modifiedDate</span> <br /><span class="type-text">string</span>
        </td>
        <td>Date asset modified
        </td>
    </tr>
          <tr>
        <td>
            <span class="code-text">disposable</span> <br /><span class="type-text">boolean</span>
        </td>
        <td>
        </td>
    </tr>
</table>

</div>
<div class="child2">

```json title="Response 200"
{
  "success": true,
  "data": [
    {
      "id": 1,
      "storagePath": "assets/201427/tfteBYO_1704204958735.jpg",
      "cdnUrl": "https://d3jme5si7t6llb.cloudfront.net/assets/201427/tfteBYO_1704204958735.jpg",
      "created": 1704204961147,
      "modifiedDate": "2024-01-02T14:16:08.726+0000",
      "disposable": false
    },
    {
      "id": 2,
      "storagePath": "assets/201427/b7c0tTw_1704204968864.jpg",
      "cdnUrl": "https://d3jme5si7t6llb.cloudfront.net/assets/201427/b7c0tTw_1704204968864.jpg",
      "created": 1704204971010,
      "modifiedDate": "2024-01-02T14:16:11.375+0000",
      "disposable": false
    },
    {
      "id": 3,
      "storagePath": "assets/201427/2mBGamD_1704205759807.jpg",
      "cdnUrl": "https://d3jme5si7t6llb.cloudfront.net/assets/201427/2mBGamD_1704205759807.jpg",
      "created": 1704205761106,
      "modifiedDate": "2024-01-02T08:59:21.508+0000",
      "disposable": false
    }
  ]
}
```

</div></div>

---

### Get Asset Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/asset/{assetId}</span>

<div class="container">
<div class="child1">

Get attributes of a single asset by ID

<h4>Query Parameters</h4>

<table>
    <tr>
        <td>
            <span class="code-text">assetId</span> <br /><span class="type-text">integer</span>
        </td>
        <td>Asset ID</td>
    </tr>
</table>
</div>

<div class="child2">

```json title="Response 200"
{
  "success": true,
  "data": {
    "id": 1,
    "storagePath": "new/path/to/asset.jpg",
    "cdnUrl": "https://cdn.example.com/new_asset.jpg",
    "created": 1704204961147,
    "modifiedDate": "2024-01-18T06:03:23.823+0000",
    "disposable": true
  }
}
```

</div></div>

## Assets Management

---

### Add Multiple Assets

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/asset</span>

<div class="container">
<div class="child1">

Add multiple assets to the system. Request accepts an array of multipart file objects and their corresponding metadata.

<h4>Query Parameters</h4>

<table>
    <tr>
        <td>
            <span class="code-text">filesMetaData</span> <br /><span class="type-text">string</span>
        </td>
        <td>JSON string representing the metadata associated with the files</td>
    </tr>
    <tr>
        <td>
            <span class="code-text">files</span> <br /><span class="type-text">string</span>
        </td>
        <td>Files to add</td>
    </tr>
</table>

</div>
<div class="child2">

```json title="Response 200"
{
  "success": true,
  "data": {
    "9d41a99a-9761-44cf-a3db-307a57b65795.jpg": {
      "assetID": 697,
      "assetCDNURL": "https://d3jme5si7t6llb.cloudfront.net/assets/201427/IHp2jMI_1704987233847.jpg"
    }
  }
}
```

</div></div>

---

### Update Asset Details

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/asset/{assetId}</span>

<div class="container">
<div class="child1">

Update the details of an existing asset by ID

<h4>Path Parameters</h4>

<table>
    <tr>
        <td>
            <span class="code-text">assetId</span> <br /><span class="type-text">integer</span>
        </td>
        <td>Asset ID
        </td>
    </tr>
</table>

<h4>Request Body Schema: application/json</h4>

<table>
    <tr>
        <td>
            <span class="code-text">storagePath</span> <br /><span class="type-text">string</span>
        </td>
        <td>File path of assset
        </td>
    </tr>
       <tr>
        <td>
            <span class="code-text">cdnUrl</span> <br /><span class="type-text">string</span>
        </td>
        <td>Asset CDN URL
        </td>
    </tr>
       <tr>
        <td>
            <span class="code-text">disposable</span> <br /><span class="type-text">boolean</span>
        </td>
        <td>
        </td>
    </tr>
</table>

</div>
<div class="child2">

```json title="Request Sample"
{
  "storagePath": "string",
  "cdnUrl": "string",
  "disposable": true
}
```

```json title="Response 200"
{
  "success": true,
  "data": {
    "statusCode": 200,
    "responseObject": {
      "message": "Asset updated successfully"
    }
  }
}
```

</div></div>

---

### Delete Asset

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/asset/{assetId}</span>

<div class="container">
<div class="child1">

Delete single asset by ID

<h4>Path Parameters</h4>

<table>
    <tr>
        <td>
            <span class="code-text">assetId</span> <br /><span class="type-text">integer</span>
        </td>
        <td>Asset ID
        </td>
    </tr>
</table>

</div>
<div class="child2">

```json title="Response 200"
{
  "success": true,
  "data": "Asset deleted successfully."
}
```

</div></div>
