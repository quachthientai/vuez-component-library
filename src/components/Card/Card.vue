<script setup lang="ts">
  import { ref, reactive, computed, onMounted, useAttrs, toRef } from 'vue';
  // import { CardProps } from './type';

  interface CardProps {
    variant?: string,
    elevation?: number,
  }
  
  const attrs = useAttrs();
  const props = withDefaults(defineProps<CardProps>(), {
    elevation: 0,
  })

  const computedElevation = computed(() => {
    return  props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : '';
  })

  const computedStyling = computed(() => {
    return attrs.outlined ? `border-[2px] border-slate-300/50` : '';
  })
  
  
</script>

<template>
  <div class="card" :class="[computedElevation, computedStyling]">asdas</div>
</template>

<style lang="scss" scoped>
.card {
  @apply block relative w-[400px]  dark:bg-slate-700 bg-light rounded-md p-0 overflow-hidden text-ellipsis;
}
</style>
