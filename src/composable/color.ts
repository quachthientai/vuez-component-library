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
   'info'
]

const colorProps : colorProps = makePropsFactory({
   color: {
      type: String,
      default: 'primary',
      validator: (colorVal: string) => {
         return isIncluded(predefinedColors, colorVal)
      }
   }
})

const useColor = (prefix: string, color: string) => {
   const colorStyle = computed(() => {
      if(prefix === undefined || null) return

      if(color && isIncluded(predefinedColors, color)) {
         return `${prefix}-${color}`
      }
   })
   return colorStyle.value
}

export {
   useColor,
   colorProps
}