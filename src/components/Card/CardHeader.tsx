import { defineComponent, SlotsType } from "vue";
import { Icon } from "@iconify/vue";
import { IconifyIcon } from "@iconify/types";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";
import makePropsFactory from "@/utils/makePropFactory";

const vProps = makePropsFactory({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  appendIcon: {
    type: String,
  },
  prependIcon: {
    type: String
  }
})

export const CardHeader = defineComponent({
  name: 'CardHeader',
  props: vProps,
  setup(props, {slots}) {
    const hasDefaultSlot = !!slots.default;
    const hasTitle = !!(slots.title || props.title);
    const hasSubtitle= !!(slots.subtitle || props.subtitle);
    const hasPrepend = !!(slots.prepend || props.prependIcon);
    const hasAppend = !!(slots.append || props.appendIcon);

    return () => {
      return (
        <div class="card__header">
          { hasPrepend &&
            ( <div class="card__header-prepend">
                  { props.prependIcon 
                    ? <Icon width="1.5rem" height="1.5rem" icon={ props.prependIcon as IconifyIcon } />
                    : slots.prepend?.() }
              </div> )
          }
  
          { (hasDefaultSlot || hasTitle || hasSubtitle) && (
            <div class="card__header-content">
            { !hasDefaultSlot
              && ( props.title
                  ? <CardTitle> { props.title ?? props.title } </CardTitle> 
                  : <div class="card__title"> {slots.title?.()} </div> ) 
            }

            { !hasDefaultSlot 
              && ( props.subtitle
                  ? <CardSubtitle> { props.subtitle ?? props.subtitle } </CardSubtitle>
                  : <div class="card__subtitle"> {slots.subtitle?.()} </div> ) 
            }
            { slots.default?.() }
          </div>
          )}
        
          { hasAppend &&
            ( <div class="card__header-append">
                  { props.appendIcon 
                    ? <Icon width="1.5rem" height="1.5rem" icon={ props.appendIcon as IconifyIcon } />
                    : slots.append?.() }
              </div> )
          }
        </div>
      );
    };
  },
});



