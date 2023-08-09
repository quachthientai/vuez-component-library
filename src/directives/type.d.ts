import { VNode } from "vue";
import { DirectiveBinding } from "vue";

export type Event = MouseEvent | PointerEvent | DragEvent 


export type HandleEventDirective = (event: Event, element?: HTMLElement, binding?: DirectiveBinding) => void;


export type HandleRippleFunc = (event: Event, element: HTMLElement) => void;

export type HandleClickOutFunc = (event: Event, element: HTMLElement, binding: Binding) => void;



// export type HandleDragEnd = (event: Event, element: HTMLElement) => void;
// export type HandleDragStart = (event: Event, element: HTMLElement) => void;


// export type HandleDrop = (event: Event, element: HTMLElement) => void;

// export type HandleDragOver = (event: Event, element: HTMLElement) => void;