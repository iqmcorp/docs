# Sign Up and Authentication Quickstart Guide

To gain access to IQM's API and its services, first the user must sign up and log in to obtain the authentication required to send requests.

## Sign Up

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/sign-up</span>

Sign up for an account by providing an email address and desired password.

<div class="container">
  <div class="child1">

| Headers | |
| ---- | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token |

| Request Schema |  |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Email address of user |
| `password` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Desired password of user |

</div><div class="child2">

```json title="Request Sample"
{
    "email": "user1@iqm.com",
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

</div></div>

---

## Log In

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/ua/login</span>

<div class="container">
  <div class="child1">

Once a user has created an account, they can perform the login. This API will send OAuth compliant response with OW Id which can be used for any further API communications.

| Headers |  |
| ---- | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Basic |
| `X-IAA-HOST` <br /><span class="type-text">string</span> <span class="required-text">required</span>| Workspace URL |

| Request Schema |  |
| ---- | --- |
| `grantType` <br /><span class="type-text">string</span> <span class="required-text">required</span> | [OAuth Grant Types](https://oauth.net/2/grant-types/) |
| `email` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Your user account email |
| `password` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Your user accout password |

</div><div class="child2">

```json title="Request Sample"
{
    "grantType": "password",
    "email": "user1@iqm.com",
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

</div></div>