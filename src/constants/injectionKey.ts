import type { InjectionKey } from "vue";
import type { MenuInjectionKey } from "@/components/Menu/types.d.ts";
import type { RadioGroupInjectionKey } from "@/components/RadioGroup/types";
import type { CheckboxGroupInjectionKey } from "@/components/CheckboxGroup/types.d.ts";

export const MenuKey: InjectionKey<MenuInjectionKey> = Symbol("MenuKey");
export const RadioGroupKey: InjectionKey<RadioGroupInjectionKey> = Symbol("RadioGroupKey");
export const CheckboxGroupKey: InjectionKey<CheckboxGroupInjectionKey> = Symbol("CheckboxGroupKey");


