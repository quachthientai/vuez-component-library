<script>
   import Button from '@/components/Button/Button.vue';

   export default {
      name: 'Button Group',
      components: {
         Button
      },
      data(){
         return{
            items:this.listOfButtons
         }
      },
      props: {
         listOfButtons:{
            type:[Object],
            required: true,
         }
      },
      
   }

   
   
</script>

<template>
   <!--<div class="buttonGroup">
      <Button v-for="item in items" 
         :text="item.text"
         :routeLink="item.routeLink"
         :icon="item.icon"
         :iconPosition="item.iconPosition"
         :isUppercase="item.isUppercase"
         :isDisabled="item.isDisabled"
         :btnClass="item.btnClass"
         :isLoading="item.isLoading"
         :externalLink="item.externalLink"
         >
      </Button>
   </div>-->
   <div class="btnGroup-container">
      <button>123</button>|
      <button>123</button>|
      <button>123</button>

   </div>
</template>

<buttonGroup :class="btnGroup btnGroup-primary" :itemsList="{}"></buttonGroup>

<style lang="scss"></style>