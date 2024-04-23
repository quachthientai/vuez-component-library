import type { InjectionKey } from "vue";
import type { MenuInjectionKey } from "@/components/Menu/types.d.ts";
import type { MenuTestInjectionKey } from "@/components/MenuTest/types.d.ts";
import type { RadioGroupInjectionKey } from "@/components/RadioGroup/types";
import type { CheckboxGroupInjectionKey } from "@/components/CheckboxGroup/types.d.ts";
import type { SelectInjectionKey } from "@/components/Select/types";

export const MenuKey: InjectionKey<MenuInjectionKey> = Symbol("MenuKey");
export const SelectKey: InjectionKey<SelectInjectionKey> = Symbol("SelectKey")
export const MenuTestKey: InjectionKey<MenuTestInjectionKey> = Symbol("MenuTestKey");
export const RadioGroupKey: InjectionKey<RadioGroupInjectionKey> = Symbol("RadioGroupKey");
export const CheckboxGroupKey: InjectionKey<CheckboxGroupInjectionKey> = Symbol("CheckboxGroupKey");



