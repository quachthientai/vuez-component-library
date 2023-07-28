<script setup lang="ts">
  import { computed, useAttrs } from 'vue'
  // import {CardProps} from '@/components/Card/type';

  interface CardProps {
    elevation: number,
    title?: string,
    subtitle?: string,
    text?: string,
    isLoading?: boolean,
  }

  const attrs = useAttrs();

  const props = withDefaults(defineProps<CardProps>(), {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    text: 'Card text',
    isLoading: false,
    elevation: 0,
  })

  const computedElevation = computed(() => {
    return props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : '';
  })

  const computedStyle = computed(() => {
    return attrs.outlined ? 'border border-slate-300/70' : ''
  })

</script>

<template>
  <div class="card" v-drag :class="[computedElevation, computedStyle]">
    <div class="card-header mb-5">
      <div class="card-title text-[1.25rem] font-semibold">This is card</div>
      <div class="card-subtitle text-[.85rem] text-slate-500">Subtitle</div>
    </div>
    <div class="card-content">
      <div class="card-text text-[.3rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, saepe veritatis. Voluptates, libero expedita vero facere maiores sint rem vitae!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply block relative rounded-md p-3 overflow-hidden text-ellipsis;
}
</style>
