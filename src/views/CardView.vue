<script lang="ts">
import {Card, CardHeader, CardTitle, CardSubtitle, CardText, CardAction} from '@/components/Card/index';


export default {
  name: 'CardView',
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardAction,
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="m-5">
    
    <!-- <Card :elevation="2" :width="400" title="this is card title"  subtitle="This is subtitle (props)">sss</Card> -->
    <Card  title="this is title" subtitle="ssss"></Card>

    <Card>
      <CardHeader>
        <CardTitle>this is title</CardTitle>
        <CardSubtitle>this is sub</CardSubtitle>
      </CardHeader>
    </Card>

    <Card>
      <template v-slot:title>asdas</template>
      <template v-slot:subtitle>zzz</template>
    </Card>

    
    Pass as props
    <!-- Using slots
    <Card :elevation="3" :outlined="true" subtitle="subtitle" title="This is titlaaae">
      
      <template v-slot:title>This is title</template>
      <template v-slot:sub-title>This is subtitle</template>
      <template v-slot:content>This is content</template>

    </Card> -->

    
    
  </div>
</template>

<style lang="scss" scoped></style>
