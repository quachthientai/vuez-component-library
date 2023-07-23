<script setup lang="ts">
  import { ref, reactive, computed, onMounted, useAttrs, toRef } from 'vue';
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
    return  props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : '';
  })

  const computedStyling = computed(() => {
    return attrs.outlined ? `border dark:border-slate-300/30 border-slate-400/70` : '';
  })
  
  
</script>

<template>
  <div class="card p-3 flex flex-col gap-4" :class="[computedElevation, computedStyling]">
    <div class="card-title flex flex-col">
      <div class="title text-h5 font-bold mb-0">Title</div>
      <div class="sub-title dark:text-slate-400 text-slate-500 text-content-5 p-0">Subtitle</div>
    </div>

    <div class="card-content">
      <div class="title text-content-5 mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum placeat aut assumenda corrupti necessitatibus impedit earum velit eveniet aliquam nihil!</div>
    </div>

    <div class="action">
      <!-- <Button text="ACTION" btnClass="btn btn-primary"></Button> -->
      <Badge
        text="Primary"
        icon="material-symbols:star-outline-rounded"
        class="mr-2"
        badgeClass="badge badge-pill-primary "
      />

      <Badge
        text="Danger"
        icon="material-symbols:star-outline-rounded"
        class="mr-2"
        badgeClass="badge badge-pill-danger "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply relative w-[400px]  dark:bg-slate-700 bg-light rounded-md overflow-hidden text-ellipsis;
}
</style>
