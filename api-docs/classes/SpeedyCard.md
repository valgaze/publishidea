[speedybot](../README.md) / [Exports](../modules.md) / SpeedyCard

# Class: SpeedyCard

Card Builder

This is a utility that makes it convenient to build + pass data to Adaptive Cards

Note: This extends Adaptive Card functionality to include "chips" which when tapped will trigger your text handling logic

You can add "pickers" for date, time, select (and multi-select)

## Table of contents

### Constructors

- [constructor](SpeedyCard.md#constructor)

### Properties

- [tools](SpeedyCard.md#tools)

### Methods

- [addAction](SpeedyCard.md#addaction)
- [addBlock](SpeedyCard.md#addblock)
- [addButton](SpeedyCard.md#addbutton)
- [addChip](SpeedyCard.md#addchip)
- [addChips](SpeedyCard.md#addchips)
- [addDeleteButton](SpeedyCard.md#adddeletebutton)
- [addHeader](SpeedyCard.md#addheader)
- [addImage](SpeedyCard.md#addimage)
- [addLink](SpeedyCard.md#addlink)
- [addLinkButton](SpeedyCard.md#addlinkbutton)
- [addMultiSelect](SpeedyCard.md#addmultiselect)
- [addPickerDate](SpeedyCard.md#addpickerdate)
- [addPickerDropdown](SpeedyCard.md#addpickerdropdown)
- [addPickerTime](SpeedyCard.md#addpickertime)
- [addSingleSelect](SpeedyCard.md#addsingleselect)
- [addSubcard](SpeedyCard.md#addsubcard)
- [addSubtitle](SpeedyCard.md#addsubtitle)
- [addTable](SpeedyCard.md#addtable)
- [addText](SpeedyCard.md#addtext)
- [addTextInput](SpeedyCard.md#addtextinput)
- [addTextarea](SpeedyCard.md#addtextarea)
- [addTitle](SpeedyCard.md#addtitle)
- [attachData](SpeedyCard.md#attachdata)
- [build](SpeedyCard.md#build)
- [needsSubmit](SpeedyCard.md#needssubmit)
- [setBackgroundImage](SpeedyCard.md#setbackgroundimage)
- [setSubmitButtonTitle](SpeedyCard.md#setsubmitbuttontitle)
- [survey](SpeedyCard.md#survey)

## Constructors

### constructor

• **new SpeedyCard**()

#### Defined in

[cards.ts:280](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L280)

## Properties

### tools

• **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkColor` | (`candidate`: `string`) => `BaseColors` |

#### Defined in

[cards.ts:216](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L216)

## Methods

### addAction

▸ `Private` **addAction**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`void`

#### Defined in

[cards.ts:733](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L733)

___

### addBlock

▸ **addBlock**(`content`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`SpeedyCard`](SpeedyCard.md) |
| `config` | `Object` |
| `config.backgroundColor?` | `ColorChoices` |
| `config.separator?` | `boolean` |
| `config.vertAlign?` | `VAlignChoices` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:506](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L506)

___

### addButton

▸ **addButton**(`label`, `id?`, `attachedData?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `label` | `string` | `undefined` |
| `id` | `string` | `"button_result"` |
| `attachedData` | `string` \| { `[key: string]`: `number` \| `string` \| `boolean`;  } | `{}` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:748](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L748)

___

### addChip

▸ **addChip**(`payload`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `string` \| { `title`: `string` ; `value?`: `string`  } | `undefined` |
| `id` | `string` | `CONSTANTS.CHIP_LABEL` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:314](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L314)

___

### addChips

▸ **addChips**(`chips`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chips` | (`string` \| { `title`: `string` ; `value?`: `string`  })[] | `undefined` |
| `id` | `string` | `CONSTANTS.CHIP_LABEL` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:321](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L321)

___

### addDeleteButton

▸ **addDeleteButton**(`label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `label` | `string` | `CONSTANTS.destroyLabel` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:740](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L740)

___

### addHeader

▸ **addHeader**(`text`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `config` | `HeaderConfig` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:454](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L454)

___

### addImage

▸ **addImage**(`url`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config` | `Object` |
| `config.align?` | `AlignmentChoices` |
| `config.size?` | `SizeChoices` |
| `config.targetURL?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:357](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L357)

___

### addLink

▸ **addLink**(`url`, `label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `label?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:387](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L387)

___

### addLinkButton

▸ **addLinkButton**(`url`, `label?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `label?` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:391](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L391)

___

### addMultiSelect

▸ **addMultiSelect**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number`)[] \| { `title`: `string` ; `value`: `string`  }[] | `undefined` |
| `id` | `string` | `"addMultiSelect_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:597](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L597)

___

### addPickerDate

▸ **addPickerDate**(`textLabel`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `textLabel` | `string` | `undefined` |
| `id` | `string` | `"addPickerDate_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:645](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L645)

___

### addPickerDropdown

▸ **addPickerDropdown**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number` \| { `title`: `string` ; `value`: `string` \| `number`  })[] | `undefined` |
| `id` | `string` | `SpeedyCardId.dropdown` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:560](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L560)

___

### addPickerTime

▸ **addPickerTime**(`textLabel`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `textLabel` | `string` | `undefined` |
| `id` | `string` | `"addPickerTime_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:657](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L657)

___

### addSingleSelect

▸ **addSingleSelect**(`choices`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `choices` | (`string` \| `number`)[] \| { `title`: `string` ; `value`: `string`  }[] | `undefined` |
| `id` | `string` | `"addSingleSelectresult"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:587](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L587)

___

### addSubcard

▸ **addSubcard**(`card`, `textLabel?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `card` | `Card` \| [`SpeedyCard`](SpeedyCard.md) | `undefined` |
| `textLabel` | `string` | `""` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:546](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L546)

___

### addSubtitle

▸ **addSubtitle**(`subTitle`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subTitle` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:287](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L287)

___

### addTable

▸ **addTable**(`input`, `separator?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | (`string` \| `number`)[][] \| { `[key: string]`: `string` \| `number`;  } | `undefined` |
| `separator` | `boolean` | `false` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:292](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L292)

___

### addText

▸ **addText**(`text`, `config?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `config` | `Object` |
| `config.align?` | `AlignmentChoices` |
| `config.backgroundColor?` | `ColorChoices` |
| `config.bold?` | `boolean` |
| `config.color?` | `ColorChoices` |
| `config.size?` | `SizeChoices` |
| `config.vertAlign?` | `VAlignChoices` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:405](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L405)

___

### addTextInput

▸ **addTextInput**(`placeholder`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `placeholder` | `string` | `undefined` |
| `id` | `string` | `"addTextInput_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:670](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L670)

___

### addTextarea

▸ **addTextarea**(`placeholder`, `id?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `placeholder` | `string` | `undefined` |
| `id` | `string` | `"addTextarea_result"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:683](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L683)

___

### addTitle

▸ **addTitle**(`title`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:282](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L282)

___

### attachData

▸ **attachData**(`payload`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `AttachedData` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:708](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L708)

___

### build

▸ **build**(): `any`

#### Returns

`any`

#### Defined in

[cards.ts:802](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L802)

___

### needsSubmit

▸ **needsSubmit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[cards.ts:262](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L262)

___

### setBackgroundImage

▸ **setBackgroundImage**(`url`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:697](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L697)

___

### setSubmitButtonTitle

▸ **setSubmitButtonTitle**(`label`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:702](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L702)

___

### survey

▸ **survey**(`questions`, `title?`): [`SpeedyCard`](SpeedyCard.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `questions` | `SurveyQuestion`[] | `undefined` |
| `title` | `string` | `"📝 Survey"` |

#### Returns

[`SpeedyCard`](SpeedyCard.md)

#### Defined in

[cards.ts:764](https://github.com/valgaze/speedybot/blob/5b515a7/src/cards.ts#L764)
