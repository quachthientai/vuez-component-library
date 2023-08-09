<script>
   import { eventBus } from '@/utils/eventBus';
   import Card from '@/components/Card/Card.vue';
   export default {
      name: 'DragDropView',
      components: {
         Card
      },
      data() {
         return {

         }
      }
   }
</script>

<template>
   <div class="relative">
     <!-- Draggable Elements -->

     <div class="flex mb-3 ">
      

        <div v-drag="{id:1, name: 'test1'}" id="111" class="w-[100px] h-[100px] bg-red-600">asdasd</div>

        <div v-drag:options="{handle: true}" class="w-[100px] h-[100px] bg-blue-600">asdasd</div>

        <div v-drag:options="{handle: true}" class="w-[100px] h-[100px] bg-green-600"></div>

        <div v-drag class="w-[100px] h-[100px] bg-yellow-600"></div>
     </div>
     
     <!-- Drop zones -->
     <div class="flex">
        <div v-drop:vertical class="border-4 mr-3 p-3 flex-col border-red-500 w-[500px] h-[700px]">

         <Card v-drag:options="{handle: true}" :elevation="1" class="mb-5 w-[442px]" :outlined="true" title="This is title (props)" subtitle="This is subtitle (props)"></Card>

         <Card v-drag:options="{handle: true}" :elevation="1" class="mb-5 w-[442px]" :outlined="true" title="This is title (props)" subtitle="This is subtitle (props)"></Card>

         <Card v-drag:options="{handle: true}" :elevation="1" class="mb-5 w-[442px]" :outlined="true" title="This is title (props)" subtitle="This is subtitle (props)"></Card>
           
           
        </div>

        <div v-drop:vertical class="border-4 p-3 flex flex-col border-blue-500 w-[500px] h-[700px]"></div>
     </div>
       
   </div>
</template>

<style lang="scss" scoped>

</style>

