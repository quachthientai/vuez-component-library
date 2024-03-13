import type {
   ComponentInternalInstance,
   ComputedRef,
   Ref,
   RendererNode
} from "vue";

export interface RadioGroupInjectionKey {
   value: Ref,
   color: Ref<string>,
   disabled: Ref<boolean>,
   onChange: (value: string) => void,
}