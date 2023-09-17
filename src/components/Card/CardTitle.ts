import { createFunctional } from "@/utils/createFC"

export const CardTitle = createFunctional('v-card-title', {
   title: {
      type: String,
      default: 'Card Title'
   }
}, 'div')



// export const CardTitle = createFunctional()