<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    
})
</script>

<template>
    <div>
    <!-- Example usage of the v-drag directive -->
        <div v-drag="{ id: 1, name: 'Item 1' }" id="ok">Item 1</div>
        <div v-drag="{ id: 1, name: 'Item 1' }" id="ok">Item 1</div>
        <div v-drag="{ id: 1, name: 'Item 1' }" id="ok">Item 1</div>
        <div v-drop class="w-[100px] h-[100px] bg-slate-600"></div>
        <div v-drop class="w-[100px] h-[100px] bg-black"></div>
    </div>
    
</template>

<style lang="scss" scoped>

</style>
