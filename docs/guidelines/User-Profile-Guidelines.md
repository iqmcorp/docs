# User Management API

IQM's REST API allows you to manage users and their profiles in several different ways.

This page will go over the common endpoints associated with user management.

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/Quickstart%20Guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Send User Invitation

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/user/invite</span>

<div class="container">
  <div class="child1">

Any customer or organization can send invitations to one or more users by providing their names and emails.

| Request Schema | |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> | User's email |
| `name` <br /><span class="type-text">string</span> | User's name

</div><div class="child2">

```json title="Request Sample"
{
    "email": "shraddha.p@iqm.com",
    "name": "Shradda Patel"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "1 invitations sent successfully."
}
```

</div></div>

---

## Validate User Invite

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/invite/validate</span>

<div class="container">
  <div class="child1">

The invited user will receive an email with a link and a hash which can be validated.

| Request Schema|  |
| ----  | --- |
| `inviteHash` <br /><span class="type-text">string</span> | Unique invite hash sent to invited user

</div><div class="child2">

```json title="Request Sample"
{
    "inviteHash": "8HQfsQcychjhvCmuuiFvVCIgqq9cJG/gh6HgmPZXxGE4od7a7tsMmh/O9+ia2Lw0FOelX3h8jTKJXR+0hUAkGXYA0cIITS13BxyrWoeBmRTnWTKxHtS+Ff41POwt/yDMY2iHXUsG86ehmWeeIi3HNMikhH5yY6BvNFnEfxq3zIdiouD3Fp/loPO9qazxU1qxZvNOOv8FZEZTzORVnJ8+ADjyZ/Zjs1dNhSFE"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "isExpired": true
    }
}
```

<details>
<summary>More Response Samples</summary>

```json title="Response 422"
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

</div></div>

---

## User Sign-Up

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/sign-up</span>


<div class="container">
  <div class="child1">

A user/customer can sign up and create a password to access the API.

| Request Schema | |
| ----  | --- |
| `email` <br /><span class="type-text">string</span>| User's email |
| `password` <br /><span class="type-text">string</span> | User's password |

</div><div class="child2">

```json title="Request Sample"
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

```json title="Response 200"
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

```json title="Response 403"
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

</div></div>

---

## Login

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/login</span>

<div class="container">
  <div class="child1">

Once the user/customer logs in, the API will send an OAuth compliant response with OW ID which can be used for further API communications.

| Request Schema |  |
| ---- | --- |
| `grantType` <br /><span class="type-text">string</span> |  [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` <br /><span class="type-text">string</span> | User's email |
| `password` <br /><span class="type-text">string</span> | User's password |

</div><div class="child2">

```json title="Request Sample"
{
    "grantType": "password",
    "email": "pratik.t+ihp@iqm.com",
    "password": "123456"
}
```

```json title="Response 200"
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

```json title="Response 400"
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

```json title="Response 403"
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

</div></div>

---

## User Logout

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/logout</span>

<div class="container">
  <div class="child1">

The user can log out from the API.

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "User logged out successfully."
}
```

</div></div>

---

## Change Password

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/user/update-password</span>

<div class="container">
  <div class="child1">

The user can update their password.

| Request Schema|  |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> | User's email |
| `password` <br /><span class="type-text">string</span> | User's password |

</div><div class="child2">

```json title="Request Sample"
{
    "email": "kartik.g@iqm.com",
    "password": "123456"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Password changed successfully."
}
```

<details>
<summary>More Response Samples</summary>


```json title="Response 403"
{
    "success": true,
    "data": {
        "invalidReason": "Reset password link either not valid or it is already processed.",
        "isValid": false
    }
}
```

</details>

</div></div>

## Reset Password Email

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/user/reset-password</span>

<div class="container">
  <div class="child1">

The user can send a link to reset a password to a specified email.

| Request Schema |  |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> | User's email |

</div><div class="child2">

```json title="Request Sample"
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

```json title="Response 404"
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

</div></div>

---

## Update User Profile

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/ua/user/update-profile</span>

<div class="container">
  <div class="child1">

The user's profile display name and avatar can be updated.

| Request Schema  |  |
| ----  | --- |
| `displayName` <br /><span class="type-text">string</span> | User Name |
| `userAvatar` <br /><span class="type-text">string</span> | If `removeUserProfile` set to `true`, can remain null, otherwise: Image file uploaded for profile |
| `removeUserProfile` <br /><span class="type-text">boolean</span> | default: `false` <br />To remove profile image `true`|

</div><div class="child2">

```json title="Response 200"
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

```json title="Response 422"
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

</div></div>

---

## Get List of Users

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ua/users/list</span>

<div class="container">
  <div class="child1">

Get a list of users and details for a given workspace ID.

| Query Parameters | |
| ---- | --- |
| `status` <br /><span class="type-text">string</span> | Status of user, default: `""` |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `10` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `+displayName` |

| Attributes  |  |
| ---  | --- |
| `userId` <br /><span class="type-text">integer</span> | Unique user ID |
| `firstName` <br /><span class="type-text">string</span> | User's first name |
| `lastName` <br /><span class="type-text">string</span> | User's last name |
| `email` <br /><span class="type-text">string</span> | User's email |
| `displayName` <br /><span class="type-text">string</span> | User's display name |
| `status` <br /><span class="type-text">string</span> | User's status |
| `statusId` <br /><span class="type-text">integer</span> | Status ID |
| `userAvatar` <br /><span class="type-text">string</span> | Image file uploaded for profile |
| `createdAt` <br /><span class="type-text">integer</span> | Unix timestamp in Milliseconds when account was created |
| `uowId` <br /><span class="type-text">integer</span> | User Organization Workspace ID |
| `customersCount` <br /><span class="type-text">integer</span> | Count of customers assigned to user |
| `organizationName` <br /><span class="type-text">string</span> | Organization associated with user |
| `invitedOn` <br /><span class="type-text">integer</span> | Unix timestamp in Milliseconds when user was invited to create account |
| `isOrganizationOwnerUSer` <br /><span class="type-text">boolean</span> | User is owner of organization (`true`) or not (`false`) |
| `isModifactionAllowed` <br /><span class="type-text">boolean</span> | User is allowed to modify (`true`) or not (`false`) |
| `invitedByUserName` <br /><span class="type-text">string</span> | Name of user that invited user |
| `invitedByUserEmail` <br /><span class="type-text">string</span> | Email of user that invited user |
| `isAssignActionAllowed` <br /><span class="type-text">boolean</span> | User is allowed to assign (`true`) or not (`false`) |

</div><div class="child2">

```json title="Response 200"
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

</div></div>

---

## User App Access List

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/ua/user/applications/list</span>

<div class="container">
  <div class="child1">

See what applications a user has access to, use query parameters to filter results.

| Query Parameters|  |
| ---- | --- | 
| `uowId` <br /><span class="type-text">integer</span> | User Organization Workspace ID |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `10` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `+appName` |

</div><div class="child2">

```json title="Response 200"
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

```json title="Response 422"
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

</div></div>

---

## Add App Access for User

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/user/application/add</span>

<div class="container">
  <div class="child1">

A user can be granted access to specified apps.

| Request Schema |  |
| ---- | --- |
| `userID` <br /><span class="type-text">integer</span> | User's ID |
| `appIds` <br /><span class="type-text">string</span> | Application ID |
| `accessLevel` <br /><span class="type-text">string</span> | Level of access granted to user |

</div><div class="child2">

```json title="Request Sample"
{
    "userId": 431,
    "appIds": "1",
    "accessLevel": "Full"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Application access added successfully."
}
```

<details>
<summary>More Response Samples</summary>

```json title="Response 403"
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

</div></div>

---
