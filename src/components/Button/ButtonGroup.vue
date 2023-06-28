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
      props:{
         btnGroupClass:{
            type: String,
            default: "btnGroup btnGroup-primary"
         },
         itemList:{
            type:[Object],
            required:false,
            validator(value) {
               let itemListKey = ["text"]
               let falseKey = []

               for(const i of value) {
                  for (const key in i) {
                     if(itemListKey.indexOf(key) > -1) {
                        continue;
                     }
                     falseKey.push(key); 
                  }
               }

               if(falseKey.length > 0) {
                  falseKey.forEach(key => {
                     console.warn(`[${key}] is not valid key in itemList!`)
                  })
               }

               return true;
            }
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
      <button v-for="item in itemList">{{ item.text }}</button>
   </div>
   <div v-else-if="option == 'custom' " :class="[`btnGroup-${option}`]">
      <slot></slot>
   </div>
</template>

<style lang="scss"></style>