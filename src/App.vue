<script>
  import {RouterLink, RouterView} from 'vue-router';
  import Button from './components/Button/Button.vue';
  import Checkbox from './components/Forms/Checkbox.vue';

  export default {
    data() {
      return {
        title: "Hello world!"
      }
    },
    components: {
      Button,
      Checkbox
    },
    methods: {
      handleClick() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('dark')
      }
    }
  }
</script>

<template>
  
    <div class="test">
      <Button btnClass="btn btn-primary" text="toggle" @click="handleClick" />
      
      <Checkbox class="mt-3 ms-3" checkboxClass="checkbox checkbox-primary" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis corrupti esse, molestiae odit beatae magni veniam, explicabo modi eligendi laboriosam commodi officiis, excepturi atque corporis dicta tenetur sint velit?
    </div>
 
  

  <div class="mt-3 ms-3">
    <router-link to="/">Home</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/badge">Badge</router-link> |
    <router-link to="/dropdown">Dropdown</router-link> |
    <router-link to="/switch">Switch Button</router-link> |
    <router-link to="/button-group">Button Group</router-link> |
    <router-link to="/checkbox">Checkbox</router-link> |
    <router-link to="/radio">Radio</router-link> |
  </div>
  <router-view />
  
</template>

<style lang="scss" scoped>
  
  .test {
    @apply mt-3 ms-3 border-2 text-dark border-red-400 bg-light dark:text-white dark:bg-dark;
  }

  
</style>

