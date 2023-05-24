<script>

    export default {
        name:"Radio",
        props:{
            radioClass:{
                type: String,
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
            },
            radioID:{
                type:String,
                default:null,
                required:true
            }
        }
    }
</script>

<template>
    <label class="inline-flex align-middle">
        <input :class=[radioClass] name="radio" :id=[radioID] type="radio" :value=[radioValue]>
    </label>
    <span class="ml-1 mr-1 align-middle">
            <label>{{ radioValue }}</label>
    </span>
    
    
    

</template>

<style lang="scss">
</style>