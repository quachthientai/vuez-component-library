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
    <label class="inline-flex">
        <input :class=[radioClass] name="radio" :id=[radioID] type="radio" :value=[radioValue]>
        <span class="h-[25px] inline-flex align-middle">
            <label>{{ radioValue }}</label>
        </span>
        
    </label>
    
    

</template>

<style lang="scss">
</style>