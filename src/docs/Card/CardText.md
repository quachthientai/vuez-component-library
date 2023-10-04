# CardText API
- [`Card`](./Card.md)

The `<CardText>` component is a sub-component of the [`<Card>`](./Card.md) component. It is used to wrap the text of the card.

## Slots
The `<CardText>` component has the following slots:

| Name | Description |
| - | - |
|`#default`|The default slot of the card text.|

## Usage
To use the `<CardText>` component, you can import it from the `@/components/Card/index` module and use it in your Vue.js templates.
```ts
import { CardText } from '@/components/Card/index'
```

Here's an example of how you can use the `<CardText>` component:
```vue
<CardText></CardText>
```