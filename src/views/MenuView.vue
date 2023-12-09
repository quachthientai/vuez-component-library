<script lang="ts">

import { MenuList } from '@/components/Menu/MenuList'
import { Menu } from '@/components/Menu/Menu'
import { MenuItem } from '@/components/Menu/MenuItem/MenuItem'
import { MenuButton } from '@/components/Menu/MenuButton'
import { Badge } from '@/components/Badge/Badge';
import { h, ref } from 'vue';
import { MenuItemModel } from '@/components/Menu/MenuItem/MenuItemType';
import { useRouter } from 'vue-router';



export default {
  name: 'MenuView',
  components: {
    Menu,
    MenuList,
    MenuButton,
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
      {content: 'VUEZUI',
        type: 'header',
        divider:true},
      { content: 'Documents',
        type: 'header', 
        
      },
      { content: 'New',
        icon: {
          icon: 'mdi:plus',
        }
      },
      { content: 'Search',
        icon: {
          icon: 'mdi:magnify',
        },
        divider: true,
      },
      { content: 'Search',
        icon: {
          icon: 'mdi:magnify',
        },
        divider: true,
      },
      { content: 'Settings',
        type: 'header', 
      },
      { content: 'Profile',
        icon: {
          icon: 'mdi:account-outline',
        },

        badge: (() => {
          return this.test();
        }),
        action: (() => {
          
        })  
      },
      { content: 'Logout',
        icon: {
          icon: 'mdi:logout',
        },
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
      // // console.log(this.$refs.menu)
      // this.$refs.menu.toggle(e)
    },

  }
}
</script>
<template>
  <!-- <div class="m-3">
    <Button :elevation="3" id="testToggler" color="secondary">BUTTON</Button>
    
  </div> -->
  
  

  <Menu>
    <MenuList class="mt-1" placement="bottom" :model="items" />

    <MenuButton :icon="{icon: 'mdi-account'}" color="primary">
      SMALL BUTTON
    </MenuButton>
    <!-- <MenuButton :elevation="4" color="secondary">BUTTON</MenuButton> -->
    <!-- <MenuList ref="menu" class="mt-1"  :model="items" /> -->
  </Menu>

  
  
    <!-- <template #toggler><Button :elevation="3" id="testToggler" color="secondary">BUTTON</Button></template> -->
  
  <!-- <MenuItem type="item" 
    :icon="{icon: 'mdi:account-outline' }" 
    :badge="this.test"
    content="Navigation"
    divider 
  /> -->
  
    
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
