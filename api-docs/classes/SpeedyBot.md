[speedybot](../README.md) / [Exports](../modules.md) / SpeedyBot

# Class: SpeedyBot<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` = `string` |

## Table of contents

### Constructors

- [constructor](SpeedyBot.md#constructor)

### Methods

- [Setup](SpeedyBot.md#setup)
- [addSecret](SpeedyBot.md#addsecret)
- [addSecrets](SpeedyBot.md#addsecrets)
- [addStep](SpeedyBot.md#addstep)
- [addStepSequence](SpeedyBot.md#addstepsequence)
- [appCard](SpeedyBot.md#appcard)
- [buildDetails](SpeedyBot.md#builddetails)
- [captureError](SpeedyBot.md#captureerror)
- [card](SpeedyBot.md#card)
- [checkAuthor](SpeedyBot.md#checkauthor)
- [contains](SpeedyBot.md#contains)
- [convertToHash](SpeedyBot.md#converttohash)
- [createWebhook](SpeedyBot.md#createwebhook)
- [deleteMessage](SpeedyBot.md#deletemessage)
- [deleteWebhook](SpeedyBot.md#deletewebhook)
- [detectType](SpeedyBot.md#detecttype)
- [editMessage](SpeedyBot.md#editmessage)
- [errorCard](SpeedyBot.md#errorcard)
- [exact](SpeedyBot.md#exact)
- [extractFiledata](SpeedyBot.md#extractfiledata)
- [fetchWebhooks](SpeedyBot.md#fetchwebhooks)
- [fuzzyMatch](SpeedyBot.md#fuzzymatch)
- [generateFileName](SpeedyBot.md#generatefilename)
- [getData](SpeedyBot.md#getdata)
- [getFile](SpeedyBot.md#getfile)
- [getPerson](SpeedyBot.md#getperson)
- [getRecentRooms](SpeedyBot.md#getrecentrooms)
- [getRoom](SpeedyBot.md#getroom)
- [getSecret](SpeedyBot.md#getsecret)
- [getSelf](SpeedyBot.md#getself)
- [getToken](SpeedyBot.md#gettoken)
- [getWebhooks](SpeedyBot.md#getwebhooks)
- [go](SpeedyBot.md#go)
- [handleExtension](SpeedyBot.md#handleextension)
- [insertStepToFront](SpeedyBot.md#insertsteptofront)
- [onCamera](SpeedyBot.md#oncamera)
- [onReject](SpeedyBot.md#onreject)
- [peekFile](SpeedyBot.md#peekfile)
- [pickRandom](SpeedyBot.md#pickrandom)
- [rando](SpeedyBot.md#rando)
- [regex](SpeedyBot.md#regex)
- [replyTo](SpeedyBot.md#replyto)
- [resolveDestination](SpeedyBot.md#resolvedestination)
- [runMiddleware](SpeedyBot.md#runmiddleware)
- [sendFileTo](SpeedyBot.md#sendfileto)
- [sendTo](SpeedyBot.md#sendto)
- [setFallbackText](SpeedyBot.md#setfallbacktext)
- [setToken](SpeedyBot.md#settoken)
- [stashCard](SpeedyBot.md#stashcard)
- [successCard](SpeedyBot.md#successcard)
- [validateToken](SpeedyBot.md#validatetoken)
- [whoAmI](SpeedyBot.md#whoami)

## Constructors

### constructor

• **new SpeedyBot**<`S`\>(`_token?`, `makeRequest?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` = `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_token` | `string` | `""` |
| `makeRequest` | `CoreMakerequest`<`unknown`\> | `mainRequester` |

#### Defined in

[speedybot.ts:73](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L73)

## Methods

### Setup

▸ **Setup**(`url`, `secret`): `Promise`<[`Webhook`, `Webhook`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `secret` | `any` |

#### Returns

`Promise`<[`Webhook`, `Webhook`]\>

#### Defined in

[speedybot.ts:913](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L913)

___

### addSecret

▸ **addSecret**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `S` |
| `value` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[speedybot.ts:87](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L87)

___

### addSecrets

▸ **addSecrets**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |

#### Returns

`void`

#### Defined in

[speedybot.ts:91](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L91)

___

### addStep

▸ **addStep**<`T`\>(`middleware`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `AttachedData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`T`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:166](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L166)

___

### addStepSequence

▸ **addStepSequence**<`T`\>(`middlewares`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `AttachedData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `middlewares` | `Middleware`<`T`\>[] |

#### Returns

`void`

#### Defined in

[speedybot.ts:170](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L170)

___

### appCard

▸ **appCard**(`appName`, `logoUrl`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `logoUrl` | `string` |
| `config` | `Omit`<`HeaderConfig`, ``"iconURL"``\> |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:1421](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1421)

___

### buildDetails

▸ `Private` **buildDetails**(`type`, `envelope`): `Promise`<{ `author`: `SelfData` ; `details`: `Message_Details` \| `File_Details` \| `Submit_Details`<`object`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"card"`` \| ``"file"`` \| ``"text"`` |
| `envelope` | `ENVELOPES` |

#### Returns

`Promise`<{ `author`: `SelfData` ; `details`: `Message_Details` \| `File_Details` \| `Submit_Details`<`object`\>  }\>

#### Defined in

[speedybot.ts:1035](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1035)

___

### captureError

▸ **captureError**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`e`: `SpeedyError`) => `unknown` |

#### Returns

`void`

#### Defined in

[speedybot.ts:245](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L245)

___

### card

▸ **card**(`config?`): [`SpeedyCard`](SpeedyCard.md)

Convenience helper that creates a SpeedyCard

![cards](media://demo_sendcard.gif)

```ts
import { SpeedyBot } from 'speedybot-mini'
// 1) Initialize your bot w/ config
const CultureBot = new SpeedyBot('tokenPlaceholder');

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!

CultureBot.contains(["hi", "hey"],
 async ($bot, msg) => {
  const cardData = $bot.card({
    title: "SpeedyBot Hub",
    subTitle: "Sign the paperwork",
    chips: ["ping", "pong", "hi",],
    image: "https://github.com/valgaze/speedybot-mini/raw/deploy/docs/assets/logo.png?raw=true",
    url: "https://github.com/valgaze/speedybot-mini"
  });
  $bot.send(cardData);
 })

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`AbbreviatedSpeedyCard` & { `label`: `string`  }\> |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:705](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L705)

___

### checkAuthor

▸ `Private` **checkAuthor**(`authorObj`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authorObj` | `SelfData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:1005](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1005)

___

### contains

▸ **contains**(`keyword`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` \| `string`[] |
| `cb` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:221](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L221)

___

### convertToHash

▸ **convertToHash**(`arr`): `Object`

Convert a list of pairs into an object for secrets consumption.

**`example`**
```typescript
const input: string[] = ['secret1=value1', 'secret2=value2', 'secret3=value3'];
const output = convertToHash(input);
console.log(output);
// Output:
// {
//   secret1: 'value1',
//   secret2: 'value2',
//   secret3: 'value3'
// }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `string`[] | The list of pairs to convert. |

#### Returns

`Object`

The converted object.

#### Defined in

[speedybot.ts:1413](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1413)

___

### createWebhook

▸ **createWebhook**(`payload`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.event` | `string` |
| `payload.name` | `string` |
| `payload.resource` | `string` |
| `payload.secret?` | `string` |
| `payload.targetUrl` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Defined in

[speedybot.ts:989](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L989)

___

### deleteMessage

▸ **deleteMessage**(`msgId`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[speedybot.ts:852](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L852)

___

### deleteWebhook

▸ **deleteWebhook**(`webhookId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[speedybot.ts:865](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L865)

___

### detectType

▸ `Private` **detectType**(`envelope`): `MessageTypes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `envelope` | `ENVELOPES` |

#### Returns

`MessageTypes`

#### Defined in

[speedybot.ts:837](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L837)

___

### editMessage

▸ **editMessage**(`roomId`, `messageId`, `message`): `Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

Edit a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `roomId` | `string` |
| `messageId` | `string` |
| `message` | `string` |

#### Returns

`Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

#### Defined in

[speedybot.ts:787](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L787)

___

### errorCard

▸ **errorCard**(`title`, `message`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `message` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:770](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L770)

___

### exact

▸ **exact**(`keyword`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |
| `cb` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:210](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L210)

___

### extractFiledata

▸ `Private` **extractFiledata**(`res`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `StubbedRes`<`unknown`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentType` | `string` |
| `extension` | `string` |
| `name` | `string` |

#### Defined in

[speedybot.ts:1303](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1303)

___

### fetchWebhooks

▸ **fetchWebhooks**(): `Promise`<{ `id`: `string` ; `name`: `string` ; `resource`: `string` ; `targetUrl`: `string`  }[]\>

#### Returns

`Promise`<{ `id`: `string` ; `name`: `string` ; `resource`: `string` ; `targetUrl`: `string`  }[]\>

#### Defined in

[speedybot.ts:892](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L892)

___

### fuzzyMatch

▸ **fuzzyMatch**(`candidate`, `options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidate` | `string` |
| `options` | `string`[] |

#### Returns

`boolean`

#### Defined in

[speedybot.ts:1389](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1389)

___

### generateFileName

▸ `Private` **generateFileName**(): `string`

#### Returns

`string`

#### Defined in

[speedybot.ts:1112](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1112)

___

### getData

▸ `Private` **getData**(`type`, `envelope`): `Promise`<`Message_Details` \| `File_Details` \| `Submit_Details`<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `EventTypes` |
| `envelope` | `ENVELOPES` |

#### Returns

`Promise`<`Message_Details` \| `File_Details` \| `Submit_Details`<`object`\>\>

#### Defined in

[speedybot.ts:1080](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1080)

___

### getFile

▸ **getFile**(`url`, `opts?`): `Promise`<`SpeedyFile` & { `data`: `unknown`  }\>

Get a (secured) file's contents, probably would use this for examining uploaded files
like JSON, excel (xlsx), etc

```ts

import { SpeedyBot } from 'speedybot'

const Bot = new SpeedyBot('__REPLACE__ME__')
Bot.on('file', $ => {
   const fileData = Bot.getFile($.details.urls)

})
// 1) Initialize your bot w/ config
const CultureBot = new SpeedyBot(config);

// 2) Export your bot
export default CultureBot;

// 3) Do whatever you want!

CultureBot.contains(["hi", "hey"],
 async ($bot, msg) => {
  const [fileUrl] = trigger.message.files || []
  const fileData = await $bot.getFile(fileUrl, {
    responseType: 'arraybuffer',
  })
  const { fileName, extension, type } = fileData
  $bot.say(
    `The file you uploaded (${fileName}), is a ${extension} file of type ${type}`
  )
   // with fileData.data you have access to an arrayBuffer with the raw bytes of that file
})

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `opts` | `Object` |
| `opts.responseType?` | ``"arraybuffer"`` \| ``"json"`` |

#### Returns

`Promise`<`SpeedyFile` & { `data`: `unknown`  }\>

#### Defined in

[speedybot.ts:1249](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1249)

___

### getPerson

▸ **getPerson**(`personId`): `Promise`<`SelfData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `personId` | `string` |

#### Returns

`Promise`<`SelfData`\>

#### Defined in

[speedybot.ts:1052](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1052)

___

### getRecentRooms

▸ **getRecentRooms**(`limit?`): `Promise`<{ `id`: `string` ; `title`: `string` ; `type`: `string`  }[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `100` |

#### Returns

`Promise`<{ `id`: `string` ; `title`: `string` ; `type`: `string`  }[]\>

#### Defined in

[speedybot.ts:922](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L922)

___

### getRoom

▸ **getRoom**(`roomId`): `Promise`<`Room_Details`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `roomId` | `string` |

#### Returns

`Promise`<`Room_Details`\>

#### Defined in

[speedybot.ts:1066](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1066)

___

### getSecret

▸ **getSecret**(`key`): `undefined` \| `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `S` |

#### Returns

`undefined` \| `string` \| `number`

#### Defined in

[speedybot.ts:95](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L95)

___

### getSelf

▸ **getSelf**(`token?`): `Promise`<`SelfData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`SelfData`\>

#### Defined in

[speedybot.ts:1011](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1011)

___

### getToken

▸ **getToken**(): `string`

#### Returns

`string`

#### Defined in

[speedybot.ts:125](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L125)

___

### getWebhooks

▸ **getWebhooks**(): `Promise`<{ `items`: `Webhook`[]  }\>

#### Returns

`Promise`<{ `items`: `Webhook`[]  }\>

#### Defined in

[speedybot.ts:878](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L878)

___

### go

▸ **go**(`middleware`): `void`

Core middleware, it MUST return true (continues chain) or false

```
const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
await Bot.sendTo($.author.email, "my message");

const parentMessageID = $.id;
await Bot.replyTo(parentMessageID, $.author.email, "my great reply message");

await $.send("Hello the right person"); 
await $.reply("Reply to the right message"); 

return $.next;
});

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:162](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L162)

___

### handleExtension

▸ `Private` **handleExtension**(`input?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `""` |

#### Returns

`string`

#### Defined in

[speedybot.ts:1123](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1123)

___

### insertStepToFront

▸ **insertStepToFront**(`middleware`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:133](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L133)

___

### onCamera

▸ **onCamera**(`cb`, `formats?`): `void`

Shorthand-handler for files w/ image types

For use w/ vision + text prompting systems

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cb` | `Middleware`<`AttachedData`\> | `undefined` |
| `formats` | `string`[] | `[]` |

#### Returns

`void`

#### Defined in

[speedybot.ts:197](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L197)

___

### onReject

▸ `Private` **onReject**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `SpeedyError` |

#### Returns

`void`

#### Defined in

[speedybot.ts:239](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L239)

___

### peekFile

▸ **peekFile**(`url`): `Promise`<`Omit`<`SpeedyFile`, ``"data"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`Omit`<`SpeedyFile`, ``"data"``\>\>

#### Defined in

[speedybot.ts:1315](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1315)

___

### pickRandom

▸ **pickRandom**(`list?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | `any`[] | `[]` |

#### Returns

`any`

#### Defined in

[speedybot.ts:1382](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1382)

___

### rando

▸ **rando**(): `string`

Generate a random string of 11 characters (letters + numbers)

#### Returns

`string`

#### Defined in

[speedybot.ts:1119](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1119)

___

### regex

▸ **regex**(`reg`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |
| `cb` | `Middleware`<`AttachedData`\> |

#### Returns

`void`

#### Defined in

[speedybot.ts:174](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L174)

___

### replyTo

▸ **replyTo**(`param1`, `param2`, `param3?`): `Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `param1` | `string` \| [`MessageResponse`](../modules.md#messageresponse) |
| `param2` | `undefined` \| `string` |
| `param3?` | `string` |

#### Returns

`Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

#### Defined in

[speedybot.ts:807](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L807)

___

### resolveDestination

▸ `Private` **resolveDestination**(`candidate`): { `toPersonEmail`: `string`  } \| { `roomId`: `string`  } \| { `toPersonId`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidate` | `string` \| { `personId`: `string`  } |

#### Returns

{ `toPersonEmail`: `string`  } \| { `roomId`: `string`  } \| { `toPersonId`: `string`  }

#### Defined in

[speedybot.ts:584](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L584)

___

### runMiddleware

▸ **runMiddleware**(`env`, `startingCtx?`): `Promise`<`boolean`\>

Main workhorse that takes in a webhook and passes it through provided flows

```ts
import

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | `ENVELOPES` |
| `startingCtx` | `Object` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:260](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L260)

___

### sendFileTo

▸ **sendFileTo**(`destination`, `data`, `extensionOrFileName`, `textLabel?`, `contentType?`): `Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

Send a file to a destination-- a downloadable file will be generated

At minimum, provide the file data & desired file extension

```ts

import { SpeedyBot } from 'speedybot'
const Bot = new SpeedyBot('__REPLACE__ME__')
const myData = { a: 1, b: 2, c: [1,2,3,'hello', 'bonjour']}
$bot.sendFileTo('target@email.com', myData, 'json')

```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `destination` | `string` \| { `personId`: `string`  } | `undefined` |
| `data` | `any` | `undefined` |
| `extensionOrFileName` | `string` | `undefined` |
| `textLabel` | `string` | `""` |
| `contentType` | ``null`` \| `string` | `null` |

#### Returns

`Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

#### Defined in

[speedybot.ts:1157](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1157)

___

### sendTo

▸ **sendTo**(`emailOrRoomId`, `message`): `Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

Send a message to a room, email, or personId

```ts

import { SpeedyBot } from 'speedybot'
// 1) Initialize your bot w/ config
const Bot = new SpeedyBot({ token: '__REPLACE__ME__'});

Bot.sendTo('targetEmail@account.com', '**here is a message**')
Bot.sendTo('aaa-bbb-ccc-ddd-eee-fff', '**Here is a message to a room**')
Bot.sendTo({toPersonId: 'xxxyyyzzz', '**here is a message**')

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emailOrRoomId` | `string` \| { `personId`: `string`  } |
| `message` | `Message` |

#### Returns

`Promise`<[`MessageResponse`](../modules.md#messageresponse)\>

#### Defined in

[speedybot.ts:619](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L619)

___

### setFallbackText

▸ **setFallbackText**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`void`

#### Defined in

[speedybot.ts:129](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L129)

___

### setToken

▸ **setToken**(`token`): [`SpeedyBot`](SpeedyBot.md)<`S`\>

Sets the token to transact with APIs (needed to send messages, receive webhooks, files, etc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`SpeedyBot`](SpeedyBot.md)<`S`\>

#### Defined in

[speedybot.ts:120](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L120)

___

### stashCard

▸ **stashCard**(`secret`, `message?`, `unwrapLabel?`, `destroyLabel?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `secret` | `string` \| `number` | `undefined` |
| `message?` | `string` | `undefined` |
| `unwrapLabel` | `string` | `CONSTANTS.unwrapLabel` |
| `destroyLabel` | `string` | `CONSTANTS.destroyLabel` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:759](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L759)

___

### successCard

▸ **successCard**(`title`, `message`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `message` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[speedybot.ts:777](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L777)

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[speedybot.ts:662](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L662)

___

### whoAmI

▸ **whoAmI**(): `Promise`<`SelfData` & { `webhooks`: `Webhook`[]  }\>

#### Returns

`Promise`<`SelfData` & { `webhooks`: `Webhook`[]  }\>

#### Defined in

[speedybot.ts:1025](https://github.com/valgaze/speedybot/blob/bf86200/src/speedybot.ts#L1025)
