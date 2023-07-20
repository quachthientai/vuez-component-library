<script>
   import Card from '@/components/Card/Card.vue';
   export default {
      name: 'CardView',
      components: {
         Card
      },
      data() {

      }
   }
</script>

<template>
   <div class="m-5" >
      <Card :elevation="3"/>
   </div>
   
   
</template>

<style lang='scss' scoped>
</style>