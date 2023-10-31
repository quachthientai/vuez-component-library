import {
   VNode,
   RendererNode,
   RendererElement
} from 'vue';
import { IconType } from "@/composable/icon";
import { BadgePropType } from "@/components/Badge/Badge";

type MenuItemModelIcon = Pick<IconType, 'icon'>;

type MenuItemModel = {
   label: string;
   disabled?: boolean;
   href?: string; 
   divider?: boolean;
   type?: 'item' | 'header' | 'footer';
   tag?: string;
   badge?: BadgePropType | (() => VNode<RendererNode, RendererElement>);
   icon?: MenuItemModelIcon;
   action?: ((e: Event) => void)
}

export {
   MenuItemModelIcon,
   MenuItemModel
}