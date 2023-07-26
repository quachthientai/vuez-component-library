export type Event = MouseEvent | PointerEvent | DragEvent 

export interface Binding {
   value?: any,
   oldValue?: any,
   arg?: any,
}