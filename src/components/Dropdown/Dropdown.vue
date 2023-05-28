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
      methods: {
         toggle() {
            return this.isOpen = !this.isOpen;
         },

         clickOutside(e) {
            console.log(e)
            if(this.isOpen) {
               this.isOpen = false;
            }
         }
      }
   }
</script>

<template >
   <div class="ms-3 dropdown"  >
      <Button ref="button" class="dropdown__toggle" v-click-outside="clickOutside" :text="text"  @click="toggle" :btnClass="dropDownClass" iconPosition="right" icon="octicon:chevron-down-12">
      </Button>
      <ul class="dropdown__menu" :aria-expand="isOpen">
         <li class="dropdown__item">Action one</li>
         <li class="dropdown__item">Action two</li>
         <li class="dropdown__item">Action three</li>
      </ul>
   </div>
</template>

<style lang="scss" scoped>
   .dropdown {
      position: relative;
      width: 14rem;
   }

   .dropdown__toggle {
      // &:focus {
      //    @apply ring-0;
      //    // + .dropdown__menu[aria-expand="true"]{
      //    //    @apply max-h-40;
      //    // }
      // }

      // &:not(:focus) {
      //    + .dropdown__menu[aria-expand="true"]{
      //       @apply max-h-0;
      //    }
      // }
   }
   .dropdown__menu {
      position: absolute;
      width: 100%;
      @apply  bg-light text-sm mt-[3px] rounded-[5px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] break-words transition-all duration-500 overflow-hidden max-h-0;
   }

   .dropdown__menu[aria-expand="true"]{
      @apply max-h-40;
   }
   

   .dropdown__item {
      
      @apply px-2 py-3;
      &:hover{
         @apply bg-primary-500 text-white overflow-hidden;
         
         &:first-of-type{
            @apply rounded-t-[5px];
         }

         &:last-of-type{
            @apply rounded-b-[5px];
         }
      }
   }


//    .smooth-enter-active, .smooth-leave-active {
//   transition: max-height .5s;
// }
// .smooth-enter, .smooth-leave-to {
//   max-height: 0;
// }
// .nested-enter-active,
// .nested-leave-active {
//   transition: all 0.3s ease-in-out;
// }

// .nested-enter-from,
// .nested-leave-to {
//   transform: translateY(-5px);
//   opacity: 0;
// }

</style>