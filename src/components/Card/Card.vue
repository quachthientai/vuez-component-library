<script>
   export default {
      name: 'Card',
      components: {

      },
      data() {

      },
      props: {
         width: {
            type: Number,
            default: null,
         },
         elevation: {
            type: Number,
            default: 0,
         }

      }
   }
</script>

<template>
   <div class="card elavation-1">asd</div>
</template>

<style lang='scss' scoped>
   
   .card {
      
      @apply block border w-[400px] relative rounded-md p-0 overflow-hidden text-ellipsis
   }
</style>