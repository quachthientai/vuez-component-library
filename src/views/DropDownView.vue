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
   this is dropdown view
   <Dropdown dropDownClass="btn btn-primary" text="dropdown"></Dropdown>
</template>

<style lang="scss">

</style>