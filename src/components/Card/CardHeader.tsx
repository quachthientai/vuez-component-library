import { ComponentObjectPropsOptions, defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";


const vProps : ComponentObjectPropsOptions = {
  title: {
    type: String,
    default: 'Card Title'
  },
  subtitle: {
    type: String,
    default: 'Card Subtitle'
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
          <div class="card__header-title">
            { !slots.title ? 
              <CardTitle> { props.title } </CardTitle> :
              slots?.title() }
          </div>
          
          <div class="card__header-subtitle">
            { !slots.subtitle ? 
              <CardSubtitle> { props.subtitle } </CardSubtitle> :
              slots?.subtitle() }
          </div>
        </div>
      );
    };
  },
});

