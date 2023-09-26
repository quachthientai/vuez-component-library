<script setup lang="ts">
  import { computed, useAttrs, useSlots, ref } from 'vue';
  import { CardHeader } from '../Card/CardHeader';
  import { CardTitle } from '../Card/CardTitle';
  import { CardSubtitle } from '../Card/CardSubtitle'
  import { Icon } from '@iconify/vue';

  interface CardProps {
    title?: string,
    width?: number | string,
    subtitle?: string,
    elevation?: number,
  }

  const attrs = useAttrs();

  const props = withDefaults(defineProps<CardProps>(), {
    elevation: 0,
  })

  const width = ref(props.width);
  
  const computedElevation = computed(() => {
    return props.elevation > 0 && !attrs.outlined ? `elevation-${props.elevation}` : `border border-2 dark:border-slate-300/30 border-slate-400/30`;
  })



</script>

<template>
  <div class="card" :style="{width: width + 'px'}" :class="[computedElevation]">

    <CardHeader>
      <template v-slot:prepend>
        <Icon icon="mdi:menu" />
      </template>

      <CardTitle>title</CardTitle>
      <CardSubtitle>sub</CardSubtitle>

      <template v-slot:append>
        <Icon icon="mdi-dots-vertical" />
      </template>

    </CardHeader>

    <CardHeader prependIcon="mdi:home" appendIcon="mdi-dots-vertical">
      <template v-slot:title>title</template>
      <template v-slot:subtitle>sub</template>
    </CardHeader>

    <CardHeader prependIcon="mdi:home" appendIcon="mdi-dots-vertical" title="title" subtitle="sub"></CardHeader>

    <!-- <CardHeader>
      
      
      
    </CardHeader> -->




    <!-- <CardHeader prependIcon="mdi-home" appendIcon="mdi-dots-vertical">
      <template v-slot:title>This is title</template>
      <template v-slot:subtitle>This is subtitle</template>
    </CardHeader> -->
    
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

