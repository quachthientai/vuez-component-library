import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropsOptions, makePropsFactory } from "@/utils/makePropFactory";

interface colorProps {
   color?: PropsOptions<string>
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