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
            
        },
        data(){
            return{
                items: [
               {
                  title:'to radio',
                  routerName: 'radio',
                  appendIcon: 'mingcute:unlock-line',
                  prependIcon: 'mingcute:unlock-line'
               },
               {
                  title:'to button',
                  
               }
            ]
            }
        }
    }
    
</script>

<template>

    <ButtonGroup option='default' class="btnGroup btnGroup-primary" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup btnGroup-info" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup btnGroup-warning" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <br>
    <!--Pill-->
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-primary" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-info" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <ButtonGroup option='default' class="btnGroup-pill btnGroup-warning" :itemList="[{text:'text1'},{text:'text2'},{text:'text3'}]"></ButtonGroup>
    <br>
    <!--Custom-->
    <!-- <ButtonGroup option='custom' :item-list="[{btnClass:'btn btn-primary', class:'mr-2', text:'Primary', iconPosition:'right', icon:'ph:envelope-bold'}
,{btnClass:'btn btn-primary', class:'mr-2', text:'Primary', iconPosition:'right', icon:'ph:envelope-bold'}
,{dropDownClass:'dropwdown dropdown-secondary', class:'ml-3', text:'dropdown'}]"  ></ButtonGroup> -->
    <ButtonGroup class="mt-2" option="custom" > 
        <Button btnClass="btn btn-primary"  text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
        <Button btnClass="btn btn-primary"  text="Primary" iconPosition="right" icon="ph:envelope-bold"></Button>
        <Button btnClass="btn btn-outline-warning"  text="Warning" iconPosition="left" icon="ph:envelope-bold"></Button>
        <Dropdown dropDownClass="dropdown dropdown-primary"  text="dropdown">
            <template v-slot:dropdown-menu-slot>
                <ul class="dropdown__menu">
                    <li class="dropdown__item">assa</li>
                    <li class="dropdown__item">aaa</li>
                    <li class="dropdown__item">aaazzz</li>
                    </ul>
            </template>
        </Dropdown>
        <Dropdown dropDownClass="dropdown btn-lg dropdown-outline-info" :itemList="items" split="true" text="dropdown"/>
    </ButtonGroup>
</template>

<style lang="scss">

</style>