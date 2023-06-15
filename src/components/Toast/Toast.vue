<script>
   import { Icon } from '@iconify/vue';
   import Button from '../Button/Button.vue';

   export default {
      name: 'Toast',
      components: {
         Icon,
         Button,
      },
      data() {
         return {

         }
      },
      props: {
         toastClass: {
            type: String,
            required: true,
            default: 'toast toast-info'
         },
         title: {
            type: String,
            default: 'Title'
         },

      },
   }
</script>

<template>
   <div :class="toastClass">
      <div class="toast__icon">
         <Icon icon="material-symbols:info-outline"/>
      </div>
      <div class="toast__body">
         <strong class="toast__title">
            {{ this.title }}
         </strong>
         <small class="toast__text">
            This is a information toast
         </small>
      </div>
      <div class="toast__dismiss">
         <Button btnClass="btn-icon-circle btn-lg" appendIcon="iconamoon:close-bold"></Button>
      </div>
   </div>
</template>

<style lang='scss' scoped>
   // .toast {
   //    @apply bg-danger-200 drop-shadow-md;
   //    position: absolute;
   //    display: grid;
   //    grid-template-columns: 1.3fr 6fr .5fr;
   //    width: 350px;
   //    max-width: 100%;
   //    border-radius: 5px;
   //    padding: 10px 10px;
   // }
   // .toast__icon {
   //    font-size: 35px;
   //    align-self: center;
   // }
   
   // .toast > div {
   //    @apply text-danger-600;
   // }
   
   
   
</style>