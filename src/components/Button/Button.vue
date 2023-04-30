<script>
   // import Icon from '../src/components/Icon/Icon.vue'
   import { faSpinner } from '@fortawesome/free-solid-svg-icons'
   import { library } from '@fortawesome/fontawesome-svg-core'
   library.add(faSpinner);

   export default {
      name: 'Button',
      props: {
         text: {
            type: String,
            default: ''
         }, 
         icon: {
            type: String,
            default: '',
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
            type: String, //btn-sm btn-regular btn-large
            default: ''
         },
         isLoading: {
            type: Boolean,
            default: false
         }

      }
   }

</script>

<template>
   <button 
      :class="`
      ${btnClass} 
      ${isUppercase ? 'uppercase' : 'capitalize'}
      ${isDisabled ? 'opacity-40 cursor-no-drop' : 'cursor-pointer'}
      ${isLoading ? 'pointer-events-none' : ''}`"
      :disabled="isDisabled"
   >
      <a 
         href="#"
         class="no-underline" 
         :class="`${isDisabled ? 'cursor-no-drop' : 'cursor-pointer'}`"
      >
         <span>{{ text }}</span>
         <font-awesome-icon v-if="isLoading" class="ml-[0.4rem]" :icon="['fas', 'spinner']" size="lg" spin/>
      </a>
      <!-- <font-awesome-icon icon='fa-solid fa-user-secret' spin />   -->
   </button>
</template>

<style lang="scss"></style>