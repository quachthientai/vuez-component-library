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
    computedBadgeStyle: function () {
      if (!this.text && !this.icon) {
        return 'inline-block w-4 h-4'
      } else if (!this.text && this.icon) {
        return 'px-1 py-1 inline-flex'
      }
      return 'inline-flex items-center justify-center px-2 py-1 text-xs'
    },
    computedIconPosition: function () {
      if (this.text && this.icon) {
        return this.iconPosition === 'right' ? 'order-last' : 'order-first'
      }
      return ''
    }
  }
}
</script>

<template>
  <span :class="[computedBadgeStyle, badgeClass]">
    <Icon class="icon" :class="[computedIconPosition]" v-if="icon" :icon="icon" />
    <span v-if="text">
      {{ text }}
    </span>
  </span>
</template>

<style lang="scss"></style>
