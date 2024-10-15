# Assets Guidelines

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Assets Details

### Get a List of All Assets

Get a list of all assets with the following endpoint:

* `GET` /api/v3/asset/list

\
Response 200

```json
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

### Get Asset Details

Get details of a single asset with the following endpoint:

* `GET` /api/v3/asset/{assetId}

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `assetIds` | integer | Asset ID |

\
Response 200

```json
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

## Assets Management

### Add Multiple Assets

Add multiple assets to the system. The following endpoints accepts an array of multipart file objects and their corresponding metadata:

* `POST` /api/v3/asset

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `filesMetaData` | string | Json string representing the metadata associated with the files |
| `files` | string | 

\
Response 200

```json
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

### Update Asset Details

Update the details of an existing asset with the following endpoint:

* `PATCH` /api/v3/asset/{assetId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `assetId` | integer | Asset ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `storagePath` | string |
| `cdnUrl` | string | Asset CDN URL |
| `disposable` | boolean |

\
Request Sample

```json
{
    "storagePath": "string",
    "cdnUrl": "string",
    "disposable": true
}
```

Response 200

```json
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

### Delete Asset

Delete single asset by ID with the following endpoint:

* `DELETE` /api/v3/asset/{assetId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `assetId` | integer | Asset ID |

\
Response 200

```json
{
    "success": true,
    "data": "Asset deleted successfully."
}
```
