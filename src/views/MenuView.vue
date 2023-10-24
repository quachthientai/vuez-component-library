<script lang="ts">
import { Menu } from '@/components/Menu/Menu'
import { MenuItem } from '@/components/Menu/MenuItem'
import { Badge } from '@/components/Badge/Badge';

export default {
  name: 'MenuView',
  components: {
   Menu,
   MenuItem,
   Badge
  },
  data() {
    return {
      items: [
        {content: 'asd'}
        
      ]
    }
  }
}
</script>
<template>
  
  <Menu :model="items">
    <template v-slot:append>
      <Badge inline content="9" color="danger" />
    </template>
  </Menu>


  <!-- <MenuItem 
    :prependIcon="{
      icon: 'mdi:account-outline'
    }" 
    content
    class="m-3"
    divider
    tag="a">
  </MenuItem> -->
  <!-- <div style="border: red 1px solid; height: 70px;" class="relative">
    
    
  </div> -->

  
</template>

<style lang="scss"></style>
