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
   <!--
      text: {
            type: String,
            default: null
         },
         routeLink: {
            type: String,
            default: ''
         },
         prependIcon: {
            type: String,
            default: null,
         },
         appendIcon: {
            type: String,
            default: null,
         },
         isUppercase: {
            type: Boolean,
            default: false
         },
         isDisabled: {
            type: Boolean,
            default: false
         }, 
         btnClass: {
            type: [String, Array],
            default: 'btn btn-primary',
            required: true
         },
         isLoading: {
            type: Boolean,
            default: false,
         },
         externalLink: {
            type: String,
            default: null
         }
   -->
   <div v-if="option == 'default'" :class="[btnGroupClass] ">
     <Button>

     </Button>
   </div>
   <div v-else-if="option == 'custom' " :class="[`btnGroup-${option}`]">
      <slot></slot>
   </div>
</template>

<style lang="scss"></style>