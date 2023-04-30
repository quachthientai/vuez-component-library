<script>
  import Button from '../src/components/Button/Button.vue'
  
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
  <!-- <Button :isUppercase="true" :isLoading="true" btnClass="btn btn-primary" text="primary"></Button> -->
  <Button icon="fa-solid fa-check fa-spin" btnClass="btn btn-primary" :isLoading="true" text="icon"></Button>
  <!-- <Button :isDisabled="true" btnClass="btn btn-secondary" text="secondary"></Button>
  <Button btnClass="btn btn-warning" text="warning"></Button>
  <Button btnClass="btn btn-danger" text="danger"></Button> -->
  

</template>

<style lang="scss">
  
</style>

