import { event } from 'cypress/types/jquery';
import { Event } from '../type'
import { Binding } from '../type'

const Drop = {
    mounted(el:HTMLElement, binding:any){
        

        el.addEventListener('dragover',function(ev:Event){
            ev.preventDefault();
        })

        el.addEventListener('drop',function(ev){
            ev.preventDefault();
            let receiveData = document.getElementById(ev.dataTransfer.getData('test'));
            
            el.appendChild(receiveData)
        })
    }
}

export default Drop