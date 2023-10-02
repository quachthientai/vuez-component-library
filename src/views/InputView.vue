<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<template>
    <input v-validate="{statement:'Hello there'}" class="input_test border border-slate-800" name="email"  type="text" />
</template>

<style lang="scss">

</style>