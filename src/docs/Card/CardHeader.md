# Card Header
- [`Card`](/src/components/Card/Card.tsx)
- [`CardTitle`](/src/components/Card/CardTitle.ts)
- [`CardSubtitle`](/src/components/Card/CardSubtitle.ts)
  
The `CardHeader` is a sub-component of the [`<Card>`](/src/components/Card/Card.tsx) component. It is used to wrap the Card's `<CardTitle>` and `<CardSubtitle>` components.

<table><tr><td>The quick brown fox jumps over the lazy dog.</td></tr></table>

## Props
The `CardHeader` component has the following props:

| Name | Type | Default |
| - | - | - | 
|title|String|`undefined`|
|subtitle|String|`undefined`|
|appendIcon|String|`undefined`|
|prependIcon|String|`undefined`|

## Slots
The `CardHeader` component has the following slots:

| Name | Description |
| - | - |
|`#default`|The default slot of the card header.|
|`#title`|Slot for component's title.|
|`#subtitle`|Slot for component's subtitle.|
|`#text`|Slot for component's text.|
|`#prepend`|Slot for prepending content to component|
|`#append`|Slot for appending content to component|


## Usage
To use the `CardHeader` component, you can import it from the `@/components/Card` module and use it in your Vue.js templates. Here's an example of how you can use the `CardHeader` component:
   
```vue
<CardHeader></CardHeader>
```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].
