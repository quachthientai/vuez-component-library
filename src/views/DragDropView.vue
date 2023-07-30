<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { eventBus } from '@/utils/eventBus';
export default defineComponent({
    
})


</script>

<template>
    <div class="relative">
      <!-- Draggable Elements -->
      <div class="flex mb-3">
         <div v-drag="{id:1, name: 'test1'}" id="111" class="w-[100px] ml-2 h-[100px] bg-red-600"></div>

         <div v-drag class="w-[100px] ml-2 h-[100px] bg-blue-600"></div>
         
         <div v-drag class="w-[100px] ml-2 h-[100px] bg-green-600"></div>

         <div v-drag class="w-[100px] ml-2 h-[100px] bg-yellow-600"></div>
      </div>
      
      <!-- Drop zones -->
      <div class="flex absolute">
         <div v-drop class="border-4 mr-3 flex border-red-500 w-[500px] h-[700px]"></div>
         <div v-drop class="border-4 flex border-blue-500 w-[500px] h-[700px]"></div>
      </div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>