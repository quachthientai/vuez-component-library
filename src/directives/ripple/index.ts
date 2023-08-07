import { HandleRippleFunc } from "../type";


const handleRipple : HandleRippleFunc = (event, element) => {
   
   const circle = document.createElement("span");

   if(element.className.split(' ').includes('btn-plain')){
      circle.style.backgroundColor = 'rgba(186, 184, 184, 0.7)';
   }

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
   beforeMount(el: HTMLElement) {
      
   },
   mounted(el: HTMLElement | null) {
      
      el.addEventListener('click', (event) => handleRipple(event, el));
   },
   unmounted(el: HTMLElement | null){
      el.removeEventListener('click', (event) => handleRipple(event, el));
   }
}