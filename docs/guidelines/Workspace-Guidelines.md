# Organization, Workspace, And Customer Guidelines

This page covers the common methods and endpoints for managing **Organizations**, **Workspaces**, **Customers** and **Advertisers**. **Organizations** are top-level descriptions of a company's profile, including its name, website, and location details. **Workspaces** operate within **organizations** and can be **Customers** or **Advertisers**. **Users** operate within **Workspaces** and can be assigned **Customers**.

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Organization Details

An **organization** is any company that places advertisements. An organization's details include its name, website, and location details. This section covers the methods and endpoints for getting **organization** lists and details.

### Organization Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `organizationName` | string | Organization Name |
| `email` | string | Organization email | 
| `website` | string | Organization website |
| `contactNumber` | string | Organization phone number | 
| `address` | string | Organization address | 
| `city` | string | Organization city location |
| `state` | integer | State ID of organization location |
| `country` | integer | Country ID or organization location |
| `zipcode` | string | Zipcode
| `isAvatarUrl` | boolean | Indicates whether organization has uploaded a logo. If `true`, a default avataor logo is generated when one hasn't been uploaded |
| `organizationLogo` | string | Logo image file | 
| `industry` | string | Industry category <br>See [static details list](#industries) for supported values |
| `companySize` | integer | Number of employees at organization <br>See [static details list](#company-size) for supported values |
| `companyId` | string | Company ID |
| `taxId` | string | Tax ID | 
| `currency` | string | Currency type |
| `dateFormat` | string | Date formate, e.g. "MM/DD/YYYY" |
| `description` | string | Description of organization |
| `expertize` | string | <br>See [static details list](#organization-expertise) for supported values

### Get List of Allowed Organizations

Get a list of allowed organizations by customer type with the following endpoint:

* `GET` /api/v3/ua/user/allowed-organizations

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerType` | string | Comma separated customer type IDs<br>See [static details list](#customer-type) for supported values |
| `searchField` | string | Search results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `lastActive` <br>Supported values: `organizationName`, `title`, `dateOfJoining`, `lastActive` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "owId": 200001,
                "organizationName": "Super IQM Org",
                "ownerUserEmail": "pratik.t+ihp@iqm.com",
                "workspaceDomain": "app.stage.inhousebuying.com",
                "customerType": "Workspace",
                "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/logo/ihb_logo_scaled.png",
                "dateOfJoining": null,
                "title": null
            },
            {
                "owId": 200002,
                "organizationName": "IQM Corporation",
                "ownerUserEmail": "kartik.g@iqm.com",
                "workspaceDomain": "iqm.stage.inhousebuying.com",
                "customerType": "Workspace",
                "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/logo/iqm.png",
                "dateOfJoining": "2021-09-28",
                "title": null
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get Organization Details

Get the profile information of an organization for logged in organization with the following endpoint:

* `GET` /api/v3/ua/organization/view-profile

\
Response 200

```json
{
    "success": true,
    "data": {
        "organizationName": "JP test org1",
        "email": "jinesh.p+jptest1@iqm.com",
        "website": "www.jptest1.com",
        "contactNumber": "+91 123987456",
        "address": "A-123, ABC complex",
        "city": "Ahmedabad",
        "state": 1672,
        "country": 113,
        "zipcode": "382418",
        "isAvatarUrl": false,
        "organizationLogo": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/organization-profile/391.png",
        "industry": "Advertising",
        "companySize": 2,
        "companyId": "A-123456",
        "taxId": "JP123456",
        "currency": "Dollar ($)",
        "dateFormat": "DD/MM/YYYY",
        "description": "",
        "verticalId": 1,
        "expertize": "1,2,3"
    }
}
```

### Check for Available Domain

Check if a workspace domain is available with the following endpoint:

* `GET` /api/v3/ua/organization/available-domain

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `workspaceSubDomain` | string | Name of domain to check |

\
Response 200

```json
{
    "success": true,
    "data": {
        "isAvailable": true
    }
}
```

## Organization Management

### Update Organization Profile

Update organization profile details with the following endpoint:

* `PATCH` /api/v3/ua/organization/update-profile

**Request Body Schema: application/json**

Refer to the [Organization Resource Properties](#organization-resource-properties) for schema. Include any properties to update in request body.

\
Request Sample

```json
{
    "organizationName": "New Org Name",
    "email": "neworgemail@org.com",
    "website": "neworgwebsite.com"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "organizationLogo": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/organization-profile/391/1633180356403.png",
        "message": "Profile updated successfully."
    }
}
```

#### Update Organization Email

* `PATCH` /api/v3/ua/organization/update-email

## Workspace Management

A **workspace** provides DSP service to another company, meaning it can have 'child' workspaces known as **Customers** (see [Multi-level Customers List](#get-multi-level-customers-list)). This section covers the methods and endpoints for managing workspace details.

### Create a Workspace

Create a workspace by providing an invitation hash, workspace domain, and creator details with the following endpoint:

* `POST` /api/v3/ua/workspace

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `domain` | string | Domain name of workspace |
| `creatorEmail` | string | Creator email |
| `inviteHash` | string | Invite Hash |

\
Request Sample

```json
{
    "domain": "app",
    "creatorEmail": "kartik.g@iqm.com",
    "inviteHash": "37KgCLieN6s/JxRgqYqeIV0UiAp3OWHdTjPUq8tVEilibQ9Bpo6ky+ZZeg8Wf3L9A0a3uBboKrijwXq0YZ0Qq3WXImlKQOgjYyZ7w5J6SPVwkvHTwe8yyHI2MIyR11URBlgOwoGnLtV8G4Cab+K4orlNjTnxLN+KFsYALpv0JDQkhvjRVxO8CJKhHahxu3rXZ3w6154n7PKTMZJs1ZR3r73dwHd8Ug0c/q7xB1ilGWIFnVVDb1gt1k8S5gYRNsxo9vESo0n8otr5/ha0SgW/qCZjxypIvO/59FXbjQ=="
}
```

Response 200

```json
{
    "success": true,
    "message": "Workspace created successfully."
}
```

### Update Workspace Domain

Update a workspace domain with the following endpoint:

* `PATCH` /api/v3/ua/organization/workspace-domain

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `workspaceSubDomain` | string | New workspace domain name |

\
Request Sample

```json
{
    "workspaceSubDomain": "jptest"
}
```

Response 200

```json
{
    "success": true,
    "data": "Workspace domain update successfully."
}
```

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "A workspace with this URL already exists, please try a different one"
        }
    ]
}
```

### Validate Workspace Domain

Validate a workspace for a given email with the following endpoint:

* `POST` /api/v3/ua/user/workspace/validate

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `email` | string | Email |
| `workspaceDomain` | string | Workspace domain name |

\
Request Sample

```json
{
    "email": "user@ihp.com",
    "workspaceDomain": "app.stage.inhousebuying.com"
}
```

Response 200

```json
{
    "success": true
}
```

### Get List of Workspaces

Get a list of workspaces with the following endpoint:

* `GET` /api/v3/ua/customers/workspaces/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Filter results by keyword|

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "owId": 202373,
            "workspaceName": "Workspace 1",
            "logoUrl": "https://iqm-web-assets/avatar/WS.png",
            "statusId": 1,
            "status": "Active",
            "ownerUserName": "Workspace User 1",
            "ownerUserEmail": "workspaceUser1@iqm.com"
        },
        {
            "owId": 200002,
            "workspaceName": "Workspace 2",
            "logoUrl": "https://iqm-web-assets/avatar/IC.png",
            "statusId": 1,
            "status": "Active",
            "ownerUserName": "Workspace User 2",
            "ownerUserEmail": "WorkspaceUser2@iqm.com"
        }
    ]
}
```

## Customer Details

A **customer** is an **advertiser** or **workspace** in a financial agreement with another workspace. For any given workspace, an advertiser is a customer. This section covers the methods and endpoints for getting lists and details of customers.

### Customer Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `isUserAllowed` | boolean | Specifies if the organization is permitted (`true`) to log in for the currently logged-in user |
| `isWorkspaceOwner` | boolean | Specifies if the organization owns the workspace; meaning, the org owner and the current org are the same |
| `owId` | integer | Organization Workspace ID |
| `organizationName` | string | Organization Name |
| `workspaceName` | string | Workspace Name |
| `workspaceDomain` | string | Worskpace Domain |
| `owStatus` | string | Organization Worskpace status type |
| `owStatusId` | integer | OW status type ID <br>See [static details list](#organization-workspace-status) for supported values |
| `createdAt` | string | Creation timestamp |
| `modifiedAt` | string | Modifcation timestamp |
| `parentOrganizationName` | string | Parent organization name |
| `tags` | array of strings | Customer type tags <br>See [static details list](#customer-type) for supported values |
| `customersCount` | integer | Customer count |
| `balance` | integer | Budget balance |
| `contactPersonName` | string | Name of contact |
| `contactPersonEmail` | string | Email of contact |
| `approvedBy` | string | Name |
| `approvedByEmail` | string | Email |
| `logoUrl` | string | Logo URL
| `activeCampaignsCount` | integer | Number of active campaigns associated with customer |
| `industry` | integer | Industry type <br>See [static details list](#industries) for supported values |
| `companySize` | integer | Company size <br>See [static details list](#company-size) for supported values |
| `mediaBudget` | integer | Media Budget <br>See [static details list](#media-budget) for supported values |
| `budgetSpent` | integer | Budget Spent |
| `showFinance` | boolean | Show financial information |
| `workspaceId` | integer | Workspace ID |
| `lastAccess` | integer | Records the last time the org was accessed |
| `verticalTypeId` | integer | Vertical type ID <br>See [static details list](#verticals) for supported values |
| `onHoldReason` | string | Description of reason why Customer is in 'on-hold' status |

### Get Customer Details

Get a list of customers and their details with the following endpoint:

* `GET` /api/v3/ua/customers/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated Organization Workspace IDs whose customers need to be retrieved <br>If `owId` of advertiser is passed, endpoint will return advertiser details <br>If `owId` of workspace is passed, endpoint will return workspace and its advertisers details |
| `childOwIds` | string | Comma separated OW IDs of organization which will only be provided in response (to filter second level customers only) |
| `status` | string | Comma separated `owId` status IDs <br>See [static details list](#organization-workspace-status) for supported values |
| `customerType` | string | Comma separated customer type IDs <br>See [static details list](#customer-type) for supported values |
| `searchField` | string | Filters results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-runningCampaigns` |
| `customerAccountType` | string | Customer account type ID <br>See [static details list](#customer-account-type) for supported values |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "isUserAllowed": false,
                "isWorkspaceOwner": false,
                "owId": 100404,
                "organizationName": "AdAgencyABC 1",
                "workspaceName": "AdAgencyABC 1",
                "workspaceDomain": "yourworkspace1.iqm.com",
                "owStatus": "active",
                "owStatusId": 1,
                "createdAt": "2021-10-01T22:20:46.000+00:00",
                "modifiedAt": "2021-10-01T22:20:46.000+00:00",
                "parentOrganizationName": "AdAgencyABC 1",
                "tags": [
                    "Self Service",
                    "Advertiser"
                ],
                "customersCount": 0,
                "balance": 1000000,
                "contactPersonName": "yourname 1",
                "contactPersonEmail": "yourname@yourcompany1.com",
                "approvedBy": "yourname 3",
                "approvedByEmail": "yourname@yourcompany3.com",
                "logoUrl": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/TA.svg",
                "activeCampaignsCount": 28,
                "industry": 1,
                "companySize": 2,
                "mediaBudget": 3,
                "budgetSpent": 1000,
                "showFinance": false,
                "workspaceId": 632,
                "lastAccess": 0,
                "verticalTypeId": 1,
                "onHoldReason": null
            },
            {
                "isUserAllowed": false,
                "isWorkspaceOwner": false,
                "owId": 100431,
                "organizationName": "AdAgencyABC 2",
                "workspaceName": "AdAgencyABC 1",
                "workspaceDomain": "yourworkspace1.iqm.com",
                "owStatus": "active",
                "owStatusId": 1,
                "createdAt": "2021-10-01T22:20:46.000+00:00",
                "modifiedAt": "2021-10-01T22:20:46.000+00:00",
                "parentOrganizationName": "AdAgencyABC 1",
                "tags": [
                    "Self Service",
                    "Advertiser"
                ],
                "customersCount": 0,
                "balance": 0,
                "contactPersonName": "yourname 2",
                "contactPersonEmail": "yourname@yourcompany2.com",
                "approvedBy": "yourname 3",
                "approvedByEmail": "yourname@yourcompany3.com",
                "logoUrl": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/IQ.svg",
                "activeCampaignsCount": 23,
                "industry": 1,
                "companySize": 2,
                "mediaBudget": 3,
                "budgetSpent": 1000,
                "showFinance": false,
                "workspaceId": 632,
                "lastAccess": 0,
                "verticalTypeId": null,
                "onHoldReason": null
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

#### Get Basic Customer Details

* `POST` /api/v3/ua/customer/basic/list

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `noOfEntries` | integer | Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `owIds` | array of integers | Organization Workspace IDs |
| `owStatusIds` | array of integers | Filter by OW Status type IDs <br>See [static details list](#organization-workspace-status) for supported values|
| `provideRunningCampaigns` | boolean | Get running campaign count (`true`), default: `false` |

\
Request Sample

```json
{
    "owStatusIds": [
        1,
        2
    ],
    "pageNo": 1,
    "noOfEntries": 20,
    "owIds": [
        20001
    ],
    "searchField": "Agency",
    "provideRunningCampaigns": false
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "owId": 20001,
                "organizationName": "AdAgencyABC 1",
                "organizationLogo": "https://logo-bucket/avatar/123456.png",
                "owStatus": "Active",
                "owStatusId": 1,
                "wsId": 2,
                "runningCampaigns": 0,
                "ownerUserName": "yourname 1",
                "ownerUserEmail": "yourname@yourcompany1.com"
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 1
    }
}
```

### Get Multi-level Customers List

* `GET` /api/v3/ua/customers/list/multi-level

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated OW IDs of organizations whose customers need to be retrieved |
| `status` | string | Comma separated `owId` status IDs <br>See [static details list](#organization-workspace-status) for supported values |
| `searchField` | string | Filters results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `+superParentOrganizationId` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "owId": 200129,
                "organizationName": "AdAgencyABC 1",
                "isAccess": true,
                "logoUrl": "https://logo-bucket/avatar/123456.png",
                "status": "Active",
                "statusId": 1,
                "activeCampaignsCount": 17,
                "ownerUserName": "yourname 1",
                "ownerUserEmail": "yourname@yourcompany1.com",
                "customers": [
                    {
                        "owId": 200176,
                        "organizationName": "AdAgencyABC 4",
                        "logoUrl": "https://logo-bucket/avatar/123456.png",
                        "status": "Active",
                        "statusId": 1,
                        "activeCampaignsCount": 0,
                        "ownerUserName": "yourname 4",
                        "ownerUserEmail": "yourname@yourcompany4.com"
                    },
                    {
                        "owId": 200177,
                        "organizationName": "AdAgencyABC 5",
                        "logoUrl": "https://logo-bucket/avatar/123456.png",
                        "status": "Active",
                        "statusId": 1,
                        "activeCampaignsCount": 0,
                        "ownerUserName": "yourname 5",
                        "ownerUserEmail": "yourname@yourcompany5.com"
                    }
                ]
            },
            {
                "owId": 200422,
                "organizationName": "AdAgencyABC 2",
                "isAccess": false,
                "logoUrl": "https://logo-bucket/avatar/123456.png",
                "status": "Active",
                "statusId": 1,
                "activeCampaignsCount": 0,
                "ownerUserName": "yourname 2",
                "ownerUserEmail": "jp@iqm.com",
                "customers": [
                    {
                        "owId": 200425,
                        "organizationName": "AdAgencyABC 6",
                        "logoUrl": "https://logo-bucket/avatar/123456.png",
                        "status": "Active",
                        "statusId": 1,
                        "activeCampaignsCount": 17,
                        "ownerUserName": "yourname 6",
                        "ownerUserEmail": "yourname@yourcompany6.com"
                    },
                    {
                        "owId": 200495,
                        "organizationName": "AdAgencyABC 7",
                        "logoUrl": "https://logo-bucket/avatar/123456.png",
                        "status": "Active",
                        "statusId": 1,
                        "activeCampaignsCount": 17,
                        "ownerUserName": "yourname 7",
                        "ownerUserEmail": "yourname@yourcompany7.com"
                    }
                ]
            },
            {
                "owId": 200424,
                "organizationName": "AdAgencyABC 3",
                "isAccess": true,
                "customers": [],
                "logoUrl": "https://logo-bucket/avatar/123456.png",
                "status": "Active",
                "statusId": 1,
                "activeCampaignsCount": 17,
                "ownerUserName": "yourname 3",
                "ownerUserEmail": "yourname@yourcompany3.com"
            }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

### Get Immediate Customers List

Get only immediate customers of provided OW IDs (if `owId` is not provided then the OW ID in the header will be passed) with the following endpoint:

* `GET` /api/v3/ua/immediate/customers/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated Organization Workspace IDs whose immediate customers need to be retrieved |
| `childOwIds` | string | Comma separated OW IDs of organization which will only be provided in response (to filter second level customers only) |
| `status` | string | Comma separated `owId` status IDs <br>See [static details list](#organization-workspace-status) for supported values |
| `customerType` | string | Comma separated customer type IDs <br>See [static details list](#customer-type) for supported values |
| `searchField` | string | Filters results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "isUserAllowed": false,
                "owId": 500,
                "organizationName": "Walmart Non IHB 1",
                "workspaceName": "walmart1.stage.inhousebuying.com",
                "workspaceDomain": "walmart1.stage.inhousebuying.com",
                "owStatus": "Active",
                "createdAt": "2021-09-05T22:55:10.000+00:00",
                "parentOrganizationName": "Walmart 1",
                "tags": [
                    "Self Service",
                    "Advertiser"
                ],
                "customersCount": 0,
                "balance": 0,
                "contactPersonName": null,
                "contactPersonEmail": "kartik.g+wni1@iqm.com",
                "approvedBy": "Walmart 1",
                "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/logo/iqm.png",
                "activeCampaignsCount": 0
            }
        ],
        "totalRecords": 1,
        "filteredRecords": 1
    }
}
```

### Customer Operations Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `email` | string | Email
| `name` | string | Customer name |
| `password` | string | Customer password |
| `onwerUserName` | string | Customer owner
| `verticalId` | integer | Vertical type ID <br>See [static details list](#verticals) for supported values |
| `logoUrl` | string | Logo URL |
| `customerOperationDetails` | object | (workspace only) contains all following properties |
| `customerTypeId` | integer | Customer type ID <br>See [static details list](#customer-type) for supported values |
| `customerPaymentTypeId` | integer | Customer payment type ID <br>See [static details list](#customer-payment-type) for supported values |
| `countryId` | integer | Country ID |
| `adOpsAssigneeUserIds` | array of integers | 
| `sellerAssigneeUserIds` | array of integers | 
| `labelIds` | array of integers | 

### Get Customer Operations Details

* `GET` /api/v3/ua/customer-operations/details/{owId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "workspaceCustomerOperationDetails": {
            "customerTypeId": 1,
            "owId": 202879,
            "customerPaymentTypeId": 2,
            "countryId": 30100001,
            "adOpsAssigneeUserIds": [
                7184
            ],
            "sellerAssigneeUserIds": [
                6900
            ],
            "labelIds": [
                1,
                3,
                4
            ],
            "overridenFields": {
                "customerTypeId": false,
                "customerPaymentTypeId": false,
                "countryId": false,
                "adOpsAssigneeUserIds": false,
                "sellerAssigneeUserIds": false,
                "labelIds": false
            }
        }
    }
}
```

### Get Customer Operations Label List

Get a list of labels for customer operations with the following endpoint:

* `GET` /api/v3/ua/customer-operations/label/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `searchField` | string | Search results by keyword |
| `noOfEntries` | integer | Maximum number of entries returned, default: `20` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-id` <br>Supported values: `id`, `name`, `startTime`, `endTime`, `totalBudget` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 36,
        "filteredRecords": 36,
        "operationalLabels": [
            {
                "label": "Test Label with 30 chars - 857",
                "id": 29
            },
            {
                "label": "Test Label with 30 characters.",
                "id": 16
            }
        ]
    }
}
```

### Get Count of Customers by Status

Get a count of customers by status and OW ID with the following endpoint:

* `GET` /api/v3/ua/customers/count

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Filter results by comma separated OW IDs |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "pending",
            "id": 2,
            "label": "Pending",
            "order": 1,
            "statusCount": 0
        },
        {
            "name": "active",
            "id": 1,
            "label": "Active",
            "order": 2,
            "statusCount": 1900
        },
        {
            "name": "invited",
            "id": 3,
            "label": "Invited",
            "order": 3,
            "statusCount": 0
        },
        {
            "name": "suspended",
            "id": 4,
            "label": "Suspended",
            "order": 4,
            "statusCount": 87
        },
        {
            "name": "rejected",
            "id": 5,
            "label": "Rejected",
            "order": 5,
            "statusCount": 0
        }
    ]
}
```

### Get List of Users for Selected Customer

Get list of users for the given customer (organization) with the following endpoint:

* `GET` /api/v3/ua/customers/users/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | string | OW ID of Customer for which user list will be retrieved |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-displayName` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "userId": 1,
                "displayName": "IHP",
                "userAvatar": "https://s3.amazonaws.com/admp0ed7fer7ert0em3rip5dy2/1/15e544b7b11040c1b56a61d2ab8450b4.png",
                "email": "pratik.t+ihp@iqm.com",
                "userTitle": "CEO",
                "orgId": 1,
                "organizationName": "IHP",
                "apps": [
                    {
                        "appId": 1,
                        "appName": "Customers",
                        "appIcon": null
                    },
                    {
                        "appId": 2,
                        "appName": "Dashboard",
                        "appIcon": null
                    }
                ]
            }
        ],
        "totalRecords": 1,
        "filteredRecords": 1
    }
}
```

### Get List of User Assigned Customers

* `GET` /api/v3/ua/user/assigned-customers

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `uowId` | string | Customers assigned to user Organization Workspace ID |
| `limit` | integer | Maximum number of entries returned, default: `2` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`)<br>Supported values: `createdAt`, `organizationName` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "owId": 58,
                "organizationName": "Amul",
                "createdAt": 1629361572000,
                "contactPersonName": "Amul",
                "contactPersonEmail": "pratik.t+nonihp@iqm.com"
            },
            {
                "owId": 169,
                "organizationName": "Volkswagen India",
                "createdAt": 1629346722000,
                "contactPersonName": "Volkswagen India",
                "contactPersonEmail": "shraddha.p+vw@iqm.com"
            }
        ],
        "totalRecords": 3,
        "filteredRecords": 2
    }
}
```

#### Get User's Remaining Customers

* `GET` /api/v3/ua/user/remaining-customers

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `uowId` | string | Customers assigned to user Organization Workspace ID |
| `owIds` | string | Organization Workspace IDs |
| `limit` | integer | Maximum number of entries returned, default: `2` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`)<br>Supported values: `contactPersonName`, `organizationName` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "owId": 169,
                "organizationName": "Volkswagen India",
                "createdAt": 1629346722000,
                "balance": 0,
                "contactPersonName": "Volkswagen India",
                "contactPersonEmail": "shraddha.p+vw@iqm.com",
                "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/logo/iqm.png",
                "activeCampaignsCount": 0
            },
            {
                "owId": 170,
                "organizationName": "Coca-Cola",
                "createdAt": 1629346703000,
                "balance": 0,
                "contactPersonName": "Coca-Cola",
                "contactPersonEmail": "shraddha.p+cc@iqm.com",
                "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/logo/iqm.png",
                "activeCampaignsCount": 0
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Get List of Customer's Allowed Applications

Get a list of a customer's allowed applications along with the allowed user's list with the following endpoint:

* `GET` /api/v3/ua/customers/applications/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | string | OW ID of Customer for which application list will be retrieved |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-appName` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "appId": 2,
                "appName": "Dashboard",
                "appOwner": "IHB",
                "appIcon": null,
                "appType": "Default App",
                "subscriptionPrice": 0,
                "users": [
                    {
                        "firstName": "Shraddha",
                        "lastName": "Patel",
                        "email": "shraddha.p+emailtest1@iqm.com",
                        "displayName": "Shraddha Patel",
                        "userAvatar": "https://tmpd3vsekqsh1zre3k8n-stage.s3.amazonaws.com/avatar/SP.svg"
                    },
                    {
                        "firstName": "Shraddha",
                        "lastName": "P",
                        "email": "shraddha.p+emailtest2@iqm.com",
                        "displayName": "Shraddha P",
                        "userAvatar": "https://tmpd3vsekqsh1zre3k8n-stage.s3.amazonaws.com/avatar/SP.svg"
                    }
                ]
            },
            {
                "appId": 1,
                "appName": "Customers",
                "appOwner": "IHB",
                "appIcon": null,
                "appType": "Default App",
                "subscriptionPrice": 0,
                "users": [
                    {
                        "firstName": "Kartik",
                        "lastName": "Gevariya",
                        "email": "kartik.g@iqm.com",
                        "displayName": "Kartik Gevariya",
                        "userAvatar": "https://s3.amazonaws.com/admp0ed7fer7ert0em3rip5dy2/1/15e544b7b11040c1b56a61d2ab8450b4.png"
                    },
                    {
                        "firstName": "SP-IQM-User",
                        "lastName": null,
                        "email": "shraddha.p+iqmuser@iqm.com",
                        "displayName": "SP-IQM-User",
                        "userAvatar": null
                    }
                ]
            }
        ],
        "totalRecords": 10,
        "filteredRecords": 10
    }
}
```

#### Get List of Remaining Apps for Customer

* `GET` /api/v3/ua/customers/remaining-applications/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | string | OW ID of Customer for which application list will be retrieved |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "appId": 6,
            "appName": "Accounts",
            "appIcon": "",
            "orgName": "IHP",
            "appType": "Default App",
            "userCount": 0
        },
        {
            "appId": 8,
            "appName": "Audiences",
            "appIcon": "",
            "orgName": "IQM Corporation",
            "appType": "Default App",
            "userCount": 0
        }
        ...
    ]
}
```

### Get List of Advertisers for Customer

Get a list of advertisers for a given customer with the following endpoint:

* `GET` /api/v3/ua/customers/advertisers/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | string | OW ID of Customer for which advertiser list will be retrieved |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
        "id": 1,
        "advertiserName": "Nikon",
        "website": "http://nikonindia.com",
        "chiefName": "Nil Miles",
        "contactNumber": "+91 9999999999",
        "contactAddress": null
        },
        {
        "id": 2,
        "advertiserName": "Nike",
        "website": "http://nikeindia.com",
        "chiefName": "Nike",
        "contactNumber": "+91 9999988888",
        "contactAddress": null
        }
    ]
}
```

### Get Customer Config Details

Get customer configuration details with the following endpoint:

* `GET` /api/v3/ua/customer/config/{customerOwId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerOwId` | integer | Customer Organization Workspace ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "isBidShadingEnabled": true,
        "isTestCustomer": false
    }
}
```

## Customer Management

### Invite Customer to Platform

Invite a customer to the platform (as workspace or advertiser) with the following endpoint: 

* `POST` /api/v3/ua/customer/invite

\
**Request Body Schema: application/json**

Refer to [Customer Operations Resource Property table](#customer-operations-resource-properties) for request schema.

\
Request Sample

```json
[
    {
        "email": "user1@iqm.com",
        "name": "ORG - 1",
        "password": "password@123",
        "ownerUserName": "User-1",
        "verticalId": 1,
        "logoUrl": "https://d3jme5si7t6llb.cloudfront.net/assets/202753/Pd7Xx26_1721991655891.png",
        "customerOperationDetails": {
            "customerTypeId": 2,
            "customerPaymentTypeId": 2,
            "countryId": 30100001,
            "adOpsAssigneeUserIds": [],
            "sellerAssigneeUserIds": [
                7184
            ],
            "labelIds": [
                7,
                8,
                9
            ]
        }
    }
]
```

Response 200

```json
{
    "success": true,
    "data": {
        "successfulEmails": [
            "user1.g@iqm.com"
        ],
        "failedEmails": [
            "user2.p@iqm.com"
        ],
        "message": "1 invitations sent successfully."
    }
}
```

#### Resend Customer Invite

* `POST` /api/v3/ua/customer/invite/re-send

\
Request Sample

```json
{
    "inviteHash": "M7JoA2hYIUcKdVDM3g2KD/7+4FcOi9+slNVCW4NhEJgPMIxdvrj6ObD+gmCo6uikWqH6+LnHXnqXa7z2WVfw2FUI8ppsFOd8Ai1rnC0+gQiZWcgffqv2lggi0FZ3KiVERgAIFyJPIuV7fhi7AZksDka0VWHhNqHhX4R108psN73muXEaOrsf5uXlyQwzyYPpIeBq9eixIK+ytPQWBNMVKQBCczILN9l3MDheiiV94Jud1Tg/jrALspnF7KytcsfkgA5sQqWvK0K/LEl2TwAjMFl8fftW6d4xnwDb5Z0H"
}
```

Response 200

```json
{
    "success": true,
    "data": "Invitation resent successfully."
}
```

#### Cancel Customer Invite

* `DELETE` /api/v3/ua/customer/invite/cancel

**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | string | OW ID of Customer for which advertiser list will be retrieved |

\
Response 200

```json
{
    "success": true,
    "data": "Invitation cancelled successfully."
}
```



### Customer Signup

Sign up a new customer with the following endpoint:

* `POST` /api/v3/ua/customer/signup

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `email` | string | Customer email |
| `organizationName` | string | Customer organization name
| `userName` | string | Customer user name |
| `industry` | integer | Industry type ID |
| `companySize` | integer | Company size type ID <br>See [static details list](#company-size) for supported values|
| `mediaBudget` | integer | <br>See [static details list](#media-budget) for supported values
| `budgetSpent` | integer | Budget spent |

\
Request Sample

```json
{
    "email": "email@domain.com",
    "organizationName": "Organisation Name",
    "userName": "User Name",
    "industry": 1,
    "companySize": 2,
    "mediaBudget": 3,
    "budgetSpent": 2000
}
```

Response 200

```json
{
    "success": true,
    "data": "Customer sign up requested successfully."
}
```

#### Get Customer Signup Form

* `GET` /api/v3/ua/customer/signup-form

\
Response 200

```json
{
    "success": true,
    "data": {
        "isCustomerVerificationEnable": true,
        "customerFormDetails": [
            {
                "id": 1,
                "field": "organizationName",
                "label": "Organization name",
                "isUserRequired": true
            },
            {
                "id": 2,
                "field": "userName",
                "label": "Name of the user",
                "isUserRequired": true
            },
            {
                "id": 3,
                "field": "industry",
                "label": "Industry",
                "isUserRequired": false
            },
            {
                "id": 4,
                "field": "companySize",
                "label": "Company size",
                "isUserRequired": true
            },
            {
                "id": 5,
                "field": "mediaBudget",
                "label": "Media budget",
                "isUserRequired": true
            },
            {
                "id": 6,
                "field": "budgetSpent",
                "label": "Budget spent on programmatic",
                "isUserRequired": false
            }
        ]
    }
}
```

### Assign Customer to User

Assign a customer to an existing user with the following endpoint:

* `POST` /api/v3//ua/user/customer/assign

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated OW IDs to assign to user |
| `uowIds` | string | Comma separated user IDs to assign customers to |

\
Request Sample

```json
{
    "owIds": "170,58,167,900",
    "uowIds": "166"
}
```

Response 200

```json
{
    "success": true,
    "data": "Added Customer association to User successfully."
}
```

#### Unassign Customer from User

* `POST` /api/v3/ua/user/customer/remove

\
Request Sample

```json
{
    "owIds": "58",
    "uowIds": "166"
}
```

Response 200

```json
{
    "success": true,
    "data": "Removed Customer association from User successfully."
}
```

### Approve Customer

Approve a customer and add app access with the following endpoint:

* `PATCH` /api/v3/ua/customer/approve

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `appIds` | string | Comma separated application IDs to add or revoke customer access to |

\
Request Sample

```json
{
    "owId": 134562,
    "appIds": "2,5,6,7,9,10,11"
}
```

#### Reject Customer

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `statusReason` | string | Description of rejection reason |

\
Request Sample

```json
{
    "owId": 345216,
    "statusReason": "Customer didn't provide correct details"
}
```

Response 200

```json
{
    "success": true,
    "data": "Customer rejected successfully."
}
```

### Add or Revoke Customer App Access

Add or revoke customer access to specified apps with the following endpoints:

* `POST` /api/v3/ua/customer/application/add
* `POST` /api/v3/ua/customer/application/revoke

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `appIds` | string | Comma separated application IDs to add or revoke customer access to |
| `accessLevel` | string | Gives customer `full` or `limited` access to added applications |

\
Request Sample

```json
{
    "owId": 2,
    "appIds": "1,2",
    "accessLevel": "Full"
}
```

Response 200

```json
{
    "success": true,
    "data": "Application access added successfully."
}
```

### Put Customer On-Hold

Change customer status (see [status list](#organization-workspace-status)) to 'on-hold' with provided reason with the following endpoint:

* `PATCH` /api/v3/ua/customer/hold

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `statusReason` | string | Description of reason to put customer on hold |

\
Request Sample

```json
{
    "owId": 54,
    "statusReason": "Not paid payment for 3 months"
}
```

\
Response 200

```json
{
    "success": true,
    "data": "Customer status changed to on-hold successfully."
}
```

#### Re-Active Customer

Change customer status to 'active' with the following endpoint:

* `PATCH` /api/v3/ua/customer/re-activate

\
Request Sample

```json
{
    "owId": 54
}
```

Response 200

```json
{
    "success": true,
    "data": "Customer status changed to active successfully."
}
```

### Add Label for Customer Operation

Add a label for customer operations, which will be displayed in the labels list, with the following endpoint:

* `POST` /api/v3/ua/customer-operations/label/add

\
**Request Body Schema: appication/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `labelName` | string | Label name |

\
Request Sample

```json
{
    "labelName": "Test-case-high"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "labelId": 2,
        "message": "label added successfully"
    }
}
```

### Enable Bid Shading for Customer

Enable bid shading for given customer OW ID with the following endpoint:

* `PATCH` /api/v3/ua/customer/enable-bid-shading/{customerOwId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerOwId` | integer | Customer Organization Workspace ID |

\
Response 200

```json
{
    "success": true,
    "data": "Bid Shading Enabled Successfully"
}
```

### Update Customer Operations Details

Update customer operations details with the following endpoint:

* `PATCH` /api/v3/ua/customer-operations/{owId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `OwId` | integer | Customer Organization Workspace ID |

**Request Body Schema: appliation/json**

See the [Customer Operations Property table](#customer-operations-resource-properties) for request schema.

\
Request Sample

```json
{
    "customerOperationsDetails": {
        "customerTypeId": 0,
        "customerPaymentTypeId": 0,
        "countryId": 0,
        "createdByUowId": 0,
        "modifiedByUowId": 0,
        "adOpsAssigneeUserIds": [
            0
        ],
        "sellerAssigneeUserIds": [
         0
        ],
        "labelIds": [
         0
        ]
    },
    "resetFields": {
        "customerTypeId": true,
        "customerPaymentTypeId": true,
        "countryId": true,
        "adOpsAssigneeUserIds": true,
        "sellerAssigneeUserIds": true,
        "labelIds": true
    }
}
```

## Advertiser Management

An advertiser is a customer of a workspace that places advertisements. This section covers the methods and endpoints for managing advertiser details. 

### Advertiser Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `advertiserName` | string | Advertiser name |
| `website` | string | Advertiser website |
| `chiefName` | string | 
| `contactNumber` | string | Advertiser phone number |
| `address` | string | Advertiser address |
| `legalInfo` | string | Legal info for advertiser |
| `links` | string | Associated links for advertiser |

### Get List of Advertiser Profile and Details

Get a list of advertiser profiles and their details with the following endpoint:

* `GET` /api/v3/ua/organization/advertisers/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `advertiserIds` | string | Comma separated advertiser IDs |
| `searchField` | string | Filters results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 5,
                "advertiserName": "Nikon 3",
                "website": "http://nikon3india.com",
                "chiefName": "Nil Miles3",
                "contactNumber": "+91 9876534210",
                "address": null,
                "legalInfo": null,
                "links": []
            },
            {
                "id": 3,
                "advertiserName": "Nikon 1",
                "website": "http://nikonindia.com",
                "chiefName": "Nil Miles1",
                "contactNumber": "+91 9876534210",
                "address": null,
                "legalInfo": null,
                "links": [
                    "www.nikon1.com",
                    "www.nikon1us.com"
                ]
            },
            {
                "id": 4,
                "advertiserName": "Nikon_2",
                "website": "http://nikon_2india.com",
                "chiefName": "Nil Miles2",
                "contactNumber": "+91 9876534210",
                "address": null,
                "legalInfo": null,
                "links": [
                    "www.nikon_2.com"
                ]
            },
            {
                "id": 1,
                "advertiserName": "Nikon",
                "website": "http://nikonindia.com",
                "chiefName": "Nil Miles",
                "contactNumber": "+91 9999999999",
                "address": null,
                "legalInfo": null,
                "links": [
                    "www.nikon.com",
                    "www.nikonus.com"
                ]
            },
            {
                "id": 2,
                "advertiserName": "Nike",
                "website": "http://nikeindia.com",
                "chiefName": "Nike",
                "contactNumber": "+91 9999988888",
                "address": null,
                "legalInfo": null,
                "links": []
            }
        ],
        "totalRecords": 5,
        "filteredRecords": 5
    }
}
```

### Add Advertiser Profile

Add a new advertiser profile with the following endpoint:

* `POST` /api/v3/ua/organization/advertiser/add

\
**Request Body Schema: application/json**

Refer to [Advertiser Resource Properties](#advertiser-resource-properties) for request schema.

\
Request Sample

```json
{
    "advertiserName": "Nikon 1",
    "website": "http://nikonindia.com",
    "chiefName": "Nil Miles1",
    "contactNumber": "+91 9876534210",
    "address": "physical address",
    "legalInfo": "legal info for advertiser",
    "links": [
        "www.nikon1.com",
        "www.nikon1us.com"
    ]
}
```

Response 200

```json
{
    "success": true,
    "data": "Advertiser profile added successfully."
}
```

### Edit Advertiser Profile

Edit advertiser profile details with the following endpoint:

* `PATCH` /api/v3/ua/organization/advertiser/4

\
**Request Body Schema: application/json**

Refer to [Advertiser Resource Properties](#advertiser-resource-properties) for request schema.

\
Request Sample

```json
{
  "advertiserName": "Nikon 2",
  "website": "http://nikonindia.com",
}
```

Response 200

```json
{
    "success": true,
    "data": "Advertiser profile updated successfully."
}
```

### Delete Advertiser Profile

Delete an advertiser profile with the following endpoint:

* `DELETE` /api/v3/ua/organization/advertiser/4

\
**Request Body Schema: application/json**

Response 200

```json
{
    "success": true,
    "data": "Advertiser profile deleted successfully."
}
```

## Static Details Lists

### Organization Workspace Status

* `GET` /api/v3/ua/static/organization-workspace-status

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `view` | string | Represents the tab from which request was made in customer app <br>Supported values: `customer`, `approval`, `finance` |

Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "pending",
            "id": 2,
            "label": "Pending",
            "order": 1
        },
        {
            "name": "active",
            "id": 1,
            "label": "Active",
            "order": 2
        },
        {
            "name": "invited",
            "id": 3,
            "label": "Invited",
            "order": 3
        },
        {
            "name": "suspended",
            "id": 4,
            "label": "Suspended",
            "order": 4
        },
        {
            "name": "rejected",
            "id": 5,
            "label": "Rejected",
            "order": 5
        }
    ]
}
```

### Customer Type

* `GET` /api/v3/ua/static/customer-type

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "self_served",
            "id": 1,
            "label": "Self Served",
            "order": 2
        },
        {
            "name": "managed_services",
            "id": 2,
            "label": "Managed Services ",
            "order": 1
        },
        {
            "name": "app_users",
            "id": 3,
            "label": "App Users",
            "order": 3
        },
        {
            "name": "advertisers",
            "id": 4,
            "label": "Advertisers",
            "order": 4
        },
        {
            "name": "workspaces",
            "id": 5,
            "label": "Workspaces",
            "order": 5
        }
    ]
}
```

### Customer Payment Type

* `GET` /api/v3/ua/static/customer-payment-types

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "customerPaymentTypes": [
            {
                "name": "prepaid",
                "id": 1,
                "label": "PrePaid",
                "order": 1
            },
            {
                "name": "postpaid",
                "id": 2,
                "label": "PostPaid",
                "order": 2
            }
        ]
    }
}
```

### Customer Account Type

* `GET` /api/v3/ua/static/customer-account-types

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "customerAccountTypes": [
            {
                "name": "advertiser",
                "id": 1,
                "label": "Advertiser",
                "order": 1
            },
            {
                "name": "workspace",
                "id": 2,
                "label": "Workspace",
                "order": 2
            }
        ]
    }
}
```

### Customer List Sortable Fields

* `GET` /api/v3/ua/static/customer-list-sortable-field

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "label": "Status",
            "field": "status",
            "order": 1
        },
        {
            "label": "Date of joining",
            "field": "createdAt",
            "order": 2
        }
    ]
}
```

### Organization Expertise

* `GET` /api/v3/ua/static/organization-expertize

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "account_administration",
            "id": 1,
            "label": "Account Administration",
            "order": 1
        },
        {
            "name": "campaign_optimization",
            "id": 2,
            "label": "Campaign Optimization",
            "order": 2
        },
        {
            "name": "creative_serivces",
            "id": 3,
            "label": "Creative Serivces",
            "order": 3
        },
        {
            "name": "audience_building",
            "id": 4,
            "label": "Audience Building",
            "order": 4
        },
        {
            "name": "inventory_management",
            "id": 5,
            "label": "Inventory Management",
            "order": 5
        },
        {
            "name": "finance_and_accounting",
            "id": 6,
            "label": "Finance & Accounting",
            "order": 6
        },
        {
            "name": "campaign_creation",
            "id": 7,
            "label": "Campaign Creation",
            "order": 7
        }
    ]
}
```

### Company Size

* `GET` /api/v3/ua/static/company-size

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "1_10",
            "id": 1,
            "label": "1-10",
            "order": 1
        },
        {
            "name": "11_50",
            "id": 2,
            "label": "11-50",
            "order": 2
        },
        {
            "name": "51_200",
            "id": 3,
            "label": "51-200",
            "order": 3
        },
        {
            "name": "201_500",
            "id": 4,
            "label": "201-500",
            "order": 4
        },
        {
            "name": "501_1000",
            "id": 5,
            "label": "501-1000",
            "order": 5
        },
        {
            "name": "1001_5000",
            "id": 6,
            "label": "1001-5000",
            "order": 6
        },
        {
            "name": "5000+",
            "id": 7,
            "label": "5000+",
            "order": 7
        }
    ]
}
```

### Industries

* `GET` /api/v3/ua/static/industries

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "accounting",
            "id": 1,
            "label": "Accounting ",
            "order": 1
        },
        {
            "name": "airlines/aviation",
            "id": 2,
            "label": "Airlines/Aviation",
            "order": 2
        },
        {
            "name": "alternative_dispute_resolution",
            "id": 3,
            "label": "Alternative Dispute Resolution",
            "order": 3
        },
        {
            "name": "alternative_medicine",
            "id": 4,
            "label": "Alternative Medicine",
            "order": 4
        },
        {
            "name": "animation",
            "id": 5,
            "label": "Animation",
            "order": 5
        },
        {
            "name": "apparel/fashion",
            "id": 6,
            "label": "Apparel/Fashion",
            "order": 6
        }
        ...
    ]
}
```

### Media Budget

* `GET` /api/v3/ua/static/media-budget

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "<50,000",
            "id": 1,
            "label": "< $50,000",
            "order": 1
        },
        {
            "name": "50,000_100,000",
            "id": 2,
            "label": "$50,000 - $100,000",
            "order": 2
        },
        {
            "name": "100,000_500,000",
            "id": 3,
            "label": "$100,000 - $500,000",
            "order": 3
        },
        {
            "name": "500,000_1,000,000",
            "id": 4,
            "label": "$500,000 - $1,000,000",
            "order": 4
        },
        {
            "name": "1,000,000_10,000,000",
            "id": 5,
            "label": "$1,000,000 - $10,000,000",
            "order": 5
        },
        {
            "name": ">10,000,000",
            "id": 6,
            "label": "> $10,000,000",
            "order": 6
        }
    ]
}
```

### Verticals

* `GET` /api/v3/ua/static/Verticals

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "political",
            "id": 1,
            "label": "Political",
            "order": 1,
            "description": "This caters to advertisers from the political domain targeting users for for issue advocacy, persuasion, event promotion, fundraising and other type of campaigns"
        },
        {
            "name": "healthcare",
            "id": 2,
            "label": "Healthcare",
            "order": 2,
            "description": "This caters to advertisers from domains such as pharmaceutical and medical equipment manufacturers targeting healthcare professionals."
        },
        {
            "name": "specialty",
            "id": 3,
            "label": "Specialty",
            "order": 11,
            "description": "This caters to advertisers from niche domains such as automobiles, finance, retail, travel, B2B and others."
        }
    ]
}
```
