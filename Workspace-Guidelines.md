# Organization, Workspace, And Customer Guidelines

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Organization Details

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
| `isAvatarUrl` | boolean | 
| `organizationLogo` | string | Logo image file | 
| `industry` | string | Industry category <br>See [static details list](#industries) for supported values |
| `companySize` | integer | Number of employees at organization <br>See [static details list](#company-size) for supported values |
| `companyId` | string | Company ID |
| `taxId` | string | Tax ID | 
| `currency` | string | Currency type |
| `dateFormat` | string | Date formate, e.g. "MM/DD/YYYY" |
| `description` | string | Description of organization |
| `expertize` | string | <br>See [static details list](#organization-expertise) for supported values

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

### Add/Update Organization Payment Settings



## Workspace Management

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

### Customer Resource Properties

| Property | Type | Description |
| ---- | ---- | --- |
| `isUserAllowed` | boolean | 
| `isWorkspaceOwner` | boolean | 

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
| `customerAccountType` | string | 

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

### Get Multi-level Customers List

* `GET` /api/v3/ua/customers/list/multi-level

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owIds` | string | Comma separated OW IDs of organizations whose customers need to be retrieved |
| `status` | string | Comma separated `owId` status IDs |
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


## Customer Management

### Invite Customer to Platform

Invite a customer to the platform (as workspace or advertiser) with the following endpoint: 

* `POST` /api/v3/ua/customer/invite

\
**Request Body Schema: application/json**

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
| `budgetSpent` | integer | 

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

### Unassign Customer from User

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

### Get Customer Financial Overview

Get an overview of customer details with the following endpoint:

* `GET` /api/v3/fa/customer/financial-details

## Advertiser Management

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

## Finance Management

### Get Customer Finance Details

Get an over of a customer's finance details with the following endpoint:

* `GET` /api/v3/fa/customer/financial-details

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `isFinanceRequest` | boolean | For Customer Management Tab: `false` <br>For Finance Tab: `true` |
| `year` | inteer | Year for data | 

\
Response 200

```json
{
    "success": true,
    "data": {
        "pendingCampaigns": 15,
        "runningCampaigns": 10,
        "totalCampaigns": 48,
        "dataCost": 0,
        "actualSpent": 0,
        "credits": 0,
        "balance": 30430.75,
        "spent": 0,
        "earning": 0
    }
}
```

### Get List of Payment Transactions for Organization

Get a list of payment transactions for an organization with the following endpoint:

* `GET` /api/v3/fa/payments/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `status` | string | Status type
| `paymentType` | string | Payment Type |
| `searchField` | string | Search results by keyword |
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
                "isPaymentInitiatorOrg": true,
                "paymentId": 19,
                "createdByUserEmail": "jinesh.p+nonihpcust2@iqm.com",
                "paymentDate": 1632076200000,
                "paymentAmount": 10000,
                "paymentStatus": "Rejected",
                "paymentMode": "PayPal",
                "paymentType": "As Fund",
                "invoiceId": 0,
                "modifiedAt": 1637566978000,
                "bankName": null,
                "refundReason": null
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 886,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "Check",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831910000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 885,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831695000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 884,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831127000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 883,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635830983000,
                "bankName": null,
                "refundReason": "Testing"
            }
        ],
        "totalRecords": 68,
        "filteredRecords": 68
    }
}
```

## Static Details Lists

### Organization Workspace Status

* `GET` /api/v3/ua/static/organization-workspace-status

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `view` | string |

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
