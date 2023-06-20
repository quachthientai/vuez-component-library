<script>
  import {RouterLink, RouterView} from 'vue-router';
  import Button from './components/Button/Button.vue';
  import Radio from './components/Forms/Radio.vue';

  export default {
    data() {
      return {
        title: "Hello world!"
      }
    },
    components: {
      Button,
      Radio
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
  
    <Button btnClass="btn btn-primary" text="toggle" @click="handleClick" />
      
      <Radio radioClass="radio radio-primary" />
      <Radio radioClass="radio radio-success" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis corrupti esse, molestiae odit beatae magni veniam, explicabo modi eligendi laboriosam commodi officiis, excepturi atque corporis dicta tenetur sint velit?
      
   
    
  
    <div class="mt-3 ms-3">
      <router-link to="/">Home</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/badge">Badge</router-link> |
      <router-link to="/dropdown">Dropdown</router-link> |
      <router-link to="/switch">Switch Button</router-link> |
      <router-link to="/button-group">Button Group</router-link> |
      <router-link to="/checkbox">Checkbox</router-link> |
      <router-link to="/radio">Radio</router-link> |
      <router-link to="/toast">Toast</router-link> 
    </div>
    
    <router-view/>
  
    
   
  
  
  
</template>

<style lang="scss" scoped>
  
  

  
</style>

