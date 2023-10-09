# Card
The `<Card>` is a flexible component that can be used to render a content container with many optional options.

## API
| Component | Description |
| - | - |
| [`<Card>`](./Card.md) | Primary Component |
| [`<CardHeader>`](./CardHeader.md) | Sub-component used to wrap the Card's `<CardTitle>` and `<CardSubtitle>` components. |
| [`<CardTitle>`](./CardTitle.md) | Sub-component used to display the Card's title. Wraps the `#title` slot |
| [`<CardSubtitle>`](./CardSubtitle.md) | Sub-component used to display the Card's subtitle. Wraps the `#subtitle` slot. |
| [`<CardText>`](./CardText.md) | Sub-component used to display the Card's text. Wraps the `#text` slot. |
| [`<CardAction>`](./CardAction.md) | Sub-component that modifies the default styling of [`<Button>`](../Button/Button.md). Wraps the `#actions` slot |

## Props
The `<Card>` component has the following props:

| Name | Type | Default | Description |
| - | - | - | - |
|title|String|`undefined`|The title of the card.|
|subtitle|String|`undefined`|The subtitle of the card.|
|width|String, Number|`undefined`|The width of the card.|
|appendIcon|String|`undefined`|The name of the icon to append to the card header.|
|prependIcon|String|`undefined`|The name of the icon to prepend to the card header.|
|elevation|Number|`0`|The elevation of the card.|

## Slots
The `<Card>` component has the following slots:

| Name | Description |
| - | - |
|`#title`|The title of the card.|
|`#subtitle`|The subtitle of the card.|
|`#text`|The text of the card.|
|`#actions`|The actions of the card; locate at the bottom of the card|
|`#prepend`|The prepend content of the card; locate at the top of the card|
|`#append`|The append content of the card; locate at the top of the card|

## Usage
To use the `<Card>` component, you can import it from the `@/components/Card/index` module and use it in your Vue.js templates.
```ts
import { Card } from '@/components/Card/index'
```
 Here's an example of how you can use the `<Card>` component:
   
```vue
<Card></Card>
```
