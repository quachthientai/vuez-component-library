import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface sizeProps {
   size?: PropOptions<string>
}

const predefinedSizes = ['sm', 'md', 'lg'];

/**
 * Returns a factory function that creates a size prop object with the given options.
 * @param {Array<String>} sizes - An array of valid size values.
 * @param {string} defaultVal - The default size value.
 * @returns A factory function that creates a size prop object.
 */
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

/**
 * Returns a size style class based on the given size value.
 * @param {string} prefix - The prefix of the size style class.
 * @param {string} size - The size value.
 * @returns {string} A size style class.
 */
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