<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  // import { CardProps } from './type';

  interface CardProps {
    width?: number,
    elevation?: number,
  }

  const props = withDefaults(defineProps<CardProps>(), {
    width: 0,
    elevation: 0,
  })

  const computedElevation = computed(() => {
    return props.elevation > 0 ? `elevation-${props.elevation}` : '';
  })

  const computedWidth = computed(() => {
    return props.width > 0 ? `w-[${props.width}px]` : '';
  })
</script>

<template>
  <div class="card" :class="[computedElevation, computedWidth]">asdas</div>
</template>

<style lang="scss" scoped>
.card {
  @apply block relative rounded-md p-0 overflow-hidden text-ellipsis;
}
</style>
