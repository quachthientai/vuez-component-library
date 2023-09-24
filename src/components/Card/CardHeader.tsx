import { ComponentObjectPropsOptions, defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { IconifyIcon } from "@iconify/types";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";


const vProps : ComponentObjectPropsOptions = {
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
}


export const CardHeader = defineComponent({
  name: 'CardHeader',
  props: vProps,
  setup(props, {slots}) {
    return () => {
      return (
        <div class="card__header">
          { props.prependIcon ?
            <div class="card__header-prepend">
              <Icon icon={ props.prependIcon as IconifyIcon } />
            </div> : null }
            
          <div class="card__header-content">
            { !slots.title ? 
              <CardTitle> { props.title } </CardTitle> :
              <div class="card__title"> { slots?.title() } </div> }
            
            { !slots.subtitle ?
              <CardSubtitle> { props.subtitle } </CardSubtitle> :
              <div class="card__subtitle"> { slots?.subtitle() } </div> }
          </div>
          
          
          { props.appendIcon ?
            <div class="card__header-append">
              <Icon icon={ props.appendIcon as IconifyIcon }/>
            </div> : null }
        </div>
      );
    };
  },
});

