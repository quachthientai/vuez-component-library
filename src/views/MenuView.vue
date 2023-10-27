<script lang="ts">

import { Menu } from '@/components/Menu/Menu'
import { MenuItem } from '@/components/Menu/MenuItem/MenuItem'
import { Badge } from '@/components/Badge/Badge';
import { h } from 'vue';
import { MenuItemModel } from '@/components/Menu/MenuItem/MenuItemType';

export default {
  name: 'MenuView',
  components: {
    Menu,
    MenuItem,
    Badge
  },
  data() {

    const items: MenuItemModel[] = [
      { label: 'Options', 
        type: 'header', 
        icon: {icon:'mdi:account-outline'}, 
        divider: true 
      },
      { label: 'Profile',
        divider: true,
        badge: () => {
          return h(Badge, {
            inline: true,
            rounded: true,
            color: 'danger',
            label: '1'
          })
        },
      },
      { label: 'Profile',
        divider: true,
        badge: {
          label: '1',
          color: 'primary',
          inline: true,
          rounded: true
        },
      },
      { label: 'Profile',
        divider: true,
        badge: (() => {
          return this.test()
        }),
      }
      
    ]
    return {
      items
    }
  },
  methods: {
    test() {
      return h(Badge, {
        inline: true,
        rounded: true,
        color: 'primary',
        label: '1'
      })
    }
  }
}
</script>
<template>
  <!-- <MenuItem type="item" 
    :icon="{icon: 'mdi:account-outline' }" 
    :badge="this.test"
    label="Navigation"
    divider 
  />

  <MenuItem type="item">
    <template v-slot:icon>
      <Icon icon="mdi:account-outline" width="1.3rem" height="1.3rem"></Icon>
    </template>
    asd
    <template v-slot:badge>
      <Badge inline rounded label="1" color="danger" />
    </template>
  </MenuItem> -->
  <!-- <Menu :model="items" class="ml-[500px]" />
  
  <Menu>
    <MenuItem v-for="item in items" 
      :type="item.type"
      :icon="item.icon"
      :badge="item.badge"
      :divider="item.divider"
      :label="item.label"  
    />
  </Menu> -->

  <Menu>
    <MenuItem type="header" label="Options" />
    <MenuItem type="item" label="Profile">
      <template v-slot:icon>
        <Icon icon="mdi:account-outline" width="1.3rem" height="1.3rem" />
      </template>
      
    </MenuItem>
    <MenuItem type="item" label="Setting" divider>
      <template v-slot:icon>
        <Icon icon="mdi:cog-outline" width="1.3rem" height="1.3rem" />
      </template>
      <template v-slot:badge>
        <Badge inline rounded content="1" color="danger" />
      </template>
    </MenuItem>

    

    <MenuItem type="header" label="Navigation" />

    <MenuItem type="item" label="Website">
      <template v-slot:icon>
        <Icon icon="mdi:link-variant" width="1.3rem" height="1.3rem" />
      </template>
    </MenuItem>

    <MenuItem type="item" label="Upload">
      <template v-slot:icon>
        <Icon icon="mdi:tray-arrow-up" width="1.3rem" height="1.3rem" />
      </template>
    </MenuItem>

  </Menu>


  
</template>

<style lang="scss"></style>
