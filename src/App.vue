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
  <Button btnClass="btn btn-lg btn-primary" :isLoading="true" icon="mingcute:loading-3-fill"></Button>
  
  

</template>

<style lang="scss">
  
</style>

