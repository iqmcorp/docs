# Quickstart Guide: Matched Audience Upload

IQM’s REST API enables you to interact with most of IQM’s offerings.

Getting started with uploading your first matched audience is easy; just use the following endpoints:

* `POST` /api/v3/ua/login
* `POST` /api/v3/audience/static/matched/column-list
* `POST` /api/v2/audience/matched/add
* `GET` /api/v2/audience/matched/{matched_audience_Id}

## About IQM Matched Audience

The IQM APIs provide access to upload the audience for matching in XLSX or CSV format. You can use the APIs to connect to applications of your choice.

Once uploaded and processed, the matched audience can be used for advertising campaign targeting.

## Before you begin

To upload Matched Audience, you must have the following:

1. An Account On the IQM platform
1. CSV or XLSX file for matching

If you do not have any of the above, please follow the steps below:

* See [Before You Begin](/docs/index.md#before-you-begin) section to create an account and request a Client ID and Client Secret.
* File requirements for audience matching
  * CSV or XLSX file for audience matching with maximum 1GB or 5M records
  * Without Voter ID / Email / Phone / Address in the file
    * One of the following system field combinations is required for matching
      * First Name, Last Name, Zip, State
      * Last Name, Street Address, Zip, State
      * Street Address, Zip, state
    * Other fields are optional and can be added along with the above fields
  * With Voter ID / Email / Phone / Address in the file
    * Only one of these fields is required - Voter ID or Email or Phone, or Address. The preferred format for full address is Street, City, Zip, and State
    * Other fields are optional and can be added along with one of the above fields

## Upload Matched Audience using the IQM API

This quick start will help you to create a matched audience.  At a minimum, you must log in, select columns for matching, and upload your audience. Once you have accomplished these basics, you can continue learning more about our API through the [documentation](https://app.iqm.com/docs).

1. Log In
   * Optional if you have already logged in and have a token
1. Request Column List
   * Optional if you know what you need or have already requested before
1. Upload Matched Audience
   * Upload the audience with parameters from the previous steps
1. Check Audience Status
   * Matched audience requires processing and approval before it can be used for targeting

### Step 1: Log in

To log in, the `Authorization: Basic` header is required. The Login API returns an OAuth-compliant response with an Organization Workspace ID (OWID), a unique identifier for each organization. This ID will be used for any further API communications.

* `POST` /api/v3/ua/login

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string (required) | Authorization bearer token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string (required) | Workspace URL |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `grantType` | string (required) | [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string (required) | Your user account email |
| `password` | string (required) | Your user accout password |

\
Request Sample

```json
{
   "grantType": "password",
   "email": "pratik.t+ihp@iqm.com",
   "password": "123456"
}
```

Response 200

```json
{
   "success": true,
   "data":
   {
      "access_token": "106adb25-37b0-4cab-8381-d682fe7cc3c8",
      "refresh_token": "eac4c1f6-781e-4b04-baff-9c2e415d1f64",
      "scope": "read write",
      "token_type": "bearer",
      "expires_in": 35999,
      "owId": 200001
   }
}
```
<details>
<summary>More Response Samples</summary>

Response 400

```json
{
   "success": false,
   "data":
   {
      "status": "On Hold",
      "reason": "The particular account is kept on hold due to missed payment dates for last 3 months.",
      "supportEmail": "support@iqm.com"
   },
   "errorObjects":
   [
      {
         "error": "User is not allowed to access provided customer",
         "reason": "User is not associated with any active organization."
      }
   ]
}
```

Response 403

```json
{
   "success": false,
   "errorObjects":
   [
      {
         "error": "User doesn't exist or user is not allowed to provided workspace."
      }
   ]
}
```

</details><br>

For further information see the complete [Login API Documentation](https://app.iqm.com/docs/?path=tag/User-Management-API/operation/Login).

### Step 2: Request column list

To upload a matched audience, you must provide a list of mapping between IQM-allowed fields and columns in your file. Use the column list endpoint to request a full list of allowed columns for mapping.

* `POST` /api/v3/audience/static/matched/column-list

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string | Authorization Bearer Token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | string | Organization Workspace ID Header |

\
Response 200

```json
{
   "statusCode":200,
   "responseObject":{
      "mandatoryColumns":[
         {
            "id":2,
            "name":"First Name",
            "l2Name":"Voters_FirstName"
         },
         {
            "id":3,
            "name":"Last Name",
            "l2Name":"Voters_LastName"
         },
         {
            "id":4,
            "name":"State",
            "l2Name":"Residence_Addresses_State"
         },
         {
            "id":6,
            "name":"Zip",
            "l2Name":"Residence_Addresses_Zip"
         }
      ],
      "voterIDColumns":[
         {
            "id":1,
            "name":"Voter ID",
            "l2Name":"LalVoterID"
         }
      ],
      "optionalColumns":[
         {
            "id":5,
            "name":"Address",
            "l2Name":"Residence_Addresses_AddressLine"
         },
         {
            "id":7,
            "name":"Full Name",
            "l2Name":"Voters_FullName"
         },
         {
            "id":8,
            "name":"City",
            "l2Name":"Residence_Addresses_City"
         },
         {
            "id":9,
            "name":"ZipPlus4",
            "l2Name":"Residence_Addresses_ZipPlus4"
         },
         {
            "id":10,
            "name":"Age",
            "l2Name":"Voters_Age"
         },
         {
            "id":11,
            "name":"Gender",
            "l2Name":"Voters_Gender"
         },
         {
            "id":12,
            "name":"Ethnicity",
            "l2Name":"Ethnic_Description"
         },
         {
            "id":13,
            "name":"Cellphone",
            "l2Name":"VoterTelephones_CellphoneUnformatted"
         },
         {
            "id":14,
            "name":"Landline",
            "l2Name":"VoterTelephones_LandlineUnformatted"
         },
         {
            "id":15,
            "name":"Latitude",
            "l2Name":"Residence_Addresses_Latitude"
         },
         {
            "id":16,
            "name":"Longitude",
            "l2Name":"Residence_Addresses_Longitude"
         }
      ]
   }
}
```

For further information see the complete [Matched Audience Fields API Documentation](https://app.iqm.com/docs?path=tag/Audience-API/operation/GetMatchedAudienceFields).

### Step 3: Upload matched audience

To upload matched audiences,  provide file columns for matching and all the necessary parameters.

* `POST` /api/v2/audience/matched/add

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string  | Authorization Bearer Token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | string |  Organization Workspace ID Header |

\
**Payload (Form Data)**

Please refer to [MDN documentation on form data format](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data).

<table>
  <tr>
   <td><strong>columns *</strong>
<p>
<code>string</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Matched audience file columns mapped with system fields 
 
This supports a few columns mapping as follows: 
 
1. FirstName, LastName, State, Zip - 
SampleValue: <code>{ "FirstName": "Voters_FirstName", "LastName": "Voters_LastName", "mState": "Residence_Addresses_State", "mZip5": "Residence_Addresses_Zip" }</code>

2. LastName, StreetAddress, State, Zip - SampleValue: <code>{ "LastName": "Voters_LastName", "StreetAddress": "Residence_Addresses_AddressLine", "mState": "Residence_Addresses_State", "mZip5": "Residence_Addresses_Zip" }</code>

3. StreetAddress, State, Zip - SampleValue: <code>{ "StreetAddress": "Residence_Addresses_AddressLine", "mState": "Residence_Addresses_State", "mZip5": "Residence_Addresses_Zip" }</code>

4. NPI_ID - SampleValue: <code>{ "NPI_ID_VALUE": "NPI_ID" }</code>

5. VoterId - SampleValue: <code>{ "LALVOTERID": "Voters_ID" }</code>

6. Phone - SampleValue: <code>{ "Phone": "Phone" }</code>

7. Email - SampleValue: <code>{ "Email": "Email" }</code>
8. FullAddress - SampleValue: <code>{ "FullAddress": "Residence_FullAddress" }</code>
   </td>
  </tr>
</table>

<table>
  <tr>
   <td>columnSettings
<p>
<code>string</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Matched audience columns setting as per the selected columns for matching 
Column setting should be as per the selected column as follows: 
 
1. FirstName, LastName, State, Zip - NOT REQUIRED. 
 
2. LastName, StreetAddress, State, Zip - NOT REQUIRED. 
 
3. StreetAddress, State, Zip - NOT REQUIRED. 
 
4. LastName, StreetAddress, State, Zip -NOT REQUIRED. 
 
5. VoterId (It must be supported voter's data partners id [see API documentation](https://app.iqm.com/docs?path=/Audience%20API/getMatchedAudienceDataPartner)) - SampleValue: <code>{ "Voters_ID": "voterbase_id" }</code>

6. NPI_Id (It must be supported healthcare data partners id [see API documentation](https://app.iqm.com/docs?path=tag/Audience-API/operation/addMatchedAudience)) - SampleValue: <code>{ "NPI_ID": "healthcare_id" }</code>

7. Phone (It must be supported data format's id [see API documentation](https://app.iqm.com/docs?path=/Audience%20API/getMatchedAudienceDataFormats)) - SampleValue: <code>{ "Phone": "SHA1" }</code>

8. Email (It must be supported data format's id [see API documentation](https://app.iqm.com/docs?path=/Audience%20API/getMatchedAudienceDataFormats))- SampleValue: <code>{ "Email": "SHA256" }</code>

9. FullAddress - NOT REQUIRED.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>audienceName *</strong>
<p>
<code>string</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Name of matched audience
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>metadata *</strong>
<p>
<code>string</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Matched audience sample data with system fields
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>fileTotalCount *</strong>
<p>
<code>integer($int32)</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Total number of records in the uploaded audience file
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>isSingleColumnEnabled *</strong>
<p>
<code>boolean</code>
<p>
<code><em>(FormData)</em></code>
   </td>
   <td>Flag to indicate if the mapping is single column enabled, if the voterId/phone/email/full-address the primary column mapping than this should be true, and false otherwise
<p>
<em>Default value</em> : false
   </td>
  </tr>
</table>

Request Sample (FormData)

```
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="file"; filename="matched-audience-example.csv"
Content-Type: text/csv

------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="columns"

{"first-name":"Voters_FirstName","last-name":"Voters_LastName","zip":"Residence_Addresses_Zip","state":"Residence_Addresses_State","street-address":"Residence_Addresses_AddressLine"}
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="metadata"

{"columns":["registered-voter-id","l2-voter-id","targetsmart-voter-id","first-name","last-name","street-address","city","zip","zipplus4","state","full-address","phone","email","phone-sha256","email-sha256","npi-id"],"fileName":"matched-audience-example.csv","fileSize":1777,"columnValues":{"registered-voter-id":["23457","456789","34567"],"l2-voter-id":["LALNY987654","LALNY76543","LALNY54321"],"targetsmart-voter-id":["NY-000020745","NY-000032452","NY-000069778"],"first-name":["Bilbo","Frodo","Samwise"],"last-name":["Baggins","Baggins","Gamgee"],"street-address":["11 The Shire Middle Earth","22 The Shire Middle Earth","33 The Shire Middle Earth"],"city":["New York","New York","New York"],"zip":["10001","10010","10011"],"zipplus4":["1122","2233","3344"],"state":["NY","New York","NY"],"full-address":["11 The Shire Middle Earth, New York, 10001, NY","22 The Shire Middle Earth, New York, 10010, NY","33 The Shire Middle Earth, New York, 10011, NY"],"phone":["3456789012","5678901234","7890123456"],"email":["Bilbo.Baggins@lotr.com","Frodo.Baggins@lotr.com","Samwise.Gamgee@lotr.com"],"phone-sha256":["26cc49f1a2133f3784b937017f9cc86e05b5413c7f91b0b6bd6375631b68371e","2f510ce904687db4b2706fdaf33f1d0e678be13cc5fe300cf695a546befa5fc8","453fc17260d034186d92d1e58cc557fea9cafc1bf886154b472057feed950605"],"email-sha256":["43f5f8fabe82fc8dce2452267f5550bb036d0ddf33368682a9cd5da8286d63a0","ceb005d969f16f9a6a487849d27bf854fac1f0733aa61995bcbb5cb928dfc410","986c1ae0d3cef60591d3b29aa54afb5d9654406d7cfa4fcbb65c3ad45ad1ce5c"],"npi-id":["1144317652","1467478172","1275506503"]},"rows":5}
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="audienceName"

Matched Audience Sample
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="isSingleColumnEnabled"

false
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ
Content-Disposition: form-data; name="fileTotalCount"

5
------WebKitFormBoundary2LAoPYE0pJvRQ6mQ--
```

Response 200

```json
{
   "statusCode": 200,
   "responseObject": {
       "id": 15332,
       "message": "Audience created successfully"
   }
}
```

<details>
<summary>More Response Samples</summary>

Response 400

```json
{
   "statusCode": 400,
   "responseObject": {
     "errorMsg": "Audience name can not be null.",
     "errorCode": 400
   }
}
```

Response 500

```json
{
   "statusCode": 500,
   "responseObject": {
     "errorMsg": "Internal server error",
     "errorCode": 500
   }
}
```
</details><br>


For further information see the complete [Matched Audience Upload API Documentation](https://app.iqm.com/docs?path=tag/Audience-API/operation/addMatchedAudience).

### Step 4: Check audience status

Before the audience can be used for campaign targeting it has to be processed and approved.  Once the status is Ready, the audience can be targeted. To get audience details use the following endpoint:

* `GET` /api/v2/audience/matched/{matched_audience_Id}

\
**Path Parameters**

| Path | Type| Description |
| ---- | ---- | --- |
| `mathced_audience_id` | string [required] | |

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string  | Authorization Bearer Token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | string | Organization Workspace ID Header |

\
Response 200

```json
{
   "statusCode": 200,
   "responseObject": {
     "id": 1,
     "audienceName": "Sample audience name",
     "existingColumnMatching": "{\"FirstName\":\"Voters_FirstName\",\"LastName\":\"Voters_LastName\",\"State\":\"Residence_Addresses_State\",\"Zip4\":\"Residence_Addresses_Zip\"}",
     "metadata": "{\"voterIDColumn\":[],\"columns\":[\"Voter File VANID\",\"LastName\",\"FirstName\",\"MiddleName\",\"Suffix\",\"Address\",\"City\",\"State\",\"Zip5\",\"Zip4\",\"Sex\",\"Age\",\"Preferred Phone\",\"CD\",\"SD\",\"HD \"],\"fileName\":\"NYSD3DigitalUniverse.csv\",\"fileSize\":7856375,\"rows\":0}",
     "rawS3URL": "",
     "status": "Pending",
     "matchRate": 57.88,
     "minEcpm": 0,
     "maxEcpm": 0,
     "s3FileName": "MatchedAudienceSample.csv",
     "included": 0,
     "excluded": 0,
     "createdDate": 1642843451,
     "modifiedDate": 1642843884,
     "organizationName": "Sample organization name",
     "userName": "Sample user name",
     "expectedSpent7": 0,
     "expectedSpent30": 0,
     "expectedSpent60": 0,
     "dataCost": 1.5,
     "owId": 1,
     "uowId": 1,
     "rawS3URLError": "File not available currently, please check later",
     "uniques": 52432,
     "approvedRejectedByUserName": "Sample user name",
     "approvedRejectedByUserEmail": "example@example.com",
     "isApprovalAccess": true,
     "isEditAccess": true
   }
 }
```

For further information see the complete [Matched Audience Details API Documentation](https://app.iqm.com/docs?path=tag/Audience-API/operation/GetMatchedAudienceDetails).

## Best Practices

The message rate limit is 20 requests per minute. Exceeding this limit will cause a 429 (too many requests) error. 

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.
