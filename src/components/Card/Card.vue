<script setup lang="ts">
  import { computed, useAttrs, useSlots } from 'vue';
  import { CardHeader } from '../Card/CardHeader';
  
  interface CardProps {
    title?: string,
    subtitle?: string,
    elevation?: number,
  }

  const attrs = useAttrs();
  
  const props = withDefaults(defineProps<CardProps>(), {
    elevation: 0,
  })

  const computedElevation = computed(() => {
    return props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : `border border-2 dark:border-slate-300/30 border-slate-400/30`;
  })

</script>

<template>
  <div class="card" :class="computedElevation">
    
    <CardHeader :title="$props.title" :subtitle="$props.subtitle"></CardHeader>
    <CardHeader>
      <template v-slot:title>sssss</template>
      <template v-slot:subtitle>Subtitle</template>
    </CardHeader>
    
    <!-- <slot>
      <div class="card__header">
        <div class="card__header-title">
          <slot name="title">{{ $props.title }}</slot>
        </div>

        <div class="card__header-subtitle">
          <slot name="sub-title">{{ $props.subtitle }}</slot>
        </div>
      </div>

      <div class="card__content">
        <slot name="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum placeat aut assumenda corrupti necessitatibus impedit earum velit eveniet aliquam nihil!
        </slot>
      </div>

      <div class="card__action">
        <slot name="action">
          <Button text="Primary Action" btnClass="btn btn-info"></Button>
          <Button text="Secondary Action" btnClass="btn btn-plain"></Button>
        </slot>
        
      </div>
    </slot> -->
    
  </div>
  
</template>

