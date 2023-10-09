import { createFunctional } from "@/utils/createFunctional";

const CardAction = createFunctional('CardAction', 'div', 'card__action');

type CardActionType = InstanceType<typeof CardAction>

export {
   CardAction,
   CardActionType
}