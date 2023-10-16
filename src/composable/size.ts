import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface sizeProps {
   size?: PropOptions<string>
}

const predefinedSizes = ['sm', 'md', 'lg'];

function makeSizeProp(sizes: Array<String> = predefinedSizes, defaultVal? : string) : sizeProps {
   return makePropsFactory({
      size: {
         type: String,
         default: !defaultVal ? 'md' : defaultVal,
         validator: (sizeVal: string) => {
            return isIncluded(sizes, sizeVal)
         }
      }
   })
}

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
   makeSizeProp
}