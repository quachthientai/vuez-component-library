import { computed, isRef } from "vue";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface loaderProps {
   loading?: PropOptions<boolean>
}

const loaderProps : loaderProps = makePropsFactory({
   loading: {
      type: Boolean,
      default: false,
   }
});

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
   loaderProps
}