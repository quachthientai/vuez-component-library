<script lang="ts">
  // import Card from '@/components/Card/Card.vue'
  import {Card} from '@/components/Card/Card'

// import CardHeader from '@/components/Card/CardHeader.vue';

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
    Pass as props
    <!-- <Card :elevation="2" :width="400" title="this is card title"  subtitle="This is subtitle (props)">sss</Card> -->
    <Card title="aaaa" >sss</Card>
    <!-- Using slots
    <Card :elevation="3" :outlined="true" subtitle="subtitle" title="This is titlaaae">
      
      <template v-slot:title>This is title</template>
      <template v-slot:sub-title>This is subtitle</template>
      <template v-slot:content>This is content</template>

    </Card> -->

    
    
  </div>
</template>

<style lang="scss" scoped></style>
