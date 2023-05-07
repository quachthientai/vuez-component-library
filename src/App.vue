<script>
  import Button from '@/components/Button/Button.vue'
  import ButtonView from './views/ButtonView.vue'
  import {RouterLink, RouterView} from 'vue-router'
  export default {
    data() {
      return {
        title: "Hello world!"
      }
    },
    components: {
      Button,
      ButtonView
    }
  }
</script>

<template>
  <nav>
    <Button btnClass="btn btn-primary" icon="mdi:gesture-tap-button" text="Button View"></Button>
    <RouterLink to="/" >Button </RouterLink>
    
  </nav>
  <RouterView />
  
</template>

<style lang="scss">
  
</style>

