# MenuButton API
- [`Menu`](./Menu.md)

The `<MenuButton>` component is a sub-component of the [`<Menu>`](./Menu.md) component. It is used to trigger the menu list.

## Slots
The `<MenuButton>` component has the following slots:

| Name | Description |
| - | - |
| `#default` | The default slot ot the MenuButton |

## Props
The `<MenuButton>` component has the following props derived from `<Button>`
- [`Button`](../Button/Button.md)

## Events
| Event | Description |
| - | - |
| `@onClick` | Emitted when the button is clicked |

## Usage
To use the `<MenuButton>` component, you can import it from the `@/components/MenuButton/index` module and use it in your Vue.js templates.
```ts
import { MenuButton } from '@/components/Menu/index'
```
 Here's an example of how you can use the `<MenuButton>` component:
   
```ts
<MenuButton></MenuButton>
```

