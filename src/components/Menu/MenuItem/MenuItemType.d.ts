import {
   VNode,
   RendererNode,
   RendererElement
} from 'vue';
import { IconType } from "@/composable/icon";
import { BadgePropType } from "@/components/Badge/Badge";
import { RouteLocationRaw } from 'vue-router';

/**
 * Represents a menu item icon model.
 * @type {Object} MenuItemModelIcon
 * @property {string} icon The menu item icon.
 * @memberof MenuItemModel
 */
type MenuItemModelIcon = Pick<IconType, 'icon'>;

/**
 * Represents a menu item model.
 * @type {Object} MenuItemModel
 */
type MenuItemModel = {
   /**
    * The menu item id.
    * @type {string}
    * @memberof MenuItemModel
    */
   id?: string;
   /**
    * The menu item content.
    * @type {string}
    * @memberof MenuItemModel
    */
   content?: string;
   /**
    * The menu item label.
    * @type {string}
    * @memberof MenuItemModel
    */
   label?: string;
   /**
    * The menu item attribute to specify if it is disabled.
    * @type {boolean}
    * @memberof MenuItemModel
    */
   disabled?: boolean;
   /**
    * The menu item route name.
    * @type {RouteLocationRaw}
    * @memberof MenuItemModel
    */
   to?: RouteLocationRaw;
   /**
    * The menu item external link.
    * @type {string}
    * @memberof MenuItemModel
    */
   href?: string;
   /**
    * The menu item attribute to specify if it has divider.
    * @type {string}
    * @memberof MenuItemModel
    */
   divider?: boolean;
   /**
    * The menu item type (item, header, footer).
    * @type {item | header | footer}
    * @memberof MenuItemModel
    * @default item
    */
   type?: 'item' | 'header' | 'footer';
   /**
    * The menu item tag.
    * @type {string}
    * @memberof MenuItemModel
    * @default li
    */
   tag?: string;
   /**
    * The menu item badge.
    * @type {BadgePropType | (() => VNode<RendererNode, RendererElement>)}
    * @memberof MenuItemModel
    */
   badge?: BadgePropType | (() => VNode<RendererNode, RendererElement>);
   /**
    * The menu item icon.
    * @type {MenuItemModelIcon}
    * @memberof MenuItemModel
    */ 
   icon?: MenuItemModelIcon;
   /**
    * The menu item action.
    * @type {function}
    * @memberof MenuItemModel
    * @default undefined
    */
   action?: ((e: Event) => void)
   /**
    * The menu item key.
    * @type {string}
    * @memberof MenuItemModel
    * @default undefined
    */
   key?: string;
   [key: string]: any;
}

export {
   MenuItemModelIcon,
   MenuItemModel
}