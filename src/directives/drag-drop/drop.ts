import { Event } from '../type'
import { Binding } from '../type'

export const Drop = {
    mounted(el:HTMLElement, binding:Binding){
        const target = document.querySelector('.dragging')
        console.log(target.nodeType)

        el.addEventListener('dragover',function(ev:Event){
            ev.preventDefault();
            
        })

        el.addEventListener('drop',function(ev:Event){
            ev.preventDefault();
            this.appendChild(target)
        })
    }
}