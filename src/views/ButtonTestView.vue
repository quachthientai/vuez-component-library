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
      <Button size="md" class="mr-2" variant="outlined" color="primary">Toggle</Button>
      <Button size="md" class="mr-2" variant="outlined" color="secondary">Toggle</Button>
      <Button size="md" class="mr-2" variant="outlined" color="success">Toggle</Button>
      <Button size="md" class="mr-2" variant="outlined" color="danger">Toggle</Button>
      <Button size="md" class="mr-2" variant="outlined" color="warning">Toggle</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="md" class="mr-2" color="primary">Toggle</Button>
      <Button size="md" class="mr-2" color="secondary">Toggle</Button>
      <Button size="md" class="mr-2" color="success">Toggle</Button>
      <Button size="md" class="mr-2" color="danger">Toggle</Button>
      <Button size="md" class="mr-2" color="warning">Toggle</Button>
   </div>

   <div class="flex justify-start mt-2">
      <Button size="md" class="mr-2" variant="text" color="primary">Toggle</Button>
      <Button size="md" class="mr-2" variant="text" color="secondary">Toggle</Button>
      <Button size="md" class="mr-2" variant="text" color="success">Toggle</Button>
      <Button size="md" class="mr-2" variant="text" color="danger">Toggle</Button>
      <Button size="md" class="mr-2" variant="text" color="warning">Toggle</Button>
   </div>
</template>

<style lang="scss"></style>
