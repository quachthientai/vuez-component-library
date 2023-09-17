<script setup lang="ts">
   import { CardTitle } from './CardTitle';
   import CardSubTitle from './CardSubTitle.vue';

   console.log('ssss')

   interface CardHeaderProps {
      title?: string,
      subtitle?: string,
      appendIcon?: string,
      prependIcon?: string,
   }

   const props = withDefaults(defineProps<CardHeaderProps>(), {
      title: 'Card title',
      subtitle: 'Card subtitle',
   })

</script>

<template>
   <div>{{ $props.title }}</div>
</template>