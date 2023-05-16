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
    <ButtonGroup :list-of-buttons="[{btnClass=""}]"></ButtonGroup>
</template>

<style lang="scss">

</style>