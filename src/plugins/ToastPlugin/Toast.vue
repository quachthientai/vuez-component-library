<script>
   import { Icon } from '@iconify/vue';
   import Button from '../../components/Button/Button.vue';
   import { ToastPlugin } from '@/plugins/ToastPlugin/index';

   export default {
      name: 'Toast',
      components: {
         Icon,
         Button,
      },
      data() {
         return {
            isVisible: false,
            title: 'Info',
            text: 'Hello from toast!!'
            // activeClass: 'active',
            // dismissDuration: 0,
            // isShow: this.isShow,
         }
      },
      methods: {
         hideToast() {
            this.isVisible = false;
         },
         show(params) {
            console.log(params)
         }
      },
      beforeMount() {
         
         ToastPlugin.emitter.on('show', (params) => {
            this.show(params);
         })
      },
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
         },
         duration: {
            type: Number,
            default: 0
         }
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
      <div :class="[toastClass, position]" v-show="isVisible" >
         <div class="toast__icon ms-2">
            <Icon icon="material-symbols:info-outline"/>
         </div>
         <div class="toast__body">
            <strong class="toast__title">
               {{ this.title }}
            </strong>
            <small class="toast__text">
               {{ this.text }}
            </small>
         </div>
         <div class="toast__dismiss">
            <Button btnClass="btn-icon-circle btn-lg" appendIcon="iconamoon:close-bold" @click="hideToast"></Button>
         </div>
         <div class="toast__progress progress active"></div>
      </div>
   </Transition>
</template>

<style lang='scss' scoped>
   .progress {
      @apply bg-red-200 rounded;
      position: absolute;
      width:100%;
      height: 4px;
      left: 0;
      bottom: 0;
   }

   // .toast {
      
   //    transform: translateX(calc(100% + 30px));
   //    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
   // }

   // .toast.active {
   //    transform: translateX(0%);
   // }

   .toast .progress:before{
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0px;
      content: '';
      @apply bg-red-500 rounded;
   }
   .progress.active:before{
      

      @apply animate-[progress_2s_linear_forwards];
   }

   // @keyframes progress {
   //    100%{
   //       right: 100%;
   //    }
   // }
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