import type { ComponentInternalInstance, ComputedRef, Ref, RendererNode } from "vue";

export interface MenuInjectionKey {
   openOnClick: Ref<boolean>;
   openOnHover: Ref<boolean>;
   menuTriggerRef: Ref<HTMLElement | null>;
   menuTriggerID: ComputedRef<string>;
   menuListRef: Ref<HTMLElement | null>;
   menuListID: ComputedRef<string>;
   isOpen: Ref<boolean>;
   // trigger: Ref<HTMLElement | null>;
   toggleMenu: () => void;
}