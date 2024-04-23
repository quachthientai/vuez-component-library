import type { 
   ComponentInternalInstance, 
   ComputedRef, 
   Ref, 
   RendererNode 
} from "vue";

export interface SelectInjectionKey {
   chips: Ref<Boolean>,
   multiple: Ref<Boolean>,
   selectedOptions: Ref<any>,
}

export type SelectOptionModel = {
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
   value?: any;
   key?: string;
   [key: string]: any;
}