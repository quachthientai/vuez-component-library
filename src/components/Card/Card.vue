<script setup lang="ts">
  import { computed, useAttrs, useSlots, ref } from 'vue';
  import { CardHeader } from '../Card/CardHeader';
  import { CardTitle } from '../Card/CardTitle';
  import { CardSubtitle } from '../Card/CardSubtitle';
  import { CardAction } from '../Card/CardAction';
  import { CardText } from '../Card/CardText';

  import Button from '@/components/Button/Button.vue';

  


  interface CardProps {
    title?: string,
    text?: string,
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

    <!-- <CardHeader prependIcon="mdi-menu">
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader> -->


    <CardText class="card-text">
      <div class="font-bold mb-1 text-[1.2em]">
        Lorem
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi corporis id ullam dolorem dolorum quaerat tenetur blanditiis aut voluptas eveniet eos facilis rerum, pariatur at.
    </CardText>

    <!-- <CardAction>
      <Button text="ACTION 1" class="mr-3" btnClass="btn btn-info"></Button>
      <Button text="ACTION 2" btnClass="btn btn-plain"></Button>
    </CardAction> -->
  </div>
  
</template>

