# Sign Up and Authentication Quickstart Guide

To gain access to IQM's API and its services, first the user must sign up and log in to obtain the authentication required to send requests.

## Sign Up

Sign up for an account by providing an email address and desired password with the following endpoint:

* `POST` /api/v3/ua/sign-up

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Basic |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `email` | string [required] | Email address of user |
| `password` | string [required] | Desired password of user |

\
Request Sample

```json
{
"email": "user1@iqm.com",
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

## Log In

Once a user has created an account, they can perform the login. This API will send OAuth compliant response with OW Id which can be used for any further API communications. Use the following endpoint:

* `POST` /api/v3/ua/login

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string | Basic |
| `X-IAA-HOST` | string | Workspace URL |

\
**Request Body Schema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `grantType` | string [required] | [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` | string [required] | Your user account email |
| `password` | string [required] | Your user accout password |

\
Request Sample

```json
{
    "grantType": "password",
    "email": "user1@iqm.com",
    "password": "123456"
}
```

\
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