<script>
   import Dropdown from '@/components/Dropdown/Dropdown.vue';
   export default{
      name:'DropDownView',
      components:{
         Dropdown
      }
   }
</script>

<template> 
   <div class="flex ml-2 mt-2">
      <Dropdown dropDownClass="dropdown dropdown-primary" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-secondary" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-success" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-warning" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-danger" class="ml-3" text="dropdown"></Dropdown>
      <Dropdown dropDownClass="dropdown dropdown-info" class="ml-3" text="dropdown"></Dropdown>
   </div>
   

</template>

<style lang="scss">

</style>