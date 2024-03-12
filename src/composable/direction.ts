import { computed } from "vue";
import { Helpers } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";

interface directionProps {
   direction?: PropOptions<string>
}

const predefinedDirections = [
   'vertical',
   'horizontal'
];

function makeDirectionProp(directions? : Array<string>, defaultVal? : string) : directionProps {
   if(directions === undefined || null) {
      directions = predefinedDirections;
   };

   if(defaultVal === undefined || null) {
      defaultVal = 'vertical'
   }

   return makePropsFactory({
      direction: {
         type: String,
         default: defaultVal,
         validator: (directionVal: string) => {
            return Helpers.isIncluded(directions, directionVal)
         }
      }
   })
};

const useDirection = (prefix: string, direction: string) => {
   const directionStyle = computed(() => {
      if(prefix 
         && direction 
         && Helpers.isIncluded(predefinedDirections, direction.toLowerCase())) {
         return `${prefix}--${direction.toLowerCase()}`
      }

      return;
   });

   return directionStyle.value
};

export {
   useDirection,
   makeDirectionProp
}
