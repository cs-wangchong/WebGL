# 3DWalker
* 链接：http://120.25.238.161/webGL/3DWalker.html

### 目录结构
* 所有添加或修改的源代码在src目录下。


### 开发环境
* Chrome+Html5+JS

### 运行方法
* 打开服务器，通过本地服务器访问src目录下的3DWalker.html文件即可。  


### 亮点
* 只用了一个shader，避免切换带来的性能影响；
* 代码比较清晰，重用率高；
* 对每个需要绘制的对象进行了很好地封装，避免反复创建、初始化buffer。
* 为贴图增加了光照，使得更加真实；
* 为整个场景所有模型增加了镜面反射的高亮效果；
* 对所用的对象都采用了phong shading，效果更好（这里我修改了objLoader.js的代码）；
* Mip Map防走样。
    



### 遇到的问题及解决
* 遇到的最主要的问题就是对加载的资源的是否完成判断上，尝试了很久，最后采用的方式如下：维护一个表示正在加载的资源的数目的整数值，在onload回调函数中，每加载完一个后将该值减小1。在渲染前不断地去检查这个值，知道该值为0时，表示资源加载完时才开始render。这里主要的问题是如何让加载与检查的工作同时进行又不会阻塞，我先调用了一次requestAnimationFrame来开始一个空的动画，但是这个动画里只进行检查，当检查到所有的资源加载完之后，cancel这个动画，然后开始进行真正的动画渲染。

### 缺陷
* Mip Map模糊问题。
* 未增加阴影

### 效果
![img1](./img1.png)
![img2](./img2.png)

## service list
[app-mgt](#app-mgt)  
[attachment](#attachment)  
[b2c-mono](#b2c-mono)  
[bss](#bss)  
[campaign](#campaign)  
[channel-adapter](#channel-adapter)  
[channel-lcm](#channel-lcm)  
[co-config](#co-config)  
[crm](#crm)  
[cron-service](#cron-service)  
[email](#email)  
[employee](#employee)  
[eshop-adapter](#eshop-adapter)  
[frw](#frw)  
[hit](#hit)  
[idp](#idp)  
[import-export](#import-export)  
[inventory](#inventory)  
[knowledge-base](#knowledge-base)  
[meta](#meta)  
[mobile-proxy](#mobile-proxy)  
[mp-adapter](#mp-adapter)  
[mp-connector](#mp-connector)  
[openapi](#openapi)  
[payment-intg](#payment-intg)  
[pos-adapter](#pos-adapter)  
[pricing](#pricing)  
[product](#product)  
[productivity](#productivity)  
[progress](#progress)  
[service-case](#service-case)  
[shipping](#shipping)  
[signing-authority](#signing-authority)  
[sip](#sip)  
[sms](#sms)  
[tax-engine-proxy](#tax-engine-proxy)  
[udo](#udo)  
## <sapn id="campaign">campaign</span>
P133B00001: _Invalid {0} message ID: {1}._  
P133B00002: _This is the customer's {1} account instead of {0} account. Please use the correct account information._  
P133B00004: _Failed to find the attachment. Please try again._  
P133B00005: _Failed to find the image. Please try again._  
P133B00006: _Failed to send posts to Twitter as you can only upload one GIF image at a time. Please try again._  
P133B00007: _Failed to send out the message as the content is empty._  
P133B00008: _Failed to authorize Twitter. Please try again._  
P133B00009: _Failed to send the post to Twitter as you cannot send the same message twice in one day._  
P133B00010: _Failed to send the post to Twitter as the content is more than 140 characters long._  
P133B00011: _Failed to send the post to Twitter as today you have reached the maximum post number defined by Twitter._  
P133B00012: _The authorization failed due to an unexpected error. Please try again._  
P133B00013: _The message is already sent. To check the latest message status please refresh the page._  
P133B00014: _Your current location does not support Twitter services._  
P133B00015: _The message is being publishing._  
P133B00016: _Need at least one {0} account should be authorized to use this function. Please authorize in Company Profile Settings._  
P133B00020: _Failed to send the post to Facebook as you cannot send the same message twice in one day._  
P133B00021: _Failed to send the post to Facebook as today you have reached the maximum post amount defined by Facebook._  
P133B00022: _Failed to send posts to Facebook due to an unexpected error. Please try again._  
P133B00023: _Failed to send the post to Facebook as SAP Anywhere did not obtain the corresponding permissions during the authorization process._  
P133B00024: _Failed to send the post to Facebook as SAP Anywhere is not authorized to perform this operation._  
P133B00025: _Failed to authorize Facebook. Please delete the Facebook account and redo OAuth._  
P133B00026: _This Pinterest account is not linked to SAP Anywhere. Please check your Company Profile._  
P133B00027: _Please upload an image._  
P133B00028: _Description cannot exceed 500 characters._  
P133B00029: _Please enter a valid URL._  
P133B00030: _Your Weibo access token is invalid. Please go to Company Profile in Settings to authorize your Weibo account again._  
P133B00031: _You cannot pin the image as the board does not exist._  
P133B00040: _Invalid Facebook message ID_  
P133B00041: _This social media account does not exist._  
P133B00042: _Failed to send the post to Facebook using the current URL. Please try using another URL._  
P133B00043: _Pinterest authentication failed_  
P133B00044: _Pinterest service not found_  
P133B00045: _Pinterest service time out_  
P133B00046: _Too many requests sent to Pinterest_  
P133B00047: _Pinterest server error_  
P133B00048: _Unknown error from Pinterest service. Please try again later._  
P133B00049: _Invalid social media message ID_  
P133B00050: _Cannot send a reply to this social media feed type_  
P133B00051: _Cannot find the user_  
P133B00052: _Failed to send reply to Facebook. Parent message doesn't exists._  
P133B00053: _You have reached the limit for this operation today._  
P133B00054: _The authorization to the Twitter account has expired. Please authorize again in Company Profile Settings._  
P133B00055: _You cannot add more than 4 media items in a tweet._  
P133B00056: _Facebook account authorization has expired. Please authorize again in Company Profile Settings._  
P133B00057: _Pinterest account authorization has expired. Please authorize again in Company Profile Settings._  
P133B00058: _{0} account authorization has expired. Please authorize again in Company Profile Settings._  
P133B03060: _Invalid Pinterest account name: {0}._  
P133B04059: _Invalid Instagram User ID: {0}._  
P150B02001: _Corporate Name cannot be empty._  
P150B02002: _Last Name cannot be empty._  
P150B02003: _Customer Type cannot be empty._  
P150B02004: _Address is not assigned to the customer._  
P150B02005: _Customer cannot be edited._  
P150B02006: _Main contact does not exist._  
P150B02007: _Sales channel does not exist._  
P150B02008: _You cannot delete this industry as it is being used by some customers._  
P150B02009: _You cannot delete this customer group as it is being been used by some customers._  
P150B02010: _Failed to create/update duplicated customer._  
P150B02011: _Cannot continue with the process as the status of the customer's payment term was changed to inactive. Please choose another payment term for the customer, or go to Settings and change the status to active._  
P150B02012: _Cannot continue with the process as the status of the customer's payment method was changed to inactive. Please choose another payment method for the customer, or go to Settings and change the status to active._  
P150B02013: _Cannot change the customer for the contact. You can remove the customer if you no longer need it._  
P150B02014: _Only a corporate customer can be added to the contact._  
P150B02015: _Contact of a customer cannot be assigned as the main contact of another customer._  
P150B02016: _Inactive email address. Please use a different one, or contact your administrator._  
P150B02017: _Cannot continue with the process as the status of the customer's membership level was changed to inactive. Please choose another membership level for the customer, or go to Settings and change their status to active._  
P150B02018: _You cannot delete this contact as it is the contact of an existing customer._  
P150B02019: _Credit limit cannot be less than 0._  
P150B02020: _Credit alert threshold cannot be less than 0._  
P150B02021: _Credit alert threshold cannot be larger than credit limit._  
P150B02022: _You cannot delete the customer as it has channel account(s)._  
P150B02023: _You cannot delete the contact as it is already used in channel account(s)._  
P150B02024: _You cannot delete the customer as there are membership event(s) created for it._  
P150B02025: _You cannot delete the customer as it has duplicate(s)._  
P150B02026: _You cannot delete the customer as it is a duplicate of another customer._  
P150B02027: _You can only modify the name of predefined membership level._  
P150B02028: _You cannot delete the customer as it is the default customer of the physical store channel._  
P151B02072: _Please enter the customer's Facebook account name._  
P151B02073: _Please enter the company's Facebook account name._  
P151B02074: _The company's Facebook account is inactive._  
P151B02075: _Only one attachment is allowed for Facebook communication._  
P151B02076: _Listening to the company's Twitter account is disabled._  
P151B02077: _Listening to the company's Facebook account is disabled._  
P151B02078: _Service case(s) were already generated from selected feed(s)._  
P151B02081: _Cannot reply via service case communication. No parent message has been found._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P166B00001: _No email service provider found._  
P166B00002: _Please authorize your email service provider to continue._  
P166B00003: _Email service provider is already synced._  
P166B00004: _Emails not sent yet. Cannot sync back from email service provider._  
P166B00005: _Campaign is already synced to email service provider._  
P166B00006: _Please specify a target group._  
P166B00007: _Failed to sync to email service provider. Please try again._  
P166B00008: _Syncing data. Please wait…_  
P166B00009: _Data already synced to your email service provider._  
P166B00010: _Please sync to email service provider first._  
P166B00011: _Please select a member list from the email integration provider in campaign settings first_  
P166B00012: _Campaign does not exist_  
P166B00013: _Campaign type cannot be changed. It is already synced with your email service provider_  
P166B00014: _Rule fields invalid_  
P166B00015: _Failed to authorize SAP Anywhere. For more help, contact your administrator._  
P166B00016: _Please assign a target group to this campaign._  
P166B00017: _There are no members in this target group._  
P166B00018: _Start date cannot be later than end date._  
P166B00019: _Duplicated conditions_  
P166B00020: _The member list does not exist._  
P166B00021: _The membership points cannot be less than 0._  
P166B00022: _The expiration date is invalid._  
P166B00023: _This customer is currently not a part of the membership._  
P166B00024: _Points gained per unit currency cannot be less than 0._  
P166B00025: _Minimum points for redemption cannot be less than 0._  
P166B00026: _Maximum points for redemption per order cannot be less than 0._  
P166B00027: _Point validity period cannot be less than 0._  
P166B00028: _You cannot use your points right now as your point balance of {0} points is less than {1} points, the minimum amount required for redemption._  
P166B00029: _You cannot use {0} points in this order as the maximum points usage permitted per order is {1} points._  
P166B00030: _Sorry, currently you have insufficient points to carry on the operation._  
P166B00031: _Points per currency unit cannot be less than 0._  
P166B00032: _Failed to receive the attachment. Please try again._  
P166B00033: _App ID or App Secret is invalid._  
P166B00034: _To send out this message in WeChat, you must have at least 2 followers._  
P166B00035: _Cannot find the attachment's url._  
P166B00036: _Cannot get the WeChat content from backend. Please check again._  
P166B00037: _The WeChat account does not exist. Please check again._  
P166B00038: _{0} returns with error: {1}, {2}._  
P166B00039: _This WeChat account has already been added._  
P166B00040: _Failed to send the message to WeChat as you cannot send the same message twice in one day._  
P166B00041: _The title of a WeChat message cannot be empty. Please enter a title first._  
P166B00042: _You cannot send out WeChat messages without content._  
P166B00043: _The cover image of the WeChat message cannot be empty. Please upload a cover image first._  
P166B00044: _The cover image's file type must be PNG or JPEG._  
P166B00045: _There is no online store available. Please create your online store first._  
P166B00046: _A system error occurred on the WeChat Server. Please try again._  
P166B00060: _The end date cannot be earlier than the start date._  
P166B00061: _Awards of the same type cannot have overlapping durations._  
P166B00062: _The Customer/Contact ID {0} is invalid. Please check again._  
P166B00063: _When Customer/Contact ID is filled, you must choose a corresponding customer/contact type._  
P166B00064: _This function is now still a trial version. Each hour we only support users for a limited number of attempts. If you want to continue using the function, we suggest you try again later._  
P166B00065: _There are no members in this target group. Please choose another target group._  
P166B00066: _Cannot sync back to SAP Anywhere as you have already bound this email account to another email service provider._  
P166B00067: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00068: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00069: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00070: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00071: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00072: _Failed to cancel the authorization. Please try again later._  
P166B00073: _Operation to the email account failed. Please try again later._  
P166B00074: _The authorization is now invalid. Please cancel the authorization and authorize it again._  
P166B00075: _Customer is invalid._  
P166B00076: _Contact is invalid._  
P166B00077: _Source is invalid._  
P166B00078: _TargetGroup is invalid._  
P166B00079: _Cannot import to a target group with conditions. Please choose a manually created target group for the import._  
P166B00080: _Customer/Contact cannot be empty._  
P166B00081: _Member duplicated._  
P166B00082: _Lead(s) were already generated from selected feed(s)._  
P166B00084: _Feed was already closed._  
P166B00085: _You cannot delete the customer as it is already used in Lead._  
P166B00086: _You cannot delete the customer as it is already used in Target Group._  
P166B00087: _You cannot delete the contact as it is already used in Lead._  
P166B00088: _You cannot delete the contact as it is already used in Target Group._  
P166B00089: _Signature validation error_  
P166B00090: _XML parsing error_  
P166B00091: _Signature computing error_  
P166B00092: _Illegal AES key_  
P166B00093: _App ID validation error_  
P166B00094: _AES encryption error_  
P166B00095: _AES decryption error_  
P166B00096: _Illegal buffer_  
P166B00097: _Failed to update card status as card ID ({}) cannot be found._  
P166B00098: _WeChat notification ({}) invalid. This notification will be skipped._  
P166B00099: _Only one WeChat membership card is permitted._  
P166B00100: _The membership card can only be sent to a maximum of 10 Wechat IDs to preview._  
P166B00101: _You cannot preview the WeChat Membership card before editing the card's information._  
P166B00102: _You cannot preview non WeChat Membership cards._  
P166B00103: _Only one WeChat membership card is permitted._  
P166B00104: _Membership number count exceeds the quantity. Please modify the quantity._  
P166B00105: _Please upload the logo before you upload the membership card to WeChat._  
P166B00106: _To dispatch via WeChat, you must choose a WeChat account._  
P166B00107: _Customers were already generated from selected feeds._  
P166B00108: _Valid to date must be after valid from date._  
P166B00109: _The "Valid To" date must be later than today._  
P166B00110: _Quantity must be greater than 0._  
P166B00111: _This WeChat card has already been consumed._  
P166B00112: _The WeChat card was deleted by the customer or given to a friend._  
P166B00113: _The API is unauthorized for this card._  
P166B00114: _Text analysis failed. Invalid email thread ID._  
P166B00115: _Text analysis failed. Invalid email message ID._  
P166B00116: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00117: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00118: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00119: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00120: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00121: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00122: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00123: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00124: _Only one WeChat account is allowed._  
P166B00125: _The uploaded file to WeChat is invalid. Please check and upload a new file._  
P166B00126: _The WeChat name does not exist._  
P166B00127: _Please select a color if you want to dispatch the card on WeChat._  
P166B00128: _You need to subscribe to the WeChat public account to receive messages from it._  
P166B00129: _You need to upload a cover image for each article._  
P166B00130: _Too many attempts. Please wait for a while and try again later._  
P166B00132: _Points are insufficient according to the conversion rules configured in settings._  
P166B00133: _Too many points are being used according to the conversion rules configured in settings._  
P166B00134: _The points do not hold the same value as money._  
P166B00135: _Duplicate campaign name exists._  
P166B00136: _Organization address is empty._  
P166B00137: _Invalid ID._  
P166B00138: _Cost cannot be negative._  
P166B00139: _API not authorized. Please open this function in your WeChat public account._  
P166B00140: _You have not enabled the shake around function on your public account, please open it._  
P166B00141: _Attachment is invalid. Please contact your administrator or the SAP Anywhere support team._  
P166B00142: _Cannot read the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00143: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00144: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00145: _Cannot send the email with attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00146: _The campaign does not exist._  
P166B00147: _The beacon and page are created by different WeChat accounts._  
P166B00148: _You cannot choose an expired time._  
P166B00149: _One social message was successfully sent just now. Please refresh your page for further operations._  
P166B00150: _Hashtag must be shorter than 32 characters, and cannot include any spaces or special characters._  
P166B00151: _Duplicate campaign hashtag exists._  
P166B00152: _Please select a code type if you want to dispatch the card on WeChat._  
P166B00154: _The account information for configuring the OAuth is incorrect. Please try again._  
P166B00155: _Third party page returned {0} {1}. Please try again later._  
P166B00156: _Invalid URL request: {0}._  
P166B00157: _HTTP method not supported: {0}._  
P166B00158: _Invalid ID: {0}._  
## <sapn id="knowledge-base">knowledge-base</span>
P159B04001: _Invalid knowledge base item_  
P159B04002: _Invalid knowledge base item ID_  
P159B04003: _Invalid service case document number._  
P159B04004: _Knowledge base sequence used for document numbering not found._  
## <sapn id="mp-adapter">mp-adapter</span>
## <sapn id="payment-intg">payment-intg</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P103B02005: _You cannot delete an already triggered approval_  
P103B02006: _Approval "{0}" already exists_  
P103B02007: _User "{0}" is invalid_  
P103B02008: _Business object type does not exist_  
P103B02009: _You are not authorized to view this information_  
P103B02010: _Business object "{0}" does not exist_  
P103B02011: _You are not authorized to assign this object_  
P103B02012: _Invalid dynamic authorization id: {0}_  
P103B02013: _Invalid role id: {0}_  
P103B02014: _Invalid system business object id: {0}_  
P103B02015: _{0} is not a system predefined role._  
P103B02016: _missing argument_  
P103B02017: _Please enter a role name._  
P103B02018: _The role name has been used, please enter another name._  
P103B02019: _Cannot delete {0}. It is a system predefined role._  
P103B02020: _Cannot delete this role. It is already assigned to users._  
P103B02021: _Invalid authorization item name: {0}_  
P103B10000: _You cannot unlock yourself_  
P103B10001: _You cannot lock yourself_  
P103B10002: _You cannot change yourself to normal user_  
P103B10003: _You cannot change yourself to key user_  
P103B10004: _You cannot view restricted price lists_  
P103B10005: _You are not authorized to change user permissions_  
P103B10006: _Permission item index "{0}" is invalid_  
P103B10007: _Permission argument is invalid_  
P103B10008: _You are not authorized to create users_  
P103B10009: _Cannot create user due to an unexpected error. Report error?_  
P103B10010: _Enter an email address_  
P103B10011: _Email address is invalid_  
P103B10012: _An account already exists for this email address. To reset your password, choose the “Forgot you password” link._  
P103B10013: _You are not authorized to change user details_  
P103B10014: _Cannot update user due to an unexpected error. Report error?_  
P103B10015: _You cannot delete yourself_  
P103B10016: _You are not authorized to delete users_  
P103B10017: _Cannot delete user due to an unexpected error. Report error?_  
P103B10018: _Phone number {0} is invalid_  
P103B10019: _User {0} does not exist_  
P103B10020: _Business object identifier "{0}.{1}" is invalid_  
P103B10021: _Enter a valid password_  
P103B10022: _You are not authorized to change user passwords_  
P103B10024: _Enter a new password_  
P103B10025: _Enter the current password_  
P103B10026: _Your new password must not be the same as your current one_  
P103B10027: _Email Address {0} already exists._  
P103B10028: _Current password is incorrect_  
P103B10029: _Invoke by createUserEmployee function to create user._  
P103B10030: _Invoke by checkedUpdate function to update user info._  
P103B10031: _No method available in property: {0}._  
P103B10032: _Failed to get property: {0}._  
P103B10033: _Business object entity key is null._  
P103B10034: _Image upload failed._  
P103B10035: _Attachment not found._  
P103B10036: _Queue server is unavailable, please contact system administrator_  
P103B10037: _Cannot upload the template. Please make sure the file format is XLS and that content within the template is correct._  
P103B10038: _File conversion failed, please contact system administrator_  
P103B10039: _Invalid setting for the manager. Please check._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20001: _Invalid input_  
P103B20002: _Local currency is not existing._  
P103B30000: _Activity does not exist_  
P103B30001: _Status is invalid_  
P103B30002: _One or more mandatory fields are missing required information._  
P103B30003: _One or more mandatory fields are missing required information._  
P103B30004: _One or more mandatory fields are missing required information._  
P103B30005: _User does not exist_  
P103B30006: _No permission to read_  
P103B30007: _No permission to write_  
P103B30008: _You cannot delete approval activities_  
P103B30009: _You cannot change the activity status_  
P103B30010: _You cannot change completed activities_  
P103B30011: _You cannot change the activity status_  
P103B30012: _You cannot approve or reject this activity_  
P103B30013: _You are not authorized to change the approval status_  
P103B30014: _Document type is invalid_  
P103B30015: _Business object not found_  
P103B30016: _Attachment does not exist_  
P103B30017: _Cannot create approval due to an unexpected error. Please try again._  
P103B30018: _You cannot reopen approval activities_  
P103B30019: _Activity is already open_  
P103B30020: _{0} was sent to you for approval_  
P103B30021: _{1} assigned a {0} to you._  
P103B30022: _{1} updated a {0}._  
P103B30023: _A {1} for {0} was changed by {2}._  
P103B30024: _A {1} for {0} was created by {2}._  
P103B30025: _A {1} for {0} was deleted by {2}._  
P103B30026: _{1} has approved a {0}._  
P103B30027: _{1} has rejected a {0}._  
P103B30028: _{1} has completed a {0}._  
P103B30029: _A {1} for {0} has been completed by {2}._  
P103B30030: _A {1} for {0} was reopened by {2}._  
P103B30031: _A {1} for {0} has been approved by {2}._  
P103B30032: _A {1} for {0} has been rejected by {2}._  
P103B30033: _{1} reopened a {0}._  
P103B30034: _You have already sent an authorization request. Please wait for approval_  
P103B30035: _{0} sent you a {1} for authorization approval_  
P103B30036: _{0} has granted you full access to {1}_  
P103B30037: _{0} has granted you read-only access to {1}_  
P103B30038: _{0} has rejected your request for accessing to {1}_  
P103B30039: _description_  
P103B30040: _You cannot attach an empty file_  
P103B30041: _Text_  
P103B30042: _Activity {0} is invalid_  
P103B30043: _A {1} for {0} was changed by {2}._  
P103B30044: _A {1} for {0} was created by {2}._  
P103B30045: _A {1} for {0} was deleted by {2}._  
P103B30046: _User "{0}" is invalid_  
P103B30047: _{0} requests approval for {1} worth {2}_  
P103B30048: _Invalid action for this type of activity._  
P103B40001: _The ContactPerson is invalid_  
P103B50001: _Attachment Upload Failed._  
P103B50002: _Attachment Download Failed._  
P103B50003: _Not Authorized to delete or update Attachment._  
P103B50004: _Not Authorized to Create or Add Attachment._  
P103B50005: _Not Authorized to Read Attachment._  
P103B60001: _Taobao integration already active._  
P103B60002: _Taobao integration already inactive._  
P103B60003: _Taobao login failed: {0}._  
P103B60004: _Do OAuth with Taobao first._  
P103B60005: _SKU ID {0} is invalid. Product ID {0} is invalid._  
P103B60006: _SKU ID {0} is invalid._  
P103B60007: _Refresh token is expired._  
P103B60008: _No RMB currency._  
P103B60009: _Product code cannot be empty._  
P103B60010: _Product code {0} is invalid._  
P103B60011: _Products were delivered from Taobao, you need create an order and deliver it manually._  
P103B60012: _Invalid channel type for Taobao Channel. Only Taobao or Tmall is valid._  
P103B60013: _This trade has already been generated a Sales Order._  
P103B60014: _Sales order {0} is invalid._  
P103B60015: _Sales order {0} is already related to external order {1}._  
P103B60016: _Cannot relate return order to trade._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P103B90001: _content is limited 140 characters, when the note has an attachment_  
P103B93125: _Cannot create user due to maximum number of users exceeded._  
P103S10023: _Failed to change password as the application has encountered an error. We are aware of the error and already working on a resolution._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00070: _You cannot delete the {0} as it is already in use._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
## <sapn id="meta">meta</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P103B02005: _You cannot delete an already triggered approval_  
P103B02006: _Approval "{0}" already exists_  
P103B02007: _User "{0}" is invalid_  
P103B02008: _Business object type does not exist_  
P103B02009: _You are not authorized to view this information_  
P103B02010: _Business object "{0}" does not exist_  
P103B02011: _You are not authorized to assign this object_  
P103B02012: _Invalid dynamic authorization id: {0}_  
P103B02013: _Invalid role id: {0}_  
P103B02014: _Invalid system business object id: {0}_  
P103B02015: _{0} is not a system predefined role._  
P103B02016: _missing argument_  
P103B02017: _Please enter a role name._  
P103B02018: _The role name has been used, please enter another name._  
P103B02019: _Cannot delete {0}. It is a system predefined role._  
P103B02020: _Cannot delete this role. It is already assigned to users._  
P103B02021: _Invalid authorization item name: {0}_  
P103B10000: _You cannot unlock yourself_  
P103B10001: _You cannot lock yourself_  
P103B10002: _You cannot change yourself to normal user_  
P103B10003: _You cannot change yourself to key user_  
P103B10004: _You cannot view restricted price lists_  
P103B10005: _You are not authorized to change user permissions_  
P103B10006: _Permission item index "{0}" is invalid_  
P103B10007: _Permission argument is invalid_  
P103B10008: _You are not authorized to create users_  
P103B10009: _Cannot create user due to an unexpected error. Report error?_  
P103B10010: _Enter an email address_  
P103B10011: _Email address is invalid_  
P103B10012: _An account already exists for this email address. To reset your password, choose the “Forgot you password” link._  
P103B10013: _You are not authorized to change user details_  
P103B10014: _Cannot update user due to an unexpected error. Report error?_  
P103B10015: _You cannot delete yourself_  
P103B10016: _You are not authorized to delete users_  
P103B10017: _Cannot delete user due to an unexpected error. Report error?_  
P103B10018: _Phone number {0} is invalid_  
P103B10019: _User {0} does not exist_  
P103B10020: _Business object identifier "{0}.{1}" is invalid_  
P103B10021: _Enter a valid password_  
P103B10022: _You are not authorized to change user passwords_  
P103B10024: _Enter a new password_  
P103B10025: _Enter the current password_  
P103B10026: _Your new password must not be the same as your current one_  
P103B10027: _Email Address {0} already exists._  
P103B10028: _Current password is incorrect_  
P103B10029: _Invoke by createUserEmployee function to create user._  
P103B10030: _Invoke by checkedUpdate function to update user info._  
P103B10031: _No method available in property: {0}._  
P103B10032: _Failed to get property: {0}._  
P103B10033: _Business object entity key is null._  
P103B10034: _Image upload failed._  
P103B10035: _Attachment not found._  
P103B10036: _Queue server is unavailable, please contact system administrator_  
P103B10037: _Cannot upload the template. Please make sure the file format is XLS and that content within the template is correct._  
P103B10038: _File conversion failed, please contact system administrator_  
P103B10039: _Invalid setting for the manager. Please check._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20001: _Invalid input_  
P103B20002: _Local currency is not existing._  
P103B30000: _Activity does not exist_  
P103B30001: _Status is invalid_  
P103B30002: _One or more mandatory fields are missing required information._  
P103B30003: _One or more mandatory fields are missing required information._  
P103B30004: _One or more mandatory fields are missing required information._  
P103B30005: _User does not exist_  
P103B30006: _No permission to read_  
P103B30007: _No permission to write_  
P103B30008: _You cannot delete approval activities_  
P103B30009: _You cannot change the activity status_  
P103B30010: _You cannot change completed activities_  
P103B30011: _You cannot change the activity status_  
P103B30012: _You cannot approve or reject this activity_  
P103B30013: _You are not authorized to change the approval status_  
P103B30014: _Document type is invalid_  
P103B30015: _Business object not found_  
P103B30016: _Attachment does not exist_  
P103B30017: _Cannot create approval due to an unexpected error. Please try again._  
P103B30018: _You cannot reopen approval activities_  
P103B30019: _Activity is already open_  
P103B30020: _{0} was sent to you for approval_  
P103B30021: _{1} assigned a {0} to you._  
P103B30022: _{1} updated a {0}._  
P103B30023: _A {1} for {0} was changed by {2}._  
P103B30024: _A {1} for {0} was created by {2}._  
P103B30025: _A {1} for {0} was deleted by {2}._  
P103B30026: _{1} has approved a {0}._  
P103B30027: _{1} has rejected a {0}._  
P103B30028: _{1} has completed a {0}._  
P103B30029: _A {1} for {0} has been completed by {2}._  
P103B30030: _A {1} for {0} was reopened by {2}._  
P103B30031: _A {1} for {0} has been approved by {2}._  
P103B30032: _A {1} for {0} has been rejected by {2}._  
P103B30033: _{1} reopened a {0}._  
P103B30034: _You have already sent an authorization request. Please wait for approval_  
P103B30035: _{0} sent you a {1} for authorization approval_  
P103B30036: _{0} has granted you full access to {1}_  
P103B30037: _{0} has granted you read-only access to {1}_  
P103B30038: _{0} has rejected your request for accessing to {1}_  
P103B30039: _description_  
P103B30040: _You cannot attach an empty file_  
P103B30041: _Text_  
P103B30042: _Activity {0} is invalid_  
P103B30043: _A {1} for {0} was changed by {2}._  
P103B30044: _A {1} for {0} was created by {2}._  
P103B30045: _A {1} for {0} was deleted by {2}._  
P103B30046: _User "{0}" is invalid_  
P103B30047: _{0} requests approval for {1} worth {2}_  
P103B30048: _Invalid action for this type of activity._  
P103B40001: _The ContactPerson is invalid_  
P103B50001: _Attachment Upload Failed._  
P103B50002: _Attachment Download Failed._  
P103B50003: _Not Authorized to delete or update Attachment._  
P103B50004: _Not Authorized to Create or Add Attachment._  
P103B50005: _Not Authorized to Read Attachment._  
P103B60001: _Taobao integration already active._  
P103B60002: _Taobao integration already inactive._  
P103B60003: _Taobao login failed: {0}._  
P103B60004: _Do OAuth with Taobao first._  
P103B60005: _SKU ID {0} is invalid. Product ID {0} is invalid._  
P103B60006: _SKU ID {0} is invalid._  
P103B60007: _Refresh token is expired._  
P103B60008: _No RMB currency._  
P103B60009: _Product code cannot be empty._  
P103B60010: _Product code {0} is invalid._  
P103B60011: _Products were delivered from Taobao, you need create an order and deliver it manually._  
P103B60012: _Invalid channel type for Taobao Channel. Only Taobao or Tmall is valid._  
P103B60013: _This trade has already been generated a Sales Order._  
P103B60014: _Sales order {0} is invalid._  
P103B60015: _Sales order {0} is already related to external order {1}._  
P103B60016: _Cannot relate return order to trade._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P103B71001: _To use Pitney Bowes, please provide the full warehouse address._  
P103B78001: _Please add addresses._  
P103B78002: _Please enable net price in company profile settings._  
P103B78003: _Please enable gross price in company profile settings._  
P103B78004: _Failed to read shipping label file_  
P103B78101: _Please specify applicable countries/regions._  
P103B78102: _Please enter rates._  
P103B78104: _Fixed rates cannot be created or deleted._  
P103B78105: _Please enable fixed rates in shipping settings._  
P103B78201: _Please enable at least one shipping method._  
P103B78202: _You cannot create new shipping methods._  
P103B78203: _You cannot delete shipping methods._  
P103B78204: _You cannot disable the shipping method as it is already assigned to channels._  
P103B78205: _Carrier-calculated rates are disabled for Chinese shipping carriers._  
P103B78206: _Please enable carrier-calculated rates in shipping settings._  
P103B78302: _There are lines with duplicated country/region, state, city, and zip code._  
P103B78303: _Specified country/region not found_  
P103B78304: _Specified state not found_  
P103B78305: _State ID must be an integer._  
P103B78309: _Weight From cannot be greater than Weight To._  
P103B78312: _Increase weight must be greater than 0._  
P103B78314: _Please enable Rates Based On Weight and Region in shipping settings._  
P103B78315: _There are overlapping weight ranges for lines with the same country/region, state, city, and zip code._  
P103B78316: _Please add information to the lines._  
P103B78409: _Interior length cannot be greater than exterior length._  
P103B78410: _Interior width cannot be greater than exterior width._  
P103B78411: _Interior height cannot be greater than height length._  
P103B78502: _Min. delivery days cannot be greater than max. delivery days._  
P103B78503: _Valid From must be earlier than Valid To._  
P103B78504: _Please enable free shipping in shipping settings._  
P103B78510: _Please enable the shipping method first._  
P103B78511: _Settings data for free-shipping does not exist._  
P103B78512: _Settings data for fixed-rates does not exist._  
P103B78513: _Cannot find setting data for carrier {0}_  
P103B78514: _Carrier {0} not found_  
P103B78611: _A network error occurred while calling a third-party shipping service._  
P103B78612: _The third-party shipping service returned an authentication error._  
P103B78613: _Failed to create the order using a third-party shipping service_  
P103B78614: _Failed to confirm the order using a third-party shipping service_  
P103B78701: _Shipping Carrier ID is invalid._  
P103B78702: _Shipping Carrier IDs are duplicated._  
P103B78703: _Shipping carrier not found_  
P103B78704: _Please enable the shipping carrier in shipping settings._  
P103B78705: _Current shipping carrier is already used in sales deliveries._  
P103B78707: _Please enter carrier code._  
P103B78708: _Carrier-calculated rates are not supported by this shipping carrier._  
P103B78709: _Please add printing templates in shipping carrier settings._  
P103B78710: _Failed to download shipping label due to an unexpected error. Please try again later._  
P103B78712: _Electronic labels are not supported by current carrier._  
P103B78714: _Please specify S.F. Express delivery type._  
P103B78716: _Please enter your monthly account._  
P103B78717: _Please enter your access key._  
P103B78718: _Please enter your customer check code._  
P103B78720: _Please specify the delivery type first._  
P103B78801: _S.F. Express web service returned an error: {0}._  
P103B78802: _Failed to create S.F. Express electronic label._  
P103B78803: _Please enter the recipient's state._  
P103B78804: _Please enter the recipient's city._  
P103B78805: _Please enter the sender's state._  
P103B78806: _Please enter the sender's city._  
P103B78807: _Please enter the total weight._  
P103B78901: _Currency {0} not found. Please specify a valid one._  
P103B78902: _Please specify a currency._  
P103B78903: _You cannot delete the rate as it is already used._  
P103B78904: _You cannot change the rate's name as the rate is already used._  
P103B80001: _You must clear all rate settings before changing the exchange rate quotation method._  
P103B80002: _Illegal arguments were passed to this function: {0}_  
P103B80003: _You must enter an exchange rate here or in Settings._  
P103B80004: _Failed to send a test email; please ensure that the SMTP settings are correct._  
P103B80006: _Email template not found_  
P103B80007: _Cannot change the local currency as it has already been used for some transactions._  
P103B80008: _Email template already exists._  
P103B80009: _This app name already exists._  
P103B80010: _Failed to delete this app_  
P103B80011: _Failed to create OAuth client_  
P103B80012: _Failed to get IDP url_  
P103B80013: _Authorization failed_  
P103B80015: _Authorization failed, the password incorrect._  
P103B90001: _content is limited 140 characters, when the note has an attachment_  
P103B93125: _Cannot create user due to maximum number of users exceeded._  
P103S10023: _Failed to change password as the application has encountered an error. We are aware of the error and already working on a resolution._  
P133B00004: _Failed to find the attachment. Please try again._  
P133B00005: _Failed to find the image. Please try again._  
P133B00006: _Failed to send posts to Twitter as you can only upload one GIF image at a time. Please try again._  
P133B00007: _Failed to send out the message as the content is empty._  
P133B00008: _Failed to authorize Twitter. Please try again._  
P133B00009: _Failed to send the post to Twitter as you cannot send the same message twice in one day._  
P133B00010: _Failed to send the post to Twitter as the content is more than 140 characters long._  
P133B00011: _Failed to send the post to Twitter as today you have reached the maximum post number defined by Twitter._  
P133B00012: _The authorization failed due to an unexpected error. Please try again._  
P133B00013: _The message is already sent. To check the latest message status please refresh the page._  
P133B00014: _Your current location does not support Twitter services._  
P133B00020: _Failed to send the post to Facebook as you cannot send the same message twice in one day._  
P133B00021: _Failed to send the post to Facebook as today you have reached the maximum post amount defined by Facebook._  
P133B00022: _Failed to send posts to Facebook due to an unexpected error. Please try again._  
P133B00023: _Failed to send the post to Facebook as SAP Anywhere did not obtain the corresponding permissions during the authorization process._  
P133B00024: _Failed to send the post to Facebook as SAP Anywhere is not authorized to perform this operation._  
P133B00025: _Failed to authorize Facebook. Please delete the Facebook account and redo OAuth._  
P133B00026: _This Pinterest account is not linked to SAP Anywhere. Please check your Company Profile._  
P133B00027: _Please upload an image._  
P133B00028: _Description cannot exceed 500 characters._  
P133B00029: _Please enter a valid URL._  
P133B00030: _Your Weibo access token is invalid. Please go to Company Profile in Settings to authorize your Weibo account again._  
P133B00031: _You cannot pin the image as the board does not exist._  
P133B00040: _Invalid Facebook message ID_  
P133B00041: _This social media account does not exist._  
P133B00042: _Failed to send the post to Facebook using the current URL. Please try using another URL._  
P133B00043: _Pinterest authentication failed_  
P133B00044: _Pinterest service not found_  
P133B00045: _Pinterest service time out_  
P133B00046: _Too many requests sent to Pinterest_  
P133B00047: _Pinterest server error_  
P133B00048: _Unknown error from Pinterest service. Please try again later._  
P133B00049: _Invalid social media message ID_  
P133B00050: _Cannot send a reply to this social media feed type_  
P133B00051: _Requests are being denied due to update limits._  
P133B00052: _Failed to send reply to Facebook. Parent message doesn't exists._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P149B02001: _Receipt quantity must be greater than 0._  
P149B02002: _You cannot delete inventory receipts._  
P149B02021: _Line {0}: Quantity must be greater than 0._  
P149B02022: _Line {0}: Quantity cannot exceed the in-stock quantity._  
P149B02023: _You cannot delete inventory issues._  
P149B02026: _This warehouse is currently inactive. To continue, please activate the warehouse._  
P149B02027: _This product is a non-inventory product._  
P149B02028: _Warehouse must be blank when it is a dropship order._  
P149B02029: _Please specify a warehouse when it is not a dropship order._  
P149B02041: _Counted quantity cannot be less than 0._  
P149B02042: _SKU {0} has been entered more than once._  
P149B02043: _Specified SKU not found. Please enter a valid SKU._  
P149B02044: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02045: _Please add products._  
P149B02046: _You cannot delete inventory counts._  
P149B02047: _Line {0}: Counted quantity is mandatory._  
P149B02048: _Line {0} Batch number {1} is duplicated._  
P149B02061: _Line {0}: Quantity must be greater than 0._  
P149B02062: _Specified product not found. Please enter a valid product._  
P149B02063: _Product %{0}% has been entered more than once._  
P149B02064: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02065: _You cannot delete inventory opening balances._  
P149B02066: _Line {0}: All batch quantities should have the same sign (plus/minus)._  
P149B02067: _Line {0}: Duplicated product found in existing opening balances_  
P149B02068: _Line {0}: Unit price cannot be less than 0._  
P149B02081: _Warehouse cannot be null or from-warehouse and to-warehouse cannot be the same._  
P149B02082: _Line {0}: Transfer-out quantity must be greater than 0._  
P149B02083: _Line {0}: Quantity cannot exceed the in-stock quantity._  
P149B02084: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02085: _Specified SKU not found. Please enter a valid SKU._  
P149B02086: _You cannot delete inventory transfers._  
P149B02087: _Transfer-in time cannot be earlier than transfer-out time._  
P149B02088: _Line {0}: Transfer-in quantity must be greater than 0._  
P149B02089: _Line {0}: Transfer-in quantity cannot be greater than transfer-out quantity._  
P149B02090: _Pleae enter the transfer-out time._  
P149B02141: _You cannot deactivate this warehouse as the amount of inventory is greater than 0._  
P149B02144: _You cannot change the status of a warehouse once it is used in channels._  
P149B02145: _You cannot delete warehouses._  
P149B02146: _Please enter a warehouse code._  
P149B02147: _Please enter a warehouse name._  
P149B02148: _You cannot update the warehouse code as it already exists._  
P149B02149: _Duplicated operator found. Please choose another._  
P149B02161: _Quantity must be greater than 0._  
P149B02162: _You cannot update the inventory log._  
P149B02163: _You cannot delete the inventory log._  
P149B02182: _Inventory UoM used in current document is inconsistent with the one specified in product master data. Please select the product again._  
P149B02183: _Invalid product. Please enter a valid one._  
P149B02184: _Invalid warehouse. Please enter a valid one._  
P149B02185: _Invalid input parameter_  
P149B02186: _In-stock quantity cannot be less than 0._  
P149B02187: _Invalid accumulator type_  
P149B02188: _Allocated quantity cannot be less than 0._  
P149B02189: _Purchased quantity cannot be less than 0._  
P149B02190: _Failed to update inventory info_  
P149B02191: _In-stock quantity cannot be less than the allocated quantity._  
P149B02192: _Committed quantity cannot be less than the allocated quantity._  
P149B02193: _Committed quantity cannot be less than 0._  
P149B02194: _Invalid action type_  
P149B02195: _Initializing inventory cost...Please try again later._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P149B02241: _Please add at least one product._  
P149B02242: _Quantity of the batch number must be greater than 0._  
P149B02250: _Please specify a bundle product._  
P149B02251: _Please add component products._  
P149B02252: _You cannot delete assembly orders._  
P149B02253: _Please add products._  
P149B02254: _Quantity to assemble must be greater than 0._  
P149B02255: _Line {0}:Quantity must be less than in-stock quantity._  
P149B02256: _You cannot create the assembly order as it is already closed or canceled._  
P149B02257: _Component products in current assembly order are inconsistent wit the component products in product master data._  
P149B02258: _Cannot disassemble. The in-stock quantity of the bundle products is insufficient._  
P149B02259: _Line {0}: Quantity must be greater than 0._  
P149B02260: _Line {0}: Quantity can not be empty._  
P149B02300: _Total batch quantity does not match the line quantity._  
P149B02301: _Please enter the batch number._  
P149B02302: _Batch number {0} does not exist._  
P149B02303: _Batch number {0} is not assigned to SKU {1}._  
P149B02304: _Duplicate batch numbers found_  
P149B02305: _Please enter all the batches with non-zero in-stock quantities._  
P149B02306: _Specified quantity for batch "{0}" exceeds the in-stock quantity._  
P149B02310: _You cannot update the product after a batch number is assigned to it._  
P149B02311: _Duplicate batch numbers are assigned to one SKU._  
P149B02312: _Expiry date must be later than creation date._  
P149B02313: _Please enter a product managed by batch._  
P149B02317: _You cannot delete inventory revaluation documents._  
P149B02318: _Line {0}: Please enter the new cost._  
P149B02319: _Line {0}: New cost cannot be negative._  
P149B02320: _Line {0}: You cannot create the inventory revaluation document as the in-stock quantitiy of this product is negative._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00043: _You must fill one Google Maps API key, or disable Google Maps in Store._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00062: _This Name in Sales Channel already exists._  
P150B00070: _You cannot delete the {0} as it is already in use._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P150B00200: _Please create a sales target first._  
P150B00201: _You can only update the draft of a sales target._  
P150B00202: _The quota must be greater than 0._  
P150B00203: _You cannot be a target owner and a sales manager at the same time._  
P150B00204: _You cannot add the same owner twice for a sales target._  
P150B00205: _You can only assign a team's sales target to its sales manager._  
P150B00206: _Failed to create the sales target as it already exists in the system._  
P150B00207: _No employee was found._  
P150B00208: _Failed to delete the sales targets._  
P150B00209: _Cannot find the sales target._  
P150B02001: _Corporate Name cannot be empty._  
P150B02002: _Last Name cannot be empty._  
P150B02003: _Customer Type cannot be empty._  
P150B02004: _Address is not assigned to the customer._  
P150B02005: _Customer cannot be edited._  
P150B02006: _Main contact does not exist._  
P150B02007: _Sales channel does not exist._  
P150B02008: _You cannot delete this industry as it is being used by some customers._  
P150B02009: _You cannot delete this customer group as it is being been used by some customers._  
P150B02010: _Failed to create/update duplicated customer._  
P150B02011: _Cannot continue with the process as the status of the customer's payment term was changed to inactive. Please choose another payment term for the customer, or go to Settings and change the status to active._  
P150B02012: _Cannot continue with the process as the status of the customer's payment method was changed to inactive. Please choose another payment method for the customer, or go to Settings and change the status to active._  
P150B02013: _Cannot change the customer for the contact. You can remove the customer if you no longer need it._  
P150B02014: _Only a corporate customer can be added to the contact._  
P150B02015: _Contact of a customer cannot be assigned as the main contact of another customer._  
P150B02016: _Inactive email address. Please use a different one, or contact your administrator._  
P150B02017: _Cannot continue with the process as the status of the customer's membership level was changed to inactive. Please choose another membership level for the customer, or go to Settings and change their status to active._  
P150B02018: _You cannot delete this contact as it is the contact of an existing customer._  
P150B02019: _Credit limit cannot be less than 0._  
P150B02020: _Credit alert threshold cannot be less than 0._  
P150B02021: _Credit alert threshold cannot be larger than credit limit._  
P150B02022: _You cannot delete the customer as it has channel account(s)._  
P150B02023: _You cannot delete the contact as it is already used in channel account(s)._  
P150B02024: _You cannot delete the customer as there are membership event(s) created for it._  
P150B02025: _You cannot delete the customer as it has duplicate(s)._  
P150B02026: _You cannot delete the customer as it is a duplicate of another customer._  
P150B02027: _You can only modify the name of predefined membership level._  
P150B02028: _You cannot delete the customer as it is the default customer of the physical store channel._  
P151B02001: _Invalid service case_  
P151B02002: _Invalid service case ID_  
P151B02003: _Invalid service case origin ID_  
P151B02004: _Invalid customer ID_  
P151B02005: _Invalid contact ID_  
P151B02006: _Invalid service case priority ID_  
P151B02007: _Invalid service case status ID_  
P151B02009: _Invalid service case support team ID_  
P151B02010: _Invalid service case assignee ID_  
P151B02011: _Invalid or unknown relation type_  
P151B02020: _Invalid service case object assignment input parameters_  
P151B02021: _Missing Service Case referenced object_  
P151B02023: _Missing Service Case related object enumeration_  
P151B02025: _Invalid Employee ID_  
P151B02026: _Please enter an email address._  
P151B02027: _Please enter a phone number._  
P151B02028: _Service Case Type Group cannot be empty._  
P151B02029: _You cannot set the service case type group as it already exists._  
P151B02030: _You cannot repeatedly add a document._  
P151B02031: _Invalid Attachment ID_  
P151B02034: _The response time must be earlier than the resolution time._  
P151B02035: _You cannot change the mandatory contact details in SAP Manage Anywhere._  
P151B02040: _To send a knowledge base item to customers, you must publish it first._  
P151B02044: _Invalid Channel ID_  
P151B02047: _The SAP Manage Anywhere Server is configured incorrectly._  
P151B02048: _The service case has already been closed._  
P151B02049: _The service case has already been assigned to someone._  
P151B02051: _There are no types to be assigned._  
P151B02052: _Cannot find the specified type group._  
P151B02053: _The service case type does not exist or cannot be found._  
P151B02054: _Please enter the customer's twitter account name._  
P151B02055: _Please enter the company's twitter account name._  
P151B02056: _Invalid social message attachment ID_  
P151B02057: _The company's twitter account is inactive._  
P151B02058: _Mandatory field 'assignTo' is missing._  
P151B02059: _Mandatory field 'assignToSocial' is missing._  
P151B02060: _Invalid service case communication text._  
P151B02061: _Response Time and Resolution Time cannot be empty concurrently._  
P151B02062: _You have set reminders for Response Time, but the response time is empty. Please set the response time, or delete the reminder._  
P151B02063: _You have set reminders for Resolution Time, but the resolution time is empty. Please set the resolution time, or delete the reminder._  
P151B02064: _Failed to delete the service level as it is already assigned to a customer._  
P151B02065: _You cannot delete the sales order as it is already used in a Service Case._  
P151B02066: _You cannot delete the sales return as it is already used in a Service Case._  
P151B02067: _You cannot delete the invoice as it is already used in a Service Case._  
P151B02068: _You cannot delete the payment as it is already used in a Service Case._  
P151B02069: _You cannot delete the product as it is already used in a Service Case._  
P151B02070: _You cannot delete the category as it is already used in a Service Case._  
P151B02071: _You cannot delete the customer as it is already used in a Service Case._  
P151B02072: _Please enter the customer's Facebook account name._  
P151B02073: _Please enter the company's Facebook account name._  
P151B02074: _The company's Facebook account is inactive._  
P151B02075: _Only one attachment is allowed for Facebook communication._  
P151B02076: _Listening to the company's Twitter account is disabled._  
P151B02077: _Listening to the company's Facebook account is disabled._  
P151B02078: _Service case(s) were already generated from selected feed(s)._  
P151B02079: _You cannot delete contact person as it is already used in a Service Case._  
P151B02080: _You cannot delete service team as it is already used in a Service Case._  
P151B02081: _Cannot reply via service case communication. No parent message has been found._  
P152B02001: _Line {0}: Quantity must be greater than 0._  
P152B02002: _Cannot change property '{0}'._  
P152B02004: _You cannot delete purchase receipts._  
P152B02005: _Specified purchase order not found. Please enter a valid purchase order._  
P152B02006: _Line {0}: Quantity must be greater than 0._  
P152B02007: _Line {0}: Received quantity cannot exceed requested quantity._  
P152B02008: _Invalid input parameter_  
P152B02009: _You cannot update the line information after creating a purchase receipt._  
P152B02010: _You cannot create purchase receipts based on unapproved purchase orders._  
P152B02011: _Please enter a vendor._  
P152B02012: _Cannot choose inactive vendors. Please activate the vendor in Master Data - Vendors._  
P152B02013: _Line {0}: Batch quantity must be greater than 0._  
P152B02014: _Line {0}: Received quantity cannot be less than the unreceived quantity in the purchase order generated from sales orders._  
P152B02015: _You cannot manually create purchase receipts when inventory cost is enabled._  
P152B02016: _You cannot manually create purchase returns when inventory cost is enabled._  
P152B02021: _Please add products._  
P152B02022: _Line {0}: Quantity must be greater than 0._  
P152B02023: _Line {0}: Net price cannot be less than 0._  
P152B02024: _Line {0}: Gross price cannot be less than 0._  
P152B02025: _Line {0}: Requested quantity cannot be less than received quantity._  
P152B02026: _You cannot update source._  
P152B02027: _You cannot update the warehouse property when the document is in process._  
P152B02028: _You cannot update property '%x' when the status is closed or canceled._  
P152B02030: _Status change invalid_  
P152B02031: _You cannot update product information. There are existing purchase receipts related to this product._  
P152B02032: _You cannot generate purchase receipt. This purchase order must be approved first._  
P152B02033: _You cannot edit properties as this purchase order is generated from sales orders._  
P152B02034: _You cannot update the document as it is closed or canceled._  
P152B02035: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02036: _You cannot change existing lines when the document is generated from a sales order._  
P152B02037: _You cannot change the quantity together with other properties._  
P152B02038: _You cannot update the product and corresponding warehouse. There are existing purchase receipts related to this product._  
P152B02039: _Received quantity cannot exceed requested quantity._  
P152B02040: _Net price and quantity cannot be less than 0._  
P152B02041: _Gross price and quantity cannot be less than 0._  
P152B02042: _Specified warehouse not found. Please enter a valid warehouse._  
P152B02043: _This warehouse is currently inactive. To continue, please activate the warehouse._  
P152B02044: _This product is a non-inventory product._  
P152B02045: _You cannot cancel this purchase order as there are exisiting purchase receipts based on it._  
P152B02046: _Specified sales order not found. Please enter a valid sales order._  
P152B02047: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02048: _Property '{0}' cannot be changed when the purchase order is generated from a sales order._  
P152B02050: _You cannot cancel the document as it is already been canceled or closed._  
P152B02051: _You cannot close the document as the purchase order is not approved yet._  
P152B02052: _You cannot close the document as the purchase order is not approved yet._  
P152B02053: _You cannot close the purchase order as it is generated from a sales order._  
P152B02054: _Invalid sales order line ID_  
P152B02055: _You cannot add or delete a line as this document is already closed or canceled._  
P152B02056: _Specified vendor is inactive. Please activate the vendor first._  
P152B02057: _You cannot delete current product line as related purchase receipts already exist._  
P152B02058: _You cannot generate purchase orders as the ordered products have already been allocated to warehouses._  
P152B02061: _Line {0}: Quantity must be greater than 0._  
P152B02062: _Line {0}: Quantity cannot exceed in-stock quantity._  
P152B02063: _You cannot delete purchase returns._  
P152B02064: _Specified purchase return not found. Please enter a valid purchase return._  
P152B02065: _Line {0}: Quantity must be greater than 0._  
P152B02066: _Line {0}: Returned quantity cannot exceed received quantity._  
P152B02067: _Invalid input parameter_  
P152B02068: _Specified vendor is inactive. Please activate the vendor first._  
P152B02079: _You cannot generate purchase orders. Please check that the logistic statuses of all selected sales order lines are "ordered"._  
P152B02080: _You cannot generate purchase orders. Please enter related sales order information first._  
P152B02081: _You cannot generate purchase orders. Please select source sales orders first._  
P152B02082: _Specified warehouse ID not found. Please enter a valid one._  
P152B02083: _Specified vendor ID not found. Please enter a valid one._  
P152B02084: _Ordered quantity must be greater than 0._  
P152B02085: _Delivery date cannot be empty or earlier than current system date._  
P152B02086: _Specified sales order ID or product line ID not found. Please enter a valid one._  
P152B02087: _Specified SKU ID not found. Please enter a valid one._  
P152B02088: _Specified Customer ID not found. Please enter a valid one._  
P152B02089: _Specified shipping address not found. Please enter a valid one._  
P152B02090: _You cannot update the vendor as related purchase receipts already exist._  
P152B02091: _You cannot change the pricing method when the pricing method specified in sales pricing settings is not "Net & Gross"._  
P152B02092: _You cannot reopen the purchase order as it is generated from a sales order._  
P152B02093: _You cannot change the purchasing UoM as the product's UoM group is "Manual"._  
P152B02094: _You cannot change the purchasing UoM as related purchase receipts already exist._  
P152B02095: _You cannot change the purchasing price as related purchase receipts already exist._  
P152B02101: _You cannot generate purchase receipt. Selected purchase orders must share the same vendor._  
P152B02102: _You cannot generate purchase receipt. Selected purchase orders must share the same warehouse._  
P152B02103: _You cannot generate purchase receipt. Selected purchase orders must share the same dropship type._  
P152B02104: _You cannot generate purchase receipt. Selected purchase orders must share the same currency._  
P152B02105: _You cannot generate purchase receipt. Selected purchase orders must share the same source._  
P152B02106: _You cannot generate purchase receipt. Selected purchase orders must share the same billing address._  
P152B02107: _You cannot generate purchase receipt. Selected purchase orders must share the same shipping address._  
P152B02108: _Please select at least one purchase order._  
P152B02109: _Order time cannot be later than the expected delivery time._  
P152B02110: _Please specify a warehouse when it is not a dropship order._  
P152B02111: _Warehouse must be blank when it is a dropship order._  
P152B02112: _Line {0}: Dropship must be true._  
P152B02113: _Line {0}: Dropship must be false._  
P152B02114: _You cannot change the product as current purchase receipt is generated from a purchase order._  
P152B03001: _You cannot deactivate this vendor as it is the preferred vendor of certain products._  
P154B02001: _Please enter a number greater than 0 in "Potential Amount" field._  
P154B02002: _Please enter a number greater than 0 in "Rate" field._  
P154B02003: _Start date cannot be later than predicated closing date._  
P154B02004: _Start date cannot be later than closing date._  
P154B02005: _Company Local Currency cannot be empty._  
P154B02006: _Exchange Rate Quotation Method cannot be empty._  
P154B02007: _Invalid Products Unit Price: Price must be greater than or equal to 0._  
P154B02008: _Document total must be greater than or equal to 0._  
P154B02009: _Cannot remove the record as it is linked to another sales opportunity record._  
P154B02010: _Product quantity must be greater than or equal to 0._  
P154B02011: _Transaction currency of the document is invalid._  
P154B02012: _The currency list of sales channel is empty._  
P154B02020: _You cannot delete the customer as it is already used in an opportunity._  
P154B02022: _The opportunity includes product[{0}], do not delete this product._  
P154B02024: _You cannot delete {0} as it is already used in a quotation._  
P154B02026: _The quotation includes product[{0}], do not delete this product._  
P154B02027: _Invalid channel. Please enter a valid channel first._  
P154B02028: _You cannot delete the contact as it is already used in an opportunity._  
P154B02029: _You cannot delete the contact as it is already used in a quotation._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P156B02001: _No response from application server_  
P156B02002: _Server response incorrect_  
P156B02003: _IDP server authentication failed_  
P158B03001: _Invalid Support Request_  
P158B03002: _Invalid Support Request ID_  
P158B03025: _Invalid Employee ID_  
P158B03031: _Invalid Attachment ID_  
P158B03048: _This support request has already been closed._  
P158B03049: _Failed to synchronize support request_  
P159B04001: _Invalid knowledge base item_  
P159B04002: _Invalid knowledge base item ID_  
P165B02006: _Publish failed._  
P165B02007: _Multiple SKUs are linked to one Amazon item._  
P165B02008: _Multiple Amazon items are linked to one SKU._  
P165B02009: _Amazon item already linked to SKU_  
P165B02010: _Channel is inactive._  
P165B02011: _Invalid channel ID_  
P165B02012: _Failed to get Amazon MWS API request_  
P165B02013: _Invalid Amazon Marketplace ID_  
P165B02014: _Request throttled by Amazon. Please wait for two minutes and then retry._  
P165B02015: _Your chosen currency conflicts with Amazon marketplace currency ({0})._  
P165B02016: _You cannot sell an inactive SKU._  
P165B02020: _Failed to update Amazon stock._  
P165B02021: _Failed to update Amazon item price._  
P165B02022: _Failed to sell on Amazon._  
P165B02023: _Failed to upload delivery information to Amazon._  
P165B02030: _Failed to get Amazon item information._  
P165B02031: _Failed to search on Amazon._  
P165B02040: _Failed to download Amazon orders._  
P165B02041: _Amazon item {0} is not downloaded._  
P165B02042: _Failed to create invoice and payment receipt._  
P165B02043: _Price must be greater than 0._  
P165B02044: _FBA warehouse is mandatory._  
P165B02045: _FBA warehouse cannot be the same as non-FBA warehouses._  
P165B02046: _Seller ID is mandatory._  
P165B02047: _AWS Access Key ID is mandatory._  
P165B02048: _Secret Key is mandatory._  
P165B02049: _MWS Auth Token is mandatory._  
P165B02050: _Failed to delete product from Amazon. SKU code {0}._  
P165B02051: _Failed to delete product from Amazon as specified product does not exist. SKU code {0}._  
P165B02052: _Failed to delete product from Amazon as only listed products can be deleted. SKU code {0}._  
P165B02053: _Operation type {0} not supported._  
P166B00001: _No email service provider found._  
P166B00002: _Please authorize your email service provider to continue._  
P166B00003: _Email service provider is already synced._  
P166B00004: _Emails not sent yet. Cannot sync back from email service provider._  
P166B00005: _Campaign is already synced to email service provider._  
P166B00006: _Please specify a target group._  
P166B00007: _Failed to sync to email service provider. Please try again._  
P166B00008: _Syncing data. Please wait…_  
P166B00009: _Data already synced to your email service provider._  
P166B00010: _Please sync to email service provider first._  
P166B00011: _Please select a member list from the email integration provider in campaign settings first_  
P166B00012: _Campaign does not exist_  
P166B00013: _Campaign type cannot be changed. It is already synced with your email service provider_  
P166B00014: _Rule fields invalid_  
P166B00015: _Failed to authorize SAP Anywhere. For more help, contact your administrator._  
P166B00016: _Please assign a target group to this campaign._  
P166B00017: _There are no members in this target group._  
P166B00018: _Start date cannot be later than end date._  
P166B00019: _Duplicated conditions_  
P166B00020: _The member list does not exist._  
P166B00021: _The membership points cannot be less than 0._  
P166B00022: _The expiration date is invalid._  
P166B00023: _This customer is currently not a part of the membership._  
P166B00024: _Points gained per unit currency cannot be less than 0._  
P166B00025: _Minimum points for redemption cannot be less than 0._  
P166B00026: _Maximum points for redemption per order cannot be less than 0._  
P166B00027: _Point validity period cannot be less than 0._  
P166B00028: _You cannot use your points right now as your point balance of {0} points is less than {1} points, the minimum amount required for redemption._  
P166B00029: _You cannot use {0} points in this order as the maximum points usage permitted per order is {1} points._  
P166B00030: _Sorry, currently you have insufficient points to carry on the operation._  
P166B00031: _Points per currency unit cannot be less than 0._  
P166B00032: _Failed to receive the attachment. Please try again._  
P166B00033: _App ID or App Secret is invalid._  
P166B00034: _To send out this message in WeChat, you must have at least 2 followers._  
P166B00035: _Cannot find the attachment's url._  
P166B00036: _Cannot get the WeChat content from backend. Please check again._  
P166B00037: _The WeChat account does not exist. Please check again._  
P166B00038: _{0} returns with error: {1}, {2}._  
P166B00039: _This WeChat account has already been added._  
P166B00040: _Failed to send the message to WeChat as you cannot send the same message twice in one day._  
P166B00041: _The title of a WeChat message cannot be empty. Please enter a title first._  
P166B00042: _You cannot send out WeChat messages without content._  
P166B00043: _The cover image of the WeChat message cannot be empty. Please upload a cover image first._  
P166B00044: _The cover image's file type must be PNG or JPEG._  
P166B00045: _There is no online store available. Please create your online store first._  
P166B00046: _A system error occurred on the WeChat Server. Please try again._  
P166B00060: _The end date cannot be earlier than the start date._  
P166B00061: _Awards of the same type cannot have overlapping durations._  
P166B00062: _The Customer/Contact ID {0} is invalid. Please check again._  
P166B00063: _When Customer/Contact ID is filled, you must choose a corresponding customer/contact type._  
P166B00064: _This function is now still a trial version. Each hour we only support users for a limited number of attempts. If you want to continue using the function, we suggest you try again later._  
P166B00065: _There are no members in this target group. Please choose another target group._  
P166B00066: _Cannot sync back to SAP Anywhere as you have already bound this email account to another email service provider._  
P166B00067: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00068: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00069: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00070: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00071: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00072: _Failed to cancel the authorization. Please try again later._  
P166B00073: _Operation to the email account failed. Please try again later._  
P166B00074: _The authorization is now invalid. Please cancel the authorization and authorize it again._  
P166B00075: _Customer is invalid._  
P166B00076: _Contact is invalid._  
P166B00077: _Source is invalid._  
P166B00078: _TargetGroup is invalid._  
P166B00079: _Cannot import to a target group with conditions. Please choose a manually created target group for the import._  
P166B00080: _Customer/Contact cannot be empty._  
P166B00081: _Member duplicated._  
P166B00082: _Lead(s) were already generated from selected feed(s)._  
P166B00084: _Feed was already closed._  
P166B00085: _You cannot delete the customer as it is already used in Lead._  
P166B00086: _You cannot delete the customer as it is already used in Target Group._  
P166B00087: _You cannot delete the contact as it is already used in Lead._  
P166B00088: _You cannot delete the contact as it is already used in Target Group._  
P166B00089: _Signature validation error_  
P166B00090: _XML parsing error_  
P166B00091: _Signature computing error_  
P166B00092: _Illegal AES key_  
P166B00093: _App ID validation error_  
P166B00094: _AES encryption error_  
P166B00095: _AES decryption error_  
P166B00096: _Illegal buffer_  
P166B00097: _Failed to update card status as card ID ({}) cannot be found._  
P166B00098: _WeChat notification ({}) invalid. This notification will be skipped._  
P166B00099: _Only one WeChat membership card is permitted._  
P166B00100: _The membership card can only be sent to a maximum of 10 Wechat IDs to preview._  
P166B00101: _You cannot preview the WeChat Membership card before editing the card's information._  
P166B00102: _You cannot preview non WeChat Membership cards._  
P166B00103: _Only one WeChat membership card is permitted._  
P166B00104: _Membership number count exceeds the quantity. Please modify the quantity._  
P166B00105: _Please upload the logo before you upload the membership card to WeChat._  
P166B00106: _To dispatch via WeChat, you must first bind a WeChat account._  
P166B00107: _Customers were already generated from selected feeds._  
P166B00108: _Valid to date must be after valid from date._  
P166B00109: _The "Valid To" date must be later than today._  
P166B00110: _Quantity must be greater than 0._  
P166B00111: _This WeChat card has already been consumed._  
P166B00112: _The WeChat card was deleted by the customer or given to a friend._  
P166B00113: _The API is unauthorized for this card._  
P166B00114: _Text analysis failed. Invalid email thread ID._  
P166B00115: _Text analysis failed. Invalid email message ID._  
P166B00116: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00117: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00118: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00119: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00120: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00121: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00122: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00123: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00124: _Only one WeChat account is allowed._  
P166B00125: _The uploaded file to WeChat is invalid. Please check and upload a new file._  
P166B00126: _The WeChat name does not exist._  
P166B00127: _Please select a color if you want to dispatch the card on WeChat._  
P166B00128: _You need to subscribe to the WeChat public account to receive messages from it._  
P166B00129: _You need to upload a cover image for each article._  
P166B00130: _Too many attempts. Please wait for a while and try again later._  
P166B00132: _Points are insufficient according to the conversion rules configured in settings._  
P166B00133: _Too many points are being used according to the conversion rules configured in settings._  
P166B00134: _The points do not hold the same value as money._  
P166B00135: _Duplicate campaign name exists._  
P166B00136: _Organization address is empty._  
P166B00137: _Invalid ID._  
P166B00138: _Cost cannot be negative._  
P166B00139: _API not authorized. Please open this function in your WeChat public account._  
P166B00140: _You have not enabled the shake around function on your public account, please open it._  
P166B00141: _Attachment is invalid. Please contact your administrator or the SAP Anywhere support team._  
P166B00142: _Cannot read the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00143: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00144: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00145: _Cannot send the email with attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00146: _The campaign does not exist._  
P166B00147: _The beacon and page are created by different WeChat accounts._  
P166B00148: _Too close to schedule!_  
P166B00149: _One social message was successfully sent just now. Please refresh your page for further operations._  
P166B00150: _Hashtag must be shorter than 32 characters, and cannot include any spaces or special characters._  
P166B00151: _Duplicate campaign hashtag exists._  
P166B00152: _Please select a code type if you want to dispatch the card on WeChat._  
P168B00001: _Invalid support request parameter._  
P168B00002: _Invalid support user email._  
P168B00003: _The support request has been sent out._  
P168B00004: _Only power users can send a support request._  
P168B00005: _Only power users can terminate a support request._  
P168B00006: _The support user is already an available user._  
P177B00001: _Valid from time must be earlier than Valid to time._  
P177B00002: _Time periods must not overlap._  
P177B00003: _Cannot set up tax rate when the tax rate type is exempt._  
P177B00006: _At least one tax rate must be defined._  
P177B00007: _You cannot delete the tax rule as it is currently applied to documents._  
P177B00008: _You cannot update the tax rule as it is currently applied to documents._  
P177B00009: _You cannot delete the tax rate as it is currently applied to documents._  
P177B00010: _You cannot update the tax rate as it is currently applied to documents._  
P177B00011: _Incorrect state assigned to city_  
P177B00012: _Incorrect country/region assigned to state_  
P177B00013: _Incorrect country/region or country/region group_  
P177B00014: _Country/Region (Country/Region Group) is a mandatory field._  
P177B00015: _Incorrect state or state group_  
P177B00016: _The document's tax amount calculated by channels is different from the total tax amount of all the lines._  
P177B00017: _Please specify the state and zip code for your company's address in Settings. SAP Anywhere will load the sales tax rules that apply to the your company's location._  
P177B00018: _In order to calculate the tax, please enter the shipping address for current sales document (or dropship purchasing document), or the warehouse address for the current non-dropship purchasing document._  
P177B00019: _In order to calculate the tax, please enter the address in your company profile for current sales document or the shipping address for the current purchase document._  
P177B00020: _Document line not found_  
P177B00021: _Tax details not found_  
P177B00022: _Tax amount cannot be calculated by SAP Localization Hub Tax Service. Please check whether the zip codes of the revelant addresses are correctly maintained._  
P177B00023: _Failed to retrieve SAP Localization Hub Tax Service token_  
P177B00024: _Please enter a valid date._  
P177B00025: _“Valid To” date must be later than today._  
P177B00026: _SAP Localization Hub Tax Server is down._  
P177B00027: _Tax amount cannot be calculated by SAP Localization Hub Tax Service. The request format is invalid._  
P177B00028: _Tax amount cannot be calculated by SAP Localization Hub Tax Service due to bad request._  
P177B00029: _Tax amount cannot be calculated by SAP Localization Hub Tax Service. The content request type is invalid._  
P177B00030: _Tax amount cannot be calculated by SAP Localization Hub Tax Service due to an unrecognized error. Please contact your system administrator._  
P178B00001: _You cannot delete the country group as it has already been applied to tax rules._  
P179B00001: _This product tax class already exists._  
P180B00001: _No standard price list._  
P180B00002: _Multiple standard price lists._  
P180B00003: _Multiple price lists._  
P180B00004: _Cannot find SKU_  
P180B00005: _Duplicate prices._  
P180B00006: _No currency._  
P180B00007: _No price result._  
P180B00008: _No pricing method._  
P180B00009: _No pricing method._  
P180B00010: _The channel does not exist._  
P180B00011: _Invalid Parameter._  
P180B00012: _You cannot update currency in company profile._  
P180B00013: _You cannot update pricing method in company profile._  
P180B00014: _Customer does not exist._  
P180B10001: _The conditons and benefits are not compliant with the promotion item._  
P180B10002: _Currency of the promotion does not comply with that of the channel._  
P180B10003: _Promotion channel pricing methods do not match._  
P180B10004: _Currency {0} and pricing method {1} is not compliant with that in the company settings._  
P180B10005: _The price cannot be negative_  
P180B10006: _There is no record of the price list (Price List: {0}, Currency: {1}, Pricing Method: {2}). This action will be skipped._  
P180B10007: _There is no record of the price list ({0}), This action will be skipped._  
P180B10008: _You do not have the permission to access the price._  
P180B10009: _You do not have the permission to access the standard sales price._  
P180B10010: _You do not have the permission to access the sales price._  
P181B00001: _Cannot update pricing method._  
P181B00002: _You cannot change the local currency as it has been changed once already._  
P181B00003: _Cannot disable multiple currencies._  
P181B00004: _Invalid parameter_  
P181B00005: _To disable this option, first fix cases where available-to-sell is negative._  
P181B00006: _To disable this option, first fix cases where inventory is negative._  
P181B00007: _You cannot change the exchange rate quotation as some of the foreign currencies are in use._  
P181B00008: _Inventory cost calculation is only supported in China._  
P181B00010: _You cannot disable the calculation of inventory estimated cost once it is enabled._  
P181B00011: _TaaS is available in the US only._  
P181B00012: _You can only choose 'shipping to' when using TaaS._  
P198810061: _Please enter a product ID._  
P198810062: _You must delete all subcategories before linking products._  
P198810063: _Invalid circular reference._  
P198810064: _You must remove all linked products before creating a subcategory._  
P198810065: _You cannot remove this category as it has already been linked to service cases._  
P198812200: _You cannot delete the stamp as it has already been used._  
P198812201: _You cannot reset SKUs as they are already in use._  
P198812202: _You cannot reset SKUs as they are already in use._  
P198812203: _The product does not exist._  
P198812204: _You cannot disable Inventory Tracking as the product is already in use in Inventory or Logistics._  
P198812205: _You cannot create SKUs as the product is already in use in Inventory or Logistics._  
P198812206: _You cannot create SKUs as the product is already listed in one or more channels._  
P198812207: _You cannot delete this SKU as it is already listed in one or more channels._  
P198812208: _You cannot delete the manufacturer as it is already in use in products._  
P198812209: _You cannot delete the brand as it is already in use in products._  
P198812210: _Cannot enable bundle product. Please disable SKU and enable inventory tracking first._  
P198812211: _You must enable Inventory Tracking first._  
P198812212: _You cannot add the product itself to the bundle._  
P198812213: _There are invalid product codes for bundle components._  
P198812214: _Code {0} not found in the system._  
P198812221: _You cannot delete this SKU as it has been used in Inventory or Logistics._  
P198812230: _Cannot delete SKU as it has already been listed in one or more channels._  
P198812300: _You cannot set SKU as active when the product containing that SKU is inactive._  
P198812301: _This variant value already exists._  
P198812302: _You cannot delete variant value as it is already in use in SKUs._  
P198812303: _The variant or the variant value you chose has just been deleted. Please choose or add a new one._  
P198812304: _The purchase price cannot be negative._  
P198812305: _The variant value already exists in the product._  
P198812306: _The variant name already exists._  
P198831012: _You cannot reset the SKUs as they are already in use in one or more bundle products._  
P198831013: _You cannot delete the SKUs as they are already in use in one or more bundle products._  
P2014122401: _Please delist SKUs from channels before changing their status to inactive._  
P2014122402: _Please delist SKUs from channels before changing the status to inactive._  
P2014122403: _Please delist SKUs from channels before changing the product code._  
P2014122404: _Please choose a price list or a currency._  
P2014122405: _Please enter a price._  
P2014122406: _The SKU variant value already exists._  
P2014122407: _SKU variant value is not the same as that of the product._  
P2014122408: _Please choose one or more variant values._  
P2014122409: _You cannot set SKUs as inactive as some of them are already in use in Inventory or Logistics._  
P2014122410: _You cannot change the product code as some of SKUs are already in use in Inventory or Logistics._  
P2014122411: _Please remove product from channels before setting the product as inactive._  
P2014122412: _Please remove product from channels before changing Product Code._  
P2014122413: _You cannot change the product code as the product has been used in Inventory or Logistics._  
P2014122414: _You cannot change the product status to inactive as the product is already in use in Inventory or Logistics._  
P2014122415: _This SKU code already exists._  
P2014122416: _SKU code can not be empty._  
P2014122417: _These SKU barcodes already exist: {0}_  
P2014122418: _SKU code {0} does not exist._  
P2014122577: _Standard price list dos not exist in the system._  
P2014122578: _Cannot save or update the price. The standard price with the condition(SKU:{0}, Currency:{1}, isNet:{2}) does not exist._  
P2015040201: _The price({0}) must not be negative._  
P201504121541: _You cannot set the default system carrier as inactive._  
P2015042401: _You cannot enable SKUs as you have enabled bundle product._  
P2015042402: _Quantity per bundle must be larger than 0._  
P2015042403: _You cannot disable Inventory Tracking as you have enabled bundle product._  
P2015070601: _The product {0} that contains the SKU {1} is not Inventory Tracking enabled._  
P2015070602: _You cannot disable Inventory Tracking as some of the SKUs of this product are linked to bundle products._  
P2015070603: _The product {0} that contains the SKU {1} is not active._  
P2015080417: _You cannot change the UoM group to none as the product has already been referenced._  
P2015080418: _You cannot change the UoM group to another with a different base UoM, as the product has already been used in Inventory or Logistics._  
P2015080419: _The default purchase UoM is not in the UoM group._  
P2015080420: _Default sales UoM is not in the UoM group._  
P2015081901: _Only USD is supported as the currency for Pitney Bowes deliveries._  
P2015081902: _Only the online store channel is supported by Pitney Bowes deliveries._  
P2015081903: _Please create the Pitney Powes carrier in shipping settings first._  
P2015081904: _To use Pitney Bowes, please provide the mobile number of the recipient for both the billing and shipping address._  
P2015081905: _To use Pitney Bowes, please provide the recipient's name for both the billing and shipping address._  
P2015081906: _Errors occurred while calling Pitney Bowes services._  
P2015081907: _To use Pitney Bowes, please provide the buyer's email address._  
P2015081908: _To use Pitney Bowes, please provide complete information for shipping address and billing address._  
P2015091801: _Cannot be managed by batches as it is a bundle product._  
P2015091802: _Cannot switch to None as batch numbers are maintained for this product._  
P2015091803: _Cannot switch to batch management as it has been used in Inventory._  
P2015092101: _Cannot switch to bundle product as it has been managed by batches._  
P2015092102: _Shelf life must be within the date range of 1 to 99999._  
P2015092401: _Cannot change the product code as it is already in use in Inventory._  
P2015101301: _Cannot disable inventory tracking as you have enabled batch management for the product._  
P2015101601: _Cannot change the product code as you have enabled batch management for some SKUs._  
P2015101602: _Cannot change the product code as some of the SKUs are already used as bundle components._  
P20151016C1: _Please specify the delivery type of UPS Express._  
P20151019C1: _Please add UPS as a carrier in Shipping settings first._  
P20151019C2: _To use UPS as the carrier, please provide your full company address in company profile first, including receipt's name and phone number._  
P20151019C3: _To use UPS as the carrier, please provide the full warehouse address and shipping address first, including receipt's name and phone number._  
P20151019C4: _To use UPS as the carrier, please specify the weight and weight unit._  
P20151019C5: _To use UPS as the carrier, please specify the package size and the unit of length._  
P20151019C6: _To void a UPS shipment, please provide the tracking number._  
P20151019C7: _Cannot find the shipping label. Please create a UPS shipment order before printing shipping label._  
P20151019C8: _You must enable electronic shipping labels first._  
P20151019C9: _Failed to upload the UPS electronic shipping label to the Amazon cloud server. Please try again later._  
P20151019D1: _UPS service is disabled for the current tenant._  
P20151019D2: _Only the domestic shipments originated in the United States or the United Kingdom are currently supported._  
P2015102101: _Category name already exists._  
P2015102102: _The product category name that you fill in must be in the form of text. Also, you must start from level 1 and continue on in succession._  
P2015110201: _Cannot enable SKUs as you have enabled batch management for the product._  
P2015110401: _Cannot delete, or reset the SKU as you have enabled batch management for the product._  
P2015110501: _Cannot enable batch management for the product as you need to enable inventory tracking for the product first._  
P2015112401: _Code not found in the system._  
P2015112402: _Code {0} not found in the system._  
P2015113001: _SKU code in row {0} is invalid._  
P2015113002: _Warehouse code in row {0} is invalid._  
P2015120101: _Cannot enable SKU as you have enabled batch management for the product._  
P2015120201: _SKU in row {0} does not belong to product {1}._  
P2015120301: _Code in row {0} cannot be changed, as product {1} is single._  
P2015120901: _Alert days must be between 1 and the shelf life days._  
P2015121001: _Component product cannot be the same as the bundle product. Row number {0}._  
P2015121401: _Product {0} cannot be used as bundle product because batch management is enabled for it._  
P2015121402: _Product {0} cannot be used as bundle product or component product because it is inactive._  
P2015121403: _Product {0} cannot be used as bundle product or component product because inventory tracking is disabled for it._  
P2015121601: _UoM {0} is not purchase UoM._  
P2015121602: _UoM {0} is not for sales UoM._  
P2015122801: _You are not authorized to update product codes._  
P2015122802: _You are not authorized to update sku codes._  
P2016011801: _Vendor is not active._  
P2016012201: _Product code type and product code cannot be both empty._  
P2016030301: _The same attribute value already exists._  
P2016042101: _Cannot disable inventory tracking as min. inventory level has been set for the product._  
P228812212: _SKU {0} is already in use in orders: {1}_  
P228812213: _You cannot delete this SKU as it is already in use in one or more bundle products._  
P228812214: _SKUs of Product {0} has already been used in orders: {1}_  
P228812215: _SKUs of Product {0} has already been used as a bundle component: {1}_  
P228812216: _You cannot enable SKUs for this product as it has been used as a component in one or more bundle products._  
Prm001: _Please set conditions in Promotion Rules._  
Prm002: _Please set benefits in Promotion Rules._  
Prm003: _Please set types in Promotion Rules._  
UPS_SYS_001: _Errors occurred while calling UPS services._  
UPS_SYS_002: _Errors occurred while calling UPS services. Error code:{0}, Error description: {1}._  
V2015082501: _Pitney Bowes authentication failed._  
V2015082502: _Failed to receive quotation from Pitney Bowes_  
V2015082503: _Failed to create Pitney Bowes order_  
V2015082504: _Failed to confirm Pitney Bowes order_  
V2015082505: _Pitney Bowes order number was not returned from the external service._  
V2015082506: _No response from Pitney Bowes service_  
V2015082507: _You are not authorized to view Pitney Bowes resources._  
V2015082508: _Invalid data format for Pitney Bowes request record_  
V2015082509: _Pitney Bowes resource is not ready yet. There is a slight delay in processing Pitney Bowes orders through to a shippable state. Please try again later._  
V2015082510: _Failed to generate Pitney Bowes tracking number_  
## <sapn id="b2c-mono">b2c-mono</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P103B02005: _You cannot delete an already triggered approval_  
P103B02006: _Approval "{0}" already exists_  
P103B02007: _User "{0}" is invalid_  
P103B02008: _Business object type does not exist_  
P103B02009: _You are not authorized to view this information_  
P103B02010: _Business object "{0}" does not exist_  
P103B02011: _You are not authorized to assign this object_  
P103B02012: _Invalid dynamic authorization id: {0}_  
P103B02013: _Invalid role id: {0}_  
P103B02014: _Invalid system business object id: {0}_  
P103B02015: _{0} is not a system predefined role._  
P103B02016: _missing argument_  
P103B02017: _Please enter a role name._  
P103B02018: _The role name has been used, please enter another name._  
P103B02019: _Cannot delete {0}. It is a system predefined role._  
P103B02020: _Cannot delete this role. It is already assigned to users._  
P103B02021: _Invalid authorization item name: {0}_  
P103B10000: _You cannot unlock yourself_  
P103B10001: _You cannot lock yourself_  
P103B10002: _You cannot change yourself to normal user_  
P103B10003: _You cannot change yourself to key user_  
P103B10004: _You cannot view restricted price lists_  
P103B10005: _You are not authorized to change user permissions_  
P103B10006: _Permission item index "{0}" is invalid_  
P103B10007: _Permission argument is invalid_  
P103B10008: _You are not authorized to create users_  
P103B10009: _Cannot create user due to an unexpected error. Report error?_  
P103B10010: _Enter an email address_  
P103B10011: _Email address is invalid_  
P103B10012: _An account already exists for this email address. To reset your password, choose the “Forgot you password” link._  
P103B10013: _You are not authorized to change user details_  
P103B10014: _Cannot update user due to an unexpected error. Report error?_  
P103B10015: _You cannot delete yourself_  
P103B10016: _You are not authorized to delete users_  
P103B10017: _Cannot delete user due to an unexpected error. Report error?_  
P103B10018: _Phone number {0} is invalid_  
P103B10019: _User {0} does not exist_  
P103B10020: _Business object identifier "{0}.{1}" is invalid_  
P103B10021: _Enter a valid password_  
P103B10022: _You are not authorized to change user passwords_  
P103B10024: _Enter a new password_  
P103B10025: _Enter the current password_  
P103B10026: _Your new password must not be the same as your current one_  
P103B10027: _Email Address {0} already exists._  
P103B10028: _Current password is incorrect_  
P103B10029: _Invoke by createUserEmployee function to create user._  
P103B10030: _Invoke by checkedUpdate function to update user info._  
P103B10031: _No method available in property: {0}._  
P103B10032: _Failed to get property: {0}._  
P103B10033: _Business object entity key is null._  
P103B10034: _Image upload failed._  
P103B10035: _Attachment not found._  
P103B10036: _Queue server is unavailable, please contact system administrator_  
P103B10037: _Cannot upload the template. Please make sure the file format is XLS and that content within the template is correct._  
P103B10038: _File conversion failed, please contact system administrator_  
P103B10039: _Invalid setting for the manager. Please check._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20001: _Invalid input_  
P103B20002: _Local currency is not existing._  
P103B30000: _Activity does not exist_  
P103B30001: _Status is invalid_  
P103B30002: _One or more mandatory fields are missing required information._  
P103B30003: _One or more mandatory fields are missing required information._  
P103B30004: _One or more mandatory fields are missing required information._  
P103B30005: _User does not exist_  
P103B30006: _No permission to read_  
P103B30007: _No permission to write_  
P103B30008: _You cannot delete approval activities_  
P103B30009: _You cannot change the activity status_  
P103B30010: _You cannot change completed activities_  
P103B30011: _You cannot change the activity status_  
P103B30012: _You cannot approve or reject this activity_  
P103B30013: _You are not authorized to change the approval status_  
P103B30014: _Document type is invalid_  
P103B30015: _Business object not found_  
P103B30016: _Attachment does not exist_  
P103B30017: _Cannot create approval due to an unexpected error. Please try again._  
P103B30018: _You cannot reopen approval activities_  
P103B30019: _Activity is already open_  
P103B30020: _{0} was sent to you for approval_  
P103B30021: _{1} assigned a {0} to you._  
P103B30022: _{1} updated a {0}._  
P103B30023: _A {1} for {0} was changed by {2}._  
P103B30024: _A {1} for {0} was created by {2}._  
P103B30025: _A {1} for {0} was deleted by {2}._  
P103B30026: _{1} has approved a {0}._  
P103B30027: _{1} has rejected a {0}._  
P103B30028: _{1} has completed a {0}._  
P103B30029: _A {1} for {0} has been completed by {2}._  
P103B30030: _A {1} for {0} was reopened by {2}._  
P103B30031: _A {1} for {0} has been approved by {2}._  
P103B30032: _A {1} for {0} has been rejected by {2}._  
P103B30033: _{1} reopened a {0}._  
P103B30034: _You have already sent an authorization request. Please wait for approval_  
P103B30035: _{0} sent you a {1} for authorization approval_  
P103B30036: _{0} has granted you full access to {1}_  
P103B30037: _{0} has granted you read-only access to {1}_  
P103B30038: _{0} has rejected your request for accessing to {1}_  
P103B30039: _description_  
P103B30040: _You cannot attach an empty file_  
P103B30041: _Text_  
P103B30042: _Activity {0} is invalid_  
P103B30043: _A {1} for {0} was changed by {2}._  
P103B30044: _A {1} for {0} was created by {2}._  
P103B30045: _A {1} for {0} was deleted by {2}._  
P103B30046: _User "{0}" is invalid_  
P103B30047: _{0} requests approval for {1} worth {2}_  
P103B30048: _Invalid action for this type of activity._  
P103B40001: _The ContactPerson is invalid_  
P103B50001: _Attachment Upload Failed._  
P103B50002: _Attachment Download Failed._  
P103B50003: _Not Authorized to delete or update Attachment._  
P103B50004: _Not Authorized to Create or Add Attachment._  
P103B50005: _Not Authorized to Read Attachment._  
P103B60001: _Taobao integration already active._  
P103B60002: _Taobao integration already inactive._  
P103B60003: _Taobao login failed: {0}._  
P103B60004: _Do OAuth with Taobao first._  
P103B60005: _SKU ID {0} is invalid. Product ID {0} is invalid._  
P103B60006: _SKU ID {0} is invalid._  
P103B60007: _Refresh token is expired._  
P103B60008: _No RMB currency._  
P103B60009: _Product code cannot be empty._  
P103B60010: _Product code {0} is invalid._  
P103B60011: _Products were delivered from Taobao, you need create an order and deliver it manually._  
P103B60012: _Invalid channel type for Taobao Channel. Only Taobao or Tmall is valid._  
P103B60013: _This trade has already been generated a Sales Order._  
P103B60014: _Sales order {0} is invalid._  
P103B60015: _Sales order {0} is already related to external order {1}._  
P103B60016: _Cannot relate return order to trade._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P103B71001: _To use Pitney Bowes, please provide the full warehouse address._  
P103B78001: _Please add addresses._  
P103B78002: _Please enable net price in company profile settings._  
P103B78003: _Please enable gross price in company profile settings._  
P103B78004: _Failed to read shipping label file_  
P103B78101: _Please specify applicable countries/regions._  
P103B78102: _Please enter rates._  
P103B78104: _Fixed rates cannot be created or deleted._  
P103B78105: _Please enable fixed rates in shipping settings._  
P103B78201: _Please enable at least one shipping method._  
P103B78202: _You cannot create new shipping methods._  
P103B78203: _You cannot delete shipping methods._  
P103B78204: _You cannot disable the shipping method as it is already assigned to channels._  
P103B78205: _Carrier-calculated rates are disabled for Chinese shipping carriers._  
P103B78206: _Please enable carrier-calculated rates in shipping settings._  
P103B78302: _There are lines with duplicated country/region, state, city, and zip code._  
P103B78303: _Specified country/region not found_  
P103B78304: _Specified state not found_  
P103B78305: _State ID must be an integer._  
P103B78309: _Weight From cannot be greater than Weight To._  
P103B78312: _Increase weight must be greater than 0._  
P103B78314: _Please enable Rates Based On Weight and Region in shipping settings._  
P103B78315: _There are overlapping weight ranges for lines with the same country/region, state, city, and zip code._  
P103B78316: _Please add information to the lines._  
P103B78409: _Interior length cannot be greater than exterior length._  
P103B78410: _Interior width cannot be greater than exterior width._  
P103B78411: _Interior height cannot be greater than height length._  
P103B78502: _Min. delivery days cannot be greater than max. delivery days._  
P103B78503: _Valid From must be earlier than Valid To._  
P103B78504: _Please enable free shipping in shipping settings._  
P103B78510: _Please enable the shipping method first._  
P103B78511: _Settings data for free-shipping does not exist._  
P103B78512: _Settings data for fixed-rates does not exist._  
P103B78513: _Cannot find setting data for carrier {0}_  
P103B78514: _Carrier {0} not found_  
P103B78611: _A network error occurred while calling a third-party shipping service._  
P103B78612: _The third-party shipping service returned an authentication error._  
P103B78613: _Failed to create the order using a third-party shipping service_  
P103B78614: _Failed to confirm the order using a third-party shipping service_  
P103B78701: _Shipping Carrier ID is invalid._  
P103B78702: _Shipping Carrier IDs are duplicated._  
P103B78703: _Shipping carrier not found_  
P103B78704: _Please enable the shipping carrier in shipping settings._  
P103B78705: _Current shipping carrier is already used in sales deliveries._  
P103B78707: _Please enter carrier code._  
P103B78708: _Carrier-calculated rates are not supported by this shipping carrier._  
P103B78709: _Please add printing templates in shipping carrier settings._  
P103B78710: _Failed to download shipping label due to an unexpected error. Please try again later._  
P103B78712: _Electronic labels are not supported by current carrier._  
P103B78714: _Please specify S.F. Express delivery type._  
P103B78716: _Please enter your monthly account._  
P103B78717: _Please enter your access key._  
P103B78718: _Please enter your customer check code._  
P103B78720: _Please specify the delivery type first._  
P103B78801: _S.F. Express web service returned an error: {0}._  
P103B78802: _Failed to create S.F. Express electronic label._  
P103B78803: _Please enter the recipient's state._  
P103B78804: _Please enter the recipient's city._  
P103B78805: _Please enter the sender's state._  
P103B78806: _Please enter the sender's city._  
P103B78807: _Please enter the total weight._  
P103B78901: _Currency {0} not found. Please specify a valid one._  
P103B78902: _Please specify a currency._  
P103B78903: _You cannot delete the rate as it is already used._  
P103B78904: _You cannot change the rate's name as the rate is already used._  
P103B80001: _You must clear all rate settings before changing the exchange rate quotation method._  
P103B80002: _Illegal arguments were passed to this function: {0}_  
P103B80003: _You must enter an exchange rate here or in Settings._  
P103B80004: _Failed to send a test email; please ensure that the SMTP settings are correct._  
P103B80006: _Email template not found_  
P103B80007: _Cannot change the local currency as it has already been used for some transactions._  
P103B80008: _Email template already exists._  
P103B80009: _This app name already exists._  
P103B80010: _Failed to delete this app_  
P103B80011: _Failed to create OAuth client_  
P103B80012: _Failed to get IDP url_  
P103B80013: _Authorization failed_  
P103B80015: _Authorization failed, the password incorrect._  
P103B90001: _content is limited 140 characters, when the note has an attachment_  
P103B93125: _Cannot create user due to maximum number of users exceeded._  
P103S10023: _Failed to change password as the application has encountered an error. We are aware of the error and already working on a resolution._  
P133B00004: _Failed to find the attachment. Please try again._  
P133B00005: _Failed to find the image. Please try again._  
P133B00006: _Failed to send posts to Twitter as you can only upload one GIF image at a time. Please try again._  
P133B00007: _Failed to send out the message as the content is empty._  
P133B00008: _Failed to authorize Twitter. Please try again._  
P133B00009: _Failed to send the post to Twitter as you cannot send the same message twice in one day._  
P133B00010: _Failed to send the post to Twitter as the content is more than 140 characters long._  
P133B00011: _Failed to send the post to Twitter as today you have reached the maximum post number defined by Twitter._  
P133B00012: _The authorization failed due to an unexpected error. Please try again._  
P133B00013: _The message is already sent. To check the latest message status please refresh the page._  
P133B00014: _Your current location does not support Twitter services._  
P133B00020: _Failed to send the post to Facebook as you cannot send the same message twice in one day._  
P133B00021: _Failed to send the post to Facebook as today you have reached the maximum post amount defined by Facebook._  
P133B00022: _Failed to send posts to Facebook due to an unexpected error. Please try again._  
P133B00023: _Failed to send the post to Facebook as SAP Anywhere did not obtain the corresponding permissions during the authorization process._  
P133B00024: _Failed to send the post to Facebook as SAP Anywhere is not authorized to perform this operation._  
P133B00025: _Failed to authorize Facebook. Please delete the Facebook account and redo OAuth._  
P133B00026: _This Pinterest account is not linked to SAP Anywhere. Please check your Company Profile._  
P133B00027: _Please upload an image._  
P133B00028: _Description cannot exceed 500 characters._  
P133B00029: _Please enter a valid URL._  
P133B00030: _Your Weibo access token is invalid. Please go to Company Profile in Settings to authorize your Weibo account again._  
P133B00031: _You cannot pin the image as the board does not exist._  
P133B00040: _Invalid Facebook message ID_  
P133B00041: _This social media account does not exist._  
P133B00042: _Failed to send the post to Facebook using the current URL. Please try using another URL._  
P133B00043: _Pinterest authentication failed_  
P133B00044: _Pinterest service not found_  
P133B00045: _Pinterest service time out_  
P133B00046: _Too many requests sent to Pinterest_  
P133B00047: _Pinterest server error_  
P133B00048: _Unknown error from Pinterest service. Please try again later._  
P133B00049: _Invalid social media message ID_  
P133B00050: _Cannot send a reply to this social media feed type_  
P133B00051: _Requests are being denied due to update limits._  
P133B00052: _Failed to send reply to Facebook. Parent message doesn't exists._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P134B7148: _The uploaded certificate key is encrypted, or empty._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00043: _You must fill one Google Maps API key, or disable Google Maps in Store._  
P150B00044: _Phone number registration is enabled. Therefore, Checkout Without Account is not currently supported._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00062: _This sales channel name already exists._  
P150B00063: _Requested resource {0} exceeds its quota._  
P150B00070: _You cannot delete the {0} as it is already in use._  
P150B00080: _The customer has linked Channel Account._  
P150B00081: _The customer has linked Pos Channel._  
P150B00082: _The channel has linked with channel account._  
P150B00083: _This channel has already linked to a Approval Template, please remove it first._  
P150B00084: _This channel has already been deleted, it can't be set to active._  
P150B00085: _Default channel can not be deleted._  
P150B00086: _This channel can't be updated, it has already been discarded._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P150B00200: _Please create a sales target first._  
P150B00201: _You can only update the draft of a sales target._  
P150B00202: _The quota must be greater than 0._  
P150B00203: _You cannot be a target owner and a sales manager at the same time._  
P150B00204: _You cannot add the same owner twice for a sales target._  
P150B00205: _You can only assign a team's sales target to its sales manager._  
P150B00206: _Failed to create the sales target as it already exists in the system._  
P150B00207: _No employee was found._  
P150B00208: _Failed to delete the sales targets._  
P150B00209: _Cannot find the sales target._  
P151B02001: _Invalid service case_  
P151B02002: _Invalid service case ID_  
P151B02003: _Invalid service case origin ID_  
P151B02004: _Invalid customer ID_  
P151B02005: _Invalid contact ID_  
P151B02006: _Invalid service case priority ID_  
P151B02007: _Invalid service case status ID_  
P151B02009: _Invalid service case support team ID_  
P151B02010: _Invalid service case assignee ID_  
P151B02011: _Invalid or unknown relation type_  
P151B02020: _Invalid service case object assignment input parameters_  
P151B02021: _Missing Service Case referenced object_  
P151B02023: _Missing Service Case related object enumeration_  
P151B02025: _Invalid Employee ID_  
P151B02026: _Please enter an email address._  
P151B02027: _Please enter a phone number._  
P151B02028: _Service Case Type Group cannot be empty._  
P151B02029: _You cannot set the service case type group as it already exists._  
P151B02030: _You cannot repeatedly add a document._  
P151B02031: _Invalid Attachment ID_  
P151B02034: _The response time must be earlier than the resolution time._  
P151B02035: _You cannot change the mandatory contact details in SAP Manage Anywhere._  
P151B02040: _To send a knowledge base item to customers, you must publish it first._  
P151B02044: _Invalid Channel ID_  
P151B02047: _The SAP Manage Anywhere Server is configured incorrectly._  
P151B02048: _The service case has already been closed._  
P151B02049: _The service case has already been assigned to someone._  
P151B02051: _There are no types to be assigned._  
P151B02052: _Cannot find the specified type group._  
P151B02053: _The service case type does not exist or cannot be found._  
P151B02054: _Please enter the customer's twitter account name._  
P151B02055: _Please enter the company's twitter account name._  
P151B02056: _Invalid social message attachment ID_  
P151B02057: _The company's twitter account is inactive._  
P151B02058: _Mandatory field 'assignTo' is missing._  
P151B02059: _Mandatory field 'assignToSocial' is missing._  
P151B02060: _Invalid service case communication text._  
P151B02061: _Response Time and Resolution Time cannot be empty concurrently._  
P151B02062: _You have set reminders for Response Time, but the response time is empty. Please set the response time, or delete the reminder._  
P151B02063: _You have set reminders for Resolution Time, but the resolution time is empty. Please set the resolution time, or delete the reminder._  
P151B02064: _Failed to delete the service level as it is already assigned to a customer._  
P151B02065: _You cannot delete the sales order as it is already used in a Service Case._  
P151B02066: _You cannot delete the sales return as it is already used in a Service Case._  
P151B02067: _You cannot delete the invoice as it is already used in a Service Case._  
P151B02068: _You cannot delete the payment as it is already used in a Service Case._  
P151B02069: _You cannot delete the product as it is already used in a Service Case._  
P151B02070: _You cannot delete the category as it is already used in a Service Case._  
P151B02071: _You cannot delete the customer as it is already used in a Service Case._  
P151B02072: _Please enter the customer's Facebook account name._  
P151B02073: _Please enter the company's Facebook account name._  
P151B02074: _The company's Facebook account is inactive._  
P151B02075: _Only one attachment is allowed for Facebook communication._  
P151B02076: _Listening to the company's Twitter account is disabled._  
P151B02077: _Listening to the company's Facebook account is disabled._  
P151B02078: _Service case(s) were already generated from selected feed(s)._  
P151B02079: _You cannot delete contact person as it is already used in a Service Case._  
P151B02080: _You cannot delete service team as it is already used in a Service Case._  
P151B02081: _Cannot reply via service case communication. No parent message has been found._  
P154B02001: _Please enter a number greater than 0 in "Potential Amount" field._  
P154B02002: _Please enter a number greater than 0 in "Rate" field._  
P154B02003: _Start date cannot be later than predicated closing date._  
P154B02004: _Start date cannot be later than closing date._  
P154B02005: _Company Local Currency cannot be empty._  
P154B02006: _Exchange Rate Quotation Method cannot be empty._  
P154B02007: _Invalid Products Unit Price: Price must be greater than or equal to 0._  
P154B02008: _Document total must be greater than or equal to 0._  
P154B02009: _Cannot remove the record as it is linked to another sales opportunity record._  
P154B02010: _Product quantity must be greater than or equal to 0._  
P154B02011: _Transaction currency of the document is invalid._  
P154B02012: _The currency list of sales channel is empty._  
P154B02020: _You cannot delete the customer as it is already used in an opportunity._  
P154B02022: _The opportunity includes product[{0}], do not delete this product._  
P154B02024: _You cannot delete {0} as it is already used in a quotation._  
P154B02026: _The quotation includes product[{0}], do not delete this product._  
P154B02027: _Invalid channel. Please enter a valid channel first._  
P154B02028: _You cannot delete the contact as it is already used in an opportunity._  
P154B02029: _You cannot delete the contact as it is already used in a quotation._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P156B02001: _No response from application server_  
P156B02002: _Server response incorrect_  
P156B02003: _IDP server authentication failed_  
P158B03001: _Invalid Support Request_  
P158B03002: _Invalid Support Request ID_  
P158B03025: _Invalid Employee ID_  
P158B03031: _Invalid Attachment ID_  
P158B03048: _This support request has already been closed._  
P158B03049: _Failed to synchronize support request_  
P159B04001: _Invalid knowledge base item_  
P159B04002: _Invalid knowledge base item ID_  
P161B10001: _Please enter a positive number._  
P161B10002: _Please enter a positive number._  
P161B10003: _You cannot set inactive payment terms as the system default._  
P161B10005: _You cannot deselect the "System Default"checkbox. To make this payment term differ from the system default, you must set another as the system default._  
P161B10006: _You cannot deactivate the payment term as it is set as system default. To inactivate it, set another payment term as the system default first._  
P165B02006: _Publish failed._  
P165B02007: _Multiple SKUs are linked to one Amazon item._  
P165B02008: _Multiple Amazon items are linked to one SKU._  
P165B02009: _Amazon item already linked to SKU_  
P165B02010: _Channel is inactive._  
P165B02011: _Invalid channel ID_  
P165B02012: _Failed to get Amazon MWS API request_  
P165B02013: _Invalid Amazon Marketplace ID_  
P165B02014: _Request throttled by Amazon. Please wait for two minutes and then retry._  
P165B02015: _Your chosen currency conflicts with Amazon marketplace currency ({0})._  
P165B02016: _You cannot sell an inactive SKU._  
P165B02020: _Failed to update Amazon stock._  
P165B02021: _Failed to update Amazon item price._  
P165B02022: _Failed to sell on Amazon._  
P165B02023: _Failed to upload delivery information to Amazon._  
P165B02030: _Failed to get Amazon item information._  
P165B02031: _Failed to search on Amazon._  
P165B02040: _Failed to download Amazon orders._  
P165B02041: _Amazon item {0} is not downloaded._  
P165B02042: _Failed to create invoice and payment receipt._  
P165B02043: _Price must be greater than 0._  
P165B02044: _FBA warehouse is mandatory._  
P165B02045: _FBA warehouse cannot be the same as non-FBA warehouses._  
P165B02046: _Seller ID is mandatory._  
P165B02047: _AWS Access Key ID is mandatory._  
P165B02048: _Secret Key is mandatory._  
P165B02049: _MWS Auth Token is mandatory._  
P165B02050: _Failed to delete product from Amazon. SKU code {0}._  
P165B02051: _Failed to delete product from Amazon as specified product does not exist. SKU code {0}._  
P165B02052: _Failed to delete product from Amazon as only listed products can be deleted. SKU code {0}._  
P165B02053: _Operation type {0} not supported._  
P166B00001: _No email service provider found._  
P166B00002: _Please authorize your email service provider to continue._  
P166B00003: _Email service provider is already synced._  
P166B00004: _Emails not sent yet. Cannot sync back from email service provider._  
P166B00005: _Campaign is already synced to email service provider._  
P166B00006: _Please specify a target group._  
P166B00007: _Failed to sync to email service provider. Please try again._  
P166B00008: _Syncing data. Please wait…_  
P166B00009: _Data already synced to your email service provider._  
P166B00010: _Please sync to email service provider first._  
P166B00011: _Please select a member list from the email integration provider in campaign settings first_  
P166B00012: _Campaign does not exist_  
P166B00013: _Campaign type cannot be changed. It is already synced with your email service provider_  
P166B00014: _Rule fields invalid_  
P166B00015: _Failed to authorize SAP Anywhere. For more help, contact your administrator._  
P166B00016: _Please assign a target group to this campaign._  
P166B00017: _There are no members in this target group._  
P166B00018: _Start date cannot be later than end date._  
P166B00019: _Duplicated conditions_  
P166B00020: _The member list does not exist._  
P166B00021: _The membership points cannot be less than 0._  
P166B00022: _The expiration date is invalid._  
P166B00023: _This customer is currently not a part of the membership._  
P166B00024: _Points gained per unit currency cannot be less than 0._  
P166B00025: _Minimum points for redemption cannot be less than 0._  
P166B00026: _Maximum points for redemption per order cannot be less than 0._  
P166B00027: _Point validity period cannot be less than 0._  
P166B00028: _You cannot use your points right now as your point balance of {0} points is less than {1} points, the minimum amount required for redemption._  
P166B00029: _You cannot use {0} points in this order as the maximum points usage permitted per order is {1} points._  
P166B00030: _Sorry, currently you have insufficient points to carry on the operation._  
P166B00031: _Points per currency unit cannot be less than 0._  
P166B00032: _Failed to receive the attachment. Please try again._  
P166B00033: _App ID or App Secret is invalid._  
P166B00034: _To send out this message in WeChat, you must have at least 2 followers._  
P166B00035: _Cannot find the attachment's url._  
P166B00036: _Cannot get the WeChat content from backend. Please check again._  
P166B00037: _The WeChat account does not exist. Please check again._  
P166B00038: _{0} returns with error: {1}, {2}._  
P166B00039: _This WeChat account has already been added._  
P166B00040: _Failed to send the message to WeChat as you cannot send the same message twice in one day._  
P166B00041: _The title of a WeChat message cannot be empty. Please enter a title first._  
P166B00042: _You cannot send out WeChat messages without content._  
P166B00043: _The cover image of the WeChat message cannot be empty. Please upload a cover image first._  
P166B00044: _The cover image's file type must be PNG or JPEG._  
P166B00045: _There is no online store available. Please create your online store first._  
P166B00046: _A system error occurred on the WeChat Server. Please try again._  
P166B00060: _The end date cannot be earlier than the start date._  
P166B00061: _Awards of the same type cannot have overlapping durations._  
P166B00062: _The Customer/Contact ID {0} is invalid. Please check again._  
P166B00063: _When Customer/Contact ID is filled, you must choose a corresponding customer/contact type._  
P166B00064: _This function is now still a trial version. Each hour we only support users for a limited number of attempts. If you want to continue using the function, we suggest you try again later._  
P166B00065: _There are no members in this target group. Please choose another target group._  
P166B00066: _Cannot sync back to SAP Anywhere as you have already bound this email account to another email service provider._  
P166B00067: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00068: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00069: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00070: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00071: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00072: _Failed to cancel the authorization. Please try again later._  
P166B00073: _Operation to the email account failed. Please try again later._  
P166B00074: _The authorization is now invalid. Please cancel the authorization and authorize it again._  
P166B00075: _Customer is invalid._  
P166B00076: _Contact is invalid._  
P166B00077: _Source is invalid._  
P166B00078: _TargetGroup is invalid._  
P166B00079: _Cannot import to a target group with conditions. Please choose a manually created target group for the import._  
P166B00080: _Customer/Contact cannot be empty._  
P166B00081: _Member duplicated._  
P166B00082: _Lead(s) were already generated from selected feed(s)._  
P166B00084: _Feed was already closed._  
P166B00085: _You cannot delete the customer as it is already used in Lead._  
P166B00086: _You cannot delete the customer as it is already used in Target Group._  
P166B00087: _You cannot delete the contact as it is already used in Lead._  
P166B00088: _You cannot delete the contact as it is already used in Target Group._  
P166B00089: _Signature validation error_  
P166B00090: _XML parsing error_  
P166B00091: _Signature computing error_  
P166B00092: _Illegal AES key_  
P166B00093: _App ID validation error_  
P166B00094: _AES encryption error_  
P166B00095: _AES decryption error_  
P166B00096: _Illegal buffer_  
P166B00097: _Failed to update card status as card ID ({}) cannot be found._  
P166B00098: _WeChat notification ({}) invalid. This notification will be skipped._  
P166B00099: _Only one WeChat membership card is permitted._  
P166B00100: _The membership card can only be sent to a maximum of 10 Wechat IDs to preview._  
P166B00101: _You cannot preview the WeChat Membership card before editing the card's information._  
P166B00102: _You cannot preview non WeChat Membership cards._  
P166B00103: _Only one WeChat membership card is permitted._  
P166B00104: _Membership number count exceeds the quantity. Please modify the quantity._  
P166B00105: _Please upload the logo before you upload the membership card to WeChat._  
P166B00106: _To dispatch via WeChat, you must first bind a WeChat account._  
P166B00107: _Customers were already generated from selected feeds._  
P166B00108: _Valid to date must be after valid from date._  
P166B00109: _The "Valid To" date must be later than today._  
P166B00110: _Quantity must be greater than 0._  
P166B00111: _This WeChat card has already been consumed._  
P166B00112: _The WeChat card was deleted by the customer or given to a friend._  
P166B00113: _The API is unauthorized for this card._  
P166B00114: _Text analysis failed. Invalid email thread ID._  
P166B00115: _Text analysis failed. Invalid email message ID._  
P166B00116: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00117: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00118: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00119: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00120: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00121: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00122: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00123: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00124: _Only one WeChat account is allowed._  
P166B00125: _The uploaded file to WeChat is invalid. Please check and upload a new file._  
P166B00126: _The WeChat name does not exist._  
P166B00127: _Please select a color if you want to dispatch the card on WeChat._  
P166B00128: _You need to subscribe to the WeChat public account to receive messages from it._  
P166B00129: _You need to upload a cover image for each article._  
P166B00130: _Too many attempts. Please wait for a while and try again later._  
P166B00132: _Points are insufficient according to the conversion rules configured in settings._  
P166B00133: _Too many points are being used according to the conversion rules configured in settings._  
P166B00134: _The points do not hold the same value as money._  
P166B00135: _Duplicate campaign name exists._  
P166B00136: _Organization address is empty._  
P166B00137: _Invalid ID._  
P166B00138: _Cost cannot be negative._  
P166B00139: _API not authorized. Please open this function in your WeChat public account._  
P166B00140: _You have not enabled the shake around function on your public account, please open it._  
P166B00141: _Attachment is invalid. Please contact your administrator or the SAP Anywhere support team._  
P166B00142: _Cannot read the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00143: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00144: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00145: _Cannot send the email with attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00146: _The campaign does not exist._  
P166B00147: _The beacon and page are created by different WeChat accounts._  
P166B00148: _Too close to schedule!_  
P166B00149: _One social message was successfully sent just now. Please refresh your page for further operations._  
P166B00150: _Hashtag must be shorter than 32 characters, and cannot include any spaces or special characters._  
P166B00151: _Duplicate campaign hashtag exists._  
P166B00152: _Please select a code type if you want to dispatch the card on WeChat._  
P168B00001: _Invalid support request parameter._  
P168B00002: _Invalid support user email._  
P168B00003: _The support request has been sent out._  
P168B00004: _Only power users can send a support request._  
P168B00005: _Only power users can terminate a support request._  
P168B00006: _The support user is already an available user._  
P201504121541: _You cannot set the default system carrier as inactive._  
P2015081901: _Only USD is supported as the currency for Pitney Bowes deliveries._  
P2015081902: _Only the online store channel is supported by Pitney Bowes deliveries._  
P2015081903: _Please create the Pitney Powes carrier in shipping settings first._  
P2015081904: _To use Pitney Bowes, please provide the mobile number of the recipient for both the billing and shipping address._  
P2015081905: _To use Pitney Bowes, please provide the recipient's name for both the billing and shipping address._  
P2015081906: _Errors occurred while calling Pitney Bowes services._  
P2015081907: _To use Pitney Bowes, please provide the buyer's email address._  
P2015081908: _To use Pitney Bowes, please provide complete information for shipping address and billing address._  
P20151016C1: _Please specify the delivery type of UPS Express._  
P20151019C1: _Please add UPS as a carrier in Shipping settings first._  
P20151019C2: _To use UPS as the carrier, please provide your full company address in company profile first, including receipt's name and phone number._  
P20151019C3: _To use UPS as the carrier, please provide the full warehouse address and shipping address first, including receipt's name and phone number._  
P20151019C4: _To use UPS as the carrier, please specify the weight and weight unit._  
P20151019C5: _To use UPS as the carrier, please specify the package size and the unit of length._  
P20151019C6: _To void a UPS shipment, please provide the tracking number._  
P20151019C7: _Cannot find the shipping label. Please create a UPS shipment order before printing shipping label._  
P20151019C8: _You must enable electronic shipping labels first._  
P20151019C9: _Failed to upload the UPS electronic shipping label to the Amazon cloud server. Please try again later._  
P20151019D1: _UPS service is disabled for the current tenant._  
P20151019D2: _Only the domestic shipments originated in the United States or the United Kingdom are currently supported._  
UPS_SYS_001: _Errors occurred while calling UPS services._  
UPS_SYS_002: _Errors occurred while calling UPS services. Error code:{0}, Error description: {1}._  
V2015082501: _Pitney Bowes authentication failed._  
V2015082502: _Failed to receive quotation from Pitney Bowes_  
V2015082503: _Failed to create Pitney Bowes order_  
V2015082504: _Failed to confirm Pitney Bowes order_  
V2015082505: _Pitney Bowes order number was not returned from the external service._  
V2015082506: _No response from Pitney Bowes service_  
V2015082507: _You are not authorized to view Pitney Bowes resources._  
V2015082508: _Invalid data format for Pitney Bowes request record_  
V2015082509: _Pitney Bowes resource is not ready yet. There is a slight delay in processing Pitney Bowes orders through to a shippable state. Please try again later._  
V2015082510: _Failed to generate Pitney Bowes tracking number_  
## <sapn id="sip">sip</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
API0000004: _Failed to capture authorized amount_  
API0000005: _Field {0} is read-only._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20002: _Local currency is not existing._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P150B00200: _Please create a sales target first._  
P150B00201: _You can only update the draft of a sales target._  
P150B00202: _The quota must be greater than 0._  
P150B00203: _You cannot be a target owner and a sales manager at the same time._  
P150B00204: _You cannot add the same owner twice for a sales target._  
P150B00205: _You can only assign a team's sales target to its sales manager._  
P150B00206: _Failed to create the sales target as it already exists in the system._  
P150B00207: _No employee was found._  
P150B00208: _Failed to delete the sales targets._  
P150B00209: _Cannot find the sales target._  
P150B02001: _Corporate Name cannot be empty._  
P150B02002: _Last Name cannot be empty._  
P150B02003: _Customer Type cannot be empty._  
P150B02004: _Address is not assigned to the customer._  
P150B02005: _Customer cannot be edited._  
P150B02006: _Main contact does not exist._  
P150B02007: _Sales channel does not exist._  
P150B02008: _You cannot delete this industry as it is being used by some customers._  
P150B02009: _You cannot delete this customer group as it is being been used by some customers._  
P150B02010: _Failed to create/update duplicated customer._  
P150B02011: _Cannot continue with the process as the status of the customer's payment term was changed to inactive. Please choose another payment term for the customer, or go to Settings and change the status to active._  
P150B02012: _Cannot continue with the process as the status of the customer's payment method was changed to inactive. Please choose another payment method for the customer, or go to Settings and change the status to active._  
P150B02013: _Cannot change the customer for the contact. You can remove the customer if you no longer need it._  
P150B02014: _Only a corporate customer can be added to the contact._  
P150B02015: _Contact of a customer cannot be assigned as the main contact of another customer._  
P150B02016: _Inactive email address. Please use a different one, or contact your administrator._  
P150B02017: _Cannot continue with the process as the status of the customer's membership level was changed to inactive. Please choose another membership level for the customer, or go to Settings and change their status to active._  
P150B02018: _You cannot delete this contact as it is the contact of an existing customer._  
P150B02019: _Credit limit cannot be less than 0._  
P150B02020: _Credit alert threshold cannot be less than 0._  
P150B02021: _Credit alert threshold cannot be larger than credit limit._  
P150B02022: _You cannot delete the customer as it has channel account(s)._  
P150B02023: _You cannot delete the contact as it is already used in channel account(s)._  
P150B02024: _You cannot delete the customer as there are membership event(s) created for it._  
P150B02025: _You cannot delete the customer as it has duplicate(s)._  
P150B02026: _You cannot delete the customer as it is a duplicate of another customer._  
P150B02027: _You can only modify the name of predefined membership level._  
P150B02028: _You cannot delete the customer as it is the default customer of the physical store channel._  
P150B02029: _This email already exists._  
P150B02030: _This membership card No. already exists._  
P150B02031: _This cellphone already exists._  
P150B02032: _This customer group already exists._  
P150B02033: _You cannot delete this language as it is being used by some customers or contacts._  
P150B02034: _You are not authorized to delete {0}._  
P150B02035: _Cannot find manual business code of customer._  
P150B02036: _Return credit log can not have zero amount._  
P150B02037: _Return credit account can not be below zero._  
P150B02038: _Return credit log of document type should have foreign currency id._  
P150B02039: _You cannot delete the customer as it is already used in {0}._  
P150B02040: _You cannot delete the contact as it is already used in {0}._  
P150B02041: _The customer has been restored before hard deletion._  
P150B02042: _The contact has been restored before hard deletion._  
P150B76040: _Please enter sender's email address in SMTP settings._  
P150B76041: _Current prepayment type does not support the payment methods of the "Authorization" type._  
P150B76042: _Current prepayment type does not support the payment methods of the "Sale" type._  
P150B76043: _Payments do not support the payment method {0}, which belongs to the "Authorization" type._  
P150B76045: _Cannot add more than one payment method of the "Authorization" type in the prepayment._  
P150B76046: _Cannot find any payment method of the "Authorization" type._  
P150B76048: _Prepayments of the "Authorization" type must have a payment method assigned._  
P150B76049: _A reference number already exists in the prepayment._  
P150B76050: _Transaction ID not found._  
P150B76051: _Cannot void the prepayment since it is already used. Please cancel the related payment first._  
P150B76052: _Cannot void the prepayment since it is not the "Authorization" type._  
P150B76053: _You cannot use the payment methods "PAYPAL_EC" and "PAYPAL_PAYFLOW_PRO" in a single document._  
P150B76054: _Failed to capture._  
P150B76055: _Customer cannot be changed to "Individual" type due to linked contacts that already exist._  
P150B76056: _Customer type cannot be changed due to linked channel accounts._  
P150BEM001: _Internal Error: wrong message content or format. Please contact your system administrator._  
P150BEM002: _Invalid source order information._  
P150BEM003: _Specified sales order not found. Please enter a valid sales order._  
P150BEM004: _Invalid sales order line ID._  
P150BEM005: _Unknown error occurs._  
P161B10001: _Please enter a positive number._  
P161B10002: _Please enter a positive number._  
P161B10003: _You cannot set inactive payment terms as the system default._  
P161B10005: _You cannot deselect the "System Default"checkbox. To make this payment term differ from the system default, you must set another as the system default._  
P161B10006: _You cannot deactivate the payment term as it is set as system default. To inactivate it, set another payment term as the system default first._  
P166B00021: _The membership points cannot be less than 0._  
P166B00022: _The expiration date is invalid._  
P166B00023: _This customer is currently not a part of the membership._  
P166B00024: _Points gained per unit currency cannot be less than 0._  
P166B00025: _Minimum points for redemption cannot be less than 0._  
P166B00026: _Maximum points for redemption per order cannot be less than 0._  
P166B00027: _Point validity period cannot be less than 0._  
P166B00028: _You cannot use your points right now as your point balance of {0} points is less than {1} points, the minimum amount required for redemption._  
P166B00029: _You cannot use {0} points in this order as the maximum points usage permitted per order is {1} points._  
P166B00030: _Sorry, currently you have insufficient points to carry on the operation._  
P166B00031: _Points per currency unit cannot be less than 0._  
P166B00060: _The end date cannot be earlier than the start date._  
P166B00061: _Awards of the same type cannot have overlapping durations._  
P166B00132: _Points are insufficient according to the conversion rules configured in settings._  
P166B00133: _Too many points are being used according to the conversion rules configured in settings._  
P166B00134: _The points do not hold the same value as money._  
P178B00001: _You cannot delete the country group as it has already been applied to tax rules._  
P181B00001: _Cannot update pricing method._  
P181B00002: _You cannot change the local currency as it has been changed once already._  
P181B00003: _Cannot disable multiple currencies._  
P181B00004: _Invalid parameter_  
P181B00005: _To disable this option, first fix cases where available-to-sell is negative._  
P181B00006: _To disable this option, first fix cases where inventory is negative._  
P181B00007: _You cannot change the exchange rate quotation as some of the foreign currencies are in use._  
P181B00008: _Inventory cost calculation is only supported in China._  
P181B00010: _You cannot disable the calculation of inventory estimated cost once it is enabled._  
P181B00011: _TaaS is available in the US only._  
P181B00012: _You can only choose 'shipping to' when using TaaS._  
P181B00013: _Currency {0} not found. Please specify a valid one._  
P181B00014: _Please specify a currency._  
PCOBC00001: _{0} is required as manual series is selected._  
Prm001: _Please set conditions in Promotion Rules._  
Prm002: _Please set benefits in Promotion Rules._  
Prm003: _Please set types in Promotion Rules._  
## <sapn id="productivity">productivity</span>
P100601100: _No warehouse/product (SKU) found in the template. Please download the latest template and try again._  
P102B02101: _The locale information in the template has been changed. Please change it back to the original._  
P102B02102: _The template has worksheets added, removed or renamed. Please change it back to the original._  
P102B02103: _The template is out of date. Please download the latest version, fill in the data, and import again._  
P102B02104: _The currency in column {0} is invalid._  
P102B02105: _You can only go through the onboarding settings once._  
P20150327: _Invalid SKU Code {0}._  
P2015032748: _You cannot assign the main contact person {0}, as you have not selected a customer yet._  
P20150328: _One or more price lists do not exist._  
P201506191: _Invalid price_  
P2015072101: _The product cannot be found in the system._  
P2015072401: _Price successfully updated_  
P2015072402: _Basic product information already updated_  
P2015080401: _{0} cannot be negative._  
P2015080412: _The UoM group has not been assigned to the product._  
P2015080413: _Cannot find the base UoM in the current product._  
P2015080414: _You cannot enter an inventory UoM if you choose None as the UoM group._  
P2015091401: _You are not authorized to import purchase prices. Please empty the purchase price columns first if you want to update other fields._  
P2015091701: _The document cannot have more than {0} lines of data. Please split it into multiple documents._  
P20160524: _Batch number in row {0} is invalid._  
## <sapn id="sms">sms</span>
## <sapn id="channel-lcm">channel-lcm</span>
## <sapn id="udo">udo</span>
UDO01A0001: _You do not have READ authorization on udo permission items: {0}_  
UDO01A0002: _You do not have WRITE authorization on udo permission items: {0}_  
UDO01A0003: _{0}:{1} UDO not exist_  
UDO01A0004: _Content {0} type is not correct_  
UDO01A0005: _udo {0} properties: namespace and name cannot be updated_  
UDO01A0006: _udo node {0} property name cannot be updated_  
UDO01A0007: _Namespace only can be 'ext.default'_  
UDO01B0001: _udo node meta cannot have duplicate name {0}_  
## <sapn id="pricing">pricing</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P150BEM001: _Internal Error: incorrect message content or format. Please contact your system administrator._  
P150BEM002: _Invalid source order information._  
P180B00001: _No standard price list._  
P180B00002: _Multiple standard price lists._  
P180B00003: _Multiple price lists._  
P180B00004: _Cannot find SKU_  
P180B00005: _Duplicate prices._  
P180B00006: _No currency._  
P180B00007: _No price result._  
P180B00008: _No pricing method._  
P180B00009: _No pricing method._  
P180B00010: _The channel does not exist._  
P180B00011: _Invalid Parameter._  
P180B00012: _You cannot update currency in company profile._  
P180B00013: _You cannot update pricing method in company profile._  
P180B00014: _Customer does not exist._  
P180B00016: _Provided sales channel {0} and sales price list {1} does not have a common currency._  
P180B00017: _Provided sales channel {0} and sales price list {1} does not have the same pricing method._  
P180B00018: _Provided sales price list {0} is of a standard type, which is not applicable in this API._  
P180B00019: _Sales channel by id {0} is not valid._  
P180B00020: _Sales price list cannot be found by the provided id {0}._  
P180B00021: _Sales channel {0} does not support associating with any sales price lists._  
P180B00022: _Sales channel {0} with the currency {1} has already been assigned a sales price list._  
P180B10001: _The conditons and benefits are not compliant with the promotion item._  
P180B10002: _Currency of the promotion does not comply with that of the channel._  
P180B10003: _Promotion channel pricing methods do not match._  
P180B10004: _Currency {0} and pricing method {1} is not compliant with that in the company settings._  
P180B10005: _The price cannot be negative_  
P180B10006: _There is no record of the price list (Price List: {0}, Currency: {1}, Pricing Method: {2}). This action will be skipped._  
P180B10007: _There is no record of the price list ({0}), This action will be skipped._  
P180B10008: _You do not have the permission to access the price._  
P180B10009: _You do not have the permission to access the standard sales price._  
P180B10010: _You do not have the permission to access the sales price._  
P180B10011: _Network connection failed while uploading images._  
P180B10012: _Failed to upload images due to network issues. Please try again later._  
P180B10013: _Your attachment size exceeds the package you purchased. If you need a larger size quota for attachments, please upgrade your package._  
P180B11001: _Promotion cannot be found by the provided id {0}._  
Prm001: _Please set conditions in Promotion Rules._  
Prm002: _Please set benefits in Promotion Rules._  
Prm003: _Please set types in Promotion Rules._  
## <sapn id="tax-engine-proxy">tax-engine-proxy</span>
## <sapn id="frw">frw</span>
AUTH_10001: _The operation you executed is not applicable for this kind of business object._  
AUTH_10002: _You do not have {0} authorization on following {1}: {2}._  
AUTH_10003: _You do not have {0} authorization on any following permission items: {1}_  
AUTH_10004: _You are accessing an improperly exposed resource, prohibited!._  
AUTH_10005: _You are not authorized to perform this operation. Please contact a power user._  
P0SYS500: _The parameter type mismatch when trying to access this API._  
P100C00001: _The API key cannot be empty._  
P100C00002: _The app does not exist._  
P100C00003: _Authorization failed_  
P100C00004: _Only power users are authorized to perform this operation._  
P100C00005: _Installation failed._  
P100C00006: _Uninstallation failed._  
P100C00007: _Failed to uninstall the app, as it is not installed to the system._  
P100C00008: _Failed to install the app, since it already exists in the system._  
P100C00009: _The callback url for app installation is incorrect._  
P100C00010: _This is not the sandbox system. You can install or apply a test app only in the sandbox system._  
P100C00011: _Failed to connect to the SAP Anywhere app store. Please contact the service provider or your administrator._  
P100C00012: _A system error occurred. Please contact the service provider or your administrator._  
P100C00013: _The return result of the SAP Anywhere app store is incorrect. Please contact the service provider or your administrator._  
P100C00014: _Faield to connect to the SAP Anywhere logon server. Please contact the service provider or your administrator._  
P100C00015: _The return result of the SAP Anywhere logon server is incorrect. Please contact the service provider or your administrator._  
P100C00016: _Installation failed_  
P100C00017: _Authorization failed_  
P100C00018: _Authorization code is empty._  
P100C00019: _App secret is empty._  
P100C00020: _The callback URL for the app is empty or invalid._  
P100C00021: _The grant type is empty._  
P100C00022: _The grant type is invalid._  
P100C00023: _The refresh token is empty._  
P100C00024: _The callback URL for the app installation is incorrect._  
P100C00025: _Authorization failed. The request origin does not have a signature._  
P100C00026: _Authorization failed. The signature of the request is invalid._  
P100C00027: _Installation or authorization failed as the app is off shelf._  
P100C00028: _Authorization failed. The app is not published._  
P100C00029: _Failed to obtain access token._  
P101C00001: _Telecom SMS account does not exist._  
P101C00002: _Telecom SMS app does not exist._  
P101C00003: _Telecom SMS service is not available._  
P101C00004: _Cannot create duplicate Telecom accounts._  
P101C00005: _Telecom SMS account is under review._  
P101C00006: _Invalid SMS parameter._  
P105B00001: _Field {0}: validation failed._  
P105B00002: _Field {0} is required._  
P105B00003: _Field {0} is read-only._  
P105B00004: _Field {0} is unchangeable._  
P105B00005: _Internal Error_  
P105B00006: _Cannot find resource with ID {0}._  
P105B00007: _Field {0} does not exist._  
P105B00008: _The number of items per page cannot exceed maximum value: {0}._  
P105B00009: _Failed to parse the query. Please check your parameter, field names, and values._  
P105B00010: _Query on field {0} is not supported._  
P105B00011: _Database error occurred with error code: {0}, internal error code: {1} and cause: {2}, make sure your input is semantically/syntactically correct._  
P105B00012: _Request parameter: {0} should be set a not empty value._  
P121B03001: _The rule is invalid._  
P121B03002: _{0} should be a type of {1}_  
P121B03003: _The enum value is invalid._  
P121B03004: _Action "{0}" does not exist for {1}_  
P121B03005: _Permission value "{0}" of {1} is invalid_  
P121B03006: _Another user or another operation modified the data; to continue, open the window again._  
P121B03011: _Path{0}, The syntax of rang {1} is invalid_  
P121B03012: _Unexpected character: {0}._  
P121B03013: _{0}_  
P121B03014: _The range is invalid._  
P121B03015: _Name {0} or name space {1} is invalid._  
P121B03016: _Property {0} is invalid._  
P121B03017: _Property {0} is disabled._  
P121B03018: _The value of {0} is blank._  
P121B03019: _Name {0} is invalid._  
P121B03020: _In the bo meta {0}, cannot find action meta {1}._  
P121B03021: _In the node meta {0}, cannot find property meta {1}._  
P121B03022: _In the node meta {0}, cannot find node type meta {1}._  
P121B03025: _Invalid server type: {0}._  
P121S03008: _Query operator does not exist._  
P121S03009: _{0} is an invalid operator._  
P121S03010: _Cannot enter more than one expression for Boolean parenthesis._  
P121S03023: _{0}._  
P121S03024: _You cannot perform this action due to the authorization restriction of your role._  
P121S03026: _This User cannot write [{0}] data._  
P121S03027: _This User[{0}] read authorization does not exist._  
P121S03028: _This User[{0}] write authorization does not exist._  
P121S03029: _This User[{0}] no read authorization, not shared with read._  
P121S03030: _This User[{0}] no read write authorization, not shared with read write._  
P121S03031: _Line {0}, char position {1} syntax error: {2}._  
P121S03032: _Cannot find company setting information._  
P121S03033: _The resource you are using reached the maximum of the package you purchased. If you need to create more, please upgrade your package._  
P121S03034: _Service is temporarily unavailable due to an error while accessing dependent service: {}._  
P124B02004: _{0} is not a valid type._  
P124B02005: _{0} is not a valid number._  
P124B02006: _{0} is not a valid date format._  
P124B02007: _{0} is not a valid value._  
P125B02004: _{0} does not exist._  
P125B02005: _The business object ''{0}'' does not exist._  
P125B02006: _This field already exists._  
P125B02007: _API name already exists._  
P125B02008: _The validation rule and valid values cannot exist concurrently._  
P125B02009: _The linked Business Object {0} does not exist._  
P125B02010: _The linked Business Object {0}''s metadata is invalid._  
P125B02011: _Business objects support only long integers_  
P125B02015: _Cannot find business object_  
P125B02016: _It cannot be longer than {0} characters._  
P125B02017: _Invalid property value {0}_  
P125B02018: _Invalid property time value {0}_  
P125B02019: _{0} does not exist._  
P125B02020: _{0} is an invalid type of custom field._  
P125B02021: _One or more mandatory fields are missing the required information._  
P125B02022: _Custom field name cannot be empty._  
P125B02024: _Cannot create custom field._  
P125B02025: _This valid value already exists._  
P125B02026: _Cannot delete UDF {0}_  
P125B02027: _Invalid property error:{0}._  
P125B02028: _You must assign a specified key._  
P125B02029: _Missing metadata of BO {0}._  
P125B02030: _The entity {0} does not update permission._  
P125B02031: _Please use other query types._  
P125B02032: _Only supports single primary key._  
P125B02033: _Error when retrieving property value of business object {0}._  
P125B02034: _Cannot find business object_  
P125B02051: _Property {0} validation error:{1}._  
P125B02055: _Invalid business object type_  
P125B02056: _The business object already exists._  
P125B02057: _Invalid User Defined Object_  
P125B02058: _The custom field name is invalid. The name can contain up to 18 characters, consisting of letters and numbers only; it must start with a letter._  
P125B02059: _Invalid User Defined Object Node_  
P125B02060: _User {0} does not exist._  
P125B02061: _This field is mandatory._  
P125B02062: _The user level default value does not follow the field's rule._  
P125B02063: _The code does not satisfy the defined coding rules. Please change the code or modify the coding rules._  
P125B02064: _Series already exists._  
P125B02065: _Series does not exist._  
P125B02066: _Business object namespace is empty_  
P125B02067: _Business object name is empty_  
P125B02068: _The name is empty_  
P125B02069: _The code must contain at least one character._  
P125B02070: _The code must start with a number greater than or equal to 1._  
P125B02071: _The ending number must be greater than or equal to 1, and larger than the starting number._  
P125B02072: _You cannot edit this record._  
P125B02073: _You cannot delete the code as it has already been used._  
P125B02074: _Wrong code default value_  
P125B02075: _Job schedule submit failed._  
P125B02076: _Cannot delete addon field_  
P125B02077: _Query job by group failed._  
P125B02078: _Property {0} is invalid._  
P125B02079: _The starting number cannot exceed the defined code range._  
P125B02080: _Length of code cannot exceed 15 characters._  
P125B02081: _The code must have a prefix or a suffix_  
P125B02082: _Name can only contain letters and numbers and must start with a letter._  
P125B02083: _Namespace can only contain letters, numbers, or periods and must start with a letter._  
P125B02084: _Target business object type is invalid._  
P125B02085: _Cannot get changed properties on BO {0} which has no snapshot taken._  
P125B02086: _You do not have {0} authorization on following {1}: {2}._  
P125B02087: _API name can only contain letters and numbers and must start with a letter._  
P125B02088: _The parameter {0}:{1} type does not match_  
P125B02089: _Team {0} does not exist._  
P125B02100: _Series prefix must contain at least one non-number character_  
P125B02101: _Series suffix must contain at least one non-number character_  
P125B02111: _Cannot set a finished series as a default series_  
P125S02012: _Invalid JPQL statement {0}_  
P125S02013: _Unrecognized JPQL statement {0}_  
P125S02014: _Unable to find out alias {0} in the query_  
P125S02035: _The target business object does not have a primary property._  
P125S02036: _Expected an entity manager factory for the persistence unit named {0}._  
P125S02037: _Unknown bo type {0}._  
P125S02038: _Cannot reserve more txt columns._  
P125S02039: _Cannot reserve more stxt columns._  
P125S02040: _Cannot reserve more numeric columns._  
P125S02041: _Cannot reserve more datetime columns._  
P125S02042: _Incorrect format of returned column {0}_  
P125S02043: _Snapshot value of property {0} was not taken._  
P125S02044: _BO class must be specified._  
P125S02045: _On bo {0} root node,association {1} not found._  
P125S02046: _Sending email failed_  
P125S02047: _BONodeImplementation annotation is missing on class {0}._  
P125S02048: _Not BO Type, cannot be assigned._  
P125S02049: _Business object type is invalid._  
P125S02050: _On class {0},field {1} not found._  
P125S02087: _Error parsing BOQL [{0}] to JPQL._  
P125S02088: _Error creating query._  
P125S02090: _In the entity [{0}],can not found system/customized property [{1}]._  
P125S02091: _Dividing by 0 is not permitted._  
P125S02092: _Money currency {0} is not valid_  
P125S02093: _Money currency is missing_  
P125S02094: _Can not get the current user information._  
P125S02095: _missing argument_  
P125S02096: _User {0} does not exist_  
P125S02097: _Currency code can only consist of 1 to 3 letters._  
P125S02098: _This currency code already exists._  
P125S02099: _You cannot decrease the number of decimal places._  
P125S02100: _A prefix must include at least one non-numeric character._  
P125S02101: _A prefix must include at least one non-numeric character._  
P125S02102: _State is not valid_  
P125S02103: _Full name cannot be empty_  
P125S02104: _Cannot add a validation rule as the field had been used._  
P125S02105: _The currency code does not exist or is inactive._  
P125S02106: _The currency is inactive._  
P125S02107: _Exchange rate must be greater than 0._  
P125S02108: _Valid value cannot be empty._  
P125S02109: _The property you are trying to delete is already in use in a Service Case. Please refresh the page and unassign the property from the Service Case first._  
P125S02110: _Cannot retrieve the SAP HANA database connection information for the service unit._  
P125S02111: _You cannot delete or edit the property as it is already in use in a Service Case. Please refresh the page and unassign the property from the Service Case first._  
P125S02112: _The property you are trying to delete is already in use in Knowledge Base. Please refresh the page and unassign the property from Knowledge Base first._  
P125S02113: _You cannot delete or edit the property as it is already in use in Knowledge Base. Please refresh the page and unassign the property from Knowledge Base first._  
P125S02114: _You cannot deactivate the currency as it is currently used by channels._  
P125S02120: _System predefined property you are trying to delete is not deletable._  
P127B00001: _EntitySet name of {0} not found._  
P127B00002: _Unknown to identify of {0} internet 'Media Type'_  
P127B00006: _Uri encode error_  
P127B00007: _Complex key cannot be represented as a single value_  
P127B00008: _EdmType '{0}' not found_  
P127B00011: _{0} method cannot found_  
P127B00012: _invalid JSON content_  
P127B00013: _unhandled property {0}_  
P127B00014: _unhandled property type {0}_  
P127B00015: _json write error_  
P127B00020: _Invalid input value_  
P127B00021: _Entity [{0}] binding function [{1}] not found_  
P127B00022: _Unable to tokenize: {0} current: {1} rem: {2}_  
P127B00023: _Key string cannot be null_  
P127B00024: _Key string cannot be empty_  
P127B00025: _Bad key string {0}_  
P127B00026: _Bad value string {0} as part of key string {1}_  
P127S00003: _Unable to locate format parser for {0} and format {1}_  
P127S00004: _Unknown odata version_  
P127S00005: _{0} of commandType not found_  
P127S00009: _Function not supported yet_  
P127S00010: _unexpected aggregate function {0}_  
P127S00016: _Edm item type is required_  
P127S00017: _Cannot find OData producer_  
P127S00018: _EdmType not instance of EdmCollectionType_  
P127S00019: _Property {1} does not exist for method {0}_  
P129B00001: _Failed to log on. Please contact your administrator._  
P129B00002: _Name of {0} does not exist. Identifier is {1}_  
P129B00004: _Business object not found, or you are not authorized to view it_  
P129B00005: _BO identifier of {0} does not found_  
P129B00006: _The metadata is being modified, please try again later._  
P129B00007: _{0} does not exist._  
P129B00009: _Input format is incorrect._  
P129B00010: _Cannot find the object {0} service metadata._  
P129B00011: _Invalid tenant name {0}._  
P129B00016: _Service Unit[{0}] of the application server and service unit [{1}] of the requested tenant does not match._  
P129B00017: _Property {0} value exceeds range._  
P129B00018: _You are not allowed to create this object_  
P129B00019: _You are not allowed to read this object_  
P129B00020: _You are not allowed to update this object_  
P129B00021: _You are not allowed to delete this object_  
P129B00022: _Cannot generate a barcode. Please correct this product's barcode._  
P129B00023: _You do not have {0} permission on any of following permission items: {1}_  
P129B00024: _Your account has been locked._  
P129B00025: _This {1} in {0} already exists._  
P129B00026: _Only power users are allowed to perform this operation._  
P129B00027: _Support users that have read-only access and cannot perform this operation._  
P129B00028: _Operation failed due to duplicate constraints._  
P129B00029: _You are not allowed to access this service. Make sure you are using the correct account and link._  
P129B00030: _The permission item is invalid._  
P129B00031: _You are not authorized to access this operation._  
P129S00003: _The application has encountered an error. We are aware of the error and are already working on a resolution._  
P129S00008: _Unexpected error: {0}_  
P129S00012: _Action {0} not found in service metadata._  
P129S00013: _Cannot embed object type in complex type {0}._  
P129S00014: _No default constructor found in calss {0}._  
P129S00015: _The application has encountered an error with code: {0}. We are aware of the error and are already working on a resolution._  
P135B000011: _Please enter a name for the custom object._  
P135B00007: _Only one business key allowed_  
P135B00008: _{0} already exists._  
P135B00017: _Custom Field's namespace cannot using "com.sap.sbo"._  
P136B00001: _The property {0} does not exist._  
P136B00002: _{0} is not a valid table._  
P136B00003: _Insufficient tables._  
P136B00004: _Insuficient columns._  
P136B00005: _Business Key User Property cannot be removed._  
P136B00006: _Custom Field {0} does not belong to Custom Object {1}_  
P200B00001: _Currently another user is updating this record. Please wait for a while and try later._  
P300B00001: _{0} value is not correct_  
## <sapn id="inventory">inventory</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P103B02005: _You cannot delete an already triggered approval_  
P103B02006: _Approval "{0}" already exists_  
P103B02007: _User "{0}" is invalid_  
P103B02008: _Business object type does not exist_  
P103B02009: _You are not authorized to view this information_  
P103B02010: _Business object "{0}" does not exist_  
P103B02011: _You are not authorized to assign this object_  
P103B02012: _Invalid dynamic authorization id: {0}_  
P103B02013: _Invalid role id: {0}_  
P103B02014: _Invalid system business object id: {0}_  
P103B02015: _{0} is not a system predefined role._  
P103B02016: _missing argument_  
P103B02017: _Please enter a role name._  
P103B02018: _The role name has been used, please enter another name._  
P103B02019: _Cannot delete {0}. It is a system predefined role._  
P103B02020: _Cannot delete this role. It is already assigned to users._  
P103B02021: _Invalid authorization item name: {0}_  
P103B10000: _You cannot unlock yourself_  
P103B10001: _You cannot lock yourself_  
P103B10002: _You cannot change yourself to normal user_  
P103B10003: _You cannot change yourself to key user_  
P103B10004: _You cannot view restricted price lists_  
P103B10005: _You are not authorized to change user permissions_  
P103B10006: _Permission item index "{0}" is invalid_  
P103B10007: _Permission argument is invalid_  
P103B10008: _You are not authorized to create users_  
P103B10009: _Cannot create user due to an unexpected error. Report error?_  
P103B10010: _Enter an email address_  
P103B10011: _Email address is invalid_  
P103B10012: _An account already exists for this email address. To reset your password, choose the “Forgot you password” link._  
P103B10013: _You are not authorized to change user details_  
P103B10014: _Cannot update user due to an unexpected error. Report error?_  
P103B10015: _You cannot delete yourself_  
P103B10016: _You are not authorized to delete users_  
P103B10017: _Cannot delete user due to an unexpected error. Report error?_  
P103B10018: _Phone number {0} is invalid_  
P103B10019: _User {0} does not exist_  
P103B10020: _Business object identifier "{0}.{1}" is invalid_  
P103B10021: _Enter a valid password_  
P103B10022: _You are not authorized to change user passwords_  
P103B10024: _Enter a new password_  
P103B10025: _Enter the current password_  
P103B10026: _Your new password must not be the same as your current one_  
P103B10027: _Email Address {0} already exists._  
P103B10028: _Current password is incorrect_  
P103B10029: _Invoke by createUserEmployee function to create user._  
P103B10030: _Invoke by checkedUpdate function to update user info._  
P103B10031: _No method available in property: {0}._  
P103B10032: _Failed to get property: {0}._  
P103B10033: _Business object entity key is null._  
P103B10034: _Image upload failed._  
P103B10035: _Attachment not found._  
P103B10036: _Queue server is unavailable, please contact system administrator_  
P103B10037: _Cannot upload the template. Please make sure the file format is XLS and that content within the template is correct._  
P103B10038: _File conversion failed, please contact system administrator_  
P103B10039: _Invalid setting for the manager. Please check._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20001: _Invalid input_  
P103B20002: _Local currency is not existing._  
P103B30000: _Activity does not exist_  
P103B30001: _Status is invalid_  
P103B30002: _One or more mandatory fields are missing required information._  
P103B30003: _One or more mandatory fields are missing required information._  
P103B30004: _One or more mandatory fields are missing required information._  
P103B30005: _User does not exist_  
P103B30006: _No permission to read_  
P103B30007: _No permission to write_  
P103B30008: _You cannot delete approval activities_  
P103B30009: _You cannot change the activity status_  
P103B30010: _You cannot change completed activities_  
P103B30011: _You cannot change the activity status_  
P103B30012: _You cannot approve or reject this activity_  
P103B30013: _You are not authorized to change the approval status_  
P103B30014: _Document type is invalid_  
P103B30015: _Business object not found_  
P103B30016: _Attachment does not exist_  
P103B30017: _Cannot create approval due to an unexpected error. Please try again._  
P103B30018: _You cannot reopen approval activities_  
P103B30019: _Activity is already open_  
P103B30020: _{0} was sent to you for approval_  
P103B30021: _{1} assigned a {0} to you._  
P103B30022: _{1} updated a {0}._  
P103B30023: _A {1} for {0} was changed by {2}._  
P103B30024: _A {1} for {0} was created by {2}._  
P103B30025: _A {1} for {0} was deleted by {2}._  
P103B30026: _{1} has approved a {0}._  
P103B30027: _{1} has rejected a {0}._  
P103B30028: _{1} has completed a {0}._  
P103B30029: _A {1} for {0} has been completed by {2}._  
P103B30030: _A {1} for {0} was reopened by {2}._  
P103B30031: _A {1} for {0} has been approved by {2}._  
P103B30032: _A {1} for {0} has been rejected by {2}._  
P103B30033: _{1} reopened a {0}._  
P103B30034: _You have already sent an authorization request. Please wait for approval_  
P103B30035: _{0} sent you a {1} for authorization approval_  
P103B30036: _{0} has granted you full access to {1}_  
P103B30037: _{0} has granted you read-only access to {1}_  
P103B30038: _{0} has rejected your request for accessing to {1}_  
P103B30039: _description_  
P103B30040: _You cannot attach an empty file_  
P103B30041: _Text_  
P103B30042: _Activity {0} is invalid_  
P103B30043: _A {1} for {0} was changed by {2}._  
P103B30044: _A {1} for {0} was created by {2}._  
P103B30045: _A {1} for {0} was deleted by {2}._  
P103B30046: _User "{0}" is invalid_  
P103B30047: _{0} requests approval for {1} worth {2}_  
P103B30048: _Invalid action for this type of activity._  
P103B40001: _The ContactPerson is invalid_  
P103B50001: _Attachment Upload Failed._  
P103B50002: _Attachment Download Failed._  
P103B50003: _Not Authorized to delete or update Attachment._  
P103B50004: _Not Authorized to Create or Add Attachment._  
P103B50005: _Not Authorized to Read Attachment._  
P103B60001: _Taobao integration already active._  
P103B60002: _Taobao integration already inactive._  
P103B60003: _Taobao login failed: {0}._  
P103B60004: _Do OAuth with Taobao first._  
P103B60005: _SKU ID {0} is invalid. Product ID {0} is invalid._  
P103B60006: _SKU ID {0} is invalid._  
P103B60007: _Refresh token is expired._  
P103B60008: _No RMB currency._  
P103B60009: _Product code cannot be empty._  
P103B60010: _Product code {0} is invalid._  
P103B60011: _Products were delivered from Taobao, you need create an order and deliver it manually._  
P103B60012: _Invalid channel type for Taobao Channel. Only Taobao or Tmall is valid._  
P103B60013: _This trade has already been generated a Sales Order._  
P103B60014: _Sales order {0} is invalid._  
P103B60015: _Sales order {0} is already related to external order {1}._  
P103B60016: _Cannot relate return order to trade._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P103B90001: _content is limited 140 characters, when the note has an attachment_  
P103B93125: _Cannot create user due to maximum number of users exceeded._  
P103S10023: _Failed to change password as the application has encountered an error. We are aware of the error and already working on a resolution._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P149B02001: _Receipt quantity must be greater than 0._  
P149B02002: _You cannot delete inventory receipts._  
P149B02021: _Line {0}: Quantity must be greater than 0._  
P149B02022: _Line {0}: Quantity cannot exceed the in-stock quantity._  
P149B02023: _You cannot delete inventory issues._  
P149B02026: _This warehouse is currently inactive. To continue, please activate the warehouse._  
P149B02027: _This product is a non-inventory product._  
P149B02028: _Warehouse must be blank when it is a dropship order._  
P149B02029: _Please specify a warehouse when it is not a dropship order._  
P149B02041: _Counted quantity cannot be less than 0._  
P149B02042: _SKU {0} has been entered more than once._  
P149B02043: _Specified SKU not found. Please enter a valid SKU._  
P149B02044: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02045: _Please add products._  
P149B02046: _You cannot delete inventory counts._  
P149B02047: _Line {0}: Counted quantity is mandatory._  
P149B02048: _Line {0} Batch number {1} is duplicated._  
P149B02049: _Invalid batch number. The batch number is empty, or non-existent, or not associated with SKU "{0}". _  
P149B02050: _You cannot confirm counting, because it has already been closed or cancelled._  
P149B02051: _You cannot cancel counting, because it has already been closed or cancelled. _  
P149B02061: _Line {0}: Quantity must be greater than 0._  
P149B02062: _Specified product not found. Please enter a valid product._  
P149B02063: _Product %{0}% has been entered more than once._  
P149B02064: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02065: _You cannot delete inventory opening balances._  
P149B02066: _Line {0}: All batch quantities should have the same sign (plus/minus)._  
P149B02067: _Line {0}: Duplicated product found in existing opening balances_  
P149B02068: _Line {0}: Unit price cannot be less than 0._  
P149B02081: _Warehouse cannot be null or from-warehouse and to-warehouse cannot be the same._  
P149B02082: _Line {0}: Transfer-out quantity must be greater than 0._  
P149B02083: _Line {0}: Quantity cannot exceed the in-stock quantity._  
P149B02084: _Specified warehouse not found. Please enter a valid warehouse._  
P149B02085: _Specified SKU not found. Please enter a valid SKU._  
P149B02086: _You cannot delete inventory transfers._  
P149B02087: _Transfer-in time cannot be earlier than transfer-out time._  
P149B02088: _Line {0}: Transfer-in quantity must be greater than 0._  
P149B02089: _Line {0}: Transfer-in quantity cannot be greater than transfer-out quantity._  
P149B02090: _Pleae enter the transfer-out time._  
P149B02141: _You cannot deactivate this warehouse as the amount of inventory is greater than 0._  
P149B02144: _You cannot change the status of a warehouse once it is used in channels._  
P149B02145: _You cannot delete warehouses._  
P149B02146: _Please enter a warehouse code._  
P149B02147: _Please enter a warehouse name._  
P149B02148: _You cannot update the warehouse code as it already exists._  
P149B02149: _Duplicated operator found. Please choose another._  
P149B02161: _Quantity must be greater than 0._  
P149B02162: _You cannot update the inventory log._  
P149B02163: _You cannot delete the inventory log._  
P149B02182: _Inventory UoM used in current document is inconsistent with the one specified in product master data. Please select the product again._  
P149B02183: _Invalid product. Please enter a valid one._  
P149B02184: _Invalid warehouse. Please enter a valid one._  
P149B02185: _Failed to update inventory information_  
P149B02186: _SKU {0}: In-stock quantity cannot be less than 0._  
P149B02187: _Invalid accumulator type_  
P149B02188: _Allocated quantity cannot be less than 0._  
P149B02189: _Purchased quantity cannot be less than 0._  
P149B02190: _Failed to update inventory info_  
P149B02191: _SKU {0}: In-stock quantity cannot be less than the allocated quantity._  
P149B02192: _SKU {0}: Committed quantity cannot be less than the allocated quantity._  
P149B02193: _SKU {0}: Committed quantity cannot be less than 0._  
P149B02194: _Invalid action type_  
P149B02195: _Initializing inventory cost...Please try again later._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P149B02241: _Please add at least one product._  
P149B02242: _Quantity of the batch number must be greater than 0._  
P149B02250: _Please specify a bundle product._  
P149B02251: _Please add component products._  
P149B02252: _You cannot delete assembly orders._  
P149B02253: _Please add products._  
P149B02254: _Quantity to assemble must be greater than 0._  
P149B02255: _Line {0}:Quantity must be less than in-stock quantity._  
P149B02256: _You cannot create or cancel the assembly order as it is already closed or canceled._  
P149B02257: _Component products in current assembly order are inconsistent wit the component products in product master data._  
P149B02258: _Cannot disassemble. The in-stock quantity of the bundle products is insufficient._  
P149B02259: _Line {0}: Quantity must be greater than 0._  
P149B02260: _Line {0}: Quantity can not be empty._  
P149B02300: _Total batch quantity does not match the line quantity._  
P149B02301: _Please enter the batch number._  
P149B02302: _Batch number {0} does not exist._  
P149B02303: _Batch number {0} is not assigned to SKU {1}._  
P149B02304: _Duplicate batch numbers found. SKU name: {0}._  
P149B02305: _Please enter all the batches with non-zero in-stock quantities. SKU name: {0}._  
P149B02306: _Specified quantity for batch "{0}" exceeds the in-stock quantity._  
P149B02310: _You cannot update the product after a batch number is assigned to it._  
P149B02311: _Duplicate batch numbers are assigned to one SKU._  
P149B02312: _Expiry date must be later than creation date._  
P149B02313: _Please enter a product managed by batch._  
P149B02317: _You cannot delete inventory revaluation documents._  
P149B02318: _Line {0}: Please enter the new cost._  
P149B02319: _Line {0}: New cost cannot be negative._  
P149B02320: _Line {0}: You cannot create the inventory revaluation document as the in-stock quantitiy of this product is negative._  
P149B02330: _Sales order can not be null._  
P149B02331: _Purchase order line can not be null._  
P149B02332: _Corresponding sales delivery line has been created._  
P149B02333: _Corresponding line is not closed or canceled._  
P149B02334: _The customer is referred by SalesDelivery/SalesReturn._  
P149B02335: _The SKU is referred by inventory documents or serial/batch numbers._  
P149B02336: _{0}_  
P149C02300: _Total serial quantity does not match the line quantity._  
P149C02302: _Line {0}: SKU {1} line contains null serial number._  
P149C02303: _Line {0}: Serial number {1} does not belong to SKU {2}._  
P149C02304: _Line {0}: You do not assign serials for SKU {1}._  
P149C02305: _You do not assign serials for SKU {0}._  
P149C02309: _Line {0}: Duplicated serial number {1} found on SKU {2} line._  
P149C02310: _Serial number {0} already exists in warehouse {1}._  
P149C02311: _Serial number {0} does not have stock._  
P149C02313: _Please enter a serial product._  
P149C02314: _Duplicate serial numbers are assigned to one SKU._  
P149C02315: _You cannot update the product after a serial number is assigned to it._  
P149C02319: _This document type does not support serial managed products. Will support in following releases._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00070: _You cannot delete the {0} as it is already in use._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P152B02001: _Line {0}: Quantity must be greater than 0._  
P152B02002: _Cannot change property '{0}'._  
P152B02004: _You cannot delete purchase receipts._  
P152B02005: _Specified purchase order not found. Please enter a valid purchase order._  
P152B02006: _Line {0}: Quantity must be greater than 0._  
P152B02007: _Line {0}: Received quantity cannot exceed requested quantity._  
P152B02008: _Invalid input parameter_  
P152B02009: _You cannot update the line information after creating a purchase receipt._  
P152B02010: _You cannot create purchase receipts based on unapproved purchase orders._  
P152B02011: _Please enter a vendor._  
P152B02012: _Cannot choose inactive vendors. Please activate the vendor in Master Data - Vendors._  
P152B02013: _Line {0}: Batch quantity must be greater than 0._  
P152B02014: _Line {0}: Received quantity cannot be less than the unreceived quantity in the purchase order generated from sales orders._  
P152B02015: _You cannot manually create purchase receipts when inventory cost is enabled._  
P152B02016: _You cannot manually create purchase returns when inventory cost is enabled._  
P152B02017: _Purchase receipts info cannot be null._  
P152B02021: _Please add products._  
P152B02022: _Line {0}: Quantity must be greater than 0._  
P152B02023: _Line {0}: Net price cannot be less than 0._  
P152B02024: _Line {0}: Gross price cannot be less than 0._  
P152B02025: _Line {0}: Requested quantity cannot be less than received quantity._  
P152B02026: _You cannot update source._  
P152B02027: _You cannot update the warehouse property when the document is in process._  
P152B02028: _You cannot update property '%x' when the status is closed or canceled._  
P152B02030: _Status change invalid_  
P152B02031: _You cannot update product information. There are existing purchase receipts related to this product._  
P152B02032: _You cannot generate purchase receipt. This purchase order must be approved first._  
P152B02033: _You cannot edit properties as this purchase order is generated from sales orders._  
P152B02034: _You cannot update the document as it is closed or canceled._  
P152B02035: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02036: _You cannot change existing lines when the document is generated from a sales order._  
P152B02037: _You cannot change the quantity together with other properties._  
P152B02038: _You cannot update the product and corresponding warehouse. There are existing purchase receipts related to this product._  
P152B02039: _Received quantity cannot exceed requested quantity._  
P152B02040: _Net price and quantity cannot be less than 0._  
P152B02041: _Gross price and quantity cannot be less than 0._  
P152B02042: _Specified warehouse not found. Please enter a valid warehouse._  
P152B02043: _This warehouse is currently inactive. To continue, please activate the warehouse._  
P152B02044: _This product is a non-inventory product._  
P152B02045: _You cannot cancel this purchase order as there are exisiting purchase receipts based on it._  
P152B02046: _Specified sales order not found. Please enter a valid sales order._  
P152B02047: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02048: _Property '{0}' cannot be changed when the purchase order is generated from a sales order._  
P152B02050: _You cannot cancel the document as it is already been canceled or closed._  
P152B02051: _You cannot close the document as the purchase order is not approved yet._  
P152B02052: _You cannot close the document as the purchase order is not approved yet._  
P152B02053: _You cannot close the purchase order as it is generated from a sales order._  
P152B02054: _Invalid sales order line ID_  
P152B02055: _You cannot add or delete a line as this document is already closed or canceled._  
P152B02056: _Specified vendor is inactive. Please activate the vendor first._  
P152B02057: _You cannot delete current product line as related purchase receipts already exist._  
P152B02058: _You cannot generate purchase orders as the ordered products have already been allocated to warehouses._  
P152B02061: _Line {0}: Quantity must be greater than 0._  
P152B02062: _Line {0}: Quantity cannot exceed in-stock quantity._  
P152B02063: _You cannot delete purchase returns._  
P152B02064: _Specified purchase return not found. Please enter a valid purchase return._  
P152B02065: _Line {0}: Quantity must be greater than 0._  
P152B02066: _Line {0}: Returned quantity cannot exceed received quantity._  
P152B02067: _Invalid input parameter_  
P152B02068: _Specified vendor is inactive. Please activate the vendor first._  
P152B02079: _You cannot generate purchase orders. Please check that the logistic statuses of all selected sales order lines are "ordered"._  
P152B02080: _You cannot generate purchase orders. Please enter related sales order information first._  
P152B02081: _You cannot generate purchase orders. Please select source sales orders first._  
P152B02082: _Specified warehouse ID not found. Please enter a valid one._  
P152B02083: _Specified vendor ID not found. Please enter a valid one._  
P152B02084: _Ordered quantity must be greater than 0._  
P152B02085: _Delivery date cannot be empty or earlier than current system date._  
P152B02086: _Specified sales order ID or product line ID not found. Please enter a valid one._  
P152B02087: _Specified SKU ID not found. Please enter a valid one._  
P152B02088: _Specified Customer ID not found. Please enter a valid one._  
P152B02089: _Specified shipping address not found. Please enter a valid one._  
P152B02090: _You cannot update the vendor as related purchase receipts already exist._  
P152B02091: _You cannot change the pricing method when the pricing method specified in sales pricing settings is not "Net & Gross"._  
P152B02092: _You cannot reopen the purchase order as it is generated from a sales order._  
P152B02093: _You cannot change the purchasing UoM as the product's UoM group is "Manual"._  
P152B02094: _You cannot change the purchasing UoM as related purchase receipts already exist._  
P152B02095: _You cannot change the purchasing price as related purchase receipts already exist._  
P152B02101: _You cannot generate purchase receipt. Selected purchase orders must share the same vendor._  
P152B02102: _You cannot generate purchase receipt. Selected purchase orders must share the same warehouse._  
P152B02103: _You cannot generate purchase receipt. Selected purchase orders must share the same dropship type._  
P152B02104: _You cannot generate purchase receipt. Selected purchase orders must share the same currency._  
P152B02105: _You cannot generate purchase receipt. Selected purchase orders must share the same source._  
P152B02106: _You cannot generate purchase receipt. Selected purchase orders must share the same billing address._  
P152B02107: _You cannot generate purchase receipt. Selected purchase orders must share the same shipping address._  
P152B02108: _Please select at least one purchase order._  
P152B02109: _Order time cannot be later than the expected delivery time._  
P152B02110: _Please specify a warehouse when it is not a dropship order._  
P152B02111: _Warehouse must be blank when it is a dropship order._  
P152B02112: _Line {0}: Dropship must be true._  
P152B02113: _Line {0}: Dropship must be false._  
P152B02114: _You cannot change the product as current purchase receipt is generated from a purchase order._  
P152B02115: _Please select at least one purchase order with a product line not fully received._  
P152B03001: _You cannot deactivate this vendor as it is the preferred vendor of certain products._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P181B00001: _Cannot update pricing method._  
P181B00002: _You cannot change the local currency as it has been changed once already._  
P181B00003: _Cannot disable multiple currencies._  
P181B00004: _Invalid parameter_  
P181B00005: _To disable this option, first fix cases where available-to-sell is negative._  
P181B00006: _To disable this option, first fix cases where inventory is negative._  
P181B00007: _You cannot change the exchange rate quotation as some of the foreign currencies are in use._  
P181B00008: _Inventory cost calculation is only supported in China._  
P181B00010: _You cannot disable the calculation of inventory estimated cost once it is enabled._  
P181B00011: _TaaS is available in the US only._  
P181B00012: _You can only choose 'shipping to' when using TaaS._  
## <sapn id="employee">employee</span>
AUTH_B_20000: _Invalid permission item name: {0}._  
AUTH_B_20002: _Employee with id = {0} doesn't exist._  
AUTH_B_20003: _The role name can't be empty._  
AUTH_B_20004: _The value is invalid for parameter {0}._  
AUTH_B_20005: _Invalid role id: {0}._  
AUTH_B_20007: _The role is in use!_  
P129B00024: _Your account has been locked._  
P129B00029: _You are not allowed to access this service. Make sure you are using the correct account and link._  
P168B00001: _Invalid support request parameter._  
P168B000010: _Input parameter is invalid._  
P168B000011: _The support user {0} is already an available user._  
P168B000012: _The support user {0} is not found._  
P168B000013: _The support user {0} without available support request._  
P168B00002: _Invalid support user email._  
P168B00003: _You have already sent out a support invitation. Please wait till the invited support user contacts you._  
P168B00004: _Only power users can send a support request._  
P168B00005: _Only power users can terminate a support request._  
P168B00006: _There is not an available user._  
P168B00007: _The user {0} is not an available support user._  
P168B00008: _Call bss to verify support user failure._  
P168B00009: _Call idp to get user by email {0} failure._  
P200B00001: _You are not authorized to create users._  
P200B00002: _Email Address {0} already exists._  
P200B00003: _Email address is invalid_  
P200B00004: _You cannot change yourself to key user_  
P200B00005: _You cannot lock yourself_  
P200B00006: _You cannot change yourself to normal user_  
P200B00007: _Invalid setting for the manager. Please check._  
P200B00008: _Get bff url failure._  
P200B00009: _Phone number {0} is invalid_  
P200B00010: _You cannot delete yourself_  
P200B00011: _Enter an email address_  
P200B00012: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P200B00013: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P200B00014: _The file is empty or does not exist in the specified location._  
P200B00015: _Failed to upload the file. Please try again._  
P200B00016: _Failed to download the file. Please try again._  
P200B00017: _Cannot create user due to maximum number of users exceeded._  
P200B00018: _You are not authorized to view this information_  
P200B00019: _User {0} does not exist_  
P200B00020: _You cannot unlock yourself_  
P200B00021: _Cannot set this user as technical support user because the technical support users must be key user._  
P200B00022: _You are not authorized to change user details_  
P200B00023: _Service temporarily unavailable due to error while accessing dependent service {0}._  
P200B00024: _Service temporarily unavailable due to calling access dependent service {0} timeout._  
P200B00025: _The email address you entered is not unique, please enter another._  
P200B00026: _You are not authorized to view this object._  
P200B00027: _You are not allowed to remove this key user.There must be at least one key user in the system._  
P200B00028: _The user name can't be empty._  
## <sapn id="progress">progress</span>
## <sapn id="email">email</span>
Email_ErrorCode_00000: _Internal Service Error._  
Email_ErrorCode_00001: _Not found email object._  
Email_ErrorCode_00002: _The field 'from' can not be empty._  
Email_ErrorCode_00003: _The field 'to' can not be empty._  
Email_ErrorCode_00004: _The field 'subject' can not be empty._  
Email_ErrorCode_00005: _The field 'body' can not be empty._  
Email_ErrorCode_00006: _The field 'from' is not valid email format._  
Email_ErrorCode_00007: _The field 'to' is not valid email format._  
Email_ErrorCode_00008: _The field 'bcc' is not valid email format._  
Email_ErrorCode_00009: _The size of attachment exceeds the threshold._  
Email_ErrorCode_00010: _The type of attachment is invalid._  
Email_ErrorCode_00012: _The field 'domain' is invalid._  
Email_ErrorCode_00100: _Not found SMTP object._  
Email_ErrorCode_00101: _System SMTP configuration not allow be deleted._  
Email_ErrorCode_00102: _The field 'server' can not be empty._  
Email_ErrorCode_00103: _The field 'default from' can not be empty._  
Email_ErrorCode_00104: _The field 'default from' is not valid email format._  
Email_ErrorCode_00200: _Push email message to rabbit mq failed._  
Email_ErrorCode_00201: _Deserialize email failed._  
## <sapn id="attachment">attachment</span>
P100B00002: _Can not find this attachment_  
P100B00003: _Attachment do not existed_  
P100B00004: _No authorization to access this attachment_  
P100B00005: _File type invalid_  
P100B00006: _Empty upload file_  
P100B00007: _Scan virus failed_  
P100B00009: _Upload file failed_  
P100B00011: _Download file failed_  
P100B00012: _Make file public failed_  
P100B00013: _Make file private failed_  
P100B00015: _File size over size_  
P100B00016: _File name invalid_  
P100B00017: _File have virus_  
P100B00019: _Attachment RO do not existed_  
P100B00020: _Attachment compress failed_  
P100B00021: _Fail to access BSS service_  
P100B00022: _You have exceeded your storage limit of {0}GB by {1}KB. To continue, please increase your storage quota._  
P100B00025: _Attachment RO already existed_  
P100B00026: _Attachment RO is not correct_  
P100B00027: _Get attachment quota failed_  
P100B00028: _No permission to get attachment quota_  
## <sapn id="product">product</span>
P150B70001: _Quantity cannot be 0._  
P150B70002: _Price cannot be 0._  
P150B70112: _Discount cannot be greater than 100%._  
P150B70113: _Unit price cannot be less than 0._  
P150B70121: _The signs (plus/minus) of quantity and line total are different._  
P150B70163: _You cannot trigger the approval process for an open order._  
P150B76033: _Network connection failed while uploading images._  
P150B76034: _Tax calculation failed as the tax service is temporarily unavailable. Please try again later._  
P150B76035: _Failed to upload images due to network issues. Please try again later._  
P150B79356: _You cannot change the codes of predefined delivery methods._  
P150B79357: _You cannot change the codes of predefined payment types._  
P150BEM001: _Internal Error: wrong message content or format. Please contact your system administrator._  
P150BEM002: _Invalid source order information._  
P152B02001: _Line {0}: Quantity must be greater than 0._  
P152B02002: _Cannot change property '{0}'._  
P152B02004: _You cannot delete purchase receipts._  
P152B02005: _Specified purchase order not found. Please enter a valid purchase order._  
P152B02006: _Line {0}: Quantity must be greater than 0._  
P152B02007: _Line {0}: Received quantity cannot exceed requested quantity._  
P152B02008: _Invalid input parameter_  
P152B02009: _You cannot update the line information after creating a purchase receipt._  
P152B02010: _You cannot create purchase receipts based on unapproved purchase orders._  
P152B02011: _Please enter a vendor._  
P152B02012: _Cannot choose inactive vendors. Please activate the vendor in Master Data - Vendors._  
P152B02013: _Line {0}: Batch quantity must be greater than 0._  
P152B02014: _Line {0}: Received quantity cannot be less than the unreceived quantity in the purchase order generated from sales orders._  
P152B02015: _You cannot manually create purchase receipts when inventory cost is enabled._  
P152B02016: _You cannot manually create purchase returns when inventory cost is enabled._  
P152B02021: _Please add products._  
P152B02022: _Line {0}: Quantity must be greater than 0._  
P152B02023: _Line {0}: Net price cannot be less than 0._  
P152B02024: _Line {0}: Gross price cannot be less than 0._  
P152B02025: _Line {0}: Requested quantity cannot be less than received quantity._  
P152B02026: _You cannot update source._  
P152B02027: _You cannot update the warehouse property when the document is in process._  
P152B02028: _You cannot update property '%x' when the status is closed or canceled._  
P152B02030: _Status change invalid_  
P152B02031: _You cannot update product information. There are existing purchase receipts related to this product._  
P152B02032: _You cannot generate purchase receipt. This purchase order must be approved first._  
P152B02033: _You cannot edit properties as this purchase order is generated from sales orders._  
P152B02034: _You cannot update the document as it is closed or canceled._  
P152B02035: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02036: _You cannot change existing lines when the document is generated from a sales order._  
P152B02037: _You cannot change the quantity together with other properties._  
P152B02038: _You cannot update the product and corresponding warehouse. There are existing purchase receipts related to this product._  
P152B02039: _Received quantity cannot exceed requested quantity._  
P152B02040: _Net price and quantity cannot be less than 0._  
P152B02041: _Gross price and quantity cannot be less than 0._  
P152B02042: _Specified warehouse not found. Please enter a valid warehouse._  
P152B02043: _This warehouse is currently inactive. To continue, please activate the warehouse._  
P152B02044: _This product is a non-inventory product._  
P152B02045: _You cannot cancel this purchase order as there are exisiting purchase receipts based on it._  
P152B02046: _Specified sales order not found. Please enter a valid sales order._  
P152B02047: _You cannot add new lines manually when the document is generated from a sales order._  
P152B02048: _Property '{0}' cannot be changed when the purchase order is generated from a sales order._  
P152B02050: _You cannot cancel the document as it is already been canceled or closed._  
P152B02051: _You cannot close the document as the purchase order is not approved yet._  
P152B02052: _You cannot close the document as the purchase order is not approved yet._  
P152B02053: _You cannot close the purchase order as it is generated from a sales order._  
P152B02054: _Invalid sales order line ID_  
P152B02055: _You cannot add or delete a line as this document is already closed or canceled._  
P152B02056: _Specified vendor is inactive. Please activate the vendor first._  
P152B02057: _You cannot delete current product line as related purchase receipts already exist._  
P152B02058: _You cannot generate purchase orders as the ordered products have already been allocated to warehouses._  
P152B02061: _Line {0}: Quantity must be greater than 0._  
P152B02062: _Line {0}: Quantity cannot exceed in-stock quantity._  
P152B02063: _You cannot delete purchase returns._  
P152B02064: _Specified purchase return not found. Please enter a valid purchase return._  
P152B02065: _Line {0}: Quantity must be greater than 0._  
P152B02066: _Line {0}: Returned quantity cannot exceed received quantity._  
P152B02067: _Invalid input parameter_  
P152B02068: _Specified vendor is inactive. Please activate the vendor first._  
P152B02079: _You cannot generate purchase orders. Please check that the logistic statuses of all selected sales order lines are "ordered"._  
P152B02080: _You cannot generate purchase orders. Please enter related sales order information first._  
P152B02081: _You cannot generate purchase orders. Please select source sales orders first._  
P152B02082: _Specified warehouse ID not found. Please enter a valid one._  
P152B02083: _Specified vendor ID not found. Please enter a valid one._  
P152B02084: _Ordered quantity must be greater than 0._  
P152B02085: _Delivery date cannot be empty or earlier than current system date._  
P152B02086: _Specified sales order ID or product line ID not found. Please enter a valid one._  
P152B02087: _Specified SKU ID not found. Please enter a valid one._  
P152B02088: _Specified Customer ID not found. Please enter a valid one._  
P152B02089: _Specified shipping address not found. Please enter a valid one._  
P152B02090: _You cannot update the vendor as related purchase receipts already exist._  
P152B02091: _You cannot change the pricing method when the pricing method specified in sales pricing settings is not "Net & Gross"._  
P152B02092: _You cannot reopen the purchase order as it is generated from a sales order._  
P152B02093: _You cannot change the purchasing UoM as the product's UoM group is "Manual"._  
P152B02094: _You cannot change the purchasing UoM as related purchase receipts already exist._  
P152B02095: _You cannot change the purchasing price as related purchase receipts already exist._  
P152B02101: _You cannot generate purchase receipt. Selected purchase orders must share the same vendor._  
P152B02102: _You cannot generate purchase receipt. Selected purchase orders must share the same warehouse._  
P152B02103: _You cannot generate purchase receipt. Selected purchase orders must share the same dropship type._  
P152B02104: _You cannot generate purchase receipt. Selected purchase orders must share the same currency._  
P152B02105: _You cannot generate purchase receipt. Selected purchase orders must share the same source._  
P152B02106: _You cannot generate purchase receipt. Selected purchase orders must share the same billing address._  
P152B02107: _You cannot generate purchase receipt. Selected purchase orders must share the same shipping address._  
P152B02108: _Please select at least one purchase order._  
P152B02109: _Order time cannot be later than the expected delivery time._  
P152B02110: _Please specify a warehouse when it is not a dropship order._  
P152B02111: _Warehouse must be blank when it is a dropship order._  
P152B02112: _Line {0}: Dropship must be true._  
P152B02113: _Line {0}: Dropship must be false._  
P152B02114: _You cannot change the product as current purchase receipt is generated from a purchase order._  
P152B03001: _You cannot deactivate this vendor as it is the preferred vendor of certain products._  
P161B10001: _Please enter a positive number._  
P161B10002: _Please enter a positive number._  
P161B10003: _You cannot set inactive payment terms as the system default._  
P161B10005: _You cannot deselect the "System Default"checkbox. To make this payment term differ from the system default, you must set another as the system default._  
P161B10006: _You cannot deactivate the payment term as it is set as system default. To inactivate it, set another payment term as the system default first._  
P1705130700: _The price of this catalog line cannot be less than zero._  
P1705130701: _The combination of sku and uom in this line cannot be same with the existed catalog lines._  
P1705130702: _The sku cannot be empty of the catalog lines._  
P1705130703: _The uom cannot be empty of the catalog lines._  
P1707250929: _You cannot delete the SKU as it is already used in {0}._  
P1707250930: _You cannot delete the SKU as it is already listed in one or more sales channel._  
P179B00001: _This product tax class already exists._  
P198810061: _Please enter a product ID._  
P198810062: _You must delete all subcategories before linking products._  
P198810063: _Invalid circular reference._  
P198810064: _You must remove all linked products before creating a subcategory._  
P198810065: _You cannot remove this category as it has already been linked to service cases._  
P198812200: _You cannot delete the stamp as it has already been used._  
P198812201: _You cannot reset SKUs as they are already in use._  
P198812202: _You cannot reset SKUs as they are already in use._  
P198812203: _The product does not exist._  
P198812204: _You cannot disable Inventory Tracking as the product is already in use in Inventory or Logistics._  
P198812205: _You cannot create SKUs as the product is already in use in Inventory or Logistics._  
P198812206: _You cannot create SKUs as the product is already listed in one or more channels._  
P198812207: _You cannot delete this SKU as it is already listed in one or more channels._  
P198812208: _You cannot delete the manufacturer as it is already in use in products._  
P198812209: _You cannot delete the brand as it is already in use in products._  
P198812210: _Cannot enable bundle product. Please disable SKU and enable inventory tracking first._  
P198812211: _You must enable Inventory Tracking first._  
P198812212: _You cannot add the product itself to the bundle._  
P198812213: _There are invalid product codes for bundle components._  
P198812214: _Code {0} not found in the system._  
P198812221: _You cannot delete this SKU as it has been used in Inventory or Logistics._  
P198812230: _Cannot delete SKU as it has already been listed in one or more channels._  
P198812300: _You cannot set SKU as active when the product containing that SKU is inactive._  
P198812301: _This variant value already exists._  
P198812302: _You cannot delete variant value as it is already in use in SKUs._  
P198812303: _The variant or the variant value you chose has just been deleted. Please choose or add a new one._  
P198812304: _The purchase price cannot be negative._  
P198812305: _The variant value already exists in the product._  
P198812306: _The variant name already exists._  
P198812307: _This variant code already exists._  
P198812308: _This variant code can not be empty._  
P198812309: _This variant value can not be empty._  
P198831012: _You cannot reset the SKUs as they are already in use in one or more bundle products._  
P198831013: _You cannot delete the SKUs as they are already in use in one or more bundle products._  
P2014122401: _Please delist SKUs from channels before changing their status to inactive._  
P2014122402: _Please delist SKUs from channels before changing the status to inactive._  
P2014122403: _Please delist SKUs from channels before changing the product code._  
P2014122404: _Please choose a price list or a currency._  
P2014122405: _Please enter a price._  
P2014122406: _The SKU variant value already exists._  
P2014122407: _SKU variant value is not the same as that of the product._  
P2014122408: _Please choose one or more variant values._  
P2014122409: _You cannot set SKUs as inactive as some of them are already in use in Inventory or Logistics._  
P2014122410: _You cannot change the product code as some of SKUs are already in use in Inventory or Logistics._  
P2014122411: _Please remove product from channels before setting the product as inactive._  
P2014122412: _Please remove product from channels before changing Product Code._  
P2014122413: _You cannot change the product code as the product has been used in Inventory or Logistics._  
P2014122414: _You cannot change the product status to inactive as the product is already in use in Inventory or Logistics._  
P2014122415: _This SKU code already exists._  
P2014122416: _SKU code can not be empty._  
P2014122417: _These SKU barcodes: {0} already exist in SKUs: {1}_  
P2014122418: _SKU code {0} does not exist._  
P2014122577: _Standard price list dos not exist in the system._  
P2014122578: _Cannot save or update the price. The standard price with the condition(SKU:{0}, Currency:{1}, isNet:{2}) does not exist._  
P2015040201: _The price({0}) must not be negative._  
P2015042401: _You cannot enable SKUs as you have enabled bundle product._  
P2015042402: _Quantity per bundle must be larger than 0._  
P2015042403: _You cannot disable Inventory Tracking as you have enabled bundle product._  
P2015070601: _The product {0} that contains the SKU {1} is not Inventory Tracking enabled._  
P2015070602: _You cannot disable Inventory Tracking as some of the SKUs of this product are linked to bundle products._  
P2015070603: _The product {0} that contains the SKU {1} is not active._  
P2015080417: _You cannot change the UoM group to none as the product has already been referenced._  
P2015080418: _You cannot change the UoM group to another with a different base UoM, as the product has already been used in Inventory or Logistics._  
P2015080419: _The default purchase UoM is not in the UoM group._  
P2015080420: _Default sales UoM is not in the UoM group._  
P2015091801: _Cannot be managed by batches as it is a bundle product._  
P2015091802: _Cannot switch to None as batch numbers are maintained for this product._  
P2015091803: _Cannot switch to batch management as it has been used in Inventory._  
P2015092101: _Cannot switch to bundle product as it has been managed by batches._  
P2015092102: _Shelf life must be within the date range of 1 to 99999._  
P2015092401: _Cannot change the product code as it is already in use in Inventory._  
P2015101301: _Cannot disable inventory tracking as you have enabled batch management for the product._  
P2015101601: _Cannot change the product code as you have enabled batch management for some SKUs._  
P2015101602: _Cannot change the product code as some of the SKUs are already used as bundle components._  
P2015102101: _Category name already exists._  
P2015102102: _The product category name that you fill in must be in the form of text. Also, you must start from level 1 and continue on in succession._  
P2015110201: _Cannot enable SKUs as you have enabled batch management for the product._  
P2015110401: _Cannot delete, or reset the SKU as you have enabled batch management for the product._  
P2015110501: _Cannot enable batch management for the product as you need to enable inventory tracking for the product first._  
P2015112401: _Code not found in the system._  
P2015112402: _Code {0} not found in the system._  
P2015113001: _SKU code in row {0} is invalid._  
P2015113002: _Warehouse code in row {0} is invalid._  
P2015120101: _Cannot enable SKU as you have enabled batch management for the product._  
P2015120201: _SKU in row {0} does not belong to product {1}._  
P2015120301: _Code in row {0} cannot be changed, as product {1} is single._  
P2015120901: _Alert days must be between 1 and the shelf life days._  
P2015121001: _Component product cannot be the same as the bundle product. Row number {0}._  
P2015121401: _Product {0} cannot be used as bundle product because batch management is enabled for it._  
P2015121402: _Product {0} cannot be used as bundle product or component product because it is inactive._  
P2015121403: _Product {0} cannot be used as bundle product or component product because inventory tracking is disabled for it._  
P2015121601: _UoM {0} is not purchase UoM._  
P2015121602: _UoM {0} is not for sales UoM._  
P2015122801: _You are not authorized to update product codes._  
P2015122802: _You are not authorized to update sku codes._  
P201551501: _Cannot print barcodes. The file exceeds the maximum size limit of 20 MB. Please try to reduce the number of SKUs included in the current print job if possible._  
P2015899001: _Failed to upload the file to attachment service._  
P2015899002: _Error occurred when reading the stream from the uploading file._  
P2015899003: _File name can not be empty._  
P2015899004: _Task is {0}, it can not be cancelled._  
P2015899005: _Another task is running._  
P2015899006: _Failed to start task._  
P2015899007: _Attachment in vault image is empty._  
P2015899008: _Product code does not exist._  
P2015899009: _Variant name or variant value code does not exist._  
P2015899010: _Current variant does not match the dominated variant._  
P2015899011: _Can not find the task._  
P2016011801: _Vendor is not active._  
P2016012201: _Product code type and product code cannot be both empty._  
P2016030301: _The same attribute value already exists._  
P2016042101: _Cannot disable inventory tracking as min. inventory level has been set for the product._  
P2016090601: _There are already some SKUs created, you cannot disable variant now._  
P2017010301: _You cannot set reorder quantity for products that do not have inventory tracking enabled._  
P2017061410: _The product deletion function is not accessible in trial systems. It will become available in your productive system._  
P2017061515: _Deleting SKUs Failed._  
P2017070516: _Cannot disable inventory tracking as you have enabled serial management for the product._  
P2017070517: _Cannot be managed by serials as it is a bundle product._  
P2017070518: _Cannot switch to serial management as it has been used in Inventory._  
P2017070519: _Cannot enable serial management for the product as you need to enable inventory tracking for the product first._  
P2017070520: _Cannot switch to None as serial numbers are maintained for this product._  
P2017070521: _Cannot switch to serial management as batch numbers are maintained for this product._  
P2017070522: _Cannot switch to batch management as serial numbers are maintained for this product._  
P2017081110: _Reference check error when calling {0} with {1}._  
P2017081417: _You are not authorized to perform this operation._  
P228812212: _SKU {0} is already in use in orders: {1}_  
P228812213: _You cannot delete this SKU as it is already in use in one or more bundle products._  
P228812214: _SKUs of Product {0} has already been used in orders: {1}_  
P228812215: _SKUs of Product {0} has already been used as a bundle component: {1}_  
P228812216: _You cannot enable SKUs for this product as it has been used as a component in one or more bundle products._  
## <sapn id="hit">hit</span>
P166B00011: _Please select a member list from the email integration provider in campaign settings first_  
P166B00012: _Campaign does not exist_  
P166B00013: _Campaign type cannot be changed. It is already synced with your email service provider_  
P166B00014: _Rule fields invalid_  
P166B00015: _Failed to authorize SAP Anywhere. For more help, contact your administrator._  
P166B00016: _Please assign a target group to this campaign._  
P166B00017: _There are no members in this target group._  
P166B00018: _Start date cannot be later than end date._  
P166B00019: _Duplicated conditions_  
P166B00020: _The member list does not exist._  
P166B00021: _The membership points cannot be less than 0._  
P166B00022: _The expiration date is invalid._  
P166B00023: _This customer is currently not a part of the membership._  
P166B00024: _Points gained per unit currency cannot be less than 0._  
P166B00025: _Minimum points for redemption cannot be less than 0._  
P166B00026: _Maximum points for redemption per order cannot be less than 0._  
P166B00027: _Point validity period cannot be less than 0._  
P166B00028: _You cannot use your points right now as your point balance of {0} points is less than {1} points, the minimum amount required for redemption._  
P166B00029: _You cannot use {0} points in this order as the maximum points usage permitted per order is {1} points._  
P166B00030: _Sorry, currently you have insufficient points to carry on the operation._  
P166B00031: _Points per currency unit cannot be less than 0._  
P166B00032: _Failed to receive the attachment. Please try again._  
P166B00033: _App ID or App Secret is invalid._  
P166B00034: _To send out this message in WeChat, you must have at least 2 followers._  
P166B00035: _Cannot find the attachment's url._  
P166B00036: _Cannot get the WeChat content from backend. Please check again._  
P166B00037: _The WeChat account does not exist. Please check again._  
P166B00038: _{0} returns with error: {1}, {2}._  
P166B00039: _This WeChat account has already been added._  
P166B00040: _Failed to send the message to WeChat as you cannot send the same message twice in one day._  
P166B00041: _The title of a WeChat message cannot be empty. Please enter a title first._  
P166B00042: _You cannot send out WeChat messages without content._  
P166B00043: _The cover image of the WeChat message cannot be empty. Please upload a cover image first._  
P166B00044: _The cover image's file type must be PNG or JPEG._  
P166B00045: _There is no online store available. Please create your online store first._  
P166B00046: _A system error occurred on the WeChat Server. Please try again._  
P166B00060: _The end date cannot be earlier than the start date._  
P166B00061: _Awards of the same type cannot have overlapping durations._  
P166B00062: _The Customer/Contact ID {0} is invalid. Please check again._  
P166B00063: _When Customer/Contact ID is filled, you must choose a corresponding customer/contact type._  
P166B00064: _This function is now still a trial version. Each hour we only support users for a limited number of attempts. If you want to continue using the function, we suggest you try again later._  
P166B00065: _There are no members in this target group. Please choose another target group._  
P166B00066: _Cannot sync back to SAP Anywhere as you have already bound this email account to another email service provider._  
P166B00067: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00068: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00069: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00070: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00071: _Authorization failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00072: _Failed to cancel the authorization. Please try again later._  
P166B00073: _Operation to the email account failed. Please try again later._  
P166B00074: _The authorization is now invalid. Please cancel the authorization and authorize it again._  
P166B00075: _Customer is invalid._  
P166B00076: _Contact is invalid._  
P166B00077: _Source is invalid._  
P166B00078: _TargetGroup is invalid._  
P166B00079: _Cannot import to a target group with conditions. Please choose a manually created target group for the import._  
P166B00080: _Customer/Contact cannot be empty._  
P166B00081: _Member duplicated._  
P166B00082: _Lead(s) were already generated from selected feed(s)._  
P166B00084: _Feed was already closed._  
P166B00085: _You cannot delete the customer as it is already used in Lead._  
P166B00086: _You cannot delete the customer as it is already used in Target Group._  
P166B00087: _You cannot delete the contact as it is already used in Lead._  
P166B00088: _You cannot delete the contact as it is already used in Target Group._  
P166B00089: _Signature validation error_  
P166B00090: _XML parsing error_  
P166B00091: _Signature computing error_  
P166B00092: _Illegal AES key_  
P166B00093: _App ID validation error_  
P166B00094: _AES encryption error_  
P166B00095: _AES decryption error_  
P166B00096: _Illegal buffer_  
P166B00097: _Failed to update card status as card ID ({}) cannot be found._  
P166B00098: _WeChat notification ({}) invalid. This notification will be skipped._  
P166B00099: _Only one WeChat membership card is permitted._  
P166B00100: _The membership card can only be sent to a maximum of 10 Wechat IDs to preview._  
P166B00101: _You cannot preview the WeChat Membership card before editing the card's information._  
P166B00102: _You cannot preview non WeChat Membership cards._  
P166B00103: _Only one WeChat membership card is permitted._  
P166B00104: _Membership number count exceeds the quantity. Please modify the quantity._  
P166B00105: _Please upload the logo before you upload the membership card to WeChat._  
P166B00106: _To dispatch via WeChat, you must first bind a WeChat account._  
P166B00107: _Customers were already generated from selected feeds._  
P166B00108: _Valid to date must be after valid from date._  
P166B00109: _The "Valid To" date must be later than today._  
P166B00110: _Quantity must be greater than 0._  
P166B00111: _This WeChat card has already been consumed._  
P166B00112: _The WeChat card was deleted by the customer or given to a friend._  
P166B00113: _The API is unauthorized for this card._  
P166B00114: _Text analysis failed. Invalid email thread ID._  
P166B00115: _Text analysis failed. Invalid email message ID._  
P166B00116: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00117: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00118: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00119: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00120: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00121: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00122: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00123: _Text analysis failed. Please contact your administrator or the SAP Anywhere support team._  
P166B00124: _Only one WeChat account is allowed._  
P166B00125: _The uploaded file to WeChat is invalid. Please check and upload a new file._  
P166B00126: _The WeChat name does not exist._  
P166B00127: _Please select a color if you want to dispatch the card on WeChat._  
P166B00128: _You need to subscribe to the WeChat public account to receive messages from it._  
P166B00129: _You need to upload a cover image for each article._  
P166B00130: _Too many attempts. Please wait for a while and try again later._  
P166B00132: _Points are insufficient according to the conversion rules configured in settings._  
P166B00133: _Too many points are being used according to the conversion rules configured in settings._  
P166B00134: _The points do not hold the same value as money._  
P166B00135: _Duplicate campaign name exists._  
P166B00136: _Organization address is empty._  
P166B00137: _Invalid ID._  
P166B00138: _Cost cannot be negative._  
P166B00139: _API not authorized. Please open this function in your WeChat public account._  
P166B00140: _You have not enabled the shake around function on your public account, please open it._  
P166B00141: _Attachment is invalid. Please contact your administrator or the SAP Anywhere support team._  
P166B00142: _Cannot read the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00143: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00144: _Cannot send the attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00145: _Cannot send the email with attachment. Please contact your administrator or the SAP Anywhere support team._  
P166B00146: _The campaign does not exist._  
P166B00147: _The beacon and page are created by different WeChat accounts._  
P166B00148: _Too close to schedule!_  
P166B00149: _One social message was successfully sent just now. Please refresh your page for further operations._  
P166B00151: _Duplicate campaign hashtag exists._  
P166B00152: _Please select a code type if you want to dispatch the card on WeChat._  
## <sapn id="co-config">co-config</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
API0000004: _Failed to capture authorized amount_  
API0000005: _Failed to void authorization_  
P103B20000: _Invalid action_  
P103B20002: _Local currency is not existing._  
P103B20003: _The application has encountered an error. We are aware of the error and already working on resolution._  
P150B76033: _Network connection failed while uploading images._  
P150B76035: _Failed to upload images due to network issues. Please try again later._  
P150B76037: _Your attachment size exceeds the package you purchased. If you need a larger size quota for attachments, please upgrade your package._  
P178B00001: _You cannot delete the country group as it has already been applied to tax rules._  
P181B00001: _Cannot update pricing method._  
P181B00002: _You cannot change the local currency as it has been changed once already._  
P181B00003: _Cannot disable multiple currencies._  
P181B00004: _Invalid parameter_  
P181B00005: _To disable this option, first fix cases where available-to-sell is negative._  
P181B00006: _To disable this option, first fix cases where inventory is negative._  
P181B00007: _You cannot change the exchange rate quotation as some of the foreign currencies are in use._  
P181B00008: _Inventory cost calculation is only supported in China._  
P181B00010: _You cannot disable the calculation of inventory estimated cost once it is enabled._  
P181B00011: _TaaS is available in the US only._  
P181B00012: _You can only choose 'shipping to' when using TaaS._  
P181B00013: _Currency {0} not found. Please specify a valid one._  
P181B00014: _Please specify a currency._  
P181B00015: _You cannot delete this language as it is being used by some customers or contacts._  
## <sapn id="bss">bss</span>
## <sapn id="pos-adapter">pos-adapter</span>
## <sapn id="openapi">openapi</span>
## <sapn id="mp-connector">mp-connector</span>
## <sapn id="cron-service">cron-service</span>
## <sapn id="shipping">shipping</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
API0000004: _You cannot create carriers other than those that are 3rd-party._  
API0000005: _You cannot update carriers other than those that are 3rd-party._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100B00019: _{0}_  
P103B71001: _To use Pitney Bowes, please provide the full warehouse address._  
P103B78001: _Please add addresses._  
P103B78002: _Please enable net price in company profile settings._  
P103B78003: _Please enable gross price in company profile settings._  
P103B78004: _Failed to read shipping label file_  
P103B78051: _Shipments are not allowed to be deleted._  
P103B78052: _You cannot create the UPS shipping label as the shipping carrier is not UPS._  
P103B78053: _You cannot create the UPS return shipping label as you have already created it._  
P103B78054: _You cannot create the UPS shipping label as you have already created it._  
P103B78055: _You cannot cancel the UPS return shipping label as you have already canceled it._  
P103B78056: _To cancel the original shipment, you must cancel the return shipment first._  
P103B78057: _Please enter address information._  
P103B78058: _Cannot print shipping label. Please select a shipping carrier first._  
P103B78059: _Please specify a delivery type._  
P103B78060: _You cannot cancel the shipping label as it is already canceled._  
P103B78061: _You cannot create the shipping label as it is already created._  
P103B78062: _Failed to create shipping label_  
P103B78063: _Generated tracking number is empty._  
P103B78064: _Failed to create high value report_  
P103B78065: _You cannot create shipping document without valid sales delivery number._  
P103B78066: _Failed to get valid length unit. Please try again later._  
P103B78067: _Failed to get valid weight unit. Please try again later._  
P103B78068: _Failed to get warehouse information. Please make sure that the warehouse has complete address information._  
P103B78069: _You cannot create a shipment for the second time based on the same sales delivery._  
P103B78070: _Invalid parameter_  
P103B78071: _Only UPS shipping labels in requested status are supported for bulk printing._  
P103B78072: _Shipping label printing failed for shipment No.{0}. Failure reason: {1}_  
P103B78073: _Failed to get shipping label._  
P103B78074: _You cannot create the shipping label as shipment is already canceled._  
P103B78075: _You can only cancel open shipments._  
P103B78076: _You can only close "requested" shipments._  
P103B78077: _You have input an invalid delivery no or delivery id._  
P103B78078: _You must specify a valid UPS delivery type._  
P103B78101: _Please specify applicable countries/regions._  
P103B78102: _Please enter rates._  
P103B78104: _Fixed rates cannot be created or deleted._  
P103B78105: _Please enable fixed rates in shipping settings._  
P103B78201: _Please enable at least one shipping method._  
P103B78202: _You cannot create new shipping methods._  
P103B78203: _You cannot delete shipping methods._  
P103B78204: _You cannot disable the shipping method as it is already assigned to channels._  
P103B78205: _Carrier-calculated rates are disabled for Chinese shipping carriers._  
P103B78206: _Please enable carrier-calculated rates in shipping settings._  
P103B78302: _There are lines with duplicated country/region, state, city, and zip code._  
P103B78303: _Specified country/region not found_  
P103B78304: _Specified state not found_  
P103B78305: _State ID must be an integer._  
P103B78309: _Weight From cannot be greater than Weight To._  
P103B78312: _Increase weight must be greater than 0._  
P103B78314: _Please enable Rates Based On Weight and Region in shipping settings._  
P103B78315: _There are overlapping weight ranges for lines with the same country/region, state, city, and zip code._  
P103B78316: _Please add information to the lines._  
P103B78409: _Interior length cannot be greater than exterior length._  
P103B78410: _Interior width cannot be greater than exterior width._  
P103B78411: _Interior height cannot be greater than height length._  
P103B78502: _Min. delivery days cannot be greater than max. delivery days._  
P103B78503: _Valid From must be earlier than Valid To._  
P103B78504: _Please enable free shipping in shipping settings._  
P103B78510: _Please enable the shipping method first._  
P103B78511: _Settings data for free-shipping does not exist._  
P103B78512: _Settings data for fixed-rates does not exist._  
P103B78513: _Cannot find setting data for carrier {0}_  
P103B78514: _Carrier {0} not found_  
P103B78611: _A network error occurred while calling a third-party shipping service._  
P103B78612: _The third-party shipping service returned an authentication error._  
P103B78613: _Failed to create the order using a third-party shipping service_  
P103B78614: _Failed to confirm the order using a third-party shipping service_  
P103B78701: _Shipping Carrier ID is invalid._  
P103B78702: _Shipping Carrier IDs are duplicated._  
P103B78703: _Shipping carrier not found_  
P103B78704: _Please enable the shipping carrier in shipping settings._  
P103B78705: _Current shipping carrier is already used in sales deliveries._  
P103B78707: _Please enter carrier code._  
P103B78708: _Carrier-calculated rates are not supported by this shipping carrier._  
P103B78709: _Please add printing templates in shipping carrier settings._  
P103B78710: _Failed to download shipping label due to an unexpected error. Please try again later._  
P103B78712: _Electronic labels are not supported by current carrier._  
P103B78714: _Please specify S.F. Express delivery type._  
P103B78716: _Please enter your monthly account._  
P103B78717: _Please enter your access key._  
P103B78718: _Please enter your customer check code._  
P103B78720: _Please specify the delivery type first._  
P103B78801: _S.F. Express web service returned an error: {0}._  
P103B78802: _Failed to create S.F. Express electronic label._  
P103B78803: _Please enter the recipient's state._  
P103B78804: _Please enter the recipient's city._  
P103B78805: _Please enter the sender's state._  
P103B78806: _Please enter the sender's city._  
P103B78807: _Please enter the total weight._  
P103B78901: _Currency {0} not found. Please specify a valid one._  
P103B78902: _Please specify a currency._  
P103B78903: _You cannot delete the rate as it is already used._  
P103B78904: _You cannot change the rate's name as the rate is already used._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P201504121541: _You cannot set the default system carrier as inactive._  
P2015081901: _Only USD is supported as the currency for Pitney Bowes deliveries._  
P2015081902: _Only the online store channel is supported by Pitney Bowes deliveries._  
P2015081903: _Please create the Pitney Powes carrier in shipping settings first._  
P2015081904: _To use Pitney Bowes, please provide the mobile number of the recipient for both the billing and shipping address._  
P2015081905: _To use Pitney Bowes, please provide the recipient's name for both the billing and shipping address._  
P2015081906: _Errors occurred while calling Pitney Bowes services._  
P2015081907: _To use Pitney Bowes, please provide the buyer's email address._  
P2015081908: _To use Pitney Bowes, please provide complete information for shipping address and billing address._  
P20151016C1: _Please specify the delivery type of UPS Express._  
P20151019C1: _Please add UPS as a carrier in Shipping settings first._  
P20151019C2: _To use UPS as the carrier, please provide your full company address in company profile first, including receipt's name and phone number._  
P20151019C3: _To use UPS as the carrier, please provide the full warehouse address and shipping address first, including receipt's name and phone number._  
P20151019C4: _To use UPS as the carrier, please specify the weight and weight unit._  
P20151019C5: _To use UPS as the carrier, please specify the package size and the unit of length._  
P20151019C6: _To void a UPS shipment, please provide the tracking number._  
P20151019C7: _Cannot find the shipping label. Please create a UPS shipment order before printing shipping label._  
P20151019C8: _You must enable electronic shipping labels first._  
P20151019C9: _Failed to upload the UPS electronic shipping label to the Amazon cloud server. Please try again later._  
P20151019D1: _UPS service is disabled for the current tenant._  
P20151019D2: _Only the domestic shipments originated in the United States or the United Kingdom are currently supported._  
P20151019D3: _You cannot delete the rate lines specified for UPS._  
P20151020C0: _Email address is not specified for UPS notification receival. Please enter an email address for the customer first._  
P20151020C1: _Invalid UPS access point address_  
P20160712C1: _On US tenant, from address to be US based only; on UK tenant, from address to be UK based only_  
UPS_SYS_001: _Errors occurred while calling UPS services._  
UPS_SYS_002: _Errors occurred while calling UPS services. Error code:{0}, Error description: {1}._  
V2015082501: _Pitney Bowes authentication failed._  
V2015082502: _Failed to receive quotation from Pitney Bowes_  
V2015082503: _Failed to create Pitney Bowes order_  
V2015082504: _Failed to confirm Pitney Bowes order_  
V2015082505: _Pitney Bowes order number was not returned from the external service._  
V2015082506: _No response from Pitney Bowes service_  
V2015082507: _You are not authorized to view Pitney Bowes resources._  
V2015082508: _Invalid data format for Pitney Bowes request record_  
V2015082509: _Pitney Bowes resource is not ready yet. There is a slight delay in processing Pitney Bowes orders through to a shippable state. Please try again later._  
V2015082510: _Failed to generate Pitney Bowes tracking number_  
## <sapn id="mobile-proxy">mobile-proxy</span>
## <sapn id="signing-authority">signing-authority</span>
## <sapn id="app-mgt">app-mgt</span>
## <sapn id="idp">idp</span>
P133B001: _One or more mandatory input parameters are missing._  
P133B004: _One or more mandatory input parameters are invalid._  
P133B005: _Password must be no shorter than 8 characters._  
P133B006: _Password must contain at least an uppercase letter._  
P133B007: _Password must contain at least a lowercase letter._  
P133B008: _Password must contain at least one digit._  
P133B009: _Password cannot be the same as the passwords that you previously used._  
P133B010: _Password cannot contain any of the following: username, first name, last name or email address._  
P133B011: _User account cannot be found._  
P133B012: _User account already exists._  
P133B013: _Password must contain at least 8 characters._  
P133B014: _Password must contain at most 25 charcters._  
P133B015: _Password must contain at least an lowercase letter._  
P133B016: _Password must contain at least a uppercase letter._  
P133B017: _Password must contain at least one digit._  
P133B018: _Password must contain at least one non-digit character._  
P133B019: _Password cannot be the same as the passwords that you previously used._  
P133B020: _Authentication failed for this password._  
P133B021: _Password cannot contain any of the following: username, first name, last name or email address._  
P133B022: _You cannot frequently reset your password._  
P133B023: _Your pincode is expired._  
P133B024: _Current password is incorrect. Please try again._  
P133B102: _Digest algorithm error. Please contact your administrator._  
P133B103: _Digest supported encoding error. Please contact your administrator._  
P133B500: _Request parameter is invalid._  
P133B501: _Request parameter is invalid._  
P133B502: _One or more mandatory input parameters are missing._  
P134B02003: _Global setting error. Please contact your administrator._  
P134B02005: _Email is invalid._  
P134B02006: _Retrieving OAuth key failed. Please contact your administrator._  
P134B02007: _Retrieving tenant ID failed. Please contact your administrator._  
P134B02008: _Retrieving saml2 public key failed. Please contact your administrator._  
P134B02009: _Retrieving saml2 private key failed. Please contact your administrator._  
P134B02010: _An valid referer request header is required. Please contact your administrator._  
email2: _Email:_  
password_change_error_-1: _Please contact your administrator._  
password_change_error_1: _Password must have at least {0} characters._  
password_change_error_10: _This link is expired._  
password_change_error_2: _Password cannot be longer than {1} characters._  
password_change_error_3: _Must have at least {2} lowercase letters._  
password_change_error_4: _Must have at least {3} uppercase letters._  
password_change_error_5: _Must have at least {4} digits._  
password_change_error_6: _Must have at least {5} non-alphanumeric characters._  
password_change_error_7: _Password cannot be the same as the last {6} passwords that you previously used._  
password_change_error_9: _Password cannot contain any of the following: username, first name, last name or email address._  
resetpassword_new_password2: _New Password:_  
resetpassword_reenter_password2: _Confirm Password:_  
subscription_password_error1: _Must have at least {0} characters_  
subscription_password_error10: _invalidateAfterNdaysNotUsed_  
subscription_password_error100: _Invalid password_  
subscription_password_error13: _Invalid parameter_  
subscription_password_error14: _Pin code timeout [valid for 24 hours]. Please try again._  
subscription_password_error2: _Can\u2019t be longer than {0} characters_  
subscription_password_error3: _Must have at least {0} lowercase letters_  
subscription_password_error4: _Must have at least {0} uppercase letters_  
subscription_password_error5: _Must have at least {0} digits_  
subscription_password_error6: _Must have at least {0} non-alpha characters_  
subscription_password_error7: _New password cannot be the same as one of your {0} previous passwords._  
subscription_password_error9: _Password cannot contain username, last name or email._  
## <sapn id="import-export">import-export</span>
E0000001: _Bundle product must be a valid SKU._  
E0000002: _Bundle product and its component cannot be the same._  
E0000003: _Bundle SKU code cannot be empty._  
E0000004: _Base quantity must be greater than 0._  
E0000005: _SKU variant value cannot be empty._  
E0000006: _You are not authorized to set the purchase price._  
E0000007: _Product code and product code type cannot both be empty._  
ESIP0000001: _You are not authorized to export {0}._  
P100601100: _No warehouse/product (SKU) found in the template. Please download the latest template and try again._  
P102522427: _No response from image URL. Please verify the URL and try again._  
P102522428: _Image URL cannot be accessed. Please verify the URL and try again._  
P102522429: _Code does not exist in the system._  
P102522500: _The data import and export functions are not accessible in trial systems. They will become available in your productive system._  
P102B02102: _The template has worksheets added, removed or renamed. Please change it back to the original._  
P102B02103: _The template is out of date. Please download the latest version, fill in the data, and import again._  
P102B02104: _The currency in column {0} is invalid._  
P102B02105: _You can only go through the onboarding settings once._  
P150B70004: _The sales UoM in the return line must be the same as the sales UoM of the product._  
P20150327: _Invalid SKU Code {0}._  
P2015032748: _You cannot assign the main contact person {0}, as you have not selected a customer yet._  
P20150328: _One or more price lists do not exist._  
P201506191: _Invalid price_  
P2015072101: _The product cannot be found in the system._  
P2015072401: _Price successfully updated_  
P2015072402: _Basic product information already updated_  
P2015080401: _{0} cannot be negative._  
P2015080412: _The UoM group has not been assigned to the product._  
P2015080413: _Cannot find the base UoM in the current product._  
P2015080414: _You cannot enter an inventory UoM if you choose None as the UoM group._  
P2015091401: _You are not authorized to import purchase prices. Please empty the purchase price columns first if you want to update other fields._  
P2015091701: _The document cannot have more than {0} lines of data. Please split it into multiple documents._  
P20160524: _Batch number in row {0} is invalid._  
P20160621: _Data quantity exceeds the permitted limit of Microsoft Excel. You may want to apply a filter to export the most important data._  
SHIP000001: _Can't find any shipping currency._  
## <sapn id="channel-adapter">channel-adapter</span>
## <sapn id="service-case">service-case</span>
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permissions to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner fail._  
P100B00008: _Incorrect object entity._  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100B00022: _The resource you are using reached the maximum of the package you purchased. If you need to create more, please upgrade your package._  
P100B00025: _Operation failed because of timeout._  
P100B00026: _Unexpected response received from server while working with attachments._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P151B02001: _Invalid service case_  
P151B02002: _Invalid service case ID_  
P151B02003: _Invalid service case origin_  
P151B02004: _Invalid customer ID_  
P151B02005: _Invalid contact ID_  
P151B02006: _Invalid service case priority_  
P151B02007: _Invalid service case status_  
P151B02009: _Invalid service case support team ID_  
P151B02010: _Invalid service case assignee ID_  
P151B02011: _Invalid or unknown relation type_  
P151B02020: _Invalid service case object assignment input parameters_  
P151B02021: _Missing Service Case referenced object_  
P151B02023: _Missing Service Case related object enumeration_  
P151B02025: _Invalid Employee ID_  
P151B02026: _Please enter an email address._  
P151B02027: _Please enter a phone number._  
P151B02028: _Service Case Type Group cannot be empty._  
P151B02029: _You cannot set the service case type group as it already exists._  
P151B02030: _You cannot repeatedly add a document._  
P151B02031: _Invalid Attachment ID_  
P151B02034: _The response time must be earlier than the resolution time._  
P151B02035: _You cannot change the mandatory contact details in SAP Manage Anywhere._  
P151B02040: _To send a knowledge base item to customers, you must publish it first._  
P151B02044: _Invalid Channel ID_  
P151B02047: _The SAP Manage Anywhere Server is configured incorrectly._  
P151B02048: _The service case has already been closed._  
P151B02049: _The service case has already been assigned to someone._  
P151B02051: _There are no types to be assigned._  
P151B02052: _Cannot find the specified type group._  
P151B02053: _The service case type does not exist or cannot be found._  
P151B02054: _Please enter the customer's twitter account name._  
P151B02055: _Please enter the company's twitter account name._  
P151B02056: _Invalid social message attachment ID_  
P151B02057: _The company's twitter account is inactive._  
P151B02058: _Mandatory field 'assignTo' is missing._  
P151B02059: _Mandatory field 'assignToSocial' is missing._  
P151B02060: _Invalid service case communication text._  
P151B02061: _Response Time and Resolution Time cannot be empty concurrently._  
P151B02062: _You have set reminders for Response Time, but the response time is empty. Please set the response time, or delete the reminder._  
P151B02063: _You have set reminders for Resolution Time, but the resolution time is empty. Please set the resolution time, or delete the reminder._  
P151B02064: _Failed to delete the service level as it is already assigned to a customer._  
P151B02065: _You cannot delete the sales order as it is already used in a Service Case._  
P151B02066: _You cannot delete the sales return as it is already used in a Service Case._  
P151B02067: _You cannot delete the invoice as it is already used in a Service Case._  
P151B02068: _You cannot delete the payment as it is already used in a Service Case._  
P151B02069: _You cannot delete the product as it is already used in a Service Case._  
P151B02070: _You cannot delete the category as it is already used in a Service Case._  
P151B02071: _You cannot delete the customer as it is already used in a Service Case._  
P151B02072: _Please enter the customer's Facebook account name._  
P151B02073: _Please enter the company's Facebook account name._  
P151B02074: _The company's Facebook account is inactive._  
P151B02075: _Only one attachment is allowed for Facebook communication._  
P151B02076: _Listening to the company's Twitter account is disabled._  
P151B02077: _Listening to the company's Facebook account is disabled._  
P151B02078: _Service case(s) were already generated from selected feed(s)._  
P151B02079: _You cannot delete contact person as it is already used in a Service Case._  
P151B02080: _You cannot delete service team as it is already used in a Service Case._  
P151B02081: _Cannot reply via service case communication. No parent message has been found._  
P151B02082: _Invalid input parameters._  
P151B02083: _Failed to upload attachment(s) due to network issues. Please try again later._  
P151B02084: _Service level plan with ID {0} does not exist._  
P151B02085: _Customer with ID {0} does not exist._  
P151B02086: _Cannot find service case SLA settings for tenant {0}._  
P151B02087: _Service level plan {0} cannot be edited._  
P151B02088: _Service level plan {0} is used by at least one customer._  
P151B02089: _Service Case Communication with ID {0} does not exist._  
P151B02090: _Support Email Account does not exist._  
P151B02091: _No service email is configured in Communication settings for outbound email services._  
P151B02092: _Message body conversion failed._  
P151B02093: _Invalid service case document number._  
P151B02094: _Service case sequence used for document numbering not found._  
## <sapn id="eshop-adapter">eshop-adapter</span>
## <sapn id="crm">crm</span>
API0000001: _Event type is invalid._  
API0000002: _This event type already exists._  
API0000003: _Input {0} is incorrect._  
P100B00001: _You are not a guest user._  
P100B00002: _Attachment not found_  
P100B00003: _Attachment does not exist._  
P100B00004: _No permission to operate this attachment_  
P100B00005: _File format {0} is not supported._  
P100B00006: _The file is empty or does not exist in the specified location._  
P100B00007: _Virus scanner failed_  
P100B00008: _Incorrect object entity_  
P100B00009: _Failed to upload the file. Please try again._  
P100B00010: _You cannot export the file as a PDF._  
P100B00011: _Failed to download the file. Please try again._  
P100B00015: _File size is too large._  
P100B00016: _Failed to upload the file. The file name cannot contain special characters (including < > ' \ &)._  
P100B00017: _Failed to upload the file. This file may contain a virus._  
P100B00018: _Failed to upload the file. This file is not an image._  
P100D00001: _Cannot find the corresponding app._  
P100D00002: _Webhook callback URL is invalid._  
P100D00003: _Webhook does not support this event type._  
P100D00004: _Cannot find the specified webhook._  
P100D00005: _You are not authorized to update or delete the webhook for this app._  
P100D00006: _Webhook event type cannot be updated._  
P100D00007: _Webhook registration failed, as the webhook for this event type already exists._  
P101B02011: _Team name cannot be empty._  
P101B02012: _Team name already exists._  
P101B02018: _Invalid Team input parameters._  
P101B02019: _Missing Team employee id "{0}"._  
P103B02005: _You cannot delete an already triggered approval_  
P103B02006: _Approval "{0}" already exists_  
P103B02007: _User "{0}" is invalid_  
P103B02008: _Business object type does not exist_  
P103B02009: _You are not authorized to view this information_  
P103B02010: _Business object "{0}" does not exist_  
P103B02011: _You are not authorized to assign this object_  
P103B02012: _Invalid dynamic authorization id: {0}_  
P103B02013: _Invalid role id: {0}_  
P103B02014: _Invalid system business object id: {0}_  
P103B02015: _{0} is not a system predefined role._  
P103B02016: _missing argument_  
P103B02017: _Please enter a role name._  
P103B02018: _The role name has been used, please enter another name._  
P103B02019: _Cannot delete {0}. It is a system predefined role._  
P103B02020: _Cannot delete this role. It is already assigned to users._  
P103B02021: _Invalid authorization item name: {0}_  
P103B10000: _You cannot unlock yourself_  
P103B10001: _You cannot lock yourself_  
P103B10002: _You cannot change yourself to normal user_  
P103B10003: _You cannot change yourself to key user_  
P103B10004: _You cannot view restricted price lists_  
P103B10005: _You are not authorized to change user permissions_  
P103B10006: _Permission item index "{0}" is invalid_  
P103B10007: _Permission argument is invalid_  
P103B10008: _You are not authorized to create users_  
P103B10009: _Cannot create user due to an unexpected error. Report error?_  
P103B10010: _Enter an email address_  
P103B10011: _Email address is invalid_  
P103B10012: _An account already exists for this email address. To reset your password, choose the “Forgot you password” link._  
P103B10013: _You are not authorized to change user details_  
P103B10014: _Cannot update user due to an unexpected error. Report error?_  
P103B10015: _You cannot delete yourself_  
P103B10016: _You are not authorized to delete users_  
P103B10017: _Cannot delete user due to an unexpected error. Report error?_  
P103B10018: _Phone number {0} is invalid_  
P103B10019: _User {0} does not exist_  
P103B10020: _Business object identifier "{0}.{1}" is invalid_  
P103B10021: _Enter a valid password_  
P103B10022: _You are not authorized to change user passwords_  
P103B10024: _Enter a new password_  
P103B10025: _Enter the current password_  
P103B10026: _Your new password must not be the same as your current one_  
P103B10027: _Email Address {0} already exists._  
P103B10028: _Current password is incorrect_  
P103B10029: _Invoke by createUserEmployee function to create user._  
P103B10030: _Invoke by checkedUpdate function to update user info._  
P103B10031: _No method available in property: {0}._  
P103B10032: _Failed to get property: {0}._  
P103B10033: _Business object entity key is null._  
P103B10034: _Image upload failed._  
P103B10035: _Attachment not found._  
P103B10036: _Queue server is unavailable, please contact system administrator_  
P103B10037: _Cannot upload the template. Please make sure the file format is XLS and that content within the template is correct._  
P103B10038: _File conversion failed, please contact system administrator_  
P103B10039: _Invalid setting for the manager. Please check._  
P103B10040: _Cannot set this user as technical support user because the maximum number of technical support users has been reached._  
P103B10041: _There must be at least one technical support user in the system. You must assign another user as technical support before removing this one._  
P103B20000: _Invalid action_  
P103B20001: _Invalid input_  
P103B20002: _Local currency is not existing._  
P103B30000: _Activity does not exist_  
P103B30001: _Status is invalid_  
P103B30002: _One or more mandatory fields are missing required information._  
P103B30003: _One or more mandatory fields are missing required information._  
P103B30004: _One or more mandatory fields are missing required information._  
P103B30005: _User does not exist_  
P103B30006: _No permission to read_  
P103B30007: _No permission to write_  
P103B30008: _You cannot delete approval activities_  
P103B30009: _You cannot change the activity status_  
P103B30010: _You cannot change completed activities_  
P103B30011: _You cannot change the activity status_  
P103B30012: _You cannot approve or reject this activity_  
P103B30013: _You are not authorized to change the approval status_  
P103B30014: _Document type is invalid_  
P103B30015: _Business object not found_  
P103B30016: _Attachment does not exist_  
P103B30017: _Cannot create approval due to an unexpected error. Please try again._  
P103B30018: _You cannot reopen approval activities_  
P103B30019: _Activity is already open_  
P103B30020: _{0} was sent to you for approval_  
P103B30021: _{1} assigned a {0} to you._  
P103B30022: _{1} updated a {0}._  
P103B30023: _A {1} for {0} was changed by {2}._  
P103B30024: _A {1} for {0} was created by {2}._  
P103B30025: _A {1} for {0} was deleted by {2}._  
P103B30026: _{1} has approved a {0}._  
P103B30027: _{1} has rejected a {0}._  
P103B30028: _{1} has completed a {0}._  
P103B30029: _A {1} for {0} has been completed by {2}._  
P103B30030: _A {1} for {0} was reopened by {2}._  
P103B30031: _A {1} for {0} has been approved by {2}._  
P103B30032: _A {1} for {0} has been rejected by {2}._  
P103B30033: _{1} reopened a {0}._  
P103B30034: _You have already sent an authorization request. Please wait for approval_  
P103B30035: _{0} sent you a {1} for authorization approval_  
P103B30036: _{0} has granted you full access to {1}_  
P103B30037: _{0} has granted you read-only access to {1}_  
P103B30038: _{0} has rejected your request for accessing to {1}_  
P103B30039: _description_  
P103B30040: _You cannot attach an empty file_  
P103B30041: _Text_  
P103B30042: _Activity {0} is invalid_  
P103B30043: _A {1} for {0} was changed by {2}._  
P103B30044: _A {1} for {0} was created by {2}._  
P103B30045: _A {1} for {0} was deleted by {2}._  
P103B30046: _User "{0}" is invalid_  
P103B30047: _{0} requests approval for {1} worth {2}_  
P103B30048: _Invalid action for this type of activity._  
P103B40001: _The ContactPerson is invalid_  
P103B50001: _Attachment Upload Failed._  
P103B50002: _Attachment Download Failed._  
P103B50003: _Not Authorized to delete or update Attachment._  
P103B50004: _Not Authorized to Create or Add Attachment._  
P103B50005: _Not Authorized to Read Attachment._  
P103B60001: _Taobao integration already active._  
P103B60002: _Taobao integration already inactive._  
P103B60003: _Taobao login failed: {0}._  
P103B60004: _Do OAuth with Taobao first._  
P103B60005: _SKU ID {0} is invalid. Product ID {0} is invalid._  
P103B60006: _SKU ID {0} is invalid._  
P103B60007: _Refresh token is expired._  
P103B60008: _No RMB currency._  
P103B60009: _Product code cannot be empty._  
P103B60010: _Product code {0} is invalid._  
P103B60011: _Products were delivered from Taobao, you need create an order and deliver it manually._  
P103B60012: _Invalid channel type for Taobao Channel. Only Taobao or Tmall is valid._  
P103B60013: _This trade has already been generated a Sales Order._  
P103B60014: _Sales order {0} is invalid._  
P103B60015: _Sales order {0} is already related to external order {1}._  
P103B60016: _Cannot relate return order to trade._  
P103B70001: _Quantity cannot be 0._  
P103B70002: _Unit price cannot be 0._  
P103B70003: _Insuffient stock_  
P103B70004: _Warehouse cannot be empty for products in stock-allocated status._  
P103B70005: _You cannot change the price for products in stock-allocated status._  
P103B70006: _You cannot change the quantity for products in stock-allocated status._  
P103B70007: _You cannot change the warehouse for products in stock-allocated status._  
P103B70008: _Invalid channel_  
P103B70009: _Failed to initial default values_  
P103B70112: _Discount percentage cannot be greater than 100%._  
P103B70113: _Unit price cannot be less than 0._  
P103B70121: _The signs (plus/minus) of quantity and gross total are different._  
P103B80001: _You must clear all rate settings before changing the exchange rate quotation method._  
P103B80002: _Illegal arguments were passed to this function: {0}_  
P103B80003: _You must enter an exchange rate here or in Settings._  
P103B80004: _Failed to send a test email; please ensure that the SMTP settings are correct._  
P103B80006: _Email template not found_  
P103B80007: _Cannot change the local currency as it has already been used for some transactions._  
P103B80008: _Email template already exists._  
P103B80009: _This app name already exists._  
P103B80010: _Failed to delete this app_  
P103B80011: _Failed to create OAuth client_  
P103B80012: _Failed to get IDP url_  
P103B80013: _Authorization failed_  
P103B80015: _Authorization failed, the password incorrect._  
P103B93125: _Cannot create user due to maximum number of users exceeded._  
P103S10023: _Failed to change password as the application has encountered an error. We are aware of the error and already working on a resolution._  
P134B7035: _Failed to add domain. It duplicates with an existing domain._  
P134B7048: _The uploaded certificate is invalid, or does not match your domain._  
P149B02223: _Length unit ID {0} is invalid._  
P149B02224: _Weight unit ID {0} is invalid._  
P149B02225: _Unit size must greater than 0._  
P150B00001: _Default channel must be active._  
P150B00002: _Cannot add warehouse. The same warehouse already exists: {0}_  
P150B00003: _Cannot add warehouse. This warehouse is inactive or does not exist: {0}_  
P150B00004: _Please add at least one warehouse._  
P150B00005: _Cannot add payment method. The same payment method already exists: {0}_  
P150B00006: _You cannot create or update predefined channel types._  
P150B00007: _You cannot delete predefined channel types._  
P150B00008: _Specified currency is inconsistent with the currency in company profile._  
P150B00009: _Specified pricing method is inconsistent with the pricing method in company profile._  
P150B00010: _Specified currency is inconsistent with the currency for the sales price list of this channel._  
P150B00011: _The pricing method of the sales price list is inconsistent with that of the channel._  
P150B00012: _Standard price list must be system's standard price list._  
P150B00013: _Sales price list must be system's sales price list._  
P150B00014: _Pricing method must be either net or gross._  
P150B00015: _You cannot change the currency once you add the channel._  
P150B00016: _You cannot change the pricing method once the channel is added._  
P150B00018: _Shopping cart update precision must be minute/hour/day/week._  
P150B00019: _You cannot send email reminders to customers who abandon their shopping carts for less than {0} minutes._  
P150B00020: _Currency ID {0} is invalid._  
P150B00021: _Currency ID List is empty._  
P150B00022: _Must select a currency for this channel._  
P150B00023: _Channel ID {0} is invalid._  
P150B00024: _The default channel already exists._  
P150B00025: _Please select a channel currency._  
P150B00026: _The currency and the price list currency do not match._  
P150B00027: _The currency is not the local currency._  
P150B00028: _You cannot set an inactive channel as the default channel._  
P150B00030: _The domain has already been used. Please use another._  
P150B00031: _Address is required._  
P150B00032: _Please add at least one warehouse._  
P150B00033: _Invalid domain name. Please enter domain name using letters and numbers only, and no longer than 63 characters._  
P150B00034: _You must choose at least one currency._  
P150B00035: _You cannot deactivate the channel. It is the last active channel._  
P150B00036: _Failed to add domain. Please check your certificate files._  
P150B00037: _Invalid domain name. Please enter another._  
P150B00038: _You must upload domain certificate files._  
P150B00039: _You must not remove the default domain or update its certificates._  
P150B00040: _The domain you want to remove does not exist._  
P150B00041: _You cannot choose the corporate customer. The target customers for the physical store channel are individual customers._  
P150B00042: _You must choose at least one ship-to country/region._  
P150B00050: _You cannot deactivate the default channel._  
P150B00051: _Cannot create online store due to technical issues. The number of stores created has reached the upper limit. For details, please contact your administrator._  
P150B00052: _Please select an owner for the channel._  
P150B00053: _Please select a marketplace._  
P150B00054: _Please select a currency._  
P150B00055: _You cannot change the marketplace of an existing channel._  
P150B00056: _You cannot change the product listing method._  
P150B00057: _The external order ID cannot be empty._  
P150B00058: _You must choose at least one pickup store, or disable Pickup in Store._  
P150B00060: _All currencies assoicated with the channel are inactive. Please activate as least one of them._  
P150B00061: _Checkout without account cannot be enabled in B2B online stores._  
P150B00070: _You cannot delete the {0} as it is already in use._  
P150B00071: _You cannot delete the Customer as it is already used in {0}._  
P150B00072: _You cannot delete the Contact as it is already used in {0}._  
P150B00073: _You cannot delete the Channel as it is already used in {0}._  
P150B00074: _You cannot delete the Product as it is already used in {0}._  
P150B00100: _Cannot load sales order._  
P150B00101: _Source sales order is not specified._  
P150B00102: _You can only copy the open and unpaid invoices._  
P150B00103: _Please check the document status and the payment status._  
P150B00104: _Please check the document status and the payment status._  
P150B00105: _Please specify a payment method._  
P150B00106: _Paid amount cannot exceed gross total._  
P150B00107: _The amount cannceled must be greater than 0._  
P150B00108: _The amount cannceled cannot exceed paid amount._  
P150B00109: _The document is not paid yet._  
P150B00110: _Un-invoiced order lines exist._  
P150B00111: _The document's payment status is invalid._  
P150B00112: _Paid amount must be greater than 0._  
P150B00113: _Creation time and posting time cannot be later than due time._  
P150B00114: _Cannot load invoice_  
P150B00115: _Selected documents must share the same customer._  
P150B00116: _Selected documents must share the same currency._  
P150B00117: _Cannot load credit memo_  
P150B00118: _Source document not specified_  
P150B00119: _Cannot load source document_  
P150B00120: _Cannot create this document directly_  
P150B00121: _Cannot load invoice line_  
P150B00122: _Copy paramter is null._  
P150B00123: _Please specify a customer._  
P150B00124: _Please specify a currency._  
P150B00125: _Failed to create invoices for returned products_  
P150B00126: _There are no products or shipping costs to create invoices for._  
P150B00127: _Please specify the local currency._  
P150B00128: _Invalid invoice status_  
P150B00129: _Amount due must be equal to gross total in unpaid invoice._  
P150B00130: _Paid amount cannot be greater than gross total in partially paid invoice._  
P150B00131: _Paid amount must be equal to gross total in fully-paid invoice._  
P150B00132: _Credit memos are not supported._  
P150B00133: _Please input an exchange rate here or in business settings._  
P150B00134: _Order line "{0}" has never been invoiced before._  
P150B00135: _Cannot cancel the document. You can only cancel open and unpaid invoices and credit memos._  
P150B00136: _Selected documents should share the same pricing method._  
P150B00137: _Please specify a pricing method._  
P150B00138: _Invalid address change_  
P150B00139: _There are no returned products to create credit memos for._  
P150B00140: _Selected documents should share the same sales channel._  
P150B00141: _Please specify a sales channel._  
P150B00142: _Only orders from the general channel can be partially invoiced._  
P150B00143: _Cannot generate invoice/credit memo for multiple orders that are not from the general channel._  
P150B00200: _Sales quota owner is required._  
P150B00201: _Only a sales quota draft can be updated._  
P150B00202: _Quota must be greater than 0._  
P150B00205: _Team sales quotas can only be assigned to sales managers._  
P150B00206: _Failed to create sales quota as it already exists in the system._  
P150B00208: _Failed to delete sales quota._  
P150B00209: _Cannot find the sales quota._  
P150B00210: _EndDate must be later than StartDate._  
P154B02001: _Please enter a number greater than 0 in "Potential Amount" field._  
P154B02002: _Please enter a number greater than 0 in "Rate" field._  
P154B02003: _Start date cannot be later than predicated closing date._  
P154B02004: _Start date cannot be later than closing date._  
P154B02005: _Company Local Currency cannot be empty._  
P154B02006: _Exchange Rate Quotation Method cannot be empty._  
P154B02007: _Invalid Products Unit Price: Price must be greater than or equal to 0._  
P154B02008: _Document total must be greater than or equal to 0._  
P154B02009: _Cannot remove this record. It is already linked to a lead or sales opportunity._  
P154B02010: _Product quantity must be greater than or equal to 0._  
P154B02011: _Transaction currency of the document is invalid._  
P154B02012: _The currency list of sales channel is empty._  
P154B02020: _You cannot delete the customer as it is already used in an opportunity._  
P154B02022: _The opportunity includes product[{0}], do not delete this product._  
P154B02024: _You cannot delete {0} as it is already used in a quotation._  
P154B02026: _The quotation includes product[{0}], do not delete this product._  
P154B02027: _Invalid channel. Please enter a valid channel first._  
P154B02028: _You cannot delete the contact as it is already used in an opportunity._  
P154B02029: _You cannot delete the contact as it is already used in a quotation._  
P155B02001: _You cannot update property_  
P155B02002: _after creation._  
P155B02003: _You cannot add new lines after creation._  
P155B02004: _You cannot remove lines after creation._  
P155B02005: _You cannot update property {0} after creation._  
P156B02001: _No response from application server_  
P156B02002: _Server response incorrect_  
P156B02003: _IDP server authentication failed_  
P157B00001: _This {0} already exists. Please enter another one._  
P157B00002: _You are not authorized to change the sales channel. Please contact your administrator._  
P157B00003: _The Currency is not available in this channel._  
P157B00004: _You cannot create a qualified lead directly._  
P157B00005: _You cannot update a lead to qualified directly._  
P157B00006: _You cannot update a qualified lead except remark._  
P157B00007: _The customer is invalid. Please enter a valid customer first._  
P157B00008: _When Customer/Contact ID is filled, you must choose a corresponding customer/contact type._  
P157B00009: _This sales source from MailChimp cannot be edited._  
P166B00062: _The Customer/Contact ID {0} is invalid. Please check again._  
P178B00001: _You cannot delete the country group as it has already been applied to tax rules._  
P181B00001: _Cannot update pricing method._  
P181B00002: _You cannot change the local currency as it has been changed once already._  
P181B00003: _Cannot disable multiple currencies._  
P181B00004: _Invalid parameter_  
P181B00005: _To disable this option, first fix cases where available-to-sell is negative._  
P181B00006: _To disable this option, first fix cases where inventory is negative._  
P181B00007: _You cannot change the exchange rate quotation as some of the foreign currencies are in use._  
P181B00008: _Inventory cost calculation is only supported in China._  
P181B00010: _You cannot disable the calculation of inventory estimated cost once it is enabled._  
P181B00011: _TaaS is available in the US only._  
P181B00012: _You can only choose 'shipping to' when using TaaS._  

