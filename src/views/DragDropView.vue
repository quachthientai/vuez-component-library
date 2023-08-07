<script>
   import { eventBus } from '@/utils/eventBus';

   export default {
      name: 'DragDropView',
      components: {

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
        <div v-drag="{id:1, name: 'test1'}" id="111" class="w-[100px] h-[100px] bg-red-600"></div>

        <div v-drag:options="{handle: true}" class="w-[100px] h-[100px] bg-light border-4"></div>

        <div v-drag:options="{handle: true}" class="w-[100px] h-[100px] bg-green-600"></div>

        <div v-drag class="w-[100px] h-[100px] bg-yellow-600"></div>
     </div>
     
     <!-- Drop zones -->
     <div class="flex">
        <div v-drop:horizontal class="border-4 mr-3 p-3 flex border-red-500 w-[500px] h-[700px]">

           <!-- <Card v-drag :elevation="1" class="mb-5" :outlined="false" title="This is title (props)" subtitle="This is subtitle (props)"/> -->
           
           
        </div>

        <div v-drop:vertical class="border-4 p-3 flex flex-col border-blue-500 w-[500px] h-[700px]"></div>
     </div>
       
   </div>
</template>

<style lang="scss" scoped>

</style>

