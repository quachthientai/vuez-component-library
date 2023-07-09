<script>
   import { Icon } from '@iconify/vue';
   import Button from '../../components/Button/Button.vue';
   import { eventBus } from '../../utils/eventBus';
   import { Timer } from '@/plugins/ToastPlugin/timer'
   import { POSITION, TYPE } from '@/plugins/ToastPlugin/constant'
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
            topContainer: null,
            bottomContainer: null,

            progressStyle: {
               animationName: 'progress',
               animationDuration: `${this.timeOut}ms`,
               animationFillMode: 'linear',
               animationFillMode: 'forwards'
            }
         }
      },
      props: {
         type: {
            type: String, 
            default: 'toast-default',
            validator(value) {
               return Object.values(TYPE).includes(value)
            } 
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
            validator(value) {
               return Object.values(POSITION).includes(value);
            }
         },
         onClickDismiss: {
            type: Boolean,
            default: true
         },
         timeOut: {
            type: Number,
            default: 2000
         }
         
      },
      methods: {
         showToast() {
            let insertPos = this.position.includes('top') ? 'afterbegin' : 'beforeend'
            this.isVisible = true;
            const shadowContainer = this.$refs.toast.parentElement
            this.computedToastParent.insertAdjacentElement(insertPos, this.$refs.toast)
            shadowContainer.remove()
         },
         dismissToast() {
            const el = this.$refs.toast
            
            this.isVisible = false;
            
            // this.timer = new Timer(1000, this.removeElement(el))
            // timer.start()
            
            setTimeout(() => {
               el.remove()
            },1000)
            
         },
         startDismissTimeout() {
            this.showToast()
            Timer.start(this.dismissToast, this.timeOut)
         },
         setupContainer() {
            
            this.topContainer = document.querySelector('.toast-top-container')
            this.bottomContainer = document.querySelector('.toast-bottom-container')

            if(this.topContainer && this.bottomContainer) return

            
            if(!this.topContainer) {
               this.topContainer = document.createElement('div')
               this.topContainer.classList.add('toast-top-container')
            }

            if(!this.bottomContainer) {
               this.bottomContainer = document.createElement('div')
               this.bottomContainer.classList.add('toast-bottom-container')
            }

            document.body.appendChild(this.topContainer)
            document.body.appendChild(this.bottomContainer)
            
         }
         
      },
      mounted() {
         eventBus.on('dismiss', this.dismissToast);

         if(this.timeOut > 0) return this.startDismissTimeout()
         
         this.showToast()
         
      },
      beforeMount() {
         this.setupContainer();
      },
      beforeUnmount() {
         eventBus.off('dismiss', this.dismissToast);
      },
      computed: {
         computedToastParent() {
            return this.position.includes('top') ? this.topContainer : this.bottomContainer
         },
         computedPosition() {
            switch(this.position) {
               case POSITION.BOTTOM_RIGHT :
               case POSITION.TOP_RIGHT :
                  return 'self-end'
               case POSITION.BOTTOM_LEFT :
               case POSITION.TOP_LEFT :
                  return 'self-start'
               default :
                  return 'self-center'
            }
         },
         computedIcon() {
            switch(this.type) {
               case TYPE.SUCCESS :
                  return 'material-symbols:check-circle-outline'
               case TYPE.INFO :
                  return 'material-symbols:info-outline'
               case TYPE.WARNING :
                  return 'material-symbols:warning-outline-rounded'
               case TYPE.ERROR :
                  return 'material-symbols:dangerous-outline'
               default: 
                  return 'material-symbols:info-outline'
            }
         },
         computedTransition() {
            switch(this.position) {
               case POSITION.TOP_RIGHT :
               case POSITION.TOP_CENTER :
               case POSITION.TOP_LEFT :
                  return 'fade-top'
               case POSITION.BOTTOM_RIGHT :
               case POSITION.BOTTOM_CENTER :
               case POSITION.BOTTOM_LEFT :
                  return 'fade-bottom'
            }
         }
      }
   }
</script>

<template >
   <Transition :name="computedTransition">
      <div ref="toast" 
         :class="[variant, computedPosition]" 
         v-on="{ click: onClickDismiss ? this.dismissToast : null}" 
         class="toast" v-show="isVisible" 
      >
         <div class="toast__icon ms-2">
            <Icon :icon="computedIcon"/>
         </div>
         <div class="toast__body">
            <span class="font-semibold text-[15px]">
               {{ this.text }}
            </span>
         </div>
         <div class="toast__dismiss">
            <Button btnClass="btn-icon-circle"
               appendIcon="iconamoon:close-bold" 
               @click="dismissToast" 
            />
         </div>
         <div ref="progress" v-if="this.timeOut > 0" :style="progressStyle" class="toast__progress"></div>
      </div>
   </Transition>
</template>

<style lang='scss' scoped>
   
   // .toast__progress:before{
   //    @apply animate-[progress_2000ms_linear_forwards];
   //    // before:animate-[progress_2000ms_linear_forwards]
   // }

   

</style>