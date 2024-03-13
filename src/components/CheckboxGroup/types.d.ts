import type {
   ComponentInternalInstance,
   ComputedRef,
   Ref,
   RendererNode
} from "vue";

export interface CheckboxGroupInjectionKey {
   value: ComputedRef<string[]>,
   color: Ref<string>,
   disabled: Ref<boolean>,
   onChange: (value: string) => void,
}