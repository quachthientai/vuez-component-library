<script >
   export default {
      name: 'Button',
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
   <button class="uppercase" :class="`${btnClass} 
                   ${isUppercase ? 'uppercase' : ''}`" >
      <a href="#">
         <slot />
      </a>
   </button>
</template>

<style lang="scss"></style>