<script>
   import Button from '@/components/Button/Button.vue';

   export default {
      name: 'Button Group',
      components: {
         Button
      },
      props: {
         btnClass: {
            type: String,
            default: null,
            required: true,
         }
      }
   }
</script>

<template>
   <div>
      
   </div>
</template>

<style lang="scss"></style>