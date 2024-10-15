# Quickstart Guide: Upload Creative and Create a Campaign

IQM’s REST API enables you to interact with most of IQM’s offerings. 

Use the following endpoints to start uploading your first Creative:

* `POST` /api/v3/ua/login
* `GET` /api/v3/master/creativeTypes
* `POST` /api/v2/crt/add/image/banner/creative
* `GET` /api/v2/crt/creatives/details?creativeIds={creativeId}
* `POST` /api/v2/cmp/campaigns/add
* `GET` /api/v2/cmp/campaign/{campaignId}

## About IQM Campaign & Creative

The IQM APIs provide access to create Campaigns and upload Creative in Image, Video, Audio, HTML, XLSX, or CSV formats. You can use the APIs to connect to applications of your choice.

Once uploaded and processed, Creative can be used for creating and running advertising Campaigns.

## Before you begin

To upload a Creative and create a Campaign, you must have the following:

1. An Account On the IQM platform
1. Image, Video, Audio, HTML, VAST, DAAST, CSV, or XLSX file to upload Creative

If you do not have any of the above, please follow the steps below:

* See [Before You Begin](/docs/index.md#before-you-begin) section to create an account and request a Client ID and Client Secret
* File requirements for creative file:
  * 2MB for JPG, JPEG, PNG
  * 750KB for GIF
  * 400MB for MOV, MP4
  * 100MB for MP3, WAV, OGG, MPEG

For more information on [VAST](https://www.iab.com/guidelines/vast/) and DAAST XML format specifications, please see:

* [https://iabtechlab.com/standards/digital-audio-ad-serving-template-daast/](https://iabtechlab.com/standards/digital-audio-ad-serving-template-daast/)

Sample CSV file: [https://app.iqm.com/creatives/u/0/sample.CSV](https://app.iqm.com/creatives/u/0/sample.CSV)

## Upload Creative and create a Campaign using the IQM API

This quick start will help you to create a Campaign and upload Creative.  At a minimum, you must log in, upload creative, and create a campaign. Once you have accomplished these basics, you can continue learning more about our API through the [documentation](https://app.iqm.com/docs).

1. Log In
    * Optional if you have already logged in and have a token
1. Request Creative Types
    *  Optional if you know what you need or have already requested before
1. Upload Creative
    * Optional if you have already uploaded before
1. Check the Creative Status
    * Check if Creative was approved to use, processing and approval is required
1. Create a Campaign
    * Create a Campaign using Creative, provide necessary targeting parameters
1. Check the Campaign Status
    * Check if the Campaign is running, you can check the KPI in the report

### Step 1: Log in

To log in, the `Authorization: Basic` header is required. The Login API returns an OAuth-compliant response with an Organization Workspace ID (`owId`), a unique identifier for each organization. This ID will be used for any further API communications.

* `POST` /api/v3/ua/login

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-HOST` | string [required] | Workspace URL |

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

### Step 2: Request creative types

To upload a creative, you must provide a creative type. Use the creative type list endpoint to request a full list of allowed creative types.

* `GET` /api/v3/master/creativeTypes

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

<details>
<summary>More Response Samples</summary>

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

</details>

\
For further information see the complete [Creative Types API Documentation](https://app.iqm.com/docs?path=tag/Master-API/operation/getCreativeTypes_1)

### Step 3: Upload creative

When uploading a creative, you can provide a file and creative parameters like tracking pixel and click URL

* `POST` /api/v2/crt/add/image/banner/creative

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |
| `content-type` | string [required] | Media type of the resource |

\
**Request Body Schema: application/x-www-form-urlencoded**

| Property | Type | Definition |
| ---- | ---- | --- |
| `creativeFiles` | string [required] | File - image file as multipart form data |
|  `creativeImageMetadata` | object [required] | (creativeImageMetadata) |

Please refer to [MDN documentation on form data format](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data).

\
Request Sample (Form Data)

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

Response 201

```json
{
 "statusCode": 201,
 "responseObject": {
   "data": [148971],
   "message": "Image Creative(s) Added successfully"
 }
}
```

For further information see the complete API Documentation:

* [Add Image Creative](https://app.iqm.com/docs?path=tag/Creative-API/operation/AddImageCreative)

* [Audio/Video Creative](https://app.iqm.com/docs?path=tag/Creative-API/operation/Audio/VideoCreative)

* [Add HTML Creative](https://app.iqm.com/docs?path=tag/Creative-API/operation/AddHtmlCreative)

### Step 4: Check the creative status

To create a campaign, creative must be processed and approved, check for status updates using:

* `GET` /api/v2/crt/creatives/details?creativeIds={creativeId}

\
**Path Parameters**

| Property | Type | Definition |
| --- | --- | --- |
| `creative_id` | string [required] | Unique ID of Creative |

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
Response 200

```json
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

For further information see the complete [Creative Details API Documentation](https://app.iqm.com/docs?path=tag/Creative-API/operation/GetCreativedetailbyid)

### Step 5: Create a Campaign

To create a campaign, specify the creative and targeting parameters using the API: 

* `POST` /api/v2/cmp/campaigns/add

\
**Header Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token<br>See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

\
**Request Body Schema: application/json**

| Field | Type | Description |
|---|---|---|
| `advertiserDomain` | string | add domain |
| `budgetDay` | integer | Daily budget |
| `budgetTotal` | integer | Total budget |
| `campaignName` | string | name of campaign |
| `campaignType` | integer | Campaign type ID |
| `creativeIds` | string | Comma separated creative IDs |
| `creativeType` | integer | Creative type ID |
| `isAgreementChecked` | boolean | agreement check |
| `maxBid` | integer | max bid |
| `startTime` | integer | campaign start time |
| `timezone` | integer | timezone ID |
| `bidOptimization` [optional] | boolean | Optimize bid price based on analysis |
| `bidPacing` [optional] | boolean | Budget is spent equally every hour |
| `impressionCapping` [optional] | integer | Maximum impressions in one inventory |
| `maxDayClicks` [optional] | integer | Maximum daily clicks |
| `totalClicks` [optional] | integer | Total clicks |
| `maxDayImpressions` [optional] | integer | Maximum daily impressions |
| `totalImpressions` [optional] | integer | Total impressions |
| `maxDayConversions` [optional] | integer | Maximum daily conversions |
| `totalConversions` [optional] | integer | Total conversions |
| `conversionType` [optional] | string | User conversion type. Allowed values: 'install', 'non-install' |
| `appURL` [optional] | string | If conversion type is install, specify URL of inventory |
| `targetCPI` [optional] | integer | Cost per install if conversion type is install. |
| `carriers` [optional] | string | Carrier targeting. Value in form of string of comma separated IDs of targeted carrier(s) |
| `networkType` [optional] | string | Network targeting. Value in form of string of comma separated IDs of targeted network(s) |
| `deviceType` [optional] | string | Device targeting. Value in form of string of comma separated IDs of targeted device type(s) |
| `trafficType` [optional] | string | Traffic type targeting. Value in form of string of comma separated IDs of targeted traffic type(s) |
| `manufacturer` [optional] | string | Manufacturer targeting. Value in form of string of comma separated IDs of targeted manufacturer type(s) |
| `os` [optional] | string | OS targeting. Value in form of string of comma separated IDs of targeted OS |
| `osVersion` [optional] | string | OS version targeting. Value in form of string of comma separated IDs of targeted OS version based on targeted OS |
| `exchanges` [optional] | string | Targeted exchanges. Value in form of string of comma separated IDs of exchanges |
| `prebidAudienceSegmentIdList` [optional] | array | Prebid Audience Segment IDs to attach campaign to segment IDs |
| `publisherAdCategory` [optional] | string | Target Publisher ad category. Value in form of string of comma separated IDs |
| `ioId` | integer | Target Insertion OrderId in which this campaign belongs |
| `userDealId` [optional] | string | User specific deal IDs. Value in form of string of comma separated deal IDs |
| `groupDealId` [optional] | string | Group of selected deals. Value in form of string of comma separated deal IDs |
| `politicalAdvertiserClientId` [optional] | integer | ID of political advertiser in case of campaign is political campaign |
| `stateIds` [optional] | string | State Target. Value in form of string of comma separated IDs |
| `countryId` | string | Country Target |
| `dmaIds` [optional] deprecated | string | DMA Target. Value in form of string of comma separated IDs |
| `senateDistrictIds` [optional] deprecated | string | Senate districts Target. Value in form of string of comma separated IDs |
| `congressionalDistrictIds` [optional] deprecated | string | Congressional districts Target. Value in form of string of comma separated IDs |
| `houseDistrictIds` [optional] deprecated | string | House districts Target. Value in form of string of comma separated IDs |
| `geoRadiusDetails` [optional] deprecated | string | To target custom ares in circle or polygon. Value in form of JSON |
| `zipcodes` [optional] deprecated | string | ZipCode Target. Value in form of string of comma separated IDs |
| `locationFileIds` [optional] | string | Target location by uploading file. Value in form of string of comma separated csv file ids.(pre uploaded) |
| `ageRangeIds` [optional] | string | Target age range. Value in form of string of comma separated IDs |
| `genderIds` [optional] | string | Target gender. Value in form of string of comma-separated IDs |
| `interestIds` [optional] | string | Target user interest. Value in form of a string of comma-separated IDs |
| `incomeRangeIds` [optional] | string | Target user income range. Value in form of a string of comma-separated IDs |
| `languageIds` [optional] | string | Target user language. Value in form of a string of comma-separated IDs |
| `ethnicityIds` [optional] | string | Target user ethnicity. Value in form of a string of comma-separated ID |
| `schedule` [optional] | string[][] | key as [0 to 6] maps to [Monday to Sunday] & values [['hh:mm:ss','hh:mm:ss'], ...] |
| `conversionIds` [optional] | string | Target pixel conversions. Value in form of a string of comma-separated ID |
| `isAdvanceAudioVideoTargeted` | boolean | To indicate if the advance targeting is enabled if this is true, 'creativeAdvanceTargeting' is optional and it is assumed that every video creative segment is targeted |
| `isBidPacing` | boolean | To indicate whether the bid shading is enabled. |
| `creativeAdvanceTargeting` | JSON Map: string to integer | Map of Creative advanced targeting group to list of creative advance targeting segment IDs |
| `campaignEstimatorMetaData` | JSON | Campaign Estimator data with reachMeta, landScapeMeta and sliderMeta |

\
Scheduling Example

```json
"scheduling": {
    "0": [
      [
        "03:00:00",
        "05:00:00"
      ],
      [
        "06:00:00",
        "11:00:00"
      ]
    ]
}
```

GeoRadiusDetails example (below is the common format for whitelist and blacklist both)

```json
"whiteListedGeoRadiusDetails" : [
        {
            "unit": "mile",
            "address": "Denver, CO 80202, USA",
            "latitude": 39.739235,
            "radius": 2,
            "type": "circle",
            "longitude": -104.99025,
            "sid": "4666",
            "cid": "246"
        },
        {
            "unit": "mile",
            "address": "Grand Lake, CO 80447, USA",
            "latitude": 40.19427,
            "radius": 1,
            "type": "circle",
            "longitude": -105.84889,
            "sid": "4666",
            "cid": "246"
        },
        {
            "unit": "mile",
            "address": "Yonkers, NY 10710, USA",
            "latitude": 40.95017,
            "radius": 3,
            "type": "circle",
            "longitude": -73.84669,
            "sid": "4694",
            "cid": "246"
        },
        {
            "polypath": [
                {
                    "lng": -112.05635319323119,
                    "lat": 40.80285757668772
                },
                {
                    "lng": -111.44111881823119,
                    "lat": 38.15773779255543
                },
                {
                    "lng": -108.45283756823119,
                    "lat": 39.25508137287102
                },
                {
                    "lng": -109.15596256823119,
                    "lat": 41.266931755469045
                }
            ],
            "unit": "mile",
            "address": "Dry Creek Rd, Utah, USA",
            "latitude": 39.712334774012234,
            "type": "custom",
            "radius": 164.41,
            "longitude": -110.25459538073119,
            "sid": "4709",
            "cid": "246"
        },
        {
            "polypath": [
                {
                    "lng": -98.60998217413051,
                    "lat": 39.527470270360105
                },
                {
                    "lng": -93.16076342413051,
                    "lat": 41.662771525199084
                }
            ],
            "unit": "mile",
            "address": "Nebraska City, NE 68410, USA",
            "latitude": 40.595120897779594,
            "type": "square",
            "radius": 259.09,
            "longitude": -95.88537279913051,
            "sid": "4689",
            "cid": "246"
        }
]
```

Request Sample

```json
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

Response 201

```json
{
 "statusCode": 201,
 "responseObject": {
   "data": 25859,
   "message": "Campaign saved successfully.",
   "status": "pending"
 }
}
```

Response 400

```json
{
 "statusCode": 412,
 "responseObject": {
   "errorMsg": "Invalid arguments audience ids!",
   "errorCode": 412
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

For further information see the complete [Campaign Creation API Documentation](https://app.iqm.com/docs?path=tag/Campaign-API/operation/saveCampaign)

### Step 5: Check the campaign status

To run a campaign, it must be approved, check for status updates using: 

* `GET` /api/v2/cmp/campaign/{campaignId}

\
**Path Parameters**

| Property | Type | Definition |
| --- | --- | --- |
| `campaign_id` | string [required] | Campaign ID

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

For further information see the complete [Campaign Details API Documentation](https://app.iqm.com/docs?path=tag/Campaign-API/operation/getCampaign)

## Best Practices

The message rate limit is 20 requests per minute. Exceeding this limit will cause a 429 (too many requests) error.

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.
