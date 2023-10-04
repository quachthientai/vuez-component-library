# CardAction API
- [`Card`](./Card.md)
- [`Button`](../Button/Button.md)

The `<CardAction>` component is a sub-component of the [`<Card>`](./Card.md) component. It is used to wrap the action [`<Button>`](../Button/Button.md).

## Slots
The `<CardAction>` component has the following slots:

| Name | Description |
| - | - |
|`#default`|The default slot of the card action.|

## Usage
To use the `<CardAction>` component, you can import it from the `@/components/Card/index` module and use it in your Vue.js templates.
```vue
import { CardAction } from '@/components/Card/index'
```
 Here's an example of how you can use the `<CardAction>` component:
   
```vue
<CardAction></CardAction>
```