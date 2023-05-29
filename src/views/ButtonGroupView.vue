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
    <ButtonGroup class="btnGroup btnGroup-primary" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup btnGroup-secondary" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup btnGroup-info" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup btnGroup-success" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup btnGroup-warning" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup btnGroup-danger" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
</template>

<style lang="scss">

</style>