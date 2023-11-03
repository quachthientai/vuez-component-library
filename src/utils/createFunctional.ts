import { ComponentObjectPropsOptions, defineComponent, h } from "vue";

//function overloading signatures
export function createFunctional(name: string, type?: string, klass?: string, p?: Object) : any
export function createFunctional(name: string, type?: string, klass?: string): any
export function createFunctional(name: string, type?: string, klass?: string) : any
export function createFunctional(name: string, type?: string, p?: Object) : any
export function createFunctional(name: string, type?: string): any
export function createFunctional(name: string) : any

//Function implentation
export function createFunctional(name: string, type?: string, klass?: string, p?: Object) : any {
   const vProps = p !== undefined ? {...p } : null;
   const vType = type !== undefined ? type : 'div';
   const vKlass = klass !== undefined ? klass : null;

   return defineComponent({
      name: name,
      props: vProps as ComponentObjectPropsOptions | null,
      setup(props, {slots, emit}) {
         return () => {
            return p !== undefined 
               ? h(vType, { class: vKlass, props: props }, slots.default?.()) 
               : h(vType, { class: vKlass }, slots.default?.())
         }
      }
   })
}








