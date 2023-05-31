<script>
    import ButtonGroup from '@/components/Button/ButtonGroup.vue';
    import Button from '@/components/Button/Button.vue';
    import Dropdown from '@/components/Dropdown/Dropdown.vue';
    export default{
        name:'ButtonGroupView',
        components:{
            ButtonGroup,
            Button,
            Dropdown,
            
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
    <br>
    <!--Pill Default Button Group-->
    <ButtonGroup class="btnGroup pill btnGroup-primary" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup pill btnGroup-secondary" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup pill btnGroup-info" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup pill btnGroup-success" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup pill btnGroup-warning" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <ButtonGroup class="btnGroup pill btnGroup-danger" :btnGroupItemList="[{text:'button1'},{text:'button2'},{text:'button3'}]"></ButtonGroup>
    <br>
    <!--Custom-->
    <ButtonGroup optional="custom">

    </ButtonGroup>
</template>

<style lang="scss">

</style>