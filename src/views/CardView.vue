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
    <Card :elevation="1" class="w-[400px]"  outlined="true" />
  </div>
</template>

<style lang="scss" scoped></style>
