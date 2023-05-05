<script>
   import Icon from '../Icon/Icon.vue'
   import { faSpinner } from '@fortawesome/free-solid-svg-icons'
   import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
   library.add(faSpinner);
   
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
         iconName: {
            type: String,
            default: null,
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
         <span>{{ text }}</span>
         <Icon></Icon> 
         <!-- <font-awesome-icon v-if="isLoading" class="ml-[0.4rem]" :icon="['fas', 'spinner']" size="lg" spin/> -->
      </a>
      
      
   </button>
</template>

<style lang="scss"></style>