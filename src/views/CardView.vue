<script lang="ts">
import {Card, CardHeader, CardTitle, CardSubtitle, CardText, CardAction} from '@/components/Card/index';
import Button from '@/components/Button/Button.vue';
import { Icon } from '@iconify/vue';

export default {
  name: 'CardView',
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardAction,
    CardText,
    Button,
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
      <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a dolores tenetur consectetur fuga nulla libero quod! Aliquam optio provident ducimus explicabo velit. Corrupti, exercitationem quibusdam.</CardText>
      <CardAction>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Primary" />
      </CardAction>
    </Card>

    <Card>
      <CardHeader appendIcon="mdi:home" title="this is title" subtitle="this is sub"/>
    </Card>

    <Card>
      
      <CardHeader>
        <template v-slot:append>asd</template>
        <template v-slot:title>aaaaa</template>
        <template v-slot:subtitle>aaaaa</template>
      </CardHeader>
      
    </Card>

    <Card title="this is title(props)" subtitle="this is sub(props)"/>

    <Card>
      <template v-slot:title>this is title (slots)</template>
      <template v-slot:subtitle>this is sub (slots)</template>
      <template v-slot:action>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Primary" />
      </template>
    </Card>


  
  </div>
</template>

<style lang="scss" scoped></style>
