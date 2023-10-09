import { createFunctional } from "@/utils/createFunctional";

const CardText = createFunctional('CardText', 'div', 'card__text');

type CardTextType = InstanceType<typeof CardText>

export {
   CardText,
   CardTextType
 }