<script>
    import ButtonGroup from '@/components/Button/ButtonGroup.vue';
    export default{
        name:'ButtonGroupView',
        components:{
            
            ButtonGroup
        }
    }
</script>

<template>
    <ButtonGroup :list-of-buttons="[{btnClass :'btn btn-primary', text : 'button 1'},{btnClass :'btn btn-primary', text : 'button 2'}]"></ButtonGroup>
    
</template>

<style lang="scss">

</style>