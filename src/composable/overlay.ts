import { PropType, computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface overlayProps {
   overlay?: PropOptions<OverlayType>
}

interface OverlayType {
   vertical: 'top' | 'bottom',
   horizontal: 'left' | 'right'
}


function makeOverlayProp() : overlayProps {
   return makePropsFactory({
      overlay: {
         type: Object as PropType<OverlayType>,
         // validator: (overlayVal: OverlayType) => {
         //    const validKeyNames = ['veritcal', 'horizontal'];
         //    return Object.keys(overlayVal).every((key) => validKeyNames.includes(key));
         // }
      }
   })
}

function useOverlay(prefix: string, overlay: OverlayType) {
   const overlayStyle = computed(() => {
      if(prefix === undefined || null) return

      if(overlay 
         && isIncluded(['top', 'bottom'], overlay.vertical) 
         && isIncluded(['left', 'right'], overlay.horizontal)) {
         return `${prefix}-overlay-${overlay.vertical}-${overlay.horizontal}`
      }
   })

   return overlayStyle.value
}

export {
   makeOverlayProp,
   useOverlay,
   OverlayType
}

