<script>
   import Dropdown from '@/components/Dropdown/Dropdown.vue';
   export default{
      name:'DropDownView',
      data() {
         return {
            items: [
               {
                  title:'to radio',
                  routerName: 'radio'
               },
               {
                  title:'to button',
                  e: 'ass'
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
      <Dropdown dropDownClass="dropdown dropdown-primary" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-secondary" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-warning" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-success" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-danger" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-info" :itemList="items" text="dropdown" class="ml-3" />
   </div>

   <div class="flex ml-2 mt-2">
      <Dropdown dropDownClass="dropdown dropdown-primary" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-secondary" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-warning" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-success" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-danger" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-info" :itemList="items" split="true" text="dropdown" class="ml-3" />
   </div>

   <div class="flex ml-2 mt-2">
      <Dropdown dropDownClass="dropdown dropdown-outline-primary" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-secondary" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-warning" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-success" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-danger" :itemList="items" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-info" :itemList="items" text="dropdown" class="ml-3" />
   </div>
   
   <div class="flex ml-2 mt-2">
      <Dropdown dropDownClass="dropdown dropdown-outline-primary" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-secondary" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-warning" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-success" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-danger" :itemList="items" split="true" text="dropdown" class="ml-3" />
      <Dropdown dropDownClass="dropdown dropdown-outline-info" :itemList="items" split="true" text="dropdown" class="ml-3" />
   </div>
   

</template>

<style lang="scss">

</style>