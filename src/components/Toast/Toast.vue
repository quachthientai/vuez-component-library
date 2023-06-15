<script>
   import { Icon } from '@iconify/vue';
   import Button from '../Button/Button.vue';
import { setTransitionHooks } from 'vue';

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
      computed: {
         computedIcon() {
            switch(true) {
               case this.toastClass.includes('toast-info') :
                  return 'material-symbols:info-outline'
               case this.toastClass.includes('toast-success') :
                  return 'mdi:success-circle-outline'
               case this.toastClass.includes('toast-danger') :
                  return 'material-symbols:dangerous-outline-rounded' 
               case this.toastClass.includes('toast-warning') :
                  return 'ion:warning-outline' 
            }
         }
      }
   }
</script>

<template>
   <div :class="toastClass">
      <div class="toast__icon">
         <Icon :icon="computedIcon"/>
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
   
</style>