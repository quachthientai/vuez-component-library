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
    <ButtonGroup option='default' class="btnGroup btnGroup-primary" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup btnGroup-info" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup btnGroup-warning" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <br>
    <!--Pill-->
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-primary" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-info" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-warning" :item-list="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <br>
    <!--Custom-->
    <ButtonGroup option='custom' :item-list="[{btnClass:'btn btn-primary', class:'mr-2', text:'Primary', iconPosition:'right', icon:'ph:envelope-bold'}
,{btnClass:'btn btn-primary', class:'mr-2', text:'Primary', iconPosition:'right', icon:'ph:envelope-bold'}
,{dropDownClass:'dropwdown dropdown-secondary', class:'ml-3', text:'dropdown'}]"  ></ButtonGroup>

</template>

<style lang="scss">

</style>