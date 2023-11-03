import { computed, isRef } from "vue";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface loaderProps {
   loading?: PropOptions<boolean>
}

function makeLoaderProp(defaultVal? : boolean) : loaderProps {
   return makePropsFactory({
      loading: {
         type: Boolean,
         default: !defaultVal ? false : defaultVal,
      }
   })
}

function useLoader(prefix: string, loading: boolean) : string {
   const loader = computed(() => {
      if(prefix === undefined || null) return

      if(loading && prefix !== undefined || null) {
         return `${prefix}-loading`;
      }
   })
   return loader.value;
}

export {
   useLoader,
   makeLoaderProp
}