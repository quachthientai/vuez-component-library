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
  <div class="mt-3">
    <Button btnClass="btn btn-primary" :isLoading="false" text="Primary" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-secondary" :isLoading="false" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-danger" :isLoading="false" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-warning" :isLoading="false" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-info" :isLoading="false" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-success" :isLoading="false" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
  </div>

  <div class="mt-3">
    <Button btnClass="btn btn-outline-primary" :isLoading="true" text="Primary" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-outline-secondary" :isLoading="true" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-outline-danger" :isLoading="true" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-outline-warning" :isLoading="true" text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-outline-info" :isLoading="true" text="Info" iconPosition="left" icon="ph:envelope-bold"></Button>
    <Button btnClass="btn btn-outline-success" :isLoading="true" text="Success" iconPosition="left" icon="ph:envelope-bold"></Button>
  </div>
  

</template>

<style lang="scss">
  
</style>

