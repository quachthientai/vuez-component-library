<script lang="ts">
import {Card, CardHeader, CardTitle, CardSubtitle, CardText, CardAction} from '@/components/Card/index';
import { Icon } from '@iconify/vue';

export default {
  name: 'CardView',
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardAction,
    Icon
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="m-5">
    <Card>
      <CardHeader>
        <CardTitle>this is title</CardTitle>
        <CardSubtitle>this is sub</CardSubtitle>
      </CardHeader>
    </Card>

    <Card>
      <CardHeader title="this is title" subtitle="this is sub"/>
    </Card>

    <Card>
      <CardHeader>
        <template v-slot:title>aaaaa</template>
        <template v-slot:subtitle>aaaaa</template>
      </CardHeader>
    </Card>

    <Card title="this is title(props)" subtitle="this is sub(props)"/>

    <Card>
      <template v-slot:title>this is title (slots)</template>
      <template v-slot:subtitle>this is sub (slots)</template>
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
