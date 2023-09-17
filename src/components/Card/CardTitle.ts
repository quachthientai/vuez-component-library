
import { createFunctional } from "../../utils/createFunctional"

export const CardTitle = createFunctional('v-card-title', 'div', 'card__header-title', {
   title: {
      type: String,
      default: 'title prop'
   }
})