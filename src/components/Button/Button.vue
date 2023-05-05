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
         iconName: {
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
            type: String,
            default: ''
         },
         isLoading: {
            type: Boolean,
            default: false,
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
         class="no-underline" 
         :class="`${isDisabled ? 'cursor-no-drop' : 'cursor-pointer'}`"
      >
         <span>{{ text }}</span>
         <Icon v-if="isLoading" class="animate-spin" :icon="iconName"></Icon> 
         <!-- <font-awesome-icon v-if="isLoading" class="ml-[0.4rem]" :icon="['fas', 'spinner']" size="lg" spin/> -->
      </a>
      <!-- <font-awesome-icon icon='fa-solid fa-user-secret' spin />   -->
      
   </button>
</template>

<style lang="scss"></style>