import { makePropsFactory } from "@/utils/makePropFactory";
import { computed, defineComponent } from "vue";
import { IconType, makeIconProps } from "@/composable/icon";
import { isIncluded } from "@/utils/helpers";
import { Ripple } from "@/directives/ripple";
import { DynamicTag } from "../DynamicTag/DynamicTag";
import { Icon } from "@iconify/vue";

const vMenuItemProps = makePropsFactory({
   content: String,
   disabled: Boolean,
   href: String,
   divider: Boolean,
   type: {
      type: String,
      default: 'item',
      validator: (value: string) => {
         return isIncluded(['item', 'header'], value);
      }
   },
   tag: {
      type: String,
      default: 'li',
   },
   ...makeIconProps(),
})

const MenuItem = defineComponent({
   name: 'MenuItem',
   props: vMenuItemProps,
   directives: {
      'ripple': Ripple
   },
   setup(props, {slots, attrs}) {
      const prependIcon = props.prependIcon as IconType;
      const appendIcon = props.appendIcon as IconType;
      const tag = props.tag as string;
      const type = computed(() => {
         if(props.type === 'item') return undefined;
         return `vz-menu-item--${props.type as string}`;
      })

      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasContent = !!(slots.default || props.content);
      const hasDivider = !!props.divider;

      return () => {
         return (
            <>
               <DynamicTag
                  v-ripple={props.type === 'item'}
                  type={tag}
                  class={["vz-menu-item",
                     type.value
                  ]}
               >  
                  { hasPrepend && (
                     <div class="vz-menu-item__prepend">
                        { props.prependIcon 
                           ? <Icon 
                                 icon={prependIcon.icon} 
                                 width="1.3rem" 
                                 height="1.3rem" 
                              />
                           : slots.prepend?.() }
                     </div>
                  )}
                  
                  { hasContent && (
                     <div class="vz-menu-item__content">
                        { props.content ? props.content : slots.default?.() }
                     </div>
                  )}

                  { hasAppend && (
                     <div class="vz-menu-item__append">
                        <div class="w-9"></div>
                        { props.appendIcon 
                           ? <Icon 
                                 icon={appendIcon.icon} 
                                 width="1.3rem" 
                                 height="1.3rem" 
                              />
                           : slots.append?.() }
                     </div>
                  )}
               </DynamicTag>
               { hasDivider && (<hr/>)}
            </>
         )
      }
   }
})

type MenuItemType = InstanceType<typeof MenuItem>;

export {
   MenuItem,
   MenuItemType
}