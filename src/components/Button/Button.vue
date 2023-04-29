<script>
   import Icon from 'vue-awesome/components/Icon'
   export default {
      name: 'Button',
      components: {
         'v-icon': Icon
      },
      props: {
         text: {
            type: String,
            default: ''
         },
         icon: {
            type: Object,
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
            type: String, //btn-sm btn-regular btn-large
            default: ''
         }

      }
   }

</script>

<template>
   <button 
      :class="`
      ${btnClass} 
      ${isUppercase ? 'uppercase' : ''}
      ${isDisabled ? 'opacity-40 cursor-no-drop' : ''}
      ${isLoading ? 'pointer-events-none' : ''}`"
      :disabled="isDisabled"
   >
      <a 
         href="#"
         class="no-underline"
         :class="`${isDisabled ? 'cursor-no-drop' : ''}`"
      >
         <slot />
      </a>
   </button>
</template>

<style lang="scss"></style>