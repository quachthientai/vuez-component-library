import { eventBus } from "@/utils/eventBus"

export const Drop = {
   mounted(el:HTMLElement, binding:any){

      

      el.addEventListener('drop', (ev) =>{
         ev.preventDefault();
         let receiveData = document.getElementById(ev.dataTransfer.getData("test"));
         console.log(receiveData);
         (ev.target as HTMLElement).appendChild(receiveData);
           
      })

      el.addEventListener('dragover', (ev) => {
         ev.preventDefault();
      })
      
       
   }
}

export default Drop;
