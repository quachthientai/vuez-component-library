import { createFunctional } from "../../utils/createFunctional"

const CardTitle = createFunctional('CardTitle', 'div', 'card__title')

type CardTitleType = InstanceType<typeof CardTitle>

export {
   CardTitle,
   CardTitleType
}

