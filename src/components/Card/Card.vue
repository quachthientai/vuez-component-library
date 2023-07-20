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

      },
      computed: {
         computedElevation() {
            return `elevation-${this.elevation}`
         }
      }
   }
</script>

<template>
   <div class="card" :class="computedElevation">asd</div>
</template>

<style lang='scss' scoped>
   
   .card {
      
      @apply block border-2 w-[400px] relative rounded-md p-0 overflow-hidden text-ellipsis
   }
</style>