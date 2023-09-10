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
      default: null
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
      required: true
    }
  },
  computed: {
    computedBadgeStyle: function() {
      if(!this.text && !this.icon) {
        return 'w-4 h-4'
      } else if (this.icon && !this.text) {
        return 'p-1'
      }
    },

    computedIconPosition: function () {
      if (this.text && this.icon) {
        return this.iconPosition === 'right' ? 'order-last ml-1' : 'order-first mr-1'
      }
      return ''
    }
  }
}
</script>

<template>
  <span :class="[computedBadgeStyle, badgeClass]">
    <Icon class="badge-icon" :class="[computedIconPosition]" v-if="icon" :icon="icon" />
    
      <template v-if="text">
        {{ text }}
      </template>
    
    
    <!-- <span v-if="text">
      {{ text }}
    </span> -->
  </span>
</template>

<style lang="scss"></style>
