import type {
   ComponentInternalInstance,
   ComputedRef,
   Ref,
   RendererNode
} from "vue";

export interface RadioGroupInjectionKey {
   value: Ref,
   disabled: Ref<boolean>,
   onChange: (value: string) => void,
}