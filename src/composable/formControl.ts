import { ComponentObjectPropsOptions, computed } from "vue";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface formControlsProps {
   modelValue?: PropOptions<any>,
   name?: PropOptions<string>,
   disabled?: PropOptions<boolean>,
   label?: PropOptions<string>,
}