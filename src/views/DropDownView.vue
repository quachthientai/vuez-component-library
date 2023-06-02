<script>
   import Dropdown from '@/components/Dropdown/Dropdown.vue';
   export default{
      name:'DropDownView',
      data() {
         return {
            items: [
               {
                  title:'assasa'
               },
               {
                  title:'zzzz'
               }
            ]
         }
      },
      components:{
         Dropdown
      }
   }
</script>

<template> 
   <div class="flex ml-2 mt-2">
      <Dropdown dropDownClass="dropdown dropdown-outline-warning btn-sm" :split="true" :itemList="items" class="ml-3" text="dropdown">
         
      </Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-secondary btn-lg" class="ml-3" text="dropdown">
   
      </Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-outline-success" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-warning" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-danger" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-info" class="ml-3" text="dropdown"></Dropdown>
      
   </div>
   

</template>

<style lang="scss">

</style>