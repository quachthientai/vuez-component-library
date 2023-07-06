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
            topContainer: null,
            bottomContainer: null,
            shadowContainer: null,
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
         }
      },
      methods: {
         showToast() {
            this.isVisible = true;
            const shadowParent = this.$refs.toast.parentElement
            this.computedToastParent.insertAdjacentElement('afterbegin', this.$refs.toast)
            shadowParent.remove()
         },
         dismissToast() {
            this.isVisible = false;
            const el = this.$refs.toast
            
            setTimeout(() => {
               el.remove()
            },1000)
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
         this.showToast()
         eventBus.on('dismiss', this.dismissToast);
      },
      beforeMount() {
         this.setupContainer();
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
      <div ref="toast" :class="[variant, computedPosition]" class="toast" v-show="isVisible" >
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
            <Button btnClass="btn-icon-circle btn-lg" appendIcon="iconamoon:close-bold" @click="dismissToast"></Button>
         </div>
         <div ref="progress" class="toast__progress active"></div>
      </div>
   </Transition>
</template>

<style lang='scss' scoped>
   
   .toast__progress.active:before{
      @apply animate-[progress_2s_linear_forwards];
   }

   

</style>