<script>
  import {RouterLink, RouterView} from 'vue-router'

  export default {
    data() {
      return {
        title: "Hello world!"
      }
    }
  }
</script>

<template>
  <div class="mt-3 ms-3">
    <router-link to="/">Home</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/dropdown">Dropdown</router-link> |
    <router-link to="/switch">Switch Button</router-link> |
    <router-link to="/button-group">Button Group</router-link> |
    <router-link to="/radio">Radio</router-link> |
  </div>
  <router-view />
  
</template>

<style lang="scss">
  
</style>

