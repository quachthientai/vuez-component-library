<script >
import { Button } from '@/components/Button/Button';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

export default {
  name: 'ButtonView',
  components: {
    Button,
    Icon
  },
  data() {
   return {
      loading: false
   }
  },
  methods: {
   load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
   }
  }
}
</script>

<template>
   <div class="flex justify-start mt-2">
      <Button size="sm" 
         :loading="loading"
         @click="load"
         :prependIcon="{icon: 'mdi-check-circle'}" 
         :appendIcon="{icon: 'mdi-check-circle'}"  
         class="mr-2" 
         variant="outlined" 
         color="primary"
      > 
         BUTTON
      </Button>
      
      <Button size="md" :disabled="true"  :prependIcon="{icon: 'mdi-check-circle'}"  class="mr-2" variant="outlined" color="secondary" ></Button>

      <Button size="md"  :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" variant="outlined" color="secondary" >BUTTON</Button>
      
      <Button size="lg" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" variant="outlined" color="success">LARGE BUTTON</Button>

      <Button size="md" class="mr-2" variant="outlined" color="danger">BUTTON</Button>
      <Button size="md" class="mr-2" variant="outlined" color="warning">BUTTON</Button>
      <Button size="md" class="mr-2" variant="outlined" color="info">BUTTON</Button>
      <Button size="md" :elevation="3" variant="outlined" class="mr-2" color="plain">BUTTON</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="sm" :elevation="3" class="mr-2 shadow-elevation-3" color="primary">SMALL BUTTON</Button>
      <Button size="md" :elevation="3" class="mr-2" color="secondary">REGULAR BUTTON</Button>
      <Button size="lg" :disabled="true"  href="" :elevation="3" class="mr-2" color="success">LARGE BUTTON</Button>
      <Button size="md" :elevation="3" class="mr-2" color="danger">BUTTON</Button>
      <Button size="md" :elevation="3" class="mr-2" color="warning">BUTTON</Button>
      <Button size="md" :elevation="3" class="mr-2" color="info">BUTTON</Button>
      <Button :elevation="1" class="mr-2" >BUTTON</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="sm" class="mr-2" variant="text" color="primary">SMALL BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="secondary">REGULAR BUTTON</Button>
      <Button size="lg" class="mr-2" variant="text" color="success">LARGE BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="danger">BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="warning">BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="info">BUTTON</Button>
      <Button size="md"  class="mr-2" variant="text" color="plain">BUTTON</Button>

      
   </div>

   <div class="flex justify-start mt-2">
      <Button size="md" text="REGULAR BUTTON" :elevation="3" class="mr-2" color="warning"></Button>

      <Button size="sm" class="mr-2" :elevation="5" :icon="{icon: 'mdi-account'}" color="plain">a</Button>

      <Button class="mr-2" :loading="loading" @click="load" :elevation="5" :icon="{icon: 'mdi-account'}" color="secondary">a</Button>

      <Button size="lg" href="/button" :elevation="5" class="mr-2" :icon="{icon: 'mdi-account'}" color="success">a</Button>
      

      <Button size="lg" :elevation="5" variant="text" class="mr-2" :icon="{icon: 'mdi-account'}" color="plain">a</Button>

      <Button size="lg" :elevation="4" class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" :block="true" color="plain">asdasdasd</Button>
      <Button size="lg" :elevation="5" class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" :block="true" color="plain">asdasdasd</Button>
   </div>
</template>

<style lang="scss"></style>
