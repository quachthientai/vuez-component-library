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
            required:true
         },
         option:{
            type:String,
            required:false,
            default: 'default'
         }
      },
      methods:{
      },
      computed:{
      }
   }
   
</script>


<template>
   <div v-if="option == 'default'" :class="[btnGroupClass]">
      <button  v-for="item in itemList">
         {{ item.text }}
      </button>
   </div>
   <div v-else-if="option == 'custom' " :class="[`btnGroup-${option}`]">
      <!-- <template v-for="item in itemList">
         <Button v-if="item.btnClass" 
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
         <Dropdown v-if="item.dropDownClass"
            :text="item.text"
            :dropDownClass="item.dropDownClass"
         >
         </Dropdown>
      </template> -->
      <slot></slot>
   </div>
</template>

<style lang="scss"></style>