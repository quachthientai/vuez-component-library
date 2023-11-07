<script lang="ts">

import { Menu } from '@/components/Menu/Menu'
import { MenuItem } from '@/components/Menu/MenuItem/MenuItem'
import { Badge } from '@/components/Badge/Badge';
import { h, ref } from 'vue';
import { MenuItemModel } from '@/components/Menu/MenuItem/MenuItemType';
import { useRouter } from 'vue-router';



export default {
  name: 'MenuView',
  components: {
    Menu,
    MenuItem,
    Badge
  },
  mounted() {
    // console.log(this.$refs.menu.value)
  },
  data() {
    const router = useRouter();
    // const menu = ref<InstanceType<typeof Menu> | null>(null);

    const items: MenuItemModel[] = [
      { content: 'Options',
        type: 'header', 
        divider: true
      },
      { content: 'test',
        disabled: true,
        divider: true,
      },
      // { label: 'Profile',
      //   divider: true,
      //   badge: {
      //     content: '1',
      //     color: 'primary',
      //     inline: true,
      //     rounded: true
      //   },
      // },
      { content: 'Profile',
        
        divider: true,
        badge: (() => {
          return this.test();
        }),
        action: (() => {
          
        })  
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
        content: '1'
      })
    },
    testEvent(e) {
      console.log(e)
    },

  }
}
</script>
<template>
  <!-- <MenuItem type="item" 
    :icon="{icon: 'mdi:account-outline' }" 
    :badge="this.test"
    content="Navigation"
    divider 
  /> -->

  <Button id="menu-active" @click="(e) => this.testEvent(e)" class="mr-2"  variant="outlined" color="secondary" >BUTTON</Button>
  <!-- <Menu ref="menu" :model="items"></Menu> -->
    
  <!-- <Menu>
    <MenuItem v-for="item in items"
      :icon=item.icon
      :badge=item.badge
      :type=item.type
      :label=item.label
      :divider=item.divider
      :disabled=item.disabled
      @itemAction="item.action"
    ></MenuItem>
  </Menu> -->
  <!-- <Menu :model="items"></Menu> -->
  <!-- <MenuItem type="item">
    <template v-slot:icon>
      <Icon icon="mdi:account-outline" width="1.3rem" height="1.3rem"></Icon>
    </template>
    asd
    <template v-slot:badge>
      <Badge inline rounded content="1" color="danger" />
    </template>
  </MenuItem> -->
  
  

  <!-- <Menu>
    <MenuItem type="header" label="Options" />
    <MenuItem type="item" disabled label="Profile">
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

  </Menu> -->


  
</template>

<style lang="scss"></style>
