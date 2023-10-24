import { createFunctional } from "@/utils/createFunctional";

const MenuHeader = createFunctional('MenuTitle', 'div', 'vz-menu-header')

type MenuHeaderType = InstanceType<typeof MenuHeader>

export {
   MenuHeader,
   MenuHeaderType
}