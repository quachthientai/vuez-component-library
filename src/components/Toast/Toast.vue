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
            asd
         </small>
      </div>
      <div class="toast__dismiss">

      </div>
   </div>
</template>

<style lang='scss' scoped>
   .toast {
      @apply bg-info-300;
      position: absolute;
      display: flex;
      width: 350px;
      max-width: 100%;
   }

   .toast__body {
      display: flex;
      flex-direction: column;
   }
</style>