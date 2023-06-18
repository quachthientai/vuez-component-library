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
            // isShow: this.isShow,
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
         // onDismiss() {
            
         //    this.$emit('onDismiss', this.isShow)
         // }
      },
      computed: {
         computedIcon() {
            switch(true) {
               case this.toastClass.includes('toast-info') :
                  return 'material-symbols:info-outline'
               case this.toastClass.includes('toast-success') :
                  return 'material-symbols:check-circle-outline' 
               case this.toastClass.includes('toast-danger') :
                  return 'material-symbols:dangerous-outline' 
               case this.toastClass.includes('toast-warning') :
                  return 'material-symbols:warning-outline-rounded' 
            }
         }
      }
   }
</script>

<template >
   <Transition name="bounce">
      <div :class="[toastClass, position]" v-if="isShow" >
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
            <Button btnClass="btn-icon-circle btn-lg"
            @click="$emit('onDismiss',isShow)" appendIcon="iconamoon:close-bold"></Button>
         </div>
      </div>
   </Transition>
   
</template>

<style lang='scss' scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>