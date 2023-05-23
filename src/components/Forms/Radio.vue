<script>

    export default {
        name:"Radio",
        props:{
            radioClass:{
                type: String,
                default: 'radio radio-primary',
                required:true
                
            },
            radioValue:{
                type:String,
                default:'',
                required:true
            },
            radioType:{
                type:String,
                default:null
            }
        }
    }
</script>

<template>
    
    <input class="radio__input" name="radio" id="1" type="radio" :value=[radioValue]>
</template>

<style lang="scss">
</style>