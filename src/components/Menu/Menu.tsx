import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, onMounted, PropType, ref, Teleport, toRefs } from "vue";
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
   data() {
      return {
         hasModel: this.model?.length > 0,
         dimension: useDimension(this.$props),
         id: this.$attrs.id as string || generateComponentId(),
      }
   },
   methods: {
      onFocused(e: FocusEvent) {
         this.isFocused = true;
         this.$emit('onMenuFocus', e)
      }
   },
   render() { 
      return (
            <div 
               class={NAMESPACE}
               id={this.id}
               style={this.dimension}
               ref="menu"
            >
               <ul class={`${NAMESPACE}-list`}
                  role="menu"
                  tabindex={0}
                  aria-activedescendant="true"
                  id={this.id + '-list'}
                  onFocus={ this.onFocused }
               >
                  {this.$slots.default?.()}  
                  {this.hasModel && (this.model as MenuItemModel[])?.map((item, index) => { 
                     const { action, ...mutateItem } = item;
                     return (
                        <MenuItem 
                           {...mutateItem}
                           onItemAction={item.action}
                           id={this.id + '-' + index}
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
         

      )
   },
   // setup(props, {slots, attrs, emit}) {
      
   //    const hasModel = (props.model as MenuItemModel[])?.length > 0;
   //    const isFocused = ref(false);
      
   //    const dimension = useDimension(props)
   //    const id = attrs.id as string || generateComponentId();
      
   //    /**
   //     * Handles the focus event for the menu.
   //     * @param e - The focus event.
   //     */
   //    function onFocused(e: FocusEvent) {
   //       isFocused.value = true;
   //       emit('onMenuFocus', e)
   //    }
      
   //    return () => {
         
         
   //    }
   // }
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType
};



