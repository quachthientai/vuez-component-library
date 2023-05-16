<script>
   import Button from '@/components/Button/Button.vue';

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
   <Button :text="text" :btnClass="dropDownClass" iconPosition="right" icon="octicon:chevron-down-12">
      
   </Button>
</template>

<style lang="scss"></style>