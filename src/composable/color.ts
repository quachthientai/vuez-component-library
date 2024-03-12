import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface colorProps {
   color?: PropOptions<string>
}

const predefinedColors = [
   'primary',
   'secondary',
   'success',
   'danger',
   'warning',
   'info',
   'plain'
]

function makeColorProp(colors? : Array<string>, defaultVal? : string) : colorProps {
   if(colors === undefined || null) {
      colors = predefinedColors;
   };

   if(defaultVal === undefined || null) {
      defaultVal = 'plain'
   }

   return makePropsFactory({
      color: {
         type: String,
         default: defaultVal,
         validator: (colorVal: string) => {
            return isIncluded(colors, colorVal.toLowerCase())
         }
      }
   })
}

const useColor = (prefix: string, color: string) => {
   const colorStyle = computed(() => {
      if(prefix === undefined || null) return []

      // refactor condition to check if user using their own color scheme
      if(color && isIncluded(predefinedColors, color.toLowerCase())) {
         return `${prefix}--${color.toLowerCase()}`
      }
   })
   return colorStyle.value
}

export {
   useColor,
   colorProps,
   makeColorProp
}