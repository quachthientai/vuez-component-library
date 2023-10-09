import { computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropsOptions, makePropsFactory } from "@/utils/makePropFactory";
import { IconifyIcon } from "@iconify/types";
import { Icon } from "@iconify/vue";

interface iconProps {
   prependIcon?: PropsOptions<string>,
   appendIcon?: PropsOptions<string>  
}

const iconProps : iconProps = makePropsFactory({
   prependIcon: {
      type: [String, Icon],
      default: null,
   },
   appendIcon: {
      type: [String, Icon],
      default: null,
   }
});


