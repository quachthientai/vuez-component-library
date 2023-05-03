<script>
   import { Icon } from '@iconify/vue'
   export default {
      name: 'Button',
      data() {
         return{
            iconSize: null
         }
      },
      components: {
         Icon
      },
      props: {
         text: {
            type: String,
            default: ''
         }, 
         icon: {
            type: String,
            default: null,
         },
         iconPosition: {
            type: String,
            default: 'right'
         },
         isUppercase: {
            type: Boolean,
            default: false
         },
         isDisabled: {
            type: Boolean,
            default: false 
         }, 
         btnClass: {
            type: String, // btn-sm btn-large
            default: ''
         },
         isLoading: {
            type: Boolean,
            default: false,
         }
      },
      watch: {
         btnClass: {
            immediate: true,
            handler(newBtnClass){
               debugger;
               switch(true){
                  case newBtnClass.includes('btn-sm'):
                     this.iconSize = 'sm'
                     break;
                  case newBtnClass.includes('btn-lg'):
                     this.iconSize = '2xl'
                     break;
                  default:
                     this.iconSize = 'lg'
                  break;
               }
            }
         }
      },
   }

</script>

<template>
   <button 
      :class="`
      ${btnClass} 
      ${isUppercase ? 'uppercase' : 'capitalize'}
      ${isDisabled ? 'opacity-50 cursor-no-drop' : 'cursor-pointer'}
      ${isLoading ? 'pointer-events-none' : ''}`"
      :disabled="isDisabled"
   >
      <a 
         href="#"
         :class="`${isDisabled ? 'cursor-no-drop' : 'cursor-pointer'}`"
      >  
         <template v-if="isLoading">
            <span  class="no-underline flex justify-center items-center">
               <Icon icon="mingcute:loading-fill" :class="`text-${this.iconSize}`" class="animate-spin mr-2"/>
                  Loading...
            </span>  
         </template>

         
         
      </a>
      
      
   </button>
</template>

<style lang="scss"></style>