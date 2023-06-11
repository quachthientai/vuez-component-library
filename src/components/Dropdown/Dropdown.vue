<script>
   import Button from '@/components/Button/Button.vue';
   import { Icon } from '@iconify/vue';
   

   export default {
      name: 'Dropdown',
      components: {
         Button,
         Icon
      },
      data() {
         return {
            isOpen: false
         }
      },
      props: {
         // [Object] - title, routerName, icon
         //2 options: 1 - pass itemList as array of objects, 2 - pass itemList as slots
         text: {
            type: String,
            default: '',
         },
         dropDownClass: {
            type: String,
            default: 'dropdown dropdown-primary',
            required: true,
         },
         leadingIcon: {
            type: String,
            default: null,
         },
         itemList: {
            type: [Object],
            validator(value) {
               let itemListKey = ["title", "routerName", "prependIcon", "appendIcon"]
               let falseKey = []

               for(const i of value) {
                  for (const key in i) {
                     if(itemListKey.indexOf(key) > -1) {
                        continue;
                     }
                     falseKey.push(key); 
                  }
               }

               if(falseKey.length > 0) {
                  falseKey.forEach(key => {
                     console.warn(`[${key}] is not valid key in itemList!`)
                  })
               }

               return true;
               
            
            },
            // default: [
            //    {
            //       title: 'Action 1',
            //       routerName: 'radio'
            //    },
            //    {
            //       title: 'Action 2',
            //       routerName: 'radio'
            //    },
            //    {
            //       title: 'Action 3',
            //       routerName: 'radio',
            //    },
            // ]
         }
      }, 
      computed: {
         computedBtnSize() {
            let sizes = ['sm', 'lg']
            for (const size of sizes) {
               if(this.dropDownClass.includes(size)){
                  return 'btn-' + size;
               }
               continue;
            }
         },
         computedBtnClass() {
            let regex = /^(?:dropdown\-(?:outline\-(?:s(?:econdary|uccess)|primary|warning|danger|info)|s(?:econdary|uccess)|primary|warning|danger|info))$/

            for (const c of this.dropDownClass.split(" ")) {
               if(c.match(regex)) {
                  return 'btn btn-' + c.slice(9);
               }
               continue;
            }
         }
      },

      methods: {
         toggle() { 
            this.rotateChevron(this.isOpen)
            this.isOpen = !this.isOpen

            const menu = this.$el.children[1];
            return this.isOpen ? menu.classList.add('max-h-40') : menu.classList.remove('max-h-40')
         },
         // expandMenu(isOpen) {
         //    const menu = this.$el.children[1];
         //    return !isOpen ? menu.classList.add('max-h-40') : menu.classList.remove('max-h-40')
         // },
         rotateChevron(isOpen) {
            const element = this.$refs.button.$el.getElementsByClassName('iconify--octicon')[0]
            return !isOpen ? element.classList.add('rotate-180') : element.classList.remove('rotate-180')
         },
         clickOutside() {
            if(this.isOpen) {
               this.toggle()
               // this.expandMenu(this.isOpen)
               this.isOpen = false;
            }
         }
      }
   }
</script>

<template>

   <template v-if="!this.$attrs.split">
      <div class="dropdown">
         <Button ref="button"  
            v-click-outside="clickOutside" 
            :text="text"  
            @click="toggle"
            :btnClass="[`${computedBtnClass} ${computedBtnSize}`]"
            :prependIcon="leadingIcon"
            appendIcon="octicon:chevron-down-12"
         >
         </Button>
      
         <ul class="dropdown__menu" v-if="!this.$slots.itemListSlots">
            <template v-for="(item, i) in itemList">
               <router-link v-if="item.routerName" :key="i" :to="{ path: '/' + item.routerName}">
                  <li class="dropdown__item"
                     :class="dropDownClass"
                  >
                     <Icon v-if="item.prependIcon" :icon="item.prependIcon" class="inline-flex"/>
                     {{ item.title }}
                     <Icon v-if="item.appendIcon" :icon="item.appendIcon" class="inline-flex"/>
                  </li>
               </router-link>
               <li v-else class="dropdown__item"
                  :class="dropDownClass"
               >
                  {{ item.title }}
               </li>
            </template>
         </ul>

         <template v-if="this.$slots.itemListSlots">
            
            <slot name="itemListSlots"></slot>
            
         </template>
         
      </div>
   </template>
   
   <template v-else>
      <div class="dropdown ">
         <div class="split">
            <Button 
               :text="text"  
               :btnClass="[`${computedBtnClass} ${computedBtnSize}`]"
               :prependIcon="leadingIcon"
            >
            </Button>
            
            <Button @click="toggle" 
               ref="button" 
               v-click-outside="clickOutside"  
               appendIcon="octicon:chevron-down-12" 
               :btnClass="[`${computedBtnClass} ${computedBtnSize}`]"
            >
            </Button>
         </div>
         <ul class="dropdown__menu">
            <template v-for="(item, i) in itemList">
               <router-link v-if="item.routerName" :key="i" :to="{ path: '/' + item.routerName }">
                  <li class="dropdown__item"
                     :class="dropDownClass"
                  >
                     {{ item.title }}
                  </li>
               </router-link>
               <li v-else class="dropdown__item"
                  :class="dropDownClass"
               >
                  {{ item.title }}
               </li>
            </template>
         </ul>
      </div>
   </template>
   
</template>

<style lang="scss" scoped>

   

</style>