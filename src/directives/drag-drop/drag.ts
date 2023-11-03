import { bind } from 'cypress/types/bluebird';
import { Event} from '../type'
import { Binding }  from '../type'
import { DirectiveBinding } from 'vue'

interface DraggableData{
    id:number;
    name:string;
}

let dragData : DraggableData | null = null;

// function handleDragStart(event:DragEvent){
//     event.dataTransfer!.effectAllowed = 'move';
//     dragData = JSON.parse((event.target as HTMLElement).getAttribute('data-draggable')!)
//     event.dataTransfer.setData('test',(event.target as HTMLElement).id)
// }

// function handleDragOver(event:DragEvent){
//     event.preventDefault()
// }

// function handleDrop(event:DragEvent){
//     event.preventDefault();

//     const eventData = dragData;
//     dragData = null;
//     (event.target as HTMLElement).dispatchEvent(new CustomEvent('dragged',{detail:eventData}))
// }

// const dragDirective = {
//     mounted(el:HTMLElement, binding:DirectiveBinding<DraggableData>) {
//         el.setAttribute('draggable','true');
//         el.addEventListener('dragstart',handleDragStart);
//         el.addEventListener('dragover', handleDragOver);
//         el.addEventListener('drop',handleDrop);

//         el.setAttribute('data-draggable',JSON.stringify(binding.value));
//     },

//     unmounted(el:HTMLElement){
//         el.removeEventListener('dragstart', handleDragStart);
//         el.removeEventListener('dragover', handleDragOver);
//         el.removeEventListener('drop',handleDrop)
//     }
// }

const startDrag = (event)=>{
    
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('test',(event.target as HTMLElement).id)
    
}

const dragDirective = {
    mounted(el:HTMLElement, binding:DirectiveBinding<DraggableData>){
        el.draggable = true
        el.id = 'test'
        el.addEventListener('dragstart',startDrag)
    }
}

export default dragDirective