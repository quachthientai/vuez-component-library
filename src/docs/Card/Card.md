Card Component
==============

The `Card` component is a component that can be used to render a card with an optional elevation and default slot content.
```jsx
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
```

Props
-----
| Component | Description |
| - | - |
| [`<Card>`](@/components/Card/Card.tsx) | Primary Component |
| [`<CardHeader>`](/api/v-card-item/) | Sub-component used to wrap the Card's `<CardTitle>` and `<CardSubtitle>` components. |
| [`<CardTitle>`](/api/v-card-title/) | Sub-component used to display the Card's title. Wraps the `#title` slot |
| [`<CardSubtitle>`](/api/v-card-subtitle/) | Sub-component used to display the Card's subtitle. Wraps the `#subtitle` slot. |
| [`<CardText>`](/api/v-card-text/) | Sub-component used to display the Card's text. Wraps the `#text` slot. |
| [`<CardAction>`](/api/v-card-actions/) | Sub-component that modifies the default styling of [v-btn](/components/buttons/). Wraps the `#actions` slot |
The `Card` component has the following props:

-   `title`: A string that represents the title of the card.
-   `subtitle`: A string that represents the subtitle of the card.
-   `width`: A string or number that represents the width of the card.
-   `appendIcon`: A string that represents the name of the icon to append to the card.
-   `prependIcon`: A string that represents the name of the icon to prepend to the card.
-   `elevation`: A number that represents the elevation of the card. The default value is `0`.

Usage
-----

To use the `Card` component, you can import it from the `@/components/Card` module and use it in your Vue.js templates. Here's an example of how you can use the `Card` component: