export type Event = MouseEvent | PointerEvent

export interface Binding {
   value?: any,
   oldValue?: any,
   arg?: any,
}
export type HandleRippleFunc = (event: Event, element: HTMLElement) => void;

export type HandleClickOutFunc = (event: Event, element: HTMLElement, binding: Binding) => void;

