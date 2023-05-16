<script>
  import HomeView from '@/views/HomeView.vue'
  import ButtonView from '@/views/ButtonView.vue'
  import Button from '@/components/Button/Button.vue'
  import Badge from '@/components/Badge/Badge.vue'
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
      HomeView,
      Badge
    }
  }
</script>

<template>
  <div class="mt-3 ms-3">
    <router-link to="/">Home</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/buttonGroup">Button Group</router-link> |
    <router-link to="/switchButton"> Switch Button</router-link>
  </div>
  <router-view />
  
</template>

<style lang="scss">
  
</style>

