# Finance Guidelines

This page covers the methods and endpoints associated with managing finance operations. In addition to general finance details and lists, there are sections coevering invoice, credit, and payment management. 

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Finance Details

### Get Customer Finance Details

Get an over of a customer's finance details with the following endpoint:

* `GET` /api/v3/fa/customer/financial-details

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `isFinanceRequest` | boolean | For Customer Management Tab: `false` <br>For Finance Tab: `true` |
| `year` | integer | Year for data | 

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

### Get List of Customer Payments

Get a list of payments by customer with the following endpoint:

* `GET` /api/v3/fa/customer/payments/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `status` | string | Status type
| `paymentType` | string | Payment Type |
| `searchField` | string | Search results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-modifiedAt` <br>Supported values: `paymentId`, `paymentDate`, `paymentAmount`, `organizationName`, `paymentType`, `paymentMode`, `paymentStatus`

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 19,
                "createdAt": 1632295016000,
                "createdByUserEmail": "jinesh.p+nonihpcust2@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1632076200000,
                "paymentAmount": 10000,
                "paymentStatus": "Rejected",
                "paymentMode": "PayPal",
                "paymentType": "As Fund",
                "invoiceId": 0,
                "transactionId": "T-1234567",
                "modifiedAt": 1637566978000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": null
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 886,
                "createdAt": 1635831910000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "Check",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831910000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 885,
                "createdAt": 1635831695000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831695000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 884,
                "createdAt": 1635831127000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831127000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 883,
                "createdAt": 1635830983000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": null,
                "modifiedAt": 1635830983000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            }
        ],
        "totalRecords": 68,
        "filteredRecords": 68
    }
}
```

### Get Invoice for Organization

Get an invoice for an organization with the following endpoint:

* `GET` /api/v3/fa/invoice-settings

\
Response 200

```json
{
    "success": true,
    "data": {
        "invoiceId": 1,
        "owId": 334,
        "invoiceTitle": "The Alchemist",
        "invoiceCompanyName": "The Alchemist",
        "invoiceCompanyAddress": "42, 6th Avenue, New york, NY",
        "email": "shraddha.p+alchemist@iqm.com",
        "website": "www.alchemist.com",
        "invoiceDescription": "Dear Customer, Greetings from The Alchemist, we are writing to provice you an electronic invoice for your use of services.",
        "paypalId": 1,
        "chequeTransferId": 1,
        "wireTransferId": 2,
        "termsAndConditions": "Please make the payment in 30 days or your account might be put on hold",
        "paymentTerm": "30",
        "invoiceFooter": "The Alchemist | 12.234.56.789 | USA",
        "createdAt": "2021-08-27T07:33:14.000+00:00"
    }
}
```

### Get Invoice Payment Details

Get invoice payment details by invoice ID with the following endpoint:

* `GET` /api/v3/fa/invoice-settings-payment-details

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `invoiceId` | integer | Invoice ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "paypalPaymentDetail": {
            "paypalId": 1,
            "paypalAccountId": "thealchemistfinance@paypal"
        },
        "chequePaymentDetail": {
            "chequeId": 1,
            "chequeCompanyName": "The Alchemist Company",
            "chequeCompanyAddress": "45, Fifth Avenue, NY, USA"
        },
        "wireTransferPaymentDetail": {
            "wireTransferId": 2,
            "wireTransferCompanyName": "The Alchemist",
            "bankName": "JP Morgan Chase Bank",
            "accountNumber": "670669295",
            "bankAddress": "498 7th Avenue New York NY",
            "swiftCode": "MGTCUS3G",
            "routing": "150098"
        }
    }
}
```

### Get List of Invoices for Customer or Organization

Get a list of invoices by customer or organization with the following endpoints:

* `GET` /api/v3/fa/invoice/list/200485 [customer]
* `GET` /api/v3/fa/invoice/list/200483 [organization]

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `status` | string | Status ID <br>See [static details list](#invoice-status) for supported values |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-invoiceId` <br>Supported values: `issuedOn`, `invoiceAmount`, `status` |
| `isCustomerRequest` | boolean | (Organization endpoint only) Customer app request (default): `true` <br>Organization app request: `false`

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "invoiceId": 79,
                "invoiceFromDate": 1601510400,
                "invoiceToDate": 1604102400,
                "issuedOn": 1632182400,
                "invoiceAmount": 553611.718,
                "status": 7,
                "paymentTerm": 30,
                "paidAmount": 5000,
                "paymentMode": [
                    2,
                    4
                ],
                "invoiceName": "Zydus - Oct2020",
                "actionNote": null,
                "invoiceStatusUpdatedBy": "Kartik Gevariya",
                "modifiedAt": 1632801378000
            }
        ],
        "totalRecords": 0,
        "filteredRecords": 0
    }
}
```



Get a list of payment transactions for an organization with the following endpoint:

* `GET` /api/v3/fa/payments/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `status` | string |  Status ID <br>See [static details list]() for supported values |
| `paymentType` | string | Payment type ID <br>See [static details list]() for supported values |
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


Get an overview of customer's financial details with the following endpoint:

* `GET` /api/v3/fa/customer/financial-details

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `isFinanceRequest` | boolean |
| `year` | integer | Year |

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

### Get Customer Margin Details

Get customer margin details by margin type with the following endpoint:

* `GET` /api/v3/fa/customer/view-margin

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `marginTypeIds` | string | Comma separated margin type IDs <br>See [static details list]() for supported values |
| `owId` | integer | Organization Workspace ID |

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 1,
        "data": [
            {
                "marginTypeId": 1,
                "marginType": "Gross Margin",
                "marginValue": 15
            }
        ],
        "filteredRecords": 1,
        "isBidShadingEnabled": false
    }
}
```

#### Update Customer Margin Details

* `POST` /api/v3/fa/customer/edit-margin

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `marginTypeId` | integer | Margin type ID |
| `marginValue` | integer | Margin value |

\
Request Sample

```json
{
    "owId": 202318,
    "marginTypeId": 1,
    "marginValue": 15
}
```

\
Response 200

```json

```

### Get Campaign Margin Details

Get campaign margin details by campaign ID with the following endpoint:

* `GET` /api/v3/custom/fa/list/campaign-margin-detail

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `campaignIds` | string | Comma separated campaign IDs |

\
Response 200

```json
{
    "success": true,
    "data": {
        "1234": {
            "workspaceMargin": 10,
            "organizationMargin": 10
        },
        "4567": {
            "workspaceMargin": 11,
            "organizationMargin": 20
        }
    }
}
```



### Get Customer PG Fees Details

Get details for customer PG fees with the following endpoint:

* `GET` /api/v3/fa/customer/{owId}/pg-fees

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
        "organizationPgFeesDetails": {
        "pgCampaignFees": 10,
        "pgWorkspaceShare": 15
        }
    }
}
```

#### Edit Customer PG Fees

* `PATCH` /api/v3/fa/customer/{customerOwId}/pg-fees

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `customerOwId` | integer | Customer Organization Workspace ID |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `pgCampaignFees` | integer | PG Campaign Fees |
| `pgWorkspaceShare` | integer |

\
Request Sample

```json
{
    "owId": 202318,
    "pgCampaignFees": 10,
    "pgWorkspaceShare": 15
}
```

Response 200

```json
{
    "success": true,
    "data": "PG Fees details updated Successfully."
}
```

### Get Customer VLD Finance Details

Get finance details for customer VLD with the following endpoint:

* `GET` /api/v3/fa/customer/{customerOwId}/vld-fees

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
        "id": 1,
        "vldRate": 3
    }
}
```

Response 200 (vld flag)

```json
{
    "success": true,
    "data": {
        "id": 3,
        "owId": 201427,
        "vldRate": 3,
        "vldEnabled": true,
        "vldMarkupType": "Percentage",
        "vldMarkupValue": 10
    }
}
```

#### Updates Customer VLD Details

* `PATCH` /api/v3/fa/customer/vld-fees

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | OW ID of the customer to update details (required) |
| `vldRate` | integer | VLD rate for workspace customer |
| `vldEnabled` | boolean | Boolean flag to enable and disable VLD feature for advertiser customer |
| `vldMarkupTypeId` | integer | VLD markup type ID to represent markup types absolute or percentage |
| `vldMarkupValue` | integer | VLD markup value for advertiser customer |

\
Request Sample

```json
{
    "id": 0,
    "owId": 0,
    "vldRate": 0,
    "vldEnabled": true,
    "vldMarkupType": "string",
    "vldMarkupTypeId": 0,
    "vldMarkupValue": 9999
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "id": 1,
        "message": "VLD Rate updated successfully. The new rate applies only to newly created VLDs"
    }
}
```

### Get Basic Details

* `GET` /api/v3/fa/basic/details

\
Response 200

```json
{
    "success": true,
    "data": {
        "paypalFeesPercentage": 3.5
    }
}
```

### Available Balance

* `GET` /api/v3/fa/available-balance

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `isCustomerRequest` | boolean | Customer app request (default): `true` <br>Organization app request: `false` |

\
Response 200

```json
{
    "success": true,
    "data": 5855904.72
}
```

### Credit Summary

Get credit summary by workspace ID with the following endpoint:

* `GET` /api/v3/fa/credit-summary/{owId}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `isCustomerRequest` | boolean | Customer app request (default): `true` <br>Organization app request: `false` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "usedCredit": 21875.37,
        "totalCredit": 50000
    }
}
```

### Offered Credits

Get a list of offered credits to organization with the following endpoint:

* `GET` /api/v3/fa/credits/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `limit` | integer | Maximum number of entries returned, default: `50` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-modifiedAt` |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "creditId": 2,
                "creditAmount": 1000,
                "modifiedAt": "2021-09-08T10:24:32.000+00:00",
                "status": "Unclaimed",
                "organizationName": "JP test org"
            },
            {
                "creditId": 1,
                "creditAmount": 1500,
                "modifiedAt": "2021-09-08T05:46:15.000+00:00",
                "status": "Revoked",
                "organizationName": "JP test org"
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

### Download Invoice

* `GET` /api/v3/fa/download-invoice/{owId}/{invoiceId}

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `isCustomerRequest` | boolean | Customer app request (default): `true` <br>Organization app request: `false` |

\
Response 200

```json

```

### Download Payment Receipt

Get a PDF of payment receipt with the following endpoint:

* `GET` /api/v3/fa/payment/download-receipt/829

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `isCustomerRequest` | boolean | Customer app request (default): `true` <br>Organization app request: `false` |

\
Response 200

```json

```

## Invoice Management

### Update Invoice Settings

* `PATCH` /api/v3/fa/invoice-settings/{invoiceId}

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `isWhiteLabel` | boolean | 

### Delete Invoice Tax Data

* `DELETE` /api/v3/fa/invoice-setings-tax-data

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `taxId` | integer | Tax ID |

### Approve Invoice

Update [invoice status](#invoice-status) with the following endpoint:

* `PATCH` /api/v3/fa/invoice-approve/{invoiceId}

\
**Path Parameter**

| Property | Type | Description |
| ---- | ---- | --- |
| `invoiceId` | integer | Invoice ID |

\
Response 200

```json
{
    "success": true,
    "data": "Invoice with the provided ID approved successfully"
}
```

#### Cancel Invoice

* `PATCH` /api/v3/fa/invoice-cancel/{invoiceId}

\
Response 200

```json
{
    "actionNote": "cancelling invoice"
}
```

### Mark Invoice as Paid

* `POST` /api/v3/fa/pay-invoice

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `paymentAmount` | integer | Payment amount |
| `paymentType` | integer | Payment type ID <br>See [static details list](#payment-types) for supported values |
| `invoiceId` | integer | Invoice ID |

\
Response 200

```json
{
    "success": true,
    "data": "Payment added Successfully."
}
```

### Email Invoice

* `POST` /api/v3/fa/email-invoice/{owId}/{}

\
Response 200

```json
{
    "success": true,
    "data": "Invoice e-mail sent successfully."
}
```

## Credit Management

### Add Credit to Customer

* `POST` /api/v3/fa/customer/credit/add

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `creditAmount` | integer | Credit amount to add |

\
Request Sample

```json
{
    "owId": 23,
    "creditAmount": 5000
}
```

Response 200

```json
{
    "success": true,
    "data": "Credits offered Successfully."
}
```

### Update Credit Offered to Customer

* `PATCH` /api/v3/fa/customer/credit/edit

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `creditAmount` | integer | Credit amount to add |
| `creditId` | integer | Credit ID |

\
Request Sample

```json
{
    "owId": 54,
    "creditAmount": 4000,
    "creditId": 3
}
```

Response 200

```json
{
    "success": true,
    "data": "Credits updated Successfully."
}
```

#### Revoke Credit Offered to Customer

* `POST` /api/v3/fa/customer/credit/revoke

\
Request Sample

```json
{
    "owId": 54,
    "creditId": 2
}
```

Response 200

```json
{
    "success": true,
    "data": "Credits revoked Successfully."
}
```

### Claim Offered Credits

* `POST` /api/v3/fa/credit/claim

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `creditId` | integer | Credit ID |
| `customerName` | string | Customer Name |
| `businessName` | string | Business Name |
| `taxId` | string | Tax ID |
| `contactPersonName` | string | Contact person name |
| `contactPersonEmail` | string | Contact person email |
| `incorporationPlace` | string | Incorporation location |
| `address` | string | Address |

\
Request Sample

```json
{
    "creditId": 4,
    "customerName": "JP test ",
    "businessName": "JP test org3",
    "taxId": "123456",
    "contactPersonName": "JP",
    "contactPersonEmail": "jinesh.p+nonihpcust2@iqm.com",
    "incorporationPlace": "Gujarat, India",
    "address": "A-123, XYZ Complex, Ahmedabad, Gujarat, India - 380059"
}
```

Response 200

```json
{
    "success": true,
    "data": "Credits claimed."
}
```

## Payment Management

### Add Payment for Customer

* `POST` /api/v3/fa/customer/payment/add

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Orginazation Workspace ID |
| `paymentAmount` | integer | Payment amount |
| `paymentDate` | string | Payment date in YYYY-MM-DD format |
| `paymentMode` | integer | Payment mode type ID <br>See [static details list](#invoice-payment-mode-types) for supported values |
| `transactionId` | integer | Transaction ID |
| `paymentProof` | string | [optional] Proof of payment image (jpeg/png) |
| `paymentType` | integer | Payment type ID <br>See [static details list](#payment-types) for supported values |
| `invoiceId` | Invoice ID (provide only of `paymentType` is 'against invoice')

\
Request Sample

```json
{
    "owId": 123654,
    "paymentAmount": 5000,
    "paymentDate": "2025-12-01",
    "paymentMode": 1,
    "transactionId": 10,
    "paymentProof": "image.png",
    "paymentType": 2,
    "invoiceId": 34
}
```

\
Response 200

```json
{
    "success": true,
    "data": "Payment added Successfully."
}
```

#### Edit Customer Payment

* `PUT` /api/v3/fa/customer/payment/{}

\
Response 200

```json
{
    "success": true,
    "data": "Payment updated Successfully."
}
```

### Approve Payment

Update payment status

* `POST` /api/v3/fa/customer/payment/approve/{}

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |
| `actionNote` | string | Description of payent status change |

\
Request Sample

```json
{
    "owId": 200485,
    "actionNote": "Payment paid partially"
}
```

Response 200

```json
{
    "success": true,
    "data": "Payment approved Successfully."
}
```

#### Cancel Payment

* `POST` /api/v3/fa/customer/payment/cancel/{}

#### Reject Payment

* `POST` /api/v3/fa/customer/payment/reject/{}

### Add Payment from Organization App

* `POST` /api/v3/fa/payment/add-fund

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `paymentAmount` | integer | Payment amount |
| `paymentDate` | string | Payment date in YYYY-MM-DD format |
| `paymentMode` | integer | Payment mode type ID <br>See [static details list](#invoice-payment-mode-types) for supported values |
| `paymentProof` | string | [optional] Proof of payment image (jpeg/png) |
| `bankName` | string | Required only if `paymentMode` is 'check' or 'wire transfer' |

\
Response 200

```json
{
    "success": true,
    "data": "Payment Successful."
}
```

### Payment with PayPal

* `POST` /api/v3/fa/paypal/payment

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `paymentAmount` | integer | Payment amount |

\
Response 200

```json
{
    "success": true,
    "data": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-3YM2956846765604B"
}
```

### Initiate Refund

* `POST` /api/v3/fa/customer/payment/refund

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Orginazation Workspace ID |
| `paymentAmount` | integer | Payment amount |
| `paymentDate` | string | Payment date in YYYY-MM-DD format |
| `paymentMode` | integer | Payment mode type ID <br>See [static details list](#invoice-payment-mode-types) for supported values |
| `transactionId` | integer | Transaction ID |
| `paymentProof` | string | [optional] Proof of payment image (jpeg/png) |

\
Response 200

```json
{
    "success": true,
    "data": "Refund Initiated."
}
```

#### Approve Refund

* `POST` /api/v3/fa/customer/payment/approve-refund/{}

\
Response 200

```json
{
    "success": true,
    "data": "Refund successful."
}
```

### Email Payment Receipt

* `POST` /api/v3/fa/payment/email-receipt/{owId}/{}

\
Response 200

```json
{
    "success": true,
    "data": "Payment receipt e-mail sent successfully."
}
```

## Static Details Lists

### Payment Types

* `GET` /api/v3/fa/static/payment-type

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "as_fund",
            "id": 1,
            "label": "As Fund",
            "order": 1
        },
        {
            "name": "against_invoice",
            "id": 2,
            "label": "Against Invoice",
            "order": 2
        },
        {
            "name": "refund",
            "id": 3,
            "label": "Refund",
            "order": 3
        }
    ]
}
```

### Payment Status

* `GET` /api/v3/fa/static/payment-status

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "processing",
            "id": 1,
            "label": "Processing",
            "order": 1
        },
        {
            "name": "paid",
            "id": 2,
            "label": "Paid",
            "order": 2
        },
        {
            "name": "rejected",
            "id": 3,
            "label": "Rejected",
            "order": 3
        },
        {
            "name": "cancelled",
            "id": 4,
            "label": "Cancelled",
            "order": 4
        }
    ]
}
```

### Invoice Payment Mode Types

* `GET` /api/v3/fa/static/invoice-payment-modes

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "paypal",
            "id": 1,
            "label": "PayPal",
            "order": 1
        },
        {
            "name": "cheque",
            "id": 2,
            "label": "Cheque",
            "order": 2
        },
        {
            "name": "wire_transfer",
            "id": 3,
            "label": "Wire Transfer",
            "order": 3
        }
    ]
}
```

### Invoice Status

* `GET` /api/v3/fa/static/invoice-status

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "pending",
            "id": 1,
            "label": "Pending",
            "order": 1
        },
        {
            "name": "partially_paid",
            "id": 2,
            "label": "Partially Paid",
            "order": 2
        },
        {
            "name": "unpaid",
            "id": 3,
            "label": "Unpaid",
            "order": 3
        },
        {
            "name": "paid",
            "id": 4,
            "label": "Paid",
            "order": 4
        },
        {
            "name": "overdue",
            "id": 5,
            "label": "Overdue",
            "order": 5
        },
        {
            "name": "processing",
            "id": 7,
            "label": "Processing",
            "order": 7
        },
        {
            "name": "cancelled",
            "id": 8,
            "label": "Cancelled",
            "order": 8
        }
    ]
}
```

### Invoice Payment Term

* `GET` /api/v3/fa/static/invoice-payment-terms

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "name": "7",
            "id": 1,
            "label": "Net 7",
            "order": 1
        },
        {
            "name": "15",
            "id": 2,
            "label": "Net 15",
            "order": 2
        },
        {
            "name": "30",
            "id": 3,
            "label": "Net 30",
            "order": 3
        },
        {
            "name": "45",
            "id": 4,
            "label": "Net 45",
            "order": 4
        },
        {
            "name": "60",
            "id": 5,
            "label": "Net 60",
            "order": 5
        },
        {
            "name": "90",
            "id": 6,
            "label": "Net 90",
            "order": 6
        },
        {
            "name": "120",
            "id": 7,
            "label": "Net 120",
            "order": 7
        },
        {
            "name": "0",
            "id": 8,
            "label": "Custom",
            "order": 8
        }
    ]
}
```

### PG Payment Type

* `GET` /api/v3/fa/static/pg/payment-type

\
Response 200

```json
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "pgPaymentTypes": [
            {
                "id": 1,
                "name": "publisher",
                "label": "Publisher",
                "order": 1
            },
            {
                "id": 2,
                "name": "platform",
                "label": "Platform",
                "order": 2
            }
        ]
    }
}
```