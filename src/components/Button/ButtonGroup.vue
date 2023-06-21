<script>
   import Button from './Button.vue';
   import Dropdown from '../Dropdown/Dropdown.vue';
   export default {
      name:
         'ButtonGroup'
      ,
      components:{
         Button, Dropdown
      },
      data(){
         return{

         }
      },
      props:{
         btnGroupClass:{
            type: String,
            default: "btnGroup btnGroup-primary"
         },
         itemList:{
            type:[Object],
            required:false,
         },
         option:{
            type:String,
            required:false,
            default: 'default'
         }
      },
      methods:{
         handleRouting : (link)=>{
            location.href = link
         }
      },
      computed:{
         
      }
   }
   
</script>


<template>
   <div v-if="option == 'default'" :class="[btnGroupClass] ">
      <button @click="item.function? item.function : handleRouting(item.routingLink) " v-for="item in itemList">
         {{ item.text }}
      </button>
   </div>
   <div v-else-if="option == 'custom' " :class="[`btnGroup-${option}`]">
      <slot></slot>
   </div>
</template>

<style lang="scss"></style>