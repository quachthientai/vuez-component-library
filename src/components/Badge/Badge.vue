<!-- badge props: text(string, default-null), background, position-x, position-y -->
<script>
   import { Icon } from '@iconify/vue'
   export default {
      name: 'Badge',
      components: {
         Icon
      },
      props: {
         text: {
            type: String,
            default: null,
         },
         icon: {
            type: String,
            default: null
         },
         iconPosition: {
            type: String,
            default: 'left'
         },
         badgeClass: {
            type: String,
            default: 'badge badge-primary',
            required: true,
         },
         positionX: {
            type: String,
            default: 'right'
         },
         positionY: {
            type: String,
            default: 'top'
         }
      },
      computed: {
         computedBadgeSize: function() {
            if (!this.text && !this.icon){
               return 'inline-block w-4 h-4 rounded-full';
            }
            return 'inline-flex items-center justify-center px-[3px] py-[3px] text-xs';
         }
      }
   }
</script>

<template>
   <span :class="[computedBadgeSize,badgeClass]">
      
      <Icon class="icon" v-if="icon" :icon="icon" />
      <span v-if="text">
         {{ text }}
      </span>
      
   </span>
</template>

<style lang="scss"></style>