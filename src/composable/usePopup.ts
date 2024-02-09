import { ComponentPublicInstance, Ref, computed, nextTick, onMounted, ref, watch } from "vue";

type PopupEvent = 'hover' | 'click';

const usePopup = (props: {
   triggerRef: Ref<HTMLElement | ComponentPublicInstance | null>,
   // popupRef: Ref<HTMLElement | ComponentPublicInstance>,
   // event: PopupEvent | PopupEvent[],
}) => {
   // const trigger = ref<HTMLElement | ComponentPublicInstance | null>(null);

   const trigger = computed(() => {
      return props.triggerRef.value;
   })
   // watch(props.triggerRef, (value) => {
   //    console.log('trigger ref changed');
   //    trigger.value = value;
   //    // console.log(trigger.value);
      
   // })

   onMounted(() => {
      bindingEvent();

   })

   function bindingEvent() {
      if(trigger.value) {
         console.log('asd')
      }
   }
   // watch(trigger, (value) => {
   //    if(value) {
   //       trigger.value.addEventListener('click', () => { 
   //          console.log('clicked');
            
   //        })
   //    }
      
   // })


   // onMounted(() => {
     
   // })
   
   // const trigger = ref<HTMLElement|ComponentPublicInstance>(null);

   // const trigger = computed(() => {
   //    return props.triggerRef.value
   // })
   // onMounted(() => {
   //    nextTick(() => {
   //       console.log('next tick');
   //       debugger;
   //       console.log(props.triggerRef.value);
   //       trigger.value = props.triggerRef.value;
   //       console.log(trigger.value);
   //       console.log(props.triggerRef.value);
   //    })
   //    // trigger.value = props.triggerRef.value;
   //    // debugger;
   //    // console.log('on mounted');
      
   // })

   

   
   const showPopup = () => {
      
      console.log(trigger.value);
      // const popup = props.popupRef.value
   }

   // const hidePopup = () => {
   //    const trigger = props.triggerRef.value
   //    const popup = props.popupRef.value

   //    if(trigger && popup) {
   //       popup.style.display = 'none'
   //    }
   // }

   return {
      showPopup
   }
}

export {
   PopupEvent,
   usePopup

}

