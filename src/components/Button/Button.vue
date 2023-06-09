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
         prependIcon: {
            type: String,
            default: null,
         },
         appendIcon: {
            type: String,
            default: null,
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
            default: 'btn btn-primary',
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
         
      }
   }
</script>

<template>
   <button
      type="button"
      role="button"
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
               <Icon icon="mingcute:loading-fill" :class=[computedIconSize] class="animate-spin order-last ml-1"/>
                  Loading...
            </span>
         </template>

         <template v-else>
            <span class="no-underline flex justify-center items-center">
               <Icon v-if="prependIcon" :icon="prependIcon" class="transition duration-300 order-first mr-1" :class=[computedIconSize] />
               <span v-if="!btnClass.includes('btn-icon-circle') && text" :class="this.$slots ? 'flex items-center justify-center' : ''">
                  <span>{{ text }}</span>
                  <div class="ml-1 flex items-center" >
                     <slot></slot>
                  </div>
               </span>
               <Icon v-if="appendIcon" :icon="appendIcon" class="transition duration-300" :class=[computedIconSize] />
               
            </span>
         </template>
      </a>
   </button>
</template>

<style lang="scss" scoped>
   
</style>