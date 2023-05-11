<script>
   import { Icon } from '@iconify/vue'
   import { RouterLink } from 'vue-router';
   export default {
      name: 'Button',
      components: {
         Icon
      },
      props: {
         text: {
            type: String,
            default: null
         },
         routeLink: {
            type: String,
            default: ''
         },
         icon: {
            type: String,
            default: null,
         },
         iconPosition: {
            type: String,
            default: null
         },
         isUppercase: {
            type: Boolean,
            default: false
         },
         isDisabled: {
            type: Boolean,
            default: false
         }, 
         btnClass: {
            type: String,
            default: '',
            required: true
         },
         isLoading: {
            type: Boolean,
            default: false,
         },
         externalLink: {
            type: String,
            default: null
         }
      },
      computed: {
         computedIconSize: function() {
            if(this.btnClass.includes('btn-sm')){
               return 'text-sm';
            }else if(this.btnClass.includes('btn-lg')) {
               return 'text-2xl';
            }
            return 'text-lg';
         },
         computedIconPosition: function() {
            if(this.text || this.isLoading){
               return this.iconPosition === 'right' ? 'order-last ml-1' : 'order-first mr-1';
            }
            return 'm-0';
         }
      }
   }
</script>

<template>
   <button 
      :class="`
         ${btnClass}
         ${isUppercase ? 'uppercase' : 'capitalize'}
         ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
         ${isLoading && !btnClass.includes('btn-icon-circle') ? 'pointer-events-none' : ''}`"
      :disabled="isDisabled"
   >
      <a
         :href="externalLink"
         :class="`${isDisabled ? 'cursor-no-drop' : ''}`"
      >  
         <template v-if="isLoading && !btnClass.includes('btn-icon-circle')">
            <span class="no-underline flex justify-center items-center">
               <Icon icon="mingcute:loading-fill" :class=[computedIconSize,computedIconPosition] class="animate-spin"/>
                  Loading...
            </span>  
         </template>

         <template v-else>
            <span class="no-underline flex justify-center items-center">
               <span v-if="!btnClass.includes('btn-icon-circle')">
                  {{ text }}
               </span>
               <Icon v-if="icon" :icon="icon" :class=[computedIconSize,computedIconPosition] />
            </span>
         </template>
      </a>
   </button>
   
   
</template>

<style lang="scss"></style>