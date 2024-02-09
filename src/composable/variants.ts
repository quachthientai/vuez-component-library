import { computed } from 'vue'
import { isIncluded } from '@/utils/helpers'
import { PropOptions, makePropsFactory } from '@/utils/makePropFactory'

interface variantProps {
   variant?: PropOptions<string>
}

const predefinedVariants = [
   'text',
   'outlined',
   'solid',
]

function makeVariantProp(variants: Array<String> = predefinedVariants, defaultVal? : string) : variantProps {
   return makePropsFactory({
      variant: {
         type: String,
         default: !defaultVal ? 'solid' : defaultVal,
         validator: (variantVal: string) => {
            return isIncluded(variants, variantVal)
         }
      }
   })
}

function useVariants(prefix: string, variant: string) : string {
   const variantStyle = computed(() => {
      if(prefix === undefined || null) return

      if (variant && isIncluded(predefinedVariants, variant)) {
         return `${prefix}--${variant}`
      }
   })
   return variantStyle.value
}

export {
   useVariants,
   makeVariantProp
}