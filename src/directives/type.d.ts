export type Event = MouseEvent | PointerEvent | DragEvent 

export interface Binding {
   value?: any,
   oldValue?: any,
   arg?: any,
}

export type HandleRippleFunc = (event: Event, element: HTMLElement) => void;

export type HandleClickOutFunc = (event: Event, element: HTMLElement, binding: Binding) => void;




export type HandleDrag = (event: Event, element: HTMLElement) => void;

export type HandleDrop = (event: Event, element: HTMLElement) => void;

export type HandleDragOver = (event: Event) => void;