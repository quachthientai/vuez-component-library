<script>
  import Button from "@/components/Button/Button.vue";
  import 'vue-awesome/Icons'
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
  <Button :isUppercase="true" btnClass="btn btn-primary">Primary</Button>
  <Button :isDisabled="true" btnClass="btn btn-secondary btn-sm">Primary</Button>
  <Button btnClass="btn btn-warning">Primary</Button>
  <Button btnClass="btn btn-danger">Primary</Button>
  

</template>

<style lang="scss">
  
</style>

