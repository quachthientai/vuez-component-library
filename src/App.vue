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
    <Badge text="4"  badgeClass="badge badge-danger"></Badge>
    <Badge text="Primary" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-primary"></Badge>
    <Badge text="Warning" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-warning"></Badge>
    <Badge text="Success" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-success"></Badge>
    <Badge text="Secondary" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-secondary"></Badge>
    <Badge text="Info" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-info"></Badge>

    <Badge text="Danger" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-danger"></Badge>
    <Badge text="Primary" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-primary"></Badge>
    <Badge text="Warning" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-warning"></Badge>
    <Badge text="Success" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-success"></Badge>
    <Badge text="Secondary" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-secondary"></Badge>
    <Badge text="Info" icon="material-symbols:star-outline-rounded" badgeClass="badge badge-pill-info"></Badge>

    <router-link to="/">Home</router-link> |
    
    <router-link to="/button">Button</router-link> |
    
    
  </div>
  <router-view />
  
</template>

<style lang="scss">
  
</style>

