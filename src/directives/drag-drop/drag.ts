import { Event} from '../type'
import { Binding }  from '../type'
import { DirectiveBinding } from 'vue'

interface DraggableData{
    id:number;
    name:string;
}

let dragData : DraggableData | null = null;

function handleDragStart(event:DragEvent){
    event.dataTransfer!.effectAllowed = 'move';
    dragData = JSON.parse((event.target as HTMLElement).getAttribute('data-draggable')!)
}

function handleDragOver(event:DragEvent){
    event.preventDefault()
}

function handleDrop(event:DragEvent){
    event.preventDefault();

    const eventData = dragData;
    dragData = null;
    (event.target as HTMLElement).dispatchEvent(new CustomEvent('dragged',{detail:eventData}))
}

const dragDirective = {
    mounted(el:HTMLElement, binding:DirectiveBinding<DraggableData>) {
        el.setAttribute('draggable','true');
        el.addEventListener('dragstart',handleDragStart);
        el.addEventListener('dragover', handleDragOver);
        el.addEventListener('drop',handleDrop);

        el.setAttribute('data-draggable',JSON.stringify(binding.value));
    },

    unmounted(el:HTMLElement){
        el.removeEventListener('dragstart', handleDragStart);
        el.removeEventListener('dragover', handleDragOver);
        el.removeEventListener('drop',handleDrop)
    }
}
export default dragDirective