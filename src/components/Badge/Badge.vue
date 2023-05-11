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
            if(!this.text && this.icon){
               return 'p-[5px]';
            }else if (!this.text && !this.icon){
               return 'p-[9px]';
            }
            return '';
         }
      }
   }
</script>

<template>
   <span :class="[computedBadgeSize,badgeClass]" class="inline-flex items-center">
      
      <Icon v-if="icon" :icon="icon" />
      <span>
         {{ text }}
      </span>
      
   </span>
</template>

<style lang="scss"></style>