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
            default: null,
            required: true,
         }
      },
      computed: {
         computedBtnClass() {
            switch(true) {
               case this.dropDownClass.includes('dropdown-primary'):
                  return 'btn btn-primary'
               case this.dropDownClass.includes('dropdown-secondary'):
                  return 'btn btn-secondary'
               case this.dropDownClass.includes('dropdown-success'):
                  return 'btn btn-success'
               case this.dropDownClass.includes('dropdown-danger'):
                  return 'btn btn-danger'
               case this.dropDownClass.includes('dropdown-warning'):
                  return 'btn btn-warning'
               case this.dropDownClass.includes('dropdown-info'):
                  return 'btn btn-info'
            }
         }
      },
      methods: {
         toggle() {
            this.rotateChevron(this.isOpen)
            return this.isOpen = !this.isOpen;
         },
         rotateChevron(isOpen) {
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
      <Button ref="button" class="dropdown__toggle" v-click-outside="clickOutside" :text="text"  @click="toggle" :btnClass="[computedBtnClass]" iconPosition="right" icon="octicon:chevron-down-12">
      </Button>
      <ul class="dropdown__menu" :aria-expand="isOpen">
         <li class="dropdown__item" :class="dropDownClass">Action one</li>
         <li class="dropdown__item" :class="dropDownClass">Action two</li>
         <li class="dropdown__item" :class="dropDownClass">Action three</li>
      </ul>
   </div>
</template>

<style lang="scss" scoped>
   // .dropdown {
   //    position: relative;
   //    width: 14rem;
   // }

   // .dropdown__menu {
   //    position: absolute;
   //    width: 100%;
   //    @apply  bg-light text-sm mt-[3px] rounded-[5px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] break-words transition-all duration-500 overflow-hidden max-h-0;
   // }

   // .dropdown__menu[aria-expand="true"]{
   //    @apply max-h-40;
   // }
   

   // .dropdown__item {
      
   //    @apply px-2 py-3;
   //    &:hover{
   //       @apply bg-primary-500 text-white overflow-hidden;
         
   //       &:first-of-type{
   //          @apply rounded-t-[5px];
   //       }

   //       &:last-of-type{
   //          @apply rounded-b-[5px];
   //       }
   //    }
   // }

</style>