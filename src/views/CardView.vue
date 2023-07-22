<script>
import Card from '@/components/Card/Card.vue'
export default {
  name: 'CardView',
  components: {
    Card
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="m-5">
    <Card :elevation="1" outlined="false" class="w-full" />
  </div>
</template>

<style lang="scss" scoped></style>
