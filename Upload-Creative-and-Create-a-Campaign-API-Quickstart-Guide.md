

# Overview

IQM’s REST API enables you to interact with most of IQM’s offerings. 

Use the following endpoints to start uploading your first matched audience:




* `POST /api/v3/ua/login`
* `GET /api/v3/master/creativeTypes`
* `POST /api/v2/crt/add/image/banner/creative`
* `GET /api/v2/crt/creatives/details?creativeIds={creativeId}`
* `POST /api/v2/cmp/campaigns/add`
* `GET /api/v2/cmp/campaign/{campaignId}`


## About IQM Campaign & Creative

The IQM APIs provide access to create Campaigns and upload Creative in Image, Video, Audio, HTML, XLSX, or CSV formats. You can use the APIs to connect to applications of your choice.

Once uploaded and processed, Creative can be used for creating and running advertising Campaigns.


## Before you begin

To upload a Creative and create a Campaign, you must have the following:



1. An Account On the IQM platform
2. Client ID and Client Secret 
3. Image, Video, Audio, HTML, VAST, DAAST, CSV, or XLSX file to upload Creative.

If you do not have any of the above, please follow the steps below:




* Got to: [https://app.iqm.com/#/signup](https://app.iqm.com/#/signup) to sign up for an IQM Account
    * Use your work email as a username and create a password
    * Passwords must be at least 8 characters in length
    * Require at least 1 uppercase letter
    * Require at least 1 lowercase letter
    * Require at least 1 special character
* Email [integrations@iqm.com](mailto:integrations@iqm.com) to request a Client ID and Client Secret 
* File requirements for creative file:
    * 2MB for JPG, JPEG, PNG
    * 750KB for GIF
    * 400MB for MOV, MP4
    * 100MB for MP3, WAV, OGG, MPEG

For more information on VAST and DAAST XML format specifications, please see: [https://www.iab.com/guidelines/vast/](https://www.iab.com/guidelines/vast/)

[https://iabtechlab.com/standards/digital-audio-ad-serving-template-daast/](https://iabtechlab.com/standards/digital-audio-ad-serving-template-daast/)

Sample CSV file: [https://app.iqm.com/creatives/u/0/sample.CSV](https://app.iqm.com/creatives/u/0/sample.CSV)


# Connect to the IQM API

For authorization, we use [OAuth 2.0](https://oauth.net/2/). 

To use the API, first contact [integrations@iqm.com](mailto:integrations@iqm.com). Our team will generate a Client ID and Client Secret specific to you per app or customer.

The keys are used in the Authorization header:  \
`Authorization: Basic &lt;Client ID:Client Secret>`  \
where `&lt;Client ID:Client Secret>` is a Base64 encoded string. \
Please refer to MDN documentation on Base64 encoding: \
https://developer.mozilla.org/en-US/docs/Glossary/Base64


# Authentication

The API uses HTTP Basic authentication. HTTP Basic authentication uses standard fields in the HTTP header.

Your Client ID and Client Secret are provided in the header,  and your username and password are provided in the payload with the password grant for the `/login` endpoint.

The response will provide a Bearer token to include in the authorization header with all subsequent requests. The Organization Workspace ID (OWID) returned from login has to be provided in the `X-IAA-OW-ID `header for every call after login.

If they match, the server fulfills your request. However, if they do not match, HTTP Status code 401 (unauthorized access) is returned. 


# Requests

Data resources are accessed via standard HTTP requests in UTF-8 format to an API endpoint. The IQM API uses the following HTTP methods:


<table>
  <tr>
   <td><strong>Method</strong>
   </td>
   <td><strong>Action</strong>
   </td>
  </tr>
  <tr>
   <td>GET
   </td>
   <td>Retrieves resources
   </td>
  </tr>
  <tr>
   <td>POST
   </td>
   <td>Creates resources
   </td>
  </tr>
  <tr>
   <td>PUT
   </td>
   <td>Changes or replaces resources
   </td>
  </tr>
  <tr>
   <td>DELETE
   </td>
   <td>Deletes resources
   </td>
  </tr>
  <tr>
   <td>PATCH
   </td>
   <td>Applies partial modification to a resource
   </td>
  </tr>
</table>


 \
Please refer to MDN documentation on methods: \
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods


# Error handling


## Status codes

We use standard HTTP status codes. The error codes you’ll most likely see are:


<table>
  <tr>
   <td><strong>Code</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK
   </td>
  </tr>
  <tr>
   <td>201
   </td>
   <td>Created
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad request
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Forbidden
   </td>
  </tr>
  <tr>
   <td>408
   </td>
   <td>Request timeout
   </td>
  </tr>
  <tr>
   <td>412
   </td>
   <td>Precondition failed
   </td>
  </tr>
  <tr>
   <td>422
   </td>
   <td>Unprocessable entity
   </td>
  </tr>
  <tr>
   <td>500
   </td>
   <td>Internal server error
   </td>
  </tr>
</table>


Please refer to MDN documentation on status codes: \
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


## Rate limits

The message rate limit is 20 requests per minute. Exceeding the limit will cause a 429 (too many requests) error.


# Upload Creative and create a Campaign using the IQM API

This quick start will help you to create a Campaign and upload Creative.  At a minimum, you must log in, upload creative, and create a campaign. Once you have accomplished these basics, you can continue learning more about our API through the [documentation](https://app.iqm.com/docs).


<table>
  <tr>
   <td>Step 1: Login
   </td>
   <td>Optional if you have already logged in and have a token.
   </td>
  </tr>
  <tr>
   <td>Step 2: Request creative types
   </td>
   <td>Optional if you know what you need or have already requested before.
   </td>
  </tr>
  <tr>
   <td>Step 3: Upload Creative
   </td>
   <td>Optional if you have already uploaded before.
   </td>
  </tr>
  <tr>
   <td>Step 4: Check the Creative status
   </td>
   <td>Check if Creative was approved to use. Processing and approval is required.
   </td>
  </tr>
  <tr>
   <td>Step 5: Create a Campaign
   </td>
   <td>Create a Campaign using Creative. Provide necessary targeting parameters.
   </td>
  </tr>
  <tr>
   <td>Step 6: Check the Campaign status
   </td>
   <td>Check if the Campaign is running. You can check the KPI in the report.
   </td>
  </tr>
</table>



## Step 1: Log in

To log in, the `Authorization: Basic` header is required. The Login API returns an OAuth-compliant response with an Organization Workspace ID (OWID), a unique identifier for each organization. This ID will be used for any further API communications.



* `POST /api/v3/ua/login`

 \
HEADER PARAMETERS


<table>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>Basic N3BuaWJrdWpleTFvanJnbnNsbjU6MTIzNDU2</code>
   </td>
  </tr>
  <tr>
   <td><code>X-Iaa-Host</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>app.stage.inhousebuying.com</code>
   </td>
  </tr>
</table>



##### REQUEST BODY SCHEMA: application/json


<table>
  <tr>
   <td><code>grantType</code>
<p>

    <code>required</code>
   </td>
   <td>Strin - https://oauth.net/2/grant-types/
   </td>
  </tr>
  <tr>
   <td><code>email</code>
<p>

    <code>required</code>
   </td>
   <td>String - your user account email
   </td>
  </tr>
  <tr>
   <td><code>password</code>
<p>

    <code>required</code>
   </td>
   <td>String - your user account password
   </td>
  </tr>
</table>



##### Request:


```
{
"grantType": "password",
"email": "pratik.t+ihp@iqm.com",
"password": "123456
}
```



##### Response 200:


```
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



##### Response 400:


```
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



##### Response 403:


```
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


For full documentation on the Login API, see [https://app.iqm.com/docs/?path=tag/User-Management-API/operation/Login](https://app.iqm.com/docs/?path=tag/User-Management-API/operation/Login).


## Step 2: Request creative types

To upload a creative, you must provide a creative type. Use the creative type list endpoint to request a full list of allowed creative types.



* `GET /api/v3/master/creativeTypes`


##### HEADER PARAMETERS


<table>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{bearer_token}}</code>
<p>
Authorization Bearer Token
   </td>
  </tr>
  <tr>
   <td><code>{{ow_id_header_key}}</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{ow_id}}</code>
<p>
Organization Workspace Id
   </td>
  </tr>
</table>



##### Response 200:


```
{
 "success": true,
 "data": [
   {
     "id": 1,
     "label": "Raw",
     "keyName": "Raw"
   },
   {
     "id": 2,
     "label": "Hashed (MD5)",
     "keyName": "MD5"
   },
   {
     "id": 3,
     "label": "Hashed (SHA1)",
     "keyName": "SHA1"
   },
   {
     "id": 4,
     "label": "Hashed (SHA256)",
     "keyName": "SHA256"
   },
   {
     "id": 5,
     "label": "Hashed (SHA512)",
     "keyName": "SHA512"
   },
   {
     "id": 6,
     "label": "Hashed (other)",
     "keyName": "Other"
   }
 ]
}
```



##### Response 500:


```
{
 "statusCode": 500,
 "responseObject": {
   "errorMsg": "Internal server error",
   "errorCode": 500
 }
}
```


For complete documentation on creative types list API please see: 

[https://app.iqm.com/docs?path=tag/Master-API/operation/getCreativeTypes_1](https://app.iqm.com/docs?path=tag/Master-API/operation/getCreativeTypes_1)


## Step 3: Upload creative

When uploading a creative, you can provide a file and creative parameters like tracking pixel and click URL



* `POST /api/v2/crt/add/image/banner/creative`


##### HEADER PARAMETERS


<table>
  <tr>
   <td><code>X-IAA-OW-ID</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{ow_id}}</code>
   </td>
  </tr>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{bearer_token}}</code>
   </td>
  </tr>
  <tr>
   <td><code>content-type</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Value: <code>"multipart/form-data"</code>
<p>
Example: <code>multipart/form-data</code>
   </td>
  </tr>
</table>



##### Payload (FormData)


<table>
  <tr>
   <td><code>creativeFiles</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
File-image file as mutipart-form data
   </td>
  </tr>
  <tr>
   <td><code>creativeImageMetadata</code>
<p>

    <code>required</code>
   </td>
   <td>object (creativeImageMetadata)
   </td>
  </tr>
</table>


For information on FormData format see the MDN documentation: [https://developer.mozilla.org/en-US/docs/Web/API/FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)


##### Request (FormData)


```
------WebKitFormBoundaryyTwoz48E2hTuXZoX
Content-Disposition: form-data; name="dspId"

------WebKitFormBoundaryyTwoz48E2hTuXZoX
Content-Disposition: form-data; name="advertiserId"

------WebKitFormBoundaryyTwoz48E2hTuXZoX
Content-Disposition: form-data; name="creativeImageMetadata"

{"8a9ab848-b302-40a6-bea1-17f7aca6f362":{"originalFileName":"Screenshot 2023-12-28 at 2.51.28 PM.png","creativeName":"Creative","clickUrl":"https://iqm.com","width":408,"height":364}}
------WebKitFormBoundaryyTwoz48E2hTuXZoX
Content-Disposition: form-data; name="creativeFiles"; filename="8a9ab848-b302-40a6-bea1-17f7aca6f362.png"
Content-Type: image/png

PNG

IHDRlñ8¯Z
±iCCPICC ProfileHTéÿôÐNèM"@J-té *!    J)ØÅ\
*" ¬èRDÁFµcÁÂ¢ØûYDÔu±`Cå
p»ûÎ{ï¼{Îû;÷¿÷þsæs²[(ÌÈHDþÞ´¸øn g±9b!#<< 2mÿ.îhÂÞ´Èõï÷ÿ«¨pybP8ÂÉ\1'
ác¾çEPõßhD8Á=«Mpê¿àäIFã'c¢"ë'±Ù¢THæËIEò¶pùóöÈÊÊæ"Ü°9#Dx"?=ù/yRÿ3YÍNóÔ^&ïÃ
3Ùùÿçãøß)®a()MX¤/è^FvÉ¡aÓÌçNÆOr4 z9bfÂ4sÙ>Aòµ¡ÁÓÂ÷cÉóHXQÓÌûFN³(;B^+EÄdL3[4SW-÷§ñXòüiQ±ÓË  fqFdÐLSîI#äýóþÞ3uýä{Ïÿe¿||­$-*@¾wöLÿ<c&§8NÞçã;-J¼åµáòx^¦¿Ü/Î¯ /äÌÚpù3LgO3 \ÀÙ|+B  Ø _ÂËLl-ÌñSÓ$4rÒx4c3fokïÀÄ¹z-ÞQ'Ï#D½2ã[Û{Çøøøñ_àu'@lñ/@yK'8RQî=qÁ _%ä     ô0ÖÀ87à|A Q ,²,ËÀjPJÀf°Tj°Ôàh'ÀYp\×ÁmðÈÀ x   FÀ0A"CHÒL +È¢C/E@ñP
    )´Z
@¥P´jCÐYè2ÔÝú¡aè-ôFÁ$X
Ö�Má90fÀAp¼N�sà¸ÞÃ5ð¸>
_�oÃ2ø%<(e²FÑQLT*¡V Qe¨TªÕº¡^¡>£±h
¶F»¡ÐÑh:½½]®G·¢Ï£o¢ûÑ#èï2Fc�qÅ°0qTÌL¦SiÁ\ÀÜÆb>`±X*Öë
ÀÆcÓ±K±°»°ÍØ3Ø>ìvÃiâ¬pî¸0'ÁávâàNãnàqð
x}¼=Þà×àËðûñ§ð7ðCø12ÁàJ#p    ùM}NÂ5Â a¨B4#º£éÄÕÄrbñññ¡Â|¾Â*�r�C
ú>TI$&)$%m$ÕÎîÞÉdS²9,!o$7Ï?)RmY\Å­7_+LJ
Ê*]Sz¥LP6Uf*³W(W*w(ßUU¡¨Ø©©d©lPÙ¯rYå¹*NÕTÕW«Z¨ºWõêE1¢0)ÊZÊ>ÊÊ VÍL¥®V¢vP­WmD]U}®zzz¥úIuE5¥²¨ÔMÔ#Ô;Ô/³tg1fñf­Õ4ëÆ¬Ú^<bfÛ_4i¾[4Û4k¡µ,µæk-ÑÚ­uAë¶¶6G»XûöXÇR'Bg©Î^Q]=]]¡îNÝsº¯ô¨z^zézÛôNé
ëSô=ôùúÛôOë¿ ©Ó´LZ9í<mÄ@Ç À@j°Ç ×`ÌÐÌ0Úpa³ác#¢Ý(ÅhQÑ±¾qñ2ãFã&ºIÉn¦f¦±¦ëLÛLi±Ì
ÌÍÍ=ÍsÌkÌoY`-è»,®[Âi×¬`+'+¾Õ.«¾ÙÙ.³³kfßµ&Y3¬s­­ûm¨6Á6klÚl^Ï10gËî9ßmm3m÷Ù>´Sµ
´[c×i÷ÖÞÒc_iËìàç°Ò¡ÝáÍ\«¹¼¹»çÞs¤88®sìrüæäì$rjrv6vNr®r¾KW£Ó7Ð/¹`\¼]Vºpùìêä*q=âú§µ[Û~·çóÌæñæí7ànèÎvßã.ó y$yüì!ó4ðd{Öx>õ2òâzÕz
1,é×Þ¶Þ"ïïLWæræ¿O±O¯¯ªo´o�ï?C¿T¿F¿Gÿ¥þg0A[î²tYVk$Ð9pyàù RPdPEÐÓ`Ë`Qpg²5äQ¨I¨ ´-±Â¶=7
Ï   ?>;?|~åügvË"º#)#÷G~òÚõ0Ú<ZÝ£Óó1Ö'¶4V7'nyÜÕx­x~|{.!&¡6atïí
ï,4[·ðò"­EN.VZÌ^|4 ´?é+;]ÃMf%W%p\/î6î0ÏWÊJqO)Myêº5u8Í3­,íÉ¯à¿IH¯NÿQ1Ù�ÏJÊê¨
2ç³õ²ó²ûVÂ"¡,Ç5g{Î(HT+Ä
Åí5d@êKöçzäVæ~Z³ähJ ¯'ß2}þP_Á/KÑK9K»,[½¬9cùÐä]+V®\å¿ª~5quÆê_×Ø®)]ó~mìÚÎBÝÂU�?øÿÐX¤X$*º»Îm]õèù?ö®wX¿sý÷bnñÛ²¯8®üd÷SùOãS6önrÚ´{3v³`ó-[êKUJ
J¶lmÝFÛV¼íýöÅÛ/Í-«ÞAÜ!Ý!+.oßi¼sóÎ¯i·+½+«tªÖW}ÜÅÝuc·×î¦jÝêê/?ó¾·ÇOkiMÙ^ìÞÜ½ÏöÅìëþ�þKC­VmIí·:A¬>¢þ|sCÃ~ýáFiãðÄ×úlo²nÚÓLm.9IShow more
```



##### Response 201:


```
{
 "statusCode": 201,
 "responseObject": {
   "data": [148971],
   "message": "Image Creative(s) Added successfully"
 }
}
```


For complete documentation on creative upload API including other creative types upload please see: 

[https://app.iqm.com/docs?path=tag/Creative-API/operation/AddImageCreative](https://app.iqm.com/docs?path=tag/Creative-API/operation/AddImageCreative)

[https://app.iqm.com/docs?path=tag/Creative-API/operation/Audio/VideoCreative](https://app.iqm.com/docs?path=tag/Creative-API/operation/Audio/VideoCreative)

[https://app.iqm.com/docs?path=tag/Creative-API/operation/AddHtmlCreative](https://app.iqm.com/docs?path=tag/Creative-API/operation/AddHtmlCreative)


## Step 4: Check the creative status

To create a campaign, creative must be processed and approved, check for status updates using: 



* `GET /api/v2/crt/creatives/details?creativeIds={creativeId}`


##### PATH PARAMETERS


<table>
  <tr>
   <td><code>creative_id</code>
<p>

    <code>required</code>
   </td>
   <td>string
   </td>
  </tr>
</table>



##### HEADER PARAMETERS


<table>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{bearer_token}}</code>
<p>
Authorization Bearer Token
   </td>
  </tr>
  <tr>
   <td><code>{{ow_id_header_key}}</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{ow_id}}</code>
<p>
Organization Workspace Id
   </td>
  </tr>
</table>



##### Response 200:


```
{
 "statusCode": 200,
 "responseObject": [
   {
     "creativeName": "DO NOT DELETE - TEST VAST 4.0 creative",
     "status": "running",
     "creativeId": 148246,
     "height": null,
     "width": null,
     "duration": 16,
     "creativeTypeId": 14,
     "creativeType": "video",
     "clickUrl": "https://iabtechlab.com",
     "creativeCardSource": "https://cdn-cfy-p0.iqm.com/Screenshots/1/278x220/TkkErlS_1701954192846.jpg",
     "creativeSource": "&lt;VAST xmlns=&quot;http://www.iab.com/VAST&quot; xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot; version=&quot;4.0&quot;&gt;  &lt;Ad conditionalAd=&quot;false&quot; id=&quot;{IAA_CREATIVE_ID}&quot; sequence=&quot;1&quot;&gt;    &lt;InLine&gt;      &lt;AdSystem version=&quot;4.0&quot;&gt;4.0&lt;/AdSystem&gt;      &lt;Error&gt;&lt;![CDATA[http://example.com/error]]&gt;&lt;/Error&gt;      &lt;Extensions&gt;        &lt;Extension type=&quot;iab-Count&quot;&gt;          &lt;total_available&gt;            &lt;![CDATA[ 2 ]]&gt;          &lt;/total_available&gt;        &lt;/Extension&gt;      &lt;/Extensions&gt;      &lt;Impression id=&quot;Impression-ID&quot;&gt;&lt;![CDATA[http://example.com/track/impression]]&gt;&lt;/Impression&gt;      &lt;Pricing currency=&quot;USD&quot; model=&quot;cpm&quot;&gt;        &lt;![CDATA[ 25.00 ]]&gt;      &lt;/Pricing&gt;      &lt;AdTitle&gt;iabtechlab video ad&lt;/AdTitle&gt;      &lt;Category authority=&quot;http://www.iabtechlab.com/categoryauthority&quot;&gt;AD CONTENT description category&lt;/Category&gt;      &lt;Creatives&gt;        &lt;Creative adId=&quot;2447226&quot; apiFramework=&quot;VAST&quot; id=&quot;5480&quot; sequence=&quot;1&quot;&gt;          &lt;UniversalAdId idRegistry=&quot;Ad-ID&quot; idValue=&quot;8465&quot;&gt;8465&lt;/UniversalAdId&gt;          &lt;Linear&gt;            &lt;TrackingEvents&gt;              &lt;Tracking event=&quot;start&quot;&gt;&lt;![CDATA[http://example.com/tracking/start]]&gt;&lt;/Tracking&gt;              &lt;Tracking event=&quot;firstQuartile&quot;&gt;&lt;![CDATA[http://example.com/tracking/firstQuartile]]&gt;&lt;/Tracking&gt;              &lt;Tracking event=&quot;midpoint&quot;&gt;&lt;![CDATA[http://example.com/tracking/midpoint]]&gt;&lt;/Tracking&gt;              &lt;Tracking event=&quot;thirdQuartile&quot;&gt;&lt;![CDATA[http://example.com/tracking/thirdQuartile]]&gt;&lt;/Tracking&gt;              &lt;Tracking event=&quot;complete&quot;&gt;&lt;![CDATA[http://example.com/tracking/complete]]&gt;&lt;/Tracking&gt;              &lt;Tracking event=&quot;progress&quot; offset=&quot;00:00:10&quot;&gt;&lt;![CDATA[http://example.com/tracking/progress-10]]&gt;&lt;/Tracking&gt;            &lt;Tracking event=&quot;start&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=start]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;firstQuartile&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=firstQuartile]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;midpoint&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=midpoint]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;thirdQuartile&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=thirdQuartile]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;complete&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=complete]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;pause&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=pause]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;resume&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=resume]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;mute&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=mute]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;unmute&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=unmute]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;fullscreen&quot;&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=impr&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview&amp;event_type=fullscreen]]&gt;&lt;/Tracking&gt;&lt;/TrackingEvents&gt;            &lt;Duration&gt;00:00:16&lt;/Duration&gt;            &lt;MediaFiles&gt;              &lt;MediaFile bitrate=&quot;600&quot; codec=&quot;H.264&quot; delivery=&quot;progressive&quot; height=&quot;360&quot; id=&quot;5246&quot; maintainAspectRatio=&quot;1&quot; maxBitrate=&quot;700&quot; minBitrate=&quot;500&quot; scalable=&quot;1&quot; type=&quot;video/mp4&quot; width=&quot;640&quot;&gt;&lt;![CDATA[https://cdn-cfy-p0.iqm.com/wreckathon/Videos/iqm-video-202206-30s-480p.mp4]]&gt;&lt;/MediaFile&gt;            &lt;/MediaFiles&gt;            &lt;VideoClicks&gt;              &lt;ClickThrough id=&quot;blog&quot;&gt;&lt;![CDATA[https://iabtechlab.com]]&gt;&lt;/ClickThrough&gt;            &lt;/VideoClicks&gt;          &lt;/Linear&gt;        &lt;/Creative&gt;      &lt;/Creatives&gt;    &lt;Impression id=&quot;{IAA_IMPRESSION_ID}&quot;&gt;&lt;![CDATA[{IAA_WIN_URL}]]&gt;&lt;/Impression&gt;&lt;Error&gt;&lt;![CDATA[https://postback.iqm.com/api/v1/iqm?event=error&amp;camp_id={IAA_CAMPAIGN_ID}&amp;devid={IAA_DEVICE_ID}&amp;app_id={IAA_APP_ID}&amp;app_nm={IAA_APP_NAME}&amp;ip={IAA_USER_IP}&amp;clkid={IAA_EXCH_REQ_ID}&amp;crid={IAA_CREATIVE_ID}&amp;impid={IAA_IMPRESSION_ID}&amp;devua={IAA_DEVICE_UA}&amp;pubid={IAA_PUBLISHER_ID}&amp;exch_nm={IAA_EXCHANGE_NAME}&amp;l1={IAA_GPS_LAT}&amp;l2={IAA_GPS_LON}&amp;st={IAA_STATE_NAME}&amp;conv_type=preview]]&gt;&lt;/Error&gt;&lt;/InLine&gt;  &lt;/Ad&gt;&lt;/VAST&gt;",
     "creativeSourceURL": null,
     "pixelUrls": null,
     "createdOn": 1701954192,
     "modifiedDate": 1701955047,
     "uowId": 6942,
     "owId": 1,
     "userName": "Meera Vyas",
     "adPlacement": null,
     "remarks": null,
     "xmlType": "inline",
     "xmlVersion": "4.0,4.1",
     "rejectionReason": null,
     "userEmail": "meera.v@iqm.com",
     "organizationName": "IQM Corporation 1",
     "campaigns": [
       {
         "campaignName": "DO NOT DELETE - Test campaign for VAST 4.0",
         "campaignId": 25721,
         "campaignStatus": "deleted"
       },
       {
         "campaignName": "Test Campaign",
         "campaignId": 25834,
         "campaignStatus": "deleted"
       },
       {
         "campaignName": "Test Campaign copy",
         "campaignId": 25835,
         "campaignStatus": "deleted"
       }
     ],
     "previewFlag": 1,
     "nativeCreativeAttributes": null,
     "isEditAccess": true,
     "isApprovalAccess": false
   }
 ]
}
```


For complete documentation on creative details API see: [https://app.iqm.com/docs?path=tag/Creative-API/operation/GetCreativedetailbyid](https://app.iqm.com/docs?path=tag/Creative-API/operation/GetCreativedetailbyid)


## Step 5: Create a Campaign

To create a campaign, specify the creative and targeting parameters using the API: 



* `POST /api/v2/cmp/campaigns/add`


##### HEADER PARAMETERS


<table>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{bearer_token}}</code>
<p>
Authorization Bearer Token
   </td>
  </tr>
  <tr>
   <td><code>{{ow_id_header_key}}</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{ow_id}}</code>
<p>
Organization Workspace Id
   </td>
  </tr>
</table>



##### REQUEST BODY SCHEMA: application/json


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>advertiserDomain
   </td>
   <td>String
   </td>
   <td>add domain
   </td>
  </tr>
  <tr>
   <td>budgetDay
   </td>
   <td>Number
   </td>
   <td>Daily budget
   </td>
  </tr>
  <tr>
   <td>budgetTotal
   </td>
   <td>Number
   </td>
   <td>Total budget
   </td>
  </tr>
  <tr>
   <td>campaignName
   </td>
   <td>String
   </td>
   <td>name of campaign
   </td>
  </tr>
  <tr>
   <td>campaignType
   </td>
   <td>Number
   </td>
   <td>Campaign type id
   </td>
  </tr>
  <tr>
   <td>creativeIds
   </td>
   <td>String
   </td>
   <td>Comma separated creative Ids
   </td>
  </tr>
  <tr>
   <td>creativeType
   </td>
   <td>Number
   </td>
   <td>Creative type id
   </td>
  </tr>
  <tr>
   <td>isAgreementChecked
   </td>
   <td>Boolean
   </td>
   <td>agreement check
   </td>
  </tr>
  <tr>
   <td>maxBid
   </td>
   <td>Number
   </td>
   <td>max bid
   </td>
  </tr>
  <tr>
   <td>startTime
   </td>
   <td>Number
   </td>
   <td>campaign start time
   </td>
  </tr>
  <tr>
   <td>timezone
   </td>
   <td>Number
   </td>
   <td>timezone id.
   </td>
  </tr>
  <tr>
   <td>bidOptimization <code>[optional]</code>
   </td>
   <td>Boolean
   </td>
   <td>Optimize bid price based on analysis.
   </td>
  </tr>
  <tr>
   <td>bidPacing <code>[optional]</code>
   </td>
   <td>Boolean
   </td>
   <td>Budget is spent equally every hour.
   </td>
  </tr>
  <tr>
   <td>impressionCapping <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Maximum impressions in one inventory.
   </td>
  </tr>
  <tr>
   <td>maxDayClicks <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Maximum daily clicks
   </td>
  </tr>
  <tr>
   <td>totalClicks <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Total clicks
   </td>
  </tr>
  <tr>
   <td>maxDayImpressions <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Maximum daily impressions
   </td>
  </tr>
  <tr>
   <td>totalImpressions <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Total impressions
   </td>
  </tr>
  <tr>
   <td>maxDayConversions <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Maximum daily conversions
   </td>
  </tr>
  <tr>
   <td>totalConversions <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Total conversions
   </td>
  </tr>
  <tr>
   <td>conversionType <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>User conversion type. Allowed values: 'install', 'non-install'.
   </td>
  </tr>
  <tr>
   <td>appURL <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>If conversion type is install, specify URL of inventory.
   </td>
  </tr>
  <tr>
   <td>targetCPI <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Cost per install if conversion type is install.
   </td>
  </tr>
  <tr>
   <td>carriers <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Carrier targeting. Value in form of String of comma separated IDs of targeted carrier(s).
   </td>
  </tr>
  <tr>
   <td>networkType <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Network targeting. Value in form of String of comma separated IDs of targeted network(s).
   </td>
  </tr>
  <tr>
   <td>deviceType <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Device targeting. Value in form of String of comma separated IDs of targeted device type(s).
   </td>
  </tr>
  <tr>
   <td>trafficType <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Traffic type targeting. Value in form of String of comma separated IDs of targeted traffic type(s).
   </td>
  </tr>
  <tr>
   <td>manufacturer <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Manufacturer targeting. Value in form of String of comma separated IDs of targeted manufacturer type(s).
   </td>
  </tr>
  <tr>
   <td>os <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>OS targeting. Value in form of String of comma separated IDs of targeted OS.
   </td>
  </tr>
  <tr>
   <td>osVersion <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>OS version targeting. Value in form of String of comma separated IDs of targeted OS version based on targeted OS.
   </td>
  </tr>
  <tr>
   <td>exchanges <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Targeted exchanges. Value in form of String of comma separated IDs of exchanges.
   </td>
  </tr>
  <tr>
   <td>prebidAudienceSegmentIdList <code>[optional]</code>
   </td>
   <td>Array
   </td>
   <td>Prebid Audience Segment Ids to attach campaign to segment Ids.
   </td>
  </tr>
  <tr>
   <td>whiteListedDeviceId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target Device Ids. Value in form of String of comma separated device IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedIp <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>IPV4 address. Value in form of String of comma separated IP Address.
   </td>
  </tr>
  <tr>
   <td>whiteListedAppId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>iOS app ID
   </td>
  </tr>
  <tr>
   <td>whiteListedPackageName <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Android package names. Value in form of String of comma separated package names.
   </td>
  </tr>
  <tr>
   <td>whiteListedSiteDomain <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target sites. Value in form of String of comma separated domain urls.
   </td>
  </tr>
  <tr>
   <td>blackListedDeviceId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target Device Ids. Value in form of String of comma separated device IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedIp <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>IPV4 address. Value in form of String of comma separated IP Address.
   </td>
  </tr>
  <tr>
   <td>blackListedAppId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>iOS app ID
   </td>
  </tr>
  <tr>
   <td>blackListedPackageName <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Android package names. Value in form of String of comma separated package names.
   </td>
  </tr>
  <tr>
   <td>blackListedSiteDomain <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target sites. Value in form of String of comma separated domain urls.
   </td>
  </tr>
  <tr>
   <td>publisherAdCategory <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target Publisher ad category. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>ioId
   </td>
   <td>Number
   </td>
   <td>Target Insertion OrderId in which this campaign belongs.
   </td>
  </tr>
  <tr>
   <td>blackListedInventoryGroupIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created Inventory groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedInventoryGroupIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created Inventory groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedCustomAudienceIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created custom audience Groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedCustomAudienceIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created custom audience Groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedAudienceSegmentGroupIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created audience segment Groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedAudienceSegmentGroupIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created audience segment Groups. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedConversionTagIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created conversion tags. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedConversionTagIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target already created conversion tags. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>userDealId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>User specific deal IDs. Value in form of String of comma separated deal IDs.
   </td>
  </tr>
  <tr>
   <td>groupDealId <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Group of selected deals. Value in form of String of comma separated deal IDs.
   </td>
  </tr>
  <tr>
   <td>politicalAdvertiserClientId <code>[optional]</code>
   </td>
   <td>Number
   </td>
   <td>Id of political advertiser in case of campaign is political campaign.
   </td>
  </tr>
  <tr>
   <td>stateIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>State Target (It will be considered as White list State Target). Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedStateIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>White list State Target . Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedStateIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Black list State Target . Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>countryId
   </td>
   <td>String
   </td>
   <td>Country Target
   </td>
  </tr>
  <tr>
   <td>dmaIds <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>DMA Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedDmaIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list DMA Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedDmaIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list DMA Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>senateDistrictIds <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>Senate districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedSenateDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list senate districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedSenateDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list senate districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>congressionalDistrictIds <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>Congressional districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedCongressionalDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list congressional districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedCongressionalDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list congressional districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>houseDistrictIds <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>House districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedHouseDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list house districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedHouseDistrictIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list house districts Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>geoRadiusDetails <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>To target custom ares in circle or polygon. Value in form of JSON.
   </td>
  </tr>
  <tr>
   <td>whiteListedGeoRadiusDetails <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>To white list custom ares in circle or polygon. Value in form of JSON.
   </td>
  </tr>
  <tr>
   <td>blackListedGeoRadiusDetails <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>To black list custom ares in circle or polygon. Value in form of JSON.
   </td>
  </tr>
  <tr>
   <td>zipcodes <code>[optional]</code> <code>deprecated</code>
   </td>
   <td>String
   </td>
   <td>ZipCode Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedZipcodes <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list zipCode Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedZipcodes <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list zipCode Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>locationFileIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target location by uploading file. Value in form of String of comma separated csv file ids.(pre uploaded)
   </td>
  </tr>
  <tr>
   <td>whiteListedLocationIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list location ids from uploaded files. Value in form of String of comma separated location ids.
   </td>
  </tr>
  <tr>
   <td>blackListedLocationIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list location ids from uploaded files. Value in form of String of comma separated location ids.
   </td>
  </tr>
  <tr>
   <td>whiteListedCityIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list city Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedCityIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list city Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>whiteListedCountyIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>white list county Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>blackListedCountyIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>black list county Target. Value in form of String of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>ageRangeIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target age range. Value in form of string of comma separated IDs.
   </td>
  </tr>
  <tr>
   <td>genderIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target gender. Value in form of String of comma-separated IDs.
   </td>
  </tr>
  <tr>
   <td>interestIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target user interest. Value in form of a string of comma-separated IDs.
   </td>
  </tr>
  <tr>
   <td>incomeRangeIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target user income range. Value in form of a string of comma-separated IDs.
   </td>
  </tr>
  <tr>
   <td>languageIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target user language. Value in form of a string of comma-separated IDs.
   </td>
  </tr>
  <tr>
   <td>ethnicityIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target user ethnicity. Value in form of a string of comma-separated ID.
   </td>
  </tr>
  <tr>
   <td>schedule <code>[optional]</code>
   </td>
   <td>String[][]
   </td>
   <td>key as [0 to 6] maps to [Monday to Sunday] & values [['hh:mm:ss','hh:mm:ss'], ...]
   </td>
  </tr>
  <tr>
   <td>conversionIds <code>[optional]</code>
   </td>
   <td>String
   </td>
   <td>Target pixel conversions. Value in form of a string of comma-separated ID.
   </td>
  </tr>
  <tr>
   <td>isAdvanceAudioVideoTargeted
   </td>
   <td>Boolean
   </td>
   <td>To indicate if the advance targeting is enabled if this is true, 'creativeAdvanceTargeting' is optional and it is assumed that every video creative segment is targeted.
   </td>
  </tr>
  <tr>
   <td>creativeAdvanceTargeting
   </td>
   <td>JSON Map: String to Integer
   </td>
   <td>Map of Creative advanced targeting group to list of creative advance targeting segment ids.
   </td>
  </tr>
  <tr>
   <td>campaignEstimatorMetaData
   </td>
   <td>JSON
   </td>
   <td>Campaign Estimator data with <code>reachMeta</code>, <code>landScapeMeta</code> and <code>sliderMeta</code>
   </td>
  </tr>
</table>



##### Scheduling example


##### GeoRadiusDetails example (below is the common format for whitelist and blacklist both)


##### Request:


```
{
 "campaignName": "Test Campaign",
 "maxBid": 10,
 "budgetTotal": 100,
 "startTime": 1703794800,
 "endTime": 1704614400,
 "timezone": 433,
 "budgetDay": 10,
 "creativeType": 11,
 "isAgreementChecked": true,
 "ioId": 2695,
 "countryId": "30100001",
 "creativeIds": "148971",
 "isAdvanceAudioVideoTargeted": false,
 "advertiserDomain": "https://iqm.com",
 "totalBudgetPacing": false,
 "deviceType": "13,15,11,12",
 "trafficType": "11,12",
 "isTvAd": false,
 "bidOptimization": true,
 "bidPacing": true,
 "publisherAdCategory": "",
 "impressionCapping": 0,
 "exchanges": "55,61,58,41,39,47,59,1,54,56,45,16,11,37,57,50,46,53,60",
 "maxDayImpressions": 0,
 "budgetTypeId": 1,
 "totalImpressions": 0,
 "maxDayClicks": 0,
 "totalClicks": 0,
 "maxDayConversions": 0,
 "totalConversions": 0,
 "prebidAudienceSegmentIdList": []
}
```



##### Response 201:


```
{
 "statusCode": 201,
 "responseObject": {
   "data": 25859,
   "message": "Campaign saved successfully.",
   "status": "pending"
 }
}
```



##### Response 400:


```
{
 "statusCode": 412,
 "responseObject": {
   "errorMsg": "Invalid arguments audience ids!",
   "errorCode": 412
 }
}
```



##### Response 500:


```
{
 "statusCode": 500,
 "responseObject": {
   "errorMsg": "Internal server error",
   "errorCode": 500
 }
}
```


For complete documentation on campaign creation API see: 

[https://app.iqm.com/docs?path=tag/Campaign-API/operation/saveCampaign](https://app.iqm.com/docs?path=tag/Campaign-API/operation/saveCampaign)


## Step 5: Check the campaign status

To run a campaign, it must be approved, check for status updates using: 



* `GET /api/v2/cmp/campaign/{campaignId}`


##### PATH PARAMETERS


<table>
  <tr>
   <td><code>campaign_id</code>
<p>

    <code>required</code>
   </td>
   <td>string
   </td>
  </tr>
</table>



##### HEADER PARAMETERS


<table>
  <tr>
   <td><code>Authorization</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{bearer_token}}</code>
<p>
Authorization Bearer Token
   </td>
  </tr>
  <tr>
   <td><code>{{ow_id_header_key}}</code>
<p>

    <code>required</code>
   </td>
   <td>string
<p>
Example: <code>{{ow_id}}</code>
<p>
Organization Workspace Id
   </td>
  </tr>
</table>



##### Response 200:


```
{
 "statusCode": 200,
 "responseObject": {
   "owId": 1,
   "parentOrganizationName": "IQM Corporation",
   "id": 25859,
   "uowId": 9216,
   "campaignName": "Test Campaign",
   "advertiserDomain": "https://iqm.com",
   "creativeType": 11,
   "campaignType": 1,
   "totalBudgetPacing": false,
   "isTvAd": false,
   "budgetDay": 10.0,
   "budgetTotal": 100.0,
   "maxBid": 10.0,
   "timezone": 433,
   "startTime": 1703794800,
   "endTime": 1704614400,
   "status": "pending",
   "dspMargin": 0,
   "platformMargin": 0,
   "userDealMargin": 0,
   "spentScale": false,
   "creativeIds": "148971",
   "conversionType": "None",
   "bidOptimization": true,
   "bidPacing": true,
   "impressionCapping": 0,
   "maxDayImpressions": 0,
   "maxDayClicks": 0,
   "maxDayConversions": 0,
   "totalImpressions": 0,
   "totalClicks": 0,
   "totalConversions": 0,
   "deviceType": "13,15,11,12",
   "trafficType": "11,12",
   "exchanges": "55,61,58,41,39,47,59,1,54,56,45,16,11,37,57,50,46,53,60",
   "isLocationWithOrFilter": true,
   "countryId": "30100001",
   "locationDetails": {},
   "isCampaignFromNewPlatform": true,
   "organizationName": "IQM Corporation 1",
   "userEmail": "domo@iqm.com",
   "userName": "Domo Integration",
   "conversionTypeId": 0,
   "isUnapprovedAudienceTargeted": false,
   "isAllAudienceUnapproved": false,
   "createDate": 1703794110,
   "ioId": 2695,
   "ioName": "Sanity test Io",
   "prebidAudienceSegmentIdList": [],
   "budgetTypeId": 1,
   "isAdvanceAudioVideoTargeted": false,
   "isEstimatorAvailable": true,
   "isEditAccess": true,
   "isApprovalAccess": false,
   "isMarginSet": true,
   "isParentInvoiceTemplateSet": true
 }
}
```


For complete documentation on campaign details API see: 

[https://app.iqm.com/docs?path=tag/Campaign-API/operation/getCampaign](https://app.iqm.com/docs?path=tag/Campaign-API/operation/getCampaign)


# Best Practices

The message rate limit is 20 requests per minute. Exceeding this limit will cause a 429 (too many requests) error. 

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.
