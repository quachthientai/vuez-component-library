<script lang="ts">
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Icon } from '@iconify/vue';

export default {
  name: 'ButtonView',
  components: {
    Badge,
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
  <Button size="md" class="mt-3" color="success">
    BUTTON
    <Badge :overlay="{vertical: 'top', horizontal: 'right'}" color="danger" content="11" />
  </Button>
  <Button size="md" class="mt-3" color="success">
    BUTTON
    <Badge :overlay="{vertical: 'top', horizontal: 'right'}" color="danger" content="11" />
  </Button>

  

  

  <Button size="md" class="mt-3" color="success">
    BUTTON
    <Badge inline rounded color="danger" content="11" />
  </Button>


  <Button color="plain" class="mt-2" size="md" variant="text">
    <template v-slot:icon>
      <Badge rounded :overlay="{vertical: 'top', horizontal: 'right'}" color="danger" content="1"/>
      <Icon icon="mdi:bell-outline" 
        width="1.3rem" 
        height="1.3rem"
      />
    </template>
  </Button>
<!--
  <Button color="success">
    asd
    <Badge inline color="danger" content="1" />
  </Button>

  <Button color="plain" size="md" variant="text">
    <template v-slot:icon>
      <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
      <Badge rounded color="danger" content="1" />
    </template>
  </Button>

  <Button color="plain" size="md" variant="text">
    <template v-slot:icon>
      <Badge color="danger" rounded content="9" >
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
      </Badge>
    </template>
  </Button>

  <Button color="plain" size="md" class="animate-tada" :icon="{icon: 'mdi:bell-outline', width: '1.5rem', height: '1.5rem'}" variant="text">
    asd
  </Button>

   <Badge class="mr-2" dot color="danger" rounded>
      <Icon icon="mdi-home-outline" width="1.5rem" height="1.5rem" />
   </Badge>

   <Badge class="mr-2" rounded color="danger" content="">
      <Button color="success">asd</Button>
   </Badge>

   <Button color="success" class="m-2">
    asd
    <Badge color="danger" class="absolute top-1 right-1" rounded content="9" />

   </Button>

   <Badge color="danger"  content="11111" /> -->


</template>

<style lang="scss"></style>
