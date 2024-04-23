import type { 
   ComponentInternalInstance, 
   ComputedRef, 
   Ref, 
   RendererNode 
} from "vue";

export interface MenuTestInjectionKey {
   autoSelect: Ref<boolean>,
   closeOnSelect: Ref<boolean>,
   closeOnBlur: Ref<boolean>,
   show: (e: Event) => void,
   hide: (e: Event) => void,
}