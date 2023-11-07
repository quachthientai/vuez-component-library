<script >
// import { Button } from '@/components/Button/Button';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

export default {
  name: 'ButtonView',
  components: {
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
      <Button
         :loading="loading"
         
         class="mr-2" 
         variant="outlined" 
         color="primary"
         @click="(e) => console.log(e)"
      >
         BUTTON
      </Button>
      <Button class="mr-2" variant="outlined" color="secondary" >BUTTON</Button>
      <Button class="mr-2" variant="outlined" color="success">BUTTON</Button>
      <Button class="mr-2" variant="outlined" color="danger">BUTTON</Button>
      <Button class="mr-2" variant="outlined" color="warning">BUTTON</Button>
      <Button class="mr-2" variant="outlined" color="info">BUTTON</Button>
      <Button class="mr-2" variant="outlined">BUTTON</Button>

      <Button :loading="loading"
         @click="load" 
         class="mr-2" 
         variant="outlined" 
         :icon="{icon: 'mdi-account'}" 
      />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="info" />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="warning" />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="danger" />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="success" />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="secondary" />
      <Button class="mr-2" variant="outlined" :icon="{icon: 'mdi-account'}" color="primary" />
      
   </div>

   <div class="flex justify-start mt-2">
      <Button :loading="loading"
         @click="load" 
         :elevation="3" 
         class="mr-2" 
         color="primary">BUTTON
      </Button>
      <Button :elevation="3" class="mr-2" color="secondary">BUTTON</Button>
      <Button :elevation="3" class="mr-2" color="success">BUTTON</Button>
      <Button :elevation="3" class="mr-2" color="danger">BUTTON</Button>
      <Button :elevation="3" class="mr-2" color="warning">BUTTON</Button>
      <Button :elevation="3" class="mr-2" color="info">BUTTON</Button>
      <Button :elevation="3" class="mr-2">BUTTON</Button>

      <Button :loading="loading"
         @click="load"
         :elevation="3" 
         class="mr-2" 
         :icon="{icon: 'mdi-account'}" 
      />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="info" />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="warning" />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="danger" />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="success" />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="secondary" />
      <Button :elevation="3" class="mr-2" :icon="{icon: 'mdi-account'}" color="primary" />
   </div>

   <div class="flex justify-start mt-3">
      <Button :loading="loading"
         @click="load" 
         class="mr-2" 
         variant="text" 
         color="primary">BUTTON
      </Button>
      <Button class="mr-2" variant="text" color="secondary">BUTTON</Button>
      <Button class="mr-2" variant="text" color="success">BUTTON</Button>
      <Button class="mr-2" variant="text" color="danger">BUTTON</Button>
      <Button class="mr-2" variant="text" color="warning">BUTTON</Button>
      <Button class="mr-2" variant="text" color="info">BUTTON</Button>
      <Button class="mr-2" variant="text">BUTTON</Button>

      <Button :loading="loading"
         @click="load"
         class="mr-2" 
         variant="text" 
         :icon="{icon: 'mdi-account'}" 
      />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="info" />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="warning" />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="danger" />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="success" />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="secondary" />
      <Button class="mr-2" variant="text" :icon="{icon: 'mdi-account'}" color="primary" />
   </div>

   <div class="flex justify-start mt-3">
      <Button size="sm" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" >SMALL BUTTON</Button>
      <Button size="md" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" >REGULAR BUTTON</Button>
      <Button size="lg" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" >LARGE BUTTON</Button>

      <Button size="lg" class="mr-2" :elevation="3" :icon="{icon: 'mdi-account'}" color="primary" >SMALL BUTTON</Button>
      <Button size="md" class="mr-2" :elevation="3" :icon="{icon: 'mdi-account'}" color="primary" >REGULAR BUTTON</Button>
      <Button size="sm" class="mr-2" :elevation="3" :icon="{icon: 'mdi-account'}" color="primary" >LARGE BUTTON</Button>
   </div>

   <div class="flex justify-start mt-3">
      <Button size="sm" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="outlined" >SMALL BUTTON</Button>
      <Button size="md" :prependIcon="{icon: 'mdi-check-circle' }" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="outlined" >REGULAR BUTTON</Button>
      <Button size="lg" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="outlined" >LARGE BUTTON</Button>

      <Button size="lg" class="mr-2" :elevation="3" variant="outlined" :icon="{icon: 'mdi-account'}" color="primary" >SMALL BUTTON</Button>
      <Button size="md" class="mr-2" :elevation="3" variant="outlined" :icon="{icon: 'mdi-account'}" color="primary" >REGULAR BUTTON</Button>
      <Button size="sm" class="mr-2" :elevation="3" variant="outlined" :icon="{icon: 'mdi-account'}" color="primary" >LARGE BUTTON</Button>
   </div>

   <div class="flex justify-start mt-3">
      <Button size="sm" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="text" >SMALL BUTTON</Button>
      <Button size="md" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="text" >REGULAR BUTTON</Button>
      <Button size="lg" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" :elevation="3" color="primary" variant="text" >LARGE BUTTON</Button>

      <Button size="lg" class="mr-2" :elevation="3" variant="text" :icon="{icon: 'mdi-account'}" color="primary" >SMALL BUTTON</Button>
      <Button size="md" class="mr-2" :elevation="3" variant="text" :icon="{icon: 'mdi-account'}" color="primary" >REGULAR BUTTON</Button>
      <Button size="sm" class="mr-2" :elevation="3" variant="text" :icon="{icon: 'mdi-account'}" color="primary" >LARGE BUTTON</Button>
   </div>
</template>

<style lang="scss"></style>
