# CardHeader API
- [`Card`](./Card.md)
- [`CardTitle`](./CardTitle.md)
- [`CardSubtitle`](./CardSubtitle.md)
  
The `<CardHeader>` is a sub-component of the [`<Card>`](./Card.md) component. It is used to wrap the Card's [`CardTitle`](./CardTitle.md) and [`CardSubtitle`](./CardSubtitle.md) components.

## Props
The `<CardHeader>` component has the following props:

| Name | Type | Default |
| - | - | - | 
|title|String|`undefined`|
|subtitle|String|`undefined`|
|appendIcon|String|`undefined`|
|prependIcon|String|`undefined`|

## Slots
The `<CardHeader>` component has the following slots:

| Name | Description |
| - | - |
|`#default`|The default slot of the card header.|
|`#title`|Slot for component's title.|
|`#subtitle`|Slot for component's subtitle.|
|`#text`|Slot for component's text.|
|`#prepend`|Slot for prepending content to component|
|`#append`|Slot for appending content to component|


## Usage
To use the `<CardHeader>` component, you can import it from the `@/components/Card/index` module and use it in your Vue.js templates.
```ts
import { CardHeader } from '@/components/Card/index'
```
 Here's an example of how you can use the `<CardAction>` component:
```vue
<CardHeader></CardHeader>
```


