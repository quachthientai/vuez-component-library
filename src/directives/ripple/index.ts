import { Event } from "../type";

function handleRipple(event: Event, element: HTMLElement) : void {
   const circle = document.createElement("span");
   const diameter = Math.max(element.clientWidth, element.clientHeight);
   const radius = diameter / 2;

   circle.style.width = circle.style.height = `${diameter}px`;
   circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
   circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
   circle.classList.add("ripple");
   const ripple = element.getElementsByClassName("ripple")[0];

   if (ripple) {
      ripple.remove();
   }
   element.appendChild(circle);
}

   
export const Ripple = {
   mounted(el: HTMLElement | null) {
      el.addEventListener('click', (event) => handleRipple(event, el));
   },
   unmounted(el: HTMLElement | null){
      el.removeEventListener('click', (event) => handleRipple(event, el));
   }
}