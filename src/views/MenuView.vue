<script lang="ts">
import { Input } from '@/components/Input/Input'
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
    Badge,
    Input
  },
  mounted() {
    // console.log(this.$refs.menu.value)
  },
  data() {
    const router = useRouter();
    // const menu = ref<InstanceType<typeof Menu> | null>(null);

    const items: MenuItemModel[] = [
      {
        content: 'VUEZUI',
        type: 'header',
        divider:true
      },
      { 
        content: 'Documents',
        type: 'header', 
      },
      { 
        content: 'New',
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
        // disabled: true,
        badge: (() => {
          return this.test();
        }),
        action: ((e) => {
          console.log(e)
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
  <Input placeholder="Please enter password"></Input>
  <!-- <Menu :closeOnSelect="false">
    <MenuButton :icon="{icon: 'mdi-account'}" color="primary"></MenuButton>
    <MenuList :model="items"/>
  </Menu>


  <Menu>
    <MenuButton :icon="{icon: 'mdi-account'}" color="primary"></MenuButton>
    <MenuList>
      <MenuItem v-for="item in items"
        :content="item.content"
        :icon="item.icon"
        :badge="item.badge"
        :divider="item.divider"
        :type="item.type"
        :href="item.href"
        @onItemAction="item.action"
      /> 
    </MenuList>
  </Menu>

  <Menu  class="ml-[500px]">
    <MenuButton :icon="{icon: 'mdi-account'}" color="primary"></MenuButton>
    <MenuList :model="items"/>

  </Menu> -->


</template>

<style lang="scss"></style>
