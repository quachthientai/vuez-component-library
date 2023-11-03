<script lang="ts">
import { Badge } from '@/components/Badge/Badge';
import { Button } from '@/components/Button/Button';
import { Icon } from '@iconify/vue';

export default {
  name: 'ButtonView',
  components: {
    Badge,
    Icon,
    Button
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
  <div class="flex">
    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge inline rounded color="danger" content="9" />
    </Button>

    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge inline color="danger" content="11+" />
    </Button>

    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge inline dot color="success" content="11" />
    </Button>
  </div>

  
  <div  class="mt-3 flex">
    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge overlay rounded color="danger" content="11" />
    </Button>

    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge overlay color="danger" content="11" />
    </Button>

    <Button size="md" :elevation="3" class="m-3" color="plain">
      BUTTON
      <Badge overlay dot color="danger" content="11" />
    </Button>

  </div>

  <div class="mt-3 flex">
    <Button color="plain" size="sm" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1rem" height="1rem" />
        <Badge overlay dot color="danger" content="1" />
      </template>
    </Button>

    <Button color="plain" size="md" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1.3rem" height="1.3rem" />
        <Badge overlay dot color="danger" content="1" />
      </template>
    </Button>

    <Button color="plain" size="lg" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
        <Badge overlay dot color="danger" content="1" />
      </template>
    </Button>
  </div>

  <div class="mt-3 flex">
    <Button color="plain" size="sm" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1rem" height="1rem" />
        <Badge overlay rounded color="danger" content="1" />
      </template>
    </Button>

    <Button color="plain" size="md" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1.3rem" height="1.3rem" />
        <Badge overlay rounded color="danger" content="1" />
      </template>
    </Button>

    <Button color="plain" size="lg" class="m-3" variant="text">
      <template v-slot:icon>
        <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
        <Badge overlay rounded color="danger" content="1" />
      </template>
    </Button>
  </div>


</template>

<style lang="scss"></style>
