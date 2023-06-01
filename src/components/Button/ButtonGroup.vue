<script>
   import Button from './Button.vue';
   import Dropdown from '../Dropdown/Dropdown.vue';
   export default {
      name: 'Button Group',
      components:{
         Button,
         Dropdown
      },
      data(){
         return{
            itemList: this.btnGroupItemList,     
         }
      },
      props: {
         btnGroupClass:{
            type:String,
            required:true,
            default: "btnGroup btnGroup-primary"
         },
         btnGroupItemList:{
            type:[Object],
            required:true,
            default:[],
         },
         btnStyle:{
            type:String,
            required: false,
            default:"normal"
            //switch to pill shape
         },
         optional:{
            type:String,
            required:false,
            default:"default"
         }
      },
      
   }

   
   
</script>


<template>
   <div v-if="optional === 'default'" :class=[btnGroupClass,btnStyle]>
      <button v-for="item in itemList">
         {{ item.text }}
         <a :href=[item.externalLink,routerLink]>
         </a>
      </button>
   </div>
   <div v-else-if="optional=='custom'" class="btnGroup-custom">
      <template v-for="item in itemList">
         <Button v-if="item.btnClass" 
            :btnClass="item.btnClass"
            :class="item.class"
            :text="item.text"
            :iconPosition="item.iconPosition"
            :icon="item.icon"
         ></Button>
      </template>
   </div>
</template>

<style lang="scss"></style>