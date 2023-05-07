<script>
   import Button from '@/components/Button/Button.vue'
   
   export default {
      name: 'Button',
      components: {
        Button
      },
      errorCaptured(err, component, info) {
        console.log("An error occured: ",err, component, info)
      },
      beforeCreate() {
        debugger;
      }
   }
</script>

<template>
  <Button>asd</Button>
</template>

<style lang="scss"></style>