import { computed } from 'vue'
import { isIncluded } from '@/utils/helpers'
import { PropOptions, makePropsFactory } from '@/utils/makePropFactory'

interface variantProps {
   variant?: PropOptions<string>
}

const predefinedVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'plain']

const variantProps : variantProps = makePropsFactory({
   variant: {
      type: String,
      default: 'primary',
      validator: (val: string) => {
         return isIncluded(predefinedVariants, val)
      }
   }
})

function useVariants(prefix: string, variant: string) : string {
   const variantStyle = computed(() => {
      if(prefix === undefined | null) return

      if (variant && isIncluded(predefinedVariants, variant)) {
         return `${prefix}-${variant}`
      }
   })
   return variantStyle.value
}

export {
   useVariants,
   variantProps
}