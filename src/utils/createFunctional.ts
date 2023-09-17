import { ComponentObjectPropsOptions, defineComponent, h } from "vue";

//function overloading signatures
export function createFunctional(name: string, type: string, klass?: string) : any
export function createFunctional(name: string, type?: string, klass?: string, p?: Object) : any

//Function implentation
export function createFunctional(name: string, type?: string, klass?: string, p?: Object) : any {
   const vProps = p !== undefined ? {...p } : null;
   const vType = type !== undefined ? 'div' : type;
   return defineComponent({
      name: name,
      props: vProps as ComponentObjectPropsOptions | null,
      setup(props, {slots, emit}) {
         return () => {
            return p !== undefined 
               ? h(vType, { class: klass, props: props }, slots?.default()) 
               : h('div', { class: klass }, slots?.default())
         }
      }
   })
}






