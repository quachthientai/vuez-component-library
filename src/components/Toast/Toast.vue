<script>
   import { Icon } from '@iconify/vue';
   import Button from '../../components/Button/Button.vue';
   import { eventBus } from '../../utils/eventBus';
   import { uuid } from 'vue-uuid'
   
   import { Transition, render, h } from 'vue';


   export default {
      name: 'Toast',
      components: {
         Icon,
         Button,
      },
      data() {
         return {
            isVisible: false,
            container: null,
            transition: null,
            // id: uuid.v1(),
         }
      },
      methods: {
         
         dismiss() {
            this.isVisible = false;
            const el = this.$refs.toast
            
            setTimeout(() => {
               el.remove()
            },1000)
         },
         initContainer() {
            this.container = document.querySelector('.toast-container')
            if(this.container) return
            
            this.container = h('div', {
               class: 'toast-container'
            })
            
            render(this.container, document.body)
            
         }
         
      },
      mounted() {
         
         
         eventBus.on('dismiss', this.dismiss);

         // autoAnimate(this.container)
         const shadowParent = this.$refs.toast.parentElement
         // shadowParent.insertAdjacentElement('afterbegin', this.$refs.toast)

         
         

         

         // this.container.insertAdjacentElement('afterbegin', this.$refs.toast)
         this.container = document.querySelector('.toast-container')
         this.container.append(this.$refs.toast)
         this.isVisible = true;
         
         
         
         shadowParent.remove()
         
      },
      beforeMount() {
         this.initContainer()

         
         
         
      },
      
      
      props: {
         title: {
            type: String,
            default: null,
         },
         variant: {
            type: String,
            default: null,
         },
         text: {
            type: String,
            default: null
         },
         position: {
            type: String,
            default: null,
         }
      },
      computed: {
         computedIcon() {
            switch(true) {
               case this.variant.includes('toast-info') :
                  return 'material-symbols:info-outline'
               case this.variant.includes('toast-success') :
                  return 'material-symbols:check-circle-outline' 
               case this.variant.includes('toast-danger') :
                  return 'material-symbols:dangerous-outline' 
               case this.variant.includes('toast-warning') :
                  return 'material-symbols:warning-outline-rounded' 
            }
         }
      }
   }
</script>

<template >
   <Transition name="fade">
      <div ref="toast" :class="[variant, position]" class="toast" v-show="isVisible" >
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
            <Button btnClass="btn-icon-circle btn-lg" appendIcon="iconamoon:close-bold" @click="dismiss"></Button>
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
     animation: bounce-in .5s;
     
     
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

   /* 1. declare transition */
.fade-enter-active{
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-leave-active {
   transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */

   
</style>