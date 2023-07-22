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
    <Card :elevation="1" :width="400" />
  </div>
</template>

<style lang="scss" scoped></style>
