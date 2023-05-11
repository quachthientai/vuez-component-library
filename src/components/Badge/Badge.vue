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
      }
   }
</script>

<template>
   <span :class="badgeClass" class="inline-flex items-center">
      
      <Icon v-if="icon" :icon="icon" />
      <span>
         {{ text }}
      </span>
      
   </span>
</template>

<style lang="scss"></style>