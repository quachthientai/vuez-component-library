import { PropType, ComponentObjectPropsOptions } from "vue"

type PropOptions<T> = {
   type: PropType<T>;
   required?: boolean;
   default?: T | null | undefined | (() => T | null | undefined);
   validator?(value: unknown): boolean;
};

type PropsOptions<Props> = {
   [K in keyof Props] : PropOptions<Props[K]>;
}

function makePropsFactory(vProps: PropsOptions<object>) : ComponentObjectPropsOptions {
   return vProps as ComponentObjectPropsOptions;
}

// function makePropsFactory<T extends Record<string, any>>(propsDef: T) {
//    type Props = { [K in keyof T]: T[K]['type'] };
//    const props: Props = {} as Props;
//    for (const key in propsDef) {
//       props[key] = propsDef[key]['type'];
//    }
//    return props;
// }

export {
   PropOptions,
   PropsOptions,
   makePropsFactory
}








