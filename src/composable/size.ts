import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface sizeProps {
   size?: PropOptions<string>
}

const predefinedSizes = ['sm', 'md', 'lg'];

const sizeProps : sizeProps = makePropsFactory({
   size: {
      type: String, 
      default: 'md',
      validator: (sizeVal: string) => {
         return isIncluded(predefinedSizes, sizeVal)
      }
   }
});

function useSize(prefix: string, size: string) : string {
   const sizeStyle = computed(() => {
      if(prefix === undefined || null) return

      if(size && isIncluded(predefinedSizes, size)) {
         return `${prefix}-${size}`
      }
   })
   return sizeStyle.value
}

export {
   useSize,
   sizeProps
}