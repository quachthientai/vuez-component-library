<script>
  import HomeView from '@/views/HomeView.vue'
  import ButtonView from '@/views/ButtonView.vue'
  import Button from '@/components/Button/Button.vue'
  import {RouterLink, RouterView} from 'vue-router'

  export default {
    data() {
      return {
        title: "Hello world!"
      }
    },
    components: {
      Button,
      ButtonView,
      HomeView
    }
  }
</script>

<template>
  <div>
    <Button btnClass="btn btn-primary" text="Button View"></Button>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/button">Contact</RouterLink>
    <!-- <RouterLink to="/button">Button</RouterLink> -->
  </div>
  <RouterView />
  
</template>

<style lang="scss">
  
</style>

