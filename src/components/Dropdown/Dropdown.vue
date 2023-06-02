<script>
   import Button from '@/components/Button/Button.vue';

   export default {
      name: 'Dropdown',
      components: {
         Button
      },
      data() {
         return {
            isOpen: false
         }
      },
      props: {
         text: {
            type: String,
            default: 'Dropdown',
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
            type: Array,
            default: [
               {
                  title: 'Action 1',
               },
               {
                  title: 'Action 2',
               },
               {
                  title: 'Action 3',
               },
            ]
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
            return this.isOpen = !this.isOpen;
         },
         rotateChevron(isOpen) {
            const element = this.$refs.button.$el.getElementsByClassName('iconify--octicon')[0]
            return !isOpen ? element.classList.add('rotate-180') : element.classList.remove('rotate-180')
         },
         clickOutside() {
            if(this.isOpen) {
               this.rotateChevron(this.isOpen)
               this.isOpen = false;
            }
         }
      },
      created() {
         console.log(this.$attrs.split)
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
            :class=[computedBtnSize]
            :btnClass="computedBtnClass"
            :prependIcon="leadingIcon"
            appendIcon="octicon:chevron-down-12"
         >
         </Button>
      
         <ul class="dropdown__menu" :aria-expand="isOpen">
            <li class="dropdown__item" 
               :key="i" 
               :class="dropDownClass" 
               v-for="(item, i) in itemList"
            >
               {{ item.title }}
            </li>
         </ul>
      </div>
   </template>
   
   <template v-else>
      <div class="dropdown ">
         <div class="split">
            <Button ref="button"
               v-click-outside="clickOutside" 
               :text="text"  
               @click="toggle"
               :class=[computedBtnSize]
               class="rounded-e-none p-[9px] focus:ring-2"
               :btnClass="computedBtnClass"
               :prependIcon="leadingIcon"
            >
            </Button>
            
            <Button  appendIcon="octicon:chevron-down-12" btnClass="btn btn-primary" class=" p-[9px] focus:ring-2 rounded-s-none"></Button>
         </div>
         
         <ul class="dropdown__menu" :aria-expand="isOpen">
            <li class="dropdown__item" 
               :key="i" 
               :class="dropDownClass" 
               v-for="(item, i) in itemList"
            >
               {{ item.title }}
            </li>
         </ul>
         <!-- <ul class="dropdown__menu" :aria-expand="isOpen">
            <li class="dropdown__item" 
               :key="i" 
               :class="dropDownClass" 
               v-for="(item, i) in itemList"
            >
               {{ item.title }}
            </li>
         </ul> -->
      </div>
   </template>
   
</template>

<style lang="scss" scoped>

   .dropdown {
      .split {
         display: flex;
         gap: 0.3px;
         > button {
            &:first-of-type {
               
            }
         }
      }
   }

</style>