import type { ComponentInternalInstance, ComputedRef, Ref, RendererNode } from "vue";

export interface MenuInjectionKey {
   autoSelect: Ref<boolean>;
   closeOnSelect: Ref<boolean>;
   closeOnBlur: Ref<boolean>;
   menuTriggerRef: Ref<HTMLElement>;
   menuTriggerID: ComputedRef<string>;
   menuListRef: Ref<HTMLElement | null>;
   menuListID: ComputedRef<string>;
   isOpen: Ref<boolean>;
   show: () => void;
   hide: () => void;
}