<script>
   import { Icon } from '@iconify/vue';
   import Button from '../../components/Button/Button.vue';
   import { eventBus } from '../../utils/eventBus';
   import { Timer } from '../../plugins/ToastPlugin/timer'
   
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
            
            this.isVisible = true;
            const shadowContainer = this.$refs.toast.parentElement
            this.computedToastParent.insertAdjacentElement('afterbegin', this.$refs.toast)
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
         removeElement(el){
            el.remove()
         },
         startDismissTimeout() {
            this.showToast()
            
            const timer = new Timer(this.timeOut, this.dismissToast)
            // setTimeout(() => {
            //    this.dismissToast()
            // },this.timeOut)
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
            switch(true) {
               case this.position.includes('right') :
                  return 'self-end'
               case this.position.includes('left') :
                  return 'self-start'
               default :
                  return 'self-center'
            }
         },
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
         },
         computedTransition() {
            return this.position.includes('top') ? 'fade-top' : 'fade-bottom'
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
            <strong class="toast__body-title">
               {{ this.title }}
            </strong>
            <small class="toast__body-text">
               {{ this.text }}
            </small>
         </div>
         <div class="toast__dismiss">
            <Button btnClass="btn-icon-circle btn-lg" 
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