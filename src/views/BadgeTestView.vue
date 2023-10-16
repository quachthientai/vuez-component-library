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
  

  
  <Button color="success">
    asd
    <Badge inline color="danger" content="1" />
  </Button>

   <Badge class="mr-2" dot color="danger" rounded>
      <Icon icon="mdi-home-outline" width="1.5rem" height="1.5rem" />
   </Badge>

   <Badge class="mr-2" rounded color="danger" content="">
      <Button color="success">asd</Button>
   </Badge>


   <Badge class="mr-2" color="secondary" text="Secondary"></Badge>
   <Badge class="mr-2" color="success" text="Success"></Badge>
   <Badge class="mr-2" color="warning" text="Warning"></Badge>
   <Badge class="mr-2" color="danger" text="Danger"></Badge>
   <Badge class="mr-2" color="info" text="Info"></Badge>
   <Badge class="mr-2" color="plain" text="Plain"></Badge>

</template>

<style lang="scss"></style>
