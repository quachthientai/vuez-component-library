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
    <Card width="400" class="mb-3">
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

    <Card width="400" class="mb-3">
      <CardHeader appendIcon="mdi:home" title="this is title" subtitle="this is sub"/>
    </Card>

    <Card width="400" class="mb-3">
      <CardText width="400">
        <div class="text-content-6 text-slate-500">Word of the day</div>
        <p class="text-h4">
          el·ee·mos·y·nar·y
        </p>
        <p class="text-slate-800">adjective</p>
        <br>
        <div class="text-slate-800">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </CardText>
      <CardAction>
        <Button btnClass="btn btn-info" text="Learn more" />
      </CardAction>
    </Card>

    <Card title="this is title(props)" width="400" class="mb-3" subtitle="this is sub(props)">
      <template v-slot:text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos ut officia repellat numquam nobis ipsa, temporibus, expedita voluptatibus laudantium blanditiis architecto laboriosam, recusandae iure sit! Facere, temporibus quibusdam.</template>
      <template v-slot:action>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Secondary" />
      </template>
    </Card>

    <Card width="400" class="mb-3">
      <template v-slot:title>this is title (slots)</template>
      <template v-slot:subtitle>this is sub (slots)</template>
      <template v-slot:action>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Secondary" />
      </template>
    </Card>


  
  </div>
</template>

<style lang="scss" scoped></style>
