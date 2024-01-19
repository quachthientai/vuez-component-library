# Menu
The `<Menu>` component is used to create a dropdown menu in your application. It provides a list of options that users can choose from. User can toggled through clicking

## API
| Component | Description |
| - | - |
| [`<Menu>`](./Card.md) | Primary Component |
| [`<MenuButton>`](./MenuButton.md) | Sub-component that used to trigger the Menu list. Child of Menu | 
| [`<MenuList>`](./MenuList.md) | Sub-component that used to wrap the Menu items. Child of Menu |
| [`<MenuItem>`](./MenuItem.md) | Sub-component that used to display the Menu item. Child of Menu List |

## Props
The `<Menu>` component has the following props:

| Name | Type | Default | Description |
| - | - | - | - |
|`autoSelect`|Boolean|`true`|The menu will select the first menu item when it open.|
|`closeOnSelect`|Boolean|`true`|The menu will close when menu item has been selected .|
|`closeOnBlur`|Boolean|`true`|...|
|`tag`|string|`div`|Define the element tag of component.|

## Usage
To use the `<Menu>` component, you can import it from the `@/components/Menu/index` module and use it in your Vue.js templates.
```ts
import { Menu } from '@/components/Menu/index'
```
 Here's an example of how you can use the `<Menu>` component:
   
```ts
<Menu></Menu>
```

