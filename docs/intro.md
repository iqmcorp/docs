---
sidebar_position: 1
slug: /
---

# IQM API

IQM’s REST API enables you to interact with most of IQM’s offerings.

## Before You Begin

Before you can use most of the API's service, you will need to complete the following steps:

1. An Account On the IQM platform
2. Run at least one campaign
3. A Client ID and Client Secret

If you do not have any of the above,  please follow the steps below.

* [Sign up for an IQM Account](https://app.iqm.com/#/signup)
  * Use your work email as a username and create a secure password
    * Password must be at least 8 characters in length
    * Requires at least 1 uppercase letter
    * Requires at least 1 lowercase letter
    * Requires at least 1 special character
* To Run a Campaign:
  * See the [Create a New Campaign Guide](https://help.iqm.com/en/articles/5651476-create-a-new-campaign)
* Email [integrations@iqm.com](mailto:integrations@iqm.com) to request a Client ID and Client Secret.

An hour after running a campaign, you can generate reports on it.

## Quickstart

Quickstart Guides provide step-by-step instructions to get started with the IQM platform's basic services:

* [Sign Up and Authentication](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide)
* [Upload a Matched Audience](/docs/Quickstart%20Guides/Matched-Audience-Upload-API-Quickstart-Guide)
* [Upload a Creative and Create a Campaign](/docs/Quickstart%20Guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide)
* [Create a Report](/docs/Quickstart%20Guides/Reporting-API-Quickstart-Guide)
* [Schedule a Report](/docs/Quickstart%20Guides/Schedule-Report-API-Quickstart-Guide)

## Guidelines

Guidelines pages provide comprehensive coverage of common methods, endpoints, and resources of the IQM platform. These pages are organized by section. They include code samples in JSON and TypeScript, and descriptions of all parameters and resources.

#### [User & Profile Management](/docs/Guidelines/User-Profile-Guidelines)

* [Send User Invitation](/docs/Guidelines/User-Profile-Guidelines#send-user-invitation)
* [User Sign Up](/docs/Guidelines/User-Profile-Guidelines#user-sign-up)
* [Change User Password](/docs/Guidelines/User-Profile-Guidelines#change-password)
* [Update User Profile](/docs/Guidelines/User-Profile-Guidelines#update-user-profile)
* [Get List of Users](/docs/Guidelines/User-Profile-Guidelines#get-list-of-users)
* [User Application Access](/docs/Guidelines/User-Profile-Guidelines#user-app-access-list)

#### [Workspace API](/docs/Guidelines/Workspace-Guidelines)

* [Organization Details](/docs/Guidelines/Workspace-Guidelines#organization-details)
* [Organization Management](/docs/Guidelines/Workspace-Guidelines#organization-management)
* [Workspace Management](/docs/Guidelines/Workspace-Guidelines#workspace-management)
* [Customer Details](/docs/Guidelines/Workspace-Guidelines#customer-details)
* [Customer Management](/docs/Guidelines/Workspace-Guidelines#customer-details)
* [Advertiser Management](/docs/Guidelines/Workspace-Guidelines#advertiser-management)
* [Static Details Lists](/docs/Guidelines/Workspace-Guidelines#static-details-lists)

#### [Campaign API](/docs/Guidelines/Campaign-API-Guidelines)

* [Get Campaign Details](/docs/Guidelines/Campaign-API-Guidelines#get-campaign-details)
* [Update Campaign](/docs/Guidelines/Campaign-API-Guidelines#update-campaign)
* [More Campaign Management](/docs/Guidelines/Campaign-API-Guidelines#more-campaign-management)
* [Get Insertion Order Details](/docs/Guidelines/Campaign-API-Guidelines#get-insertion-order-details)
* [Insertion Order Management](/docs/Guidelines/Campaign-API-Guidelines#insertion-order-management)

#### [Bid Model API](/docs/Guidelines/Bid-Model-API-Guidelines)

* [Include/Exclude Management](/docs/Guidelines/Bid-Model-API-Guidelines#includeexclude-management)
* [Campaign Priority Management](/docs/Guidelines/Bid-Model-API-Guidelines#campaign-priority-management)
* [Generate Metrics Report For a Given Campaign and Dimension](/docs/Guidelines/Bid-Model-API-Guidelines#get-metrics-report-for-a-given-campaign-and-dimension)
* [Get List of Bid Model Dimensions](/docs/Guidelines/Bid-Model-API-Guidelines#get-list-of-bid-model-dimensions)

#### [Inventory API](/docs/Guidelines/Inventory-API-Guide)

* [Get Inventory Details](/docs/Guidelines/Inventory-API-Guide#get-inventory-details)
* [Inventory Management](/docs/Guidelines/Inventory-API-Guide#inventory-management)
* [Inventory Groups](/docs/Guidelines/Inventory-API-Guide#inventory-groups)
* [Inventory Group Management](/docs/Guidelines/Inventory-API-Guide#inventory-group-management)
* [Private Marketplace (PMP) Deals](/docs/Guidelines/Inventory-API-Guide#private-marketplace-pmp-deals-details)
* [PMP Deals Management](/docs/Guidelines/Inventory-API-Guide#pmp-management)
* [Programmatic Guarantee (PG) Deals](/docs/Guidelines/Inventory-API-Guide#programmatic-guarantee-pg-deals-details)
* [PG Deals Management](/docs/Guidelines/Inventory-API-Guide#pg-management)

#### [Assets API](/docs/Guidelines/Assets-API-Guidelines)

* [Get Assets Details](/docs/Guidelines/Assets-API-Guidelines#get-assets-details)
* [Assets Managemnt](/docs/Guidelines/Assets-API-Guidelines#assets-management)

#### [Reports API](/docs/Guidelines/Reports-API-Guidelines)

* [Get Report Details](/docs/Guidelines/Reports-API-Guidelines#get-reports-details)
* [Reports Management](/docs/Guidelines/Reports-API-Guidelines#reports-management)
* [Scheduling Management](/docs/Guidelines/Reports-API-Guidelines#scheduling-management)
* [Get More Report Details](/docs/Guidelines/Reports-API-Guidelines#get-more-report-details)

#### [Insights API](/docs/Guidelines/Insights-API-Guidelines)

* [Get Insights Details](/docs/Guidelines/Insights-API-Guidelines#get-insights-details)
* [Insights Management](/docs/Guidelines/Insights-API-Guidelines#insights-management)
* [Voter Level Data Reports](/docs/Guidelines/Insights-API-Guidelines#voter-level-data-reports)
* [Get More Insights Details](/docs/Guidelines/Insights-API-Guidelines#get-more-insights-details)

#### [Conversions API](/docs/Guidelines/Conversion-API-Guidelines)

* [Get Conversions Details](/docs/Guidelines/Conversion-API-Guidelines#get-conversion-details)
* [Conversions Management](/docs/Guidelines/Conversion-API-Guidelines#conversions-management)
* [Get More Conversion Details](/docs/Guidelines/Conversion-API-Guidelines#get-more-conversion-details)

#### [Finance API](/docs/Guidelines/Finance-Guidelines)

* [Finance Details](/docs/Guidelines/Finance-Guidelines#finance-details)
* [Invoice Management](/docs/Guidelines/Finance-Guidelines#invoice-management)
* [Credit Management](/docs/Guidelines/Finance-Guidelines#credit-management)
* [Payment Management](/docs/Guidelines/Finance-Guidelines#payment-management)
* [Static Details Lists](/docs/Guidelines/Finance-Guidelines#static-details-lists)

#### [Master API Guidelines](/docs/Guidelines/Master-API-Guidelines)

* [Get Geographical Data](/docs/Guidelines/Master-API-Guidelines#get-geographical-data)
* [Get Creative Data](/docs/Guidelines/Master-API-Guidelines#get-creative-data)
* [Get More Data](/docs/Guidelines/Master-API-Guidelines#get-more-data)

## Requests

Data resources are accessed via standard HTTP requests in UTF-8 format to an API endpoint. The IQM API uses the following HTTP methods:

| Method | Action |
|---|---|
| <span class="badge badge--primary">GET</span> | Retrieves Resources |
| <span class="badge badge--success">POST</span> | Creates Resources |
| <span class="badge badge--warning">PUT</span> | Changes or replaces resources |
| <span class="badge badge--danger">DELETE</span> | Deletes Resources |
| <span class="badge badge--info">PATCH</span> | Applies partial modification to a resources |

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

Please refer to [MDN documentation on status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Rate limits

The message rate limit is 20 requests per minute. Exceeding the limit will cause a 429 (too many requests) error.

## Best Practices

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.
