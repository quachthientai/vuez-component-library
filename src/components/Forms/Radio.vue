<script>

    export default {
        name:"Radio",
        props:{
            radioClass:{
                type: String,
                default: '',
                
            },
            radioValue:{
                type:String,
                default:'',
                required:true
            }
        }
    }
</script>

<template>
    
    <label :class=[radioClass]>
        <input class="radio__input" name="radio" type="radio" :value=[radioValue]>
        <span class="radio__checkmark"></span>
    </label>
    
</template>

<style lang="scss">
</style>