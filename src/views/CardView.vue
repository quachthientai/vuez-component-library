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
  <div class="m-5 w-[400px]">
    <Card :elevation="1" outlined="false" title="This is titlaaae"> 
      <template v-slot:title>This is title</template>
      <template v-slot:sub-title>This is subtitle</template>
      <template v-slot:content>This is content</template>
    </Card>
  </div>
</template>

<style lang="scss" scoped></style>
