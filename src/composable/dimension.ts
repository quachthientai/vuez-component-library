import { ComponentObjectPropsOptions, computed } from "vue";
import { convertUnit } from "@/utils/convertUnit";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface dimensionProps {
   minWidth?: PropOptions<number|string>,
   maxWidth?: PropOptions<number|string>,
   width?: PropOptions<number|string>,
   height?: PropOptions<number|string>,
   minHeight?: PropOptions<number|string>,
   maxHeight?: PropOptions<number|string>,
}

function makeDimensionProp(defaultVal? : string) : dimensionProps {
   return makePropsFactory({
      minWidth: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      },
      maxWidth: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      },
      width: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      },
      height: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      },
      minHeight: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      },
      maxHeight: {
         type: [String, Number],
         default: !defaultVal ? undefined : defaultVal
      }
   })
}

function useDimension (props: ComponentObjectPropsOptions) {
   const dimensionStyles = computed(() => ({
      minWidth: convertUnit(props.minWidth as string | number),
      maxWidth: convertUnit(props.maxWidth as string | number),
      width: convertUnit(props.width as string | number),
      height: convertUnit(props.height as string | number),
      minHeight: convertUnit(props.minHeight as string | number),
      maxHeight: convertUnit(props.maxHeight as string | number),
   }))

   return dimensionStyles.value
}

export {
   useDimension,
   makeDimensionProp
}