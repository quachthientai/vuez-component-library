import { RendererNode, computed, getCurrentInstance, onMounted, ref } from "vue";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface elevationProps {
   elevation?: PropOptions<number>
}

const elevationProps : elevationProps = makePropsFactory({
   elevation: {
      type: Number, 
   }
});

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
   elevationProps
}
