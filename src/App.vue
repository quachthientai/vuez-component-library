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
    <router-link to="/dropdown">DropDowns</router-link> |
  </div>
  <router-view />
  
</template>

<style lang="scss">
  
</style>

