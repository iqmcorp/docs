# AQM API

IQM’s REST API enables you to interact with most of IQM’s offerings.

## Before You Begin

Before you can use most of the API's service, you will need to complete the following steps:

1. An Account On the IQM platform
2. Run at least one campaign
3. A Client ID and Client Secret 

If you do not have any of the above,  please follow the steps below.

* To sign up for an IQM Account: [https://app.iqm.com/#/signup](https://app.iqm.com/#/signup)
    * Use your work email as a username and secure password.
    * Password must be at least 8 characters in length
    * Require at least 1 uppercase letter
    * Require at least 1 lowercase letter
    * Require at least 1 special character
* To Run a Campaign:
    * Follow this guide to create a campaign: https://help.iqm.com/en/articles/5651476-create-a-new-campaign
* Email [integrations@iqm.com](mailto:integrations@iqm.com) to request a Client ID and Client Secret 

An hour after running a campaign, you can generate reports on it.

## Quickstart

These guides will help you to perform the most essential tasks using the API of the IQM platform:

* [Create a Report](/Reporting-API-Quickstart-Guide.md)
* [Create a Report Scheduling Event](/Schedule-Report-API-Quickstart-Guide.md)
* [Upload a Matched Audience](/Matched-Audience-Upload-API-Quickstart-Guide.md)
* [Upload a Creative and Create a Campaign](/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide.md)

## Requests

Data resources are accessed via standard HTTP requests in UTF-8 format to an API endpoint. The IQM API uses the following HTTP methods:

| Method | Action |
|---|---|
| GET | Retrieves Resources |
| POST | Creates Resources |
| PUT | Changes or replaces resources |
| DELETE | Deletes Resources |
| PATCH | Applies partial modification to a resources |

Please refer to [MDN documentation on methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Error handling

### Status codes

We use standard HTTP status codes. The error codes you’ll most likely see are:

| Code | Definition |
| ---  |--- |
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 403 | Forbidden |
| 408 | Request Timeout |
| 412 | Precondition Failed |
| 422 | Unprocessable Entity |
| 500 | Internal Service Error|

Please refer to MDN documentation on status codes: \
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

### Rate limits

The message rate limit is 20 requests per minute. Exceeding the limit will cause a 429 (too many requests) error.

## Best Practices

The message rate limit is 20 requests per minute. Exceeding this limit will cause a 429 (too many requests) error. 

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.