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
            isShow: this.isShow
         }
      },
      emits: ['onDismiss'],
      props: {
         isShow: {
            type: Boolean,
            default: false
         },
         toastClass: {
            type: String,
            required: true,
            default: 'toast toast-info'
         },
         title: {
            type: String,
            default: 'Title'
         },
         position: {
            type: String,
            default: 'top-right',
         }
      },
      methods:{
         
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
   <Transition name="slide-fade">
      <div :class="[toastClass, position]" v-if="isShow">
         <div class="toast__icon ms-2">
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
            <Button btnClass="btn-icon-circle btn-lg" @click="$emit('onDismiss')" appendIcon="iconamoon:close-bold"></Button>
         </div>
      </div>
   </Transition>
   
</template>

<style lang='scss' scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>