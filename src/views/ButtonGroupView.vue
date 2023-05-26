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
    <ButtonGroup :list-of-buttons="[{btngroup:'btn btn-primary', text:'button 1'}]"></ButtonGroup>
</template>

<style lang="scss">

</style>