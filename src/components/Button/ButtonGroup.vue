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
         <a :href=[item.externalLink]>
         </a>
      </button>
   </div>
   <div v-else-if="optional==='custom'" class="btnGroup-custom">
      <Button btnClass="btn btn-primary" class="mr-2" text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
        <Button btnClass="btn btn-secondary" class="mr-2" text="Secondary" iconPosition="left" icon="ph:envelope-bold"></Button>
        <Button btnClass="btn btn-danger" class="mr-2" text="Danger" iconPosition="left" icon="ph:envelope-bold"></Button>
        <Dropdown dropDownClass="btn btn-primary" text="dropdown"></Dropdown>
   </div>
</template>

<style lang="scss"></style>