<script>
   // import Icon from '../src/components/Icon/Icon.vue'
   export default {
      name: 'Icon',
      props: {
         iconType:{
            type: String, 
            default: '',
            required: true
         },
         iconName: {
            type: String,
            default: '',
            required: true 
         }
      },
      
   }

</script>

<template>
   <div>
      <span>
         <font-awesome-icon class="ml-[0.4rem]" :icon="[this.type,this.name]" size="lg" spin/>
      </span> 
   </div>
   
</template>

<style lang="scss"></style>