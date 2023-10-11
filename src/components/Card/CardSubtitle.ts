import { createFunctional } from "../../utils/createFunctional";

const CardSubtitle = createFunctional('CardSubtitle', 'div', 'card__subtitle')  

type CardSubtitleType = InstanceType<typeof CardSubtitle>

export {
   CardSubtitle,
   CardSubtitleType
}