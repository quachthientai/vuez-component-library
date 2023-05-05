<script>
   import { Icon } from '@iconify/vue'
   export default {
      name: 'Button',
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
            default: null
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
            type: String,
            default: '',
         },
         isLoading: {
            type: Boolean,
            default: false,
         },
      },
      computed: {
         computedIconSize: function() {
            return this.btnClass.includes('btn-sm') ? 'text-sm' : this.btnClass.includes('btn-lg') ? 'text-2xl' : 'text-lg'
         },
         computedIconPosition: function() {
            return this.iconPosition === 'right' ? 'order-last ml-1' : 'order-first mr-1'
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
               <Icon icon="mingcute:loading-fill" :class=[computedIconSize,computedIconPosition] class="animate-spin"/>
                  Loading...
            </span>  
         </template>

         <template v-else>
            <span class="no-underline flex justify-center items-center">
               {{ text }}
               <Icon v-if="icon" :icon="icon" :class=[computedIconSize,computedIconPosition] />
            </span>
         </template>
      </a>
      
      
   </button>
</template>

<style lang="scss"></style>