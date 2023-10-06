import { computed } from "vue";
import { convertUnit } from "@/utils/convertUnit";

export interface dimensionProps {
   width?: number|string,
   height?: number|string
}

export function useDimension (props: dimensionProps) {
   const dimensionStyles = computed(() => ({
      width: convertUnit(props.width),
      height: convertUnit(props.height)
   }))

   return dimensionStyles
}