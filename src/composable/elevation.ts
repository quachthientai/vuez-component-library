import { RendererNode, computed, getCurrentInstance, onMounted, ref } from "vue";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface elevationProps {
   elevation?: PropOptions<number>
}

function makeElevationProp(defaultVal? : number) : elevationProps {
   return makePropsFactory({
      elevation: {
         type: Number,
         default: !defaultVal ? 0 : defaultVal
      }
   })
}

function useElevation(elevation: number) : string {
   const eleVal = computed(() => {
      if(elevation === undefined || null) return

      if(elevation > 0 ) {
         return `elevation-${elevation}`;
      }
   })

   return eleVal.value;
}

export {
   useElevation,
   makeElevationProp
}
