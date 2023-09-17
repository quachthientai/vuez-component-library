<script setup lang="ts">
  import { ref, reactive, computed, onMounted, useAttrs, useSlots } from 'vue';
  import { CardTitle } from './CardTitle';
  import Button from '../Button/Button.vue';
  import Badge from '../Badge/Badge.vue';

  // import { CardProps } from './type';
  
  interface CardProps {
    title?: string,
    subtitle?: string,
    elevation?: number,
  }
  console.log(CardTitle);
  
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
    <CardTitle>{{ $props.title }}</CardTitle>
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

