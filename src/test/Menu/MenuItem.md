# MenuItem API

- [`Menu`](./Menu.md) 
- [`MenuList`](./MenuList.md)

The `<MenuItem>` component is a sub-component of the [`<MenuList>`](./MenuList.md) component. It is used to display the menu item.

## Props
The `<MenuItem>` component has the following props:

| Name | Type | Default | Description |
| - | - | - | - |
|`label`|`string`|`undefined`| Define aria-label for menu item. If not defined, aria-label will the defined with content value|
|`to`|`RouteLocationRaw | string`|`undefined`| Define route for menu item.|
|`content`|`string`|`undefined`|Content for the menu item.|
|`disabled`|`Boolean`|`false`|Whether the menu item is disabled or not.|
|`id`|`string`|`undefined`|An ID for the menu item.|
|`href`|`string`|`undefined`|The href for the menu item.|
|`divider`|`Boolean`|`false`|Whether the menu item has a divider or not.|
|`icon`|`MenuItemModelIcon`|`undefined`|The icon for the menu item.|
|`badge`|`BadgePropType | Function`|`undefined`|The badge for the menu item.|
|`type`|`item | header`|`item`|The type of the menu item.|
|`tag`|`string`|`li`|Specify the tag for root element..|
|`action`|`Function`|`undefined`|The action for the menu item.|

## Types


## Usage
To use the `<Menu>` component, you can import it from the `@/components/Menu/index` module and use it in your Vue.js templates.
```ts
import { Menu } from '@/components/Menu/index'
```
 Here's an example of how you can use the `<Menu>` component:
   
```ts
<Menu></Menu>
```

