# Card Component

The `Card` is a flexible component that can be used to render a content container with many optional options.

## API

| Component | Description |
| - | - |
| [`<Card>`](/src/components/Card/Card.tsx) | Primary Component |
| [`<CardHeader>`](/src/components/Card/CardHeader.tsx) | Sub-component used to wrap the Card's `<CardTitle>` and `<CardSubtitle>` components. |
| [`<CardTitle>`](/src/components/Card/CardTitle.ts) | Sub-component used to display the Card's title. Wraps the `#title` slot |
| [`<CardSubtitle>`](/src/components/Card/CardSubtitle.ts) | Sub-component used to display the Card's subtitle. Wraps the `#subtitle` slot. |
| [`<CardText>`](/src/components/Card/CardText.ts) | Sub-component used to display the Card's text. Wraps the `#text` slot. |
| [`<CardAction>`](/src/components/Card/CardAction.ts) | Sub-component that modifies the default styling of [`<Button>`](/src/components/Button/Button.vue). Wraps the `#actions` slot |

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