<script setup lang="ts">
  import { ref, reactive, computed, onMounted, useAttrs, useSlots } from 'vue';
  import Button from '../Button/Button.vue';
  import Badge from '../Badge/Badge.vue';

  // import { CardProps } from './type';

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
    return props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : `border dark:border-slate-300/30 border-slate-400/30`;
  })

  onMounted(() => {
    // console.log(slots)
  }) 
  
  // const computedStyling = computed(() => {
  //   return attrs.outlined ? `border dark:border-slate-300/30 border-slate-400/70` : '';
  // })
  
  
</script>

<template>
  <div class="card" :class="computedElevation">
    <!-- Fallback content slot, if slot is apply -->
    <slot>
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
        <!-- <Button text="Action" btnClass="btn btn-sm btn-primary"></Button> -->
      </div>
    </slot>
    
  </div>
  
</template>

<style lang="scss" scoped>

</style>
