<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<template>
    <p>Text Input</p>
    <input v-validate="{statement:'Validation Format of Text',minLength:3, maxLength:100}" class="input_test border border-slate-800" name="email"  type="text" />
    <p>Email Input</p>
    <input v-validate="{statement:'Validation Format of Email',minLength:3, maxLength:100}" class="input_test border border-slate-800"  type="email" />
    <p>Date Input</p>
    <input v-validate="{statement:'Validation Format of Date', minDate:'10-10-2023', maxDate:'10-10-2024'}" class="input_test border border-slate-800" type="date">
</template>

<style lang="scss">
    
</style>