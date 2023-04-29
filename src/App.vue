<script>
  import Button from "@/components/Button/Button.vue";
  export default {
    data() {
      return {
        title: "Hello world!"
      }
    },
    components: {
      Button
    }
  }
</script>

<template>
  <Button isCapitalize="true" btnClass="btn btn-primary btn-lg">Primary</Button>
  <Button btnClass="btn btn-secondary btn-sm">Primary</Button>
  <Button btnClass="btn btn-warning">Primary</Button>
  <Button btnClass="btn btn-danger">Primary</Button>
  

</template>

<style lang="scss">
  
</style>

