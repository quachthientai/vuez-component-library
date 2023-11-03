import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent } from "vue";
import { useSize, makeSizeProp } from "@/composable/size";
import { useDimension, makeDimensionProp } from "@/composable/dimension";
import { useColor, makeColorProp } from "@/composable/color";

const vMenuProps = makePropsFactory({
   ...makeDimensionProp(),
   ...makeSizeProp(),
   ...makeColorProp(),
});



