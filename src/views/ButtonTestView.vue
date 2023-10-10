<script lang="ts">
import { Button } from '@/components/Button/Button';

export default {
  name: 'ButtonView',
  components: {
    Button
  }
}
</script>

<template>
   <div class="flex justify-start mt-2">
      <Button size="sm" :loading="true" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}"  class="mr-2" variant="outlined" color="primary">BUTTON</Button>
      
      <Button size="md" :loading="true" :prependIcon="{icon: 'mdi-check-circle'}"  class="mr-2" variant="outlined" color="secondary" ></Button>

      <Button size="md"  :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" variant="outlined" color="secondary" >BUTTON</Button>
      
      <Button size="lg" :loading="true" :prependIcon="{icon: 'mdi-check-circle'}" :appendIcon="{icon: 'mdi-check-circle'}" class="mr-2" variant="outlined" color="success">LARGE BUTTON</Button>

      <Button size="md" class="mr-2" variant="outlined" color="danger">BUTTON</Button>
      <Button size="md" class="mr-2" variant="outlined" color="warning">BUTTON</Button>
      <Button size="md" class="mr-2" variant="outlined" color="info">BUTTON</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="sm" class="mr-2" color="primary">SMALL BUTTON</Button>
      <Button size="md" class="mr-2" color="secondary">REGULAR BUTTON</Button>
      <Button size="lg" class="mr-2" color="success">LARGE BUTTON</Button>
      <Button size="md" class="mr-2" color="danger">BUTTON</Button>
      <Button size="md" class="mr-2" color="warning">BUTTON</Button>
      <Button size="md" class="mr-2" color="info">BUTTON</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="sm" class="mr-2" variant="text" color="primary">SMALL BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="secondary">REGULAR BUTTON</Button>
      <Button size="lg" class="mr-2" variant="text" color="success">LARGE BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="danger">BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="warning">BUTTON</Button>
      <Button size="md" class="mr-2" variant="text" color="info">BUTTON</Button>
   </div>
</template>

<style lang="scss"></style>
