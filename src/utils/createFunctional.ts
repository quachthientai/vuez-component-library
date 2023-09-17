import { ComponentObjectPropsOptions, ComponentPropsOptions, PropType, defineComponent, h, ref } from "vue";

// export function createFunctional(name: string, type: string):void
// export function createFunctional(name: string, p?:Object, type: string, class: string):void
export function createFunctional(name: string, type: string) : void
export function createFunctional(name: string, p?: Object, type?: string) : void

export function createFunctional(name: string, p?: Object, type?: string) {
   return p !== undefined ? defineComponent({
      name: name,
      props: {
         ...p as ComponentObjectPropsOptions
      },
      setup(props, {slots, emit}){
         return() => {
            return h(type, props, slots)
         }
      }
   }) : defineComponent({
      name: name,
      setup(props, {slots, emit}){
         return() => {
            return h(type, slots)
         }
      }
   })
}






