<script>
   import Button from '../Button/Button.vue';
   export default {
      name: 'Dropdown',
      components: {
         Button
      },
      props: {
         text: {
            type: String,
            default: null,
         },
         dropDownClass: {
            type: String,
            default: null,
            required: true,
         }
   
         
      }
   }
</script>

<template>
   <Button :text="text" :btnClass="dropDownClass">
      
   </Button>
</template>

<style lang="scss"></style>