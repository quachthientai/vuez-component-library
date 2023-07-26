import { Event} from '../type'
import { Binding } from '../type'

export const Drag = {

    mounted(el:HTMLElement, binding:Binding){

        el.setAttribute("draggable", "true")
        
        el.addEventListener('dragstart', function(ev:Event){
            this.classList.add('dragging')
        })

        el.addEventListener('dragend', function(ev:Event){
            this.classList.remove('dragging')
        })
    }
}