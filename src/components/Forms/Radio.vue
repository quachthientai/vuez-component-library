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
            },
            radioType:{
                type:String,
                default:null
            }
        }
    }
</script>

<template>
    <input :class=[radioClass] name="radio" type="radio" :value=[radioValue]>
</template>

<style lang="scss">
</style>