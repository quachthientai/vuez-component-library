<script lang="ts">
import {Card, CardHeader, CardTitle, CardSubtitle, CardMedia, CardText, CardAction} from '@/components/Card/index';
import { Button } from '@/components/Button/Button';
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
    CardMedia,
    Button,
    Icon
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<template>
  <div class="m-5">
    <Card width="400" :elevation="2" class="m-2">
      <CardHeader class="pr-2">
        <template v-slot:append>
            <Button size="lg" :icon="{icon: 'mdi-dots-vertical',color:'grey', width:'1.7rem', height: '1.7rem'}" variant="text"></Button>
        </template>

        <CardTitle>Shrimp and Chorizo Paella</CardTitle>
        <CardSubtitle>September 14, 2016</CardSubtitle>
      </CardHeader>
      <CardMedia width="400" height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></CardMedia>
      <CardText>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</CardText>
      <CardAction class="justify-between" >
        <div class="flex gap-1">
          <Button size="lg" :icon="{icon: 'mdi:heart', color:'text-red-500 dark:text-blue-500', width:'1.7rem', height: '1.7rem'}" variant="text" />
          <Button size="lg" :icon="{icon: 'material-symbols:share', width:'1.7rem', height: '1.7rem'}" variant="text" />
        </div>
        
        
        <Button size="lg" 
          @click="this.show = !this.show" 
          :icon="{icon: `${this.show ? 'mdi-chevron-up' : 'mdi-chevron-down'}`}" 
          variant="text" 
        />
      </CardAction>
    </Card>

    <!-- <Card width="400" class="m-2">
      <CardHeader appendIcon="mdi:home" title="this is title" subtitle="this is sub"/>
    </Card> -->

    <Card width="400" class="mx-2 my-5">
      <CardText>
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
        <Button size="md" variant="text" text="Secondary" />
        <Button size="md" color="primary" text="Learn more" />
        
      </CardAction>
    </Card>

    <!-- <Card width="400" class="m-2" title="this is title(props)" subtitle="this is sub(props)">
      
      <template v-slot:text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos ut officia repellat numquam nobis ipsa, temporibus, expedita voluptatibus laudantium blanditiis architecto laboriosam, recusandae iure sit! Facere, temporibus quibusdam.</template>
      <template v-slot:action>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Secondary" />
      </template>
    </Card> -->

    <!-- <Card width="400" class="m-2">
      <template v-slot:title>this is title (slots)</template>
      <template v-slot:subtitle>this is sub (slots)</template>
      <template v-slot:action>
        <Button btnClass="btn btn-primary" text="Primary" />
        <Button btnClass="btn btn-plain" text="Secondary" />
      </template>
    </Card> -->

    
  
  </div>
</template>

<style lang="scss" scoped></style>
