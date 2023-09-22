<script setup lang="ts">
   import { CardTitle } from './CardTitle';
   import { CardSubtitle } from './CardSubtitle';
   import { Icon } from '@iconify/vue';
   import { useAttrs, useSlots, computed } from 'vue';

   interface CardHeaderProps {
      title?: string,
      subtitle?: string,
      appendIcon?: string,
      prependIcon?: string,
   }

   const attrs = useAttrs();
   const slots = useSlots();

   const props = withDefaults(defineProps<CardHeaderProps>(), {
      title: 'Card title',
      subtitle: 'Card subtitle',
   })

</script>

<template>
   <div class="card__header">{}
      <div class="card__header-title">
         <slot name="title">
            <CardTitle>{{ $props.title }}</CardTitle>
         </slot>
      </div>
      
      <div class="card__header-subtitle">
         <slot name="subtitle">
            <CardSubtitle>{{ $props.subtitle }}</CardSubtitle>
         </slot>
      </div>
   </div>
</template>

