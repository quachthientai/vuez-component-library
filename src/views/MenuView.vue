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
        {content: 'asd',
        prependIcon: {
          icon: 'mdi:account-outline'
        },}
        
      ]
    }
  }
}
</script>
<template>
<!--   
  <Menu :model="items">
    <template v-slot:append>
      <Badge inline content="9" color="danger" />
    </template>
  </Menu> -->

  <Menu>
    <MenuItem type="header" content="Options" />
    <MenuItem type="item" content="Profile">
      <template v-slot:prepend>
        <Icon icon="mdi:account-outline" width="1.3rem" height="1.3rem" />
      </template>
      
    </MenuItem>
    <MenuItem type="item" content="Setting">
      <template v-slot:prepend>
        <Icon icon="mdi:cog-outline" width="1.3rem" height="1.3rem" />
      </template>
      <template v-slot:append>
        <Badge inline rounded content="1" color="danger" />
      </template>
    </MenuItem>
    <hr/>
    <MenuItem type="header" content="Navigation" />
    <MenuItem type="item" content="Website">
      <template v-slot:prepend>
        <Icon icon="mdi:link-variant" width="1.3rem" height="1.3rem" />
      </template>
    </MenuItem>
    <MenuItem type="item" content="Upload">
      <template v-slot:prepend>
        <Icon icon="mdi:tray-arrow-up" width="1.3rem" height="1.3rem" />
      </template>
    </MenuItem>
  </Menu>
  <!-- <MenuItem 
    type="title"
    content="Menu"
    class="m-3"
    tag="a">
  </MenuItem> -->
  <!-- <div style="border: red 1px solid; height: 70px;" class="relative">
    
    
  </div> -->

  
</template>

<style lang="scss"></style>
