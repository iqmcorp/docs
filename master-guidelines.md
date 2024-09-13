# Master API Guidelines

The master API uses the same Header Parameters for all endpoints:

\
Header Parameter

| Property | Type | Description
| --- | --- | --- |
| `Authorization` | string [required] | Authorization Bearer Token
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header

## Geographical Data Endpoints

For the following endpoints the same request body schema (shown below) can be used to retrieve lists of geographical data:

| Endpoint | Path | Description |
| --- | --- | --- |
| `POST` /api/v3/master/segment | /zip | Get the list of zip codes with state ids for given filters |
| | /state | Get a paginated list of state segment based on the provided filters |
| | /senate-district | Get a paginated list of senate district segment based on the provided filters |
| | /house-district | Get a paginated list of house district segment based on the provided filters |
| | /gender | Get a paginated list of gender segment based on the provided filters |
| | /dma | Get a paginated list of DMA code segment based on the provided filters |
| | /county | Get a paginated list of county segment based on the provided filters |
| | /country | Get a paginated list of country segment based on the provided filters
| | /congressional-district | Get a paginated list of congressional districts segment based on the provided filters |
| | /city | Get a paginated list of city segment based on the provided filters |

\
Request Body Schema: application/json

| Field | Type | Description |
|---|---|---|
|  |  |  |
| `pageNo` [optional] | Number | Page number for the required data. The default value is 1. |
| `noOfEntries` [optional] | Number | The maximum number of returned results per page. Default value is 300. |
| `sortBy` [optional] | String | Sort the result set by specific field. For ascending use plus(+) sign and for descending use minus(-) sign. Default value is -id. |
| `searchField` [optional] | String | Search the result by provided keyword in the searchField. search country records by `name` |
| `campaignId` [optional] | Number | Country records associated with the provided campaign will be returned first, prioritized over other country records. |
| `ids` [optional] | Array of Integer | Selected country id List, countries with provided ids will be returned first compared to other records. |
| `segmentIds` [optional] | Array of Integer | country list filter by country ids. |

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
Response Sample (-/segment/country)

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
