<script>
   // import Icon from '../src/components/Icon/Icon.vue'
   export default {
      name: 'Icon',
      props: {
         iconType:{
            type: String, //fa fas fad fal fat
            default: '',
            required: true
         },
         iconName: {
            type: String,
            default: '',
            required: true 
         }

      }
   }

</script>

<template>
   <span>

   </span>
</template>

<style lang="scss"></style>