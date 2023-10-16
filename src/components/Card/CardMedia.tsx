import { defineComponent, computed} from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { useDimension, makeDimensionProp } from "@/composable/dimension";

const vCardMediaProps = makePropsFactory({
   src: String,
   alt: String,
   fit: {
      type: String,
      default: 'cover'
   },
   ...makeDimensionProp()
});

const CardMedia = defineComponent({
   name: 'CardMedia',
   props: vCardMediaProps,
   setup(props, { attrs, slots }) {
      const dimension = useDimension(props);
      return () => {
         return (
            <div>
               <img class="card__img" style={dimension} src={props.src as string} />
            </div>
         )
      }
   }
})

type CardMediaType = InstanceType<typeof CardMedia>;

export {
   CardMedia,
   CardMediaType
}
