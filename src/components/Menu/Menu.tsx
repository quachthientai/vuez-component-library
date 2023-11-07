import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, onMounted, PropType, ref, Teleport } from "vue";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";

/**
 * Namespace for the Menu component.
 */
const NAMESPACE = 'vz-menu';

const vMenuProps = makePropsFactory({
   popup: {
      type: Boolean,
      default: false,
   },
   /**
    * The toggler for the menu.
    * @type {string}
    * @default undefined
    * @name toggler
    */
   toggler: String,
   /**
    * The model item for the menu.
    * @type {MenuItemModel[]}
    * @default []
    * @name model
    */
   model: {
      type: Array as PropType<MenuItemModel[]>,
      default: () => [],
   },
   ...makeDimensionProp(),
   ...makeColorProp(),
});

const Menu = defineComponent({
   name: 'Menu',
   props: vMenuProps,
   emits: ['onMenuFocus'],
   setup(props, {slots, attrs, emit}) {
      const hasModel = (props.model as MenuItemModel[])?.length > 0;
      const isFocused = ref(false);
      
      const dimension = useDimension(props)
      const id = attrs.id as string || generateComponentId();
      const menu = ref();
      /**
       * Handles the focus event for the menu.
       * @param e - The focus event.
       */
      function onFocused(e: FocusEvent) {
         isFocused.value = true;
         emit('onMenuFocus', e)
      }
      
      // onMounted(() => { 
      //    console.log(menu);
      // });
      
      return () => {
         return (
            <Teleport disabled={!props.popup} to="body">
               <div 
                  class={NAMESPACE}
                  id={id}
                  style={dimension}
                  ref="menu"
               >
                  <ul class={`${NAMESPACE}-list`}
                     role="menu"
                     tabindex={0}
                     aria-activedescendant="true"
                     id={id + '-list'}
                     onFocus={ onFocused }
                  >
                     {slots.default?.()}  
                     {hasModel && (props.model as MenuItemModel[])?.map((item, index) => { 
                        const { action, ...mutateItem } = item;
                        return (
                           <MenuItem 
                              {...mutateItem}
                              onItemAction={item.action}
                              id={id + '-' + index}
                              key={item.key || item.label + index.toString()}
                           >
                              {item.badge && { badge: () => {
                                    return (
                                       typeof item.badge === 'function' 
                                       ? item.badge() 
                                       : <Badge {...item.badge} />
                                    )
                                 }
                              }}
                           </MenuItem>
                        )
                     })}
                  </ul>
               </div>
            </Teleport>

         )
      }
   }
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType
};



