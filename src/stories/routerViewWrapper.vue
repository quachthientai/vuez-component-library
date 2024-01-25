<template>
  <div class="my-wrapper">
    <div class="intro">
      <h1 style="font-size: 25px; font-weight: bold;" class="my-2">{{ title }}</h1>
      <p><code style="font-size:13px;">Path: {{ fullPath }}</code></p>
    </div>

    <!-- @slot pass `<router-view>` to slot -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'RouterViewWrapper',
  props: {
    title: {
      type: String,
      default: 'Storybook Vue 3 Router'
    }
  },
  setup () {
    const route = useRoute()
    // console.log('created() route:', route.fullPath)
    const fullPath = computed(() => route.fullPath )

    return { fullPath }
  }
})
</script>