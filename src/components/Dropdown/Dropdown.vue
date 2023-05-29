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
            default: null,
         },
         dropDownClass: {
            type: String,
            default: 'dropdown dropdown-primary',
            required: true,
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
            let variants = ['dropdown-primary', 'dropdown-secondary', 'dropdown-success', 'dropdown-danger', 'dropdown-warning', 'dropdown-info'];
            for (const variant of variants) {
               if(this.dropDownClass.split(" ").indexOf(variant) > -1){
                  return 'btn btn-' + variant.slice(9);
               }
               continue;
            }
            
            // switch(true) {
            //    case this.dropDownClass.includes('dropdown-primary'):
            //       return 'btn btn-primary'
            //    case this.dropDownClass.includes('dropdown-secondary'):
            //       return 'btn btn-secondary'
            //    case this.dropDownClass.includes('dropdown-success'):
            //       return 'btn btn-success'
            //    case this.dropDownClass.includes('dropdown-danger'):
            //       return 'btn btn-danger'
            //    case this.dropDownClass.includes('dropdown-warning'):
            //       return 'btn btn-warning'
            //    case this.dropDownClass.includes('dropdown-info'):
            //       return 'btn btn-info'
            // }
         }
      },
      methods: {
         toggle() { 
            this.rotateChevron(this.isOpen)
            return this.isOpen = !this.isOpen;
         },
         rotateChevron(isOpen) {
            console.log(this.$refs.button.$el.getElementsByTagName('svg'));
            const element = this.$refs.button.$el.getElementsByTagName('svg')[0]
            return !isOpen ? element.classList.add('rotate-180') : element.classList.remove('rotate-180')
         },
         clickOutside() {
            if(this.isOpen) {
               this.rotateChevron(this.isOpen)
               this.isOpen = false;
            }
         }
      }
   }
</script>

<template >
   <div class="dropdown">
      <Button ref="button"  
         v-click-outside="clickOutside" 
         :text="text"  
         @click="toggle"
         :class=[computedBtnSize]
         :btnClass="computedBtnClass"
         iconPosition="right" 
         icon="octicon:chevron-down-12">
      </Button>
      <ul class="dropdown__menu" :aria-expand="isOpen">
         <li class="dropdown__item" :class="dropDownClass">Action one</li>
         <li class="dropdown__item" :class="dropDownClass">Action two</li>
         <li class="dropdown__item" :class="dropDownClass">Action three</li>
      </ul>
   </div>
</template>

<style lang="scss" scoped>
</style>