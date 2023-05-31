<script>

   export default {
      name: 'Button Group',
      data(){
         return{
            itemList: this.btnGroupItemList,
            itemText: itemList.text,
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
         }
      },
      
   }

   
   
</script>

<template>
   <div :class=[btnGroupClass]>
      <button v-for="item in itemList">
         {{ item.text }}
      </button>
   </div>
</template>

<style lang="scss"></style>