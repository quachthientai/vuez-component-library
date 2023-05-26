<script>
   import Button from '@/components/Button/Button.vue';

   export default {
      name: 'Dropdown',
      components: {
         Button
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
   
         
      }
   }
</script>

<template >
   <div class="dropdown">
      <Button class="dropdown__toggle" :text="text" :btnClass="dropDownClass" iconPosition="right" icon="octicon:chevron-down-12">
      </Button>
      <ul class="dropdown__menu">
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   </div>
   
   
</template>

<style lang="scss" scoped>
   .dropdown {
      position: relative;
      width: 10rem;
   }

   .dropdown__toggle {
      &:focus {
         @apply ring-0;
      }

      &:hover{
         + .dropdown__menu {
            opacity: 100;
         }
      }
   }
   .dropdown__menu {
      position: absolute;
      width: 100%;
      opacity: 0;
      
      @apply border-2 mt-[2px] rounded-[5px] border-slate-200;
   }
</style>