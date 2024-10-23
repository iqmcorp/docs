# User Profile Guidelines

IQM's REST API allows you to manage users and their profiles in several different ways.

This page will go over the common endpoints associated with user management.

## Send User Invitation

Any customer or organization can send invitations to one or more users by providing their names and emails using the following endpoint:

* `POST` /api/v3/ua/user/invite

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type| Example |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `name` | string [required] | User's name

\
Request Sample

```json
{
    "email": "shraddha.p@iqm.com",
    "name": "Shradda Patel"
}
```

Response 200

```json
{
    "success": true,
    "data": "1 invitations sent successfully."
}
```

## Validate User Invite

The invited user will receive an email with a link and a hash which can be validated using this endpoint:

* `POST` /api/v3/ua/invite/validate

\
**Request Body Schema: application/json**

| Property | Type| Description |
| ---- | ---- | --- |
| `inviteHash` | string [required] | Unique invite hash sent to invited user

\
Request Sample

```json
{
    "inviteHash": "8HQfsQcychjhvCmuuiFvVCIgqq9cJG/gh6HgmPZXxGE4od7a7tsMmh/O9+ia2Lw0FOelX3h8jTKJXR+0hUAkGXYA0cIITS13BxyrWoeBmRTnWTKxHtS+Ff41POwt/yDMY2iHXUsG86ehmWeeIi3HNMikhH5yY6BvNFnEfxq3zIdiouD3Fp/loPO9qazxU1qxZvNOOv8FZEZTzORVnJ8+ADjyZ/Zjs1dNhSFE"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "isExpired": true
    }
}
```

<details>
<summary>More Response Samples</summary>

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Provided invitation has is incorrect.",
            "field": "inviteHash"
        }
    ]
}
```

</details>

## User Sign-Up

A user/customer can sign up and create a password to access the API using the following endpoint:

* `POST` /api/v3/ua/sign-up

\
**Header Parameters**

| Property | Type| Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |

\
**Request Body Schema: application json**

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

\
Request Sample

```json
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

Response 200

```json
{
    "success": true,
    "data": {
        "access_token": "d90fa7de-534c-4652-ad8f-c4f6f70461ac",
        "refresh_token": "2e379c6f-959d-498f-8319-ff13ebef6bfe",
        "scope": "read write",
        "token_type": "bearer",
        "expires_in": 35999
        }
}
```

<details>
<summary>More Response Samples</summary>

Response 403

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "User is not allowed to create a password.",
            "reason": "User is not invited or invitation is processed or invitation is expired."
        }
    ]
}
```

</details>

## Login

Once the user/customer logs in, the API will send an OAuth compliant response with OW ID which can be used for further API communications. Use the following endpoint:

* `POST` /api/v3/ua/login

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-HOST` | string [required] | Workspace URL |

\
**Request Body Schema: application/json**

| Property | Type| Description |
| ---- | ---- | --- |
| `grantType` | string[required] |  [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

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
    "data": {
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
    "data": {
        "status": "On Hold",
        "reason": "The particular account is kept on hold due to missed payment dates for last 3 months.",
        "supportEmail": "support@iqm.com"
    },
    "errorObjects": [
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
    "errorObjects": [
        {
            "error": "User doesn't exist or user is not allowed to provided workspace."
        }
    ]
}
```

</details>

## User Logout

The user can log out from the API using the following endpoing:

* `POST` /api/v3/ua/logout

\
Response Sample

```json
{
    "success": true,
    "data": "User logged out successfully."
}
```

## Change Password

The user can update their password with the following endpoint:

* `POST` /api/v3/ua/user/update-password

\
**Request Body Schema: application/json**

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

\
Request Sample

```json
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

Response 200

```json
{
    "success": true,
    "data": "Password changed successfully."
}
```

<details>
<summary>More Response Samples</summary>

Response 403

```json
{
    "success": true,
    "data": {
        "invalidReason": "Reset password link either not valid or it is already processed.",
        "isValid": false
    }
}
```

</details>

## Reset Password Email

The user can send a link to reset a password to a specified email using the following endpoint:

* `POST` /api/v3/ua/user/reset-password

\
**Request Body Schema: application/json**

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |

\
Request Sample

```json
{
    "email": "kartik@iqm.com"
}
```

Response 200

```json
{
    "success": true,
    "data": "Email with reset password link sent successfully."
}
```

<details>
<summary>More Response Samples</summary>

Response 404

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "The email is not available in the system."
        }
    ]
}
```

</details>

## Update User Profile

The user's profile display name and avatar can be updated with the following endpoint:

* `PATCH` /api/v3/ua/user/update-profile

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/x-www-form-urlencoded**

| Property | Type | Description |
| ---- | ---- | --- |
| `displayName` | string [required] | User Name |
| `userAvatar` | string [required] | If `removeUserProfile` set to -true, can remain null, otherwise: Image file uploaded for profile |
| `removeUserProfile` | boolean [required] | default: -false <br />To remove profile image: -true <br />|

\
Response 200 

```json
{
    "success": true,
    "data": {
        "userAvatar": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/user-profile/444.jpg",
        "message": "Profile updated successfully."
    }
}
```

<details>
<summary>More Response Samples</summary>

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Profile image should not be more than 3 MB"
        }
    ]
}
```

</details>

## Get List of Users

Get a list of users and details for a given workspace ID with the following endpoint:

* `GET` /api/v3/ua/users/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `status` | string | Status of user, default: `""` |
| `searchField` | string | Search results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `+displayName` |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Resource Properties**

| Property | Type | Description |
| --- | --- | --- |
| `userId` | integer | Unique user ID |
| `firstName` | string | User's first name |
| `lastName` | string | User's last name |
| `email` | string | User's email |
| `displayName` | string | User's display name |
| `status` | string | User's status |
| `statusId` | integer | Status ID |
| `userAvatar` | string | Image file uploaded for profile |
| `createdAt` | integer | Unix timestamp in Milliseconds when account was created |
| `uowId` | integer | User Organization Workspace ID |
| `customersCount` | integer | Count of customers assigned to user |
| `organizationName` | string | Organization associated with user |
| `invitedOn` | integer | Unix timestamp in Milliseconds when user was invited to create account |
| `isOrganizationOwnerUSer` | boolean | User is owner of organization (`true`) or not (`false`) |
| `isModifactionAllowed` | boolean | User is allowed to modify (`true`) or not (`false`) |
| `invitedByUserName` | string | Name of user that invited user |
| `invitedByUserEmail` | string | Email of user that invited user |
| `isAssignActionAllowed` | boolean | User is allowed to assign (`true`) or not (`false) |

\
Response Sample

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "userId": 7130,
                "firstName": "sample adv user -2",
                "lastName": "2",
                "email": "sample-user@iqm.com",
                "displayName": "sample adv user - 2",
                "status": "active",
                "statusId": 1,
                "userAvatar": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/K2.png",
                "createdAt": 1705452608000,
                "uowId": 119592,
                "customersCount": 0,
                "organizationName": "Adv Acc 1",
                "invitedOn": 1705452608000,
                "isOrganizationOwnerUser": false,
                "isModificationAllowed": true,
                "invitedByUserName": "User 2",
                "invitedByUserEmail": "user2@iqm.com",
                "isAssignActionAllowed": true
            },
            {
                "userId": 7131,
                "firstName": "sample-adv-user-3",
                "email": "sample-user1@iqm.com",
                "displayName": "sample-adv-user-3",
                "status": "invited",
                "statusId": 3,
                "userAvatar": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/KH.png",
                "createdAt": 1705466349000,
                "uowId": 119595,
                "customersCount": 0,
                "organizationName": " Adv Acc",
                "invitedOn": 1705466349000,
                "isOrganizationOwnerUser": false,
                "isModificationAllowed": true,
                "invitedByUserName": "User 1",
                "invitedByUserEmail": "user1@iqm.com",
                "isAssignActionAllowed": true
            },
        ],
        "totalRecords": 6,
        "filteredRecords": 2
    }
}
```

## User App Access List

See what applications a user has access to, use query parameters to filter results with the following endpoint:

* `GET` /api/v3/ua/user/applications/list

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- | 
| `uowId` | integer | User Organization Workspace ID |
| `searchField` | string | Search results by keyword |
| `limit` | integer | Maximum number of entries returned, default: `10` |
| `pageNo` | integer | Page number for the data, default: `1` |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `+appName` |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
Response 200

```json
{
    "success": true,
    "data": {
        "data": [
            {
                "appId": 7,
                "appName": "Campaigns",
                "appOwner": "IQM Corporation",
                "appType": "Default App"
            },
            {
                "appId": 11,
                "appName": "Conversions",
                "appOwner": "IQM Corporation",
                "appType": "Default App"
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }  
}
```

<details>
<summary>More Response Samples</summary>

Response 422

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "Invalid sortBy value."
        }
    ]
}
```

</details>

## Add App Access for User

A user can be granted access to specified apps using the following endpoint:

* `POST` /api/v3/ua/user/application/add

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)<br /> |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `userID` | integer [required] | User's ID |
| `appIds` | string [required] | Application ID |
| `accessLevel` | string [required] | Level of access granted to user |

\
Request Sample

```json
{
    "userId": 431,
    "appIds": "1",
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

<details>
<summary>More Response Samples</summary>

Response 403 

```json
{
    "success": false,
    "errorObjects": [
        {
            "error": "User doesn't exist or user is not part of the organization."
        }
    ]
}
```

</details>
