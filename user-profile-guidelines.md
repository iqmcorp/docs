# User Profile Guidelines

IQM's REST API allows you to manage users and their profiles in several different ways.

This page will go over the common endpoints associated with user management.

## Send User Invitation

Any customer or organization can send invitations to one or more users by providing their names and emails using the following endpoint:

* `POST` /api/v3/ua/user/invite

#### Header Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

| Property | Type| Example |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `name` | string [required] | User's name

#### Request Sample

```json
{
    "email": "shraddha.p@iqm.com",
    "name": "Shradda Patel"
}
```

#### Response 200

```json
{
    "success": true,
    "data": "1 invitations sent successfully."
}
```

## Validate User Invite

The invited user will receive an email with a link and a hash which can be validated using this endpoint:

* `POST` /api/v3/ua/invite/validate

#### Request Body Schema: application/json

| Property | Type| Description |
| ---- | ---- | --- |
| `inviteHash` | string [required] | Unique invite hash sent to invited user

#### Request Sample

```json
{
    "inviteHash": "8HQfsQcychjhvCmuuiFvVCIgqq9cJG/gh6HgmPZXxGE4od7a7tsMmh/O9+ia2Lw0FOelX3h8jTKJXR+0hUAkGXYA0cIITS13BxyrWoeBmRTnWTKxHtS+Ff41POwt/yDMY2iHXUsG86ehmWeeIi3HNMikhH5yY6BvNFnEfxq3zIdiouD3Fp/loPO9qazxU1qxZvNOOv8FZEZTzORVnJ8+ADjyZ/Zjs1dNhSFE"
}
```

#### Response 200

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

#### Response 422

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

#### Header Parameters

| Property | Type| Example |
| ---- | ---- | --- |
| `Authorization` | string [required] | `Basic N3BuaWJrdWpleTFvanJnbnNsbjU6MTIzNDU2`

#### Request Body Schema: application json

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

#### Request Sample

```json
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

#### Response 200

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

#### Response 403

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

#### Header Parameters

| Property | Type | Example |
| ---- | ---- | --- |
| `Authorization` | string [required] |  `Basic N3BuaWJrdWpleTFvanJnbnNsbjU6MTIzNDU2` |
| `X-Iaa-Host` | string [required] | `app.stage.inhousebuying.com` |

#### Request Body Schema

| Property | Type| Description |
| ---- | ---- | --- |
| `grantType` | string[required] |  [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

#### Request Sample

```json
{
    "grantType": "password",
    "email": "pratik.t+ihp@iqm.com",
    "password": "123456"
}
```

#### Response 200

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

#### Response 400

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

#### Response 403

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

#### Response Sample

```json
{
    "success": true,
    "data": "User logged out successfully."
}
```

## Change Password

The user can update their password with the following endpoint:

* `POST` /api/v3/ua/user/update-password

#### Request Body Schema: application/json

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |
| `password` | string [required] | User's password |

#### Request Sample

```json
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

#### Response 200

```json
{
    "success": true,
    "data": "Password changed successfully."
}
```

<details>
<summary>More Response Samples</summary>

#### Response 403

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

#### Request Body Schema: application/json

| Property | Type| Description |
| ---- | ---- | --- |
| `email` | string [required] | User's email |

#### Request Sample

```json
{
    "email": "kartik@iqm.com"
}
```

#### Response 200

```json
{
    "success": true,
    "data": "Email with reset password link sent successfully."
}
```

<details>
<summary>More Response Samples</summary>

#### Response 404

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

#### Header Parameters 

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/x-www-form-urlencoded

| Property | Type | Description |
| ---- | ---- | --- |
| `displayName` | string [required] | User Name |
| `userAvatar` | string [required] | If `removeUserProfile` set to -true, can remain null, otherwise: Image file uploaded for profile |
| `removeUserProfile` | boolean [required] | default: -false <br>To remove profile image: -true |

#### Response 200 

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

#### Response 422

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

## User App Access List

See what applications a user has access to, use query parameters to filter results with the following endpoint:

* `GET` /api/v3/ua/user/applications/list

#### Query Parameters

| Property | Type | Example | Description |
| ---- | ---- | --- | --- |
| `uowId` | string [required] | `uowId=495` | uow ID of selected user |
| `searchField` | string [required] | `searchField="iqm"` | (optional) Search keyword |
| `pageNo` | integer [required] | `pageNo=1` | (optional) Page number (default - 1) |
| `limit` | integer [required] | `limit=10` | (optional) Page size (deafult - 10) |
| `sortBy` | string [required] | `sortBy=+appName` | (optional) Sort by fields (deafult: +`appName`) Here minus(-) sign is for order DESC and plus(+) sign for order ASC. Value can be from `appName`, `appType` |

#### Header Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Response 200

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

#### Response 422

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

#### Header Parameters

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace Id Header |

#### Request Body Schema: application/json

| Property | Type | Description |
| ---- | ---- | --- |
| `userID` | integer [required] | User's ID |
| `appIds` | string [required] | Application ID |
| `accessLevel` | string [required] | Level of access granted to user |

#### Request Sample

```json
{
    "userId": 431,
    "appIds": "1",
    "accessLevel": "Full"
}
```
<details>
<summary>Response Samples</summary>

#### Response 200

```json
{
    "success": true,
    "data": "Application access added successfully."
}
```

#### Response 403 

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
