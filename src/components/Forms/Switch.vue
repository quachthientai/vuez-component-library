<script>
    import { Icon } from '@iconify/vue'

    export default{
        name:"Switch",
        components: {
            Icon
        },
        // data(){
        //     return{
        //         isSelected: false,
        //     }
        // },
        props: {
            switchClass: {
                type: String,
                default: null,
                required: true
            },
            isDisabled: {
                type: Boolean,
                default: false,
            },
            onStateText: {
                type: String,
                default: null,
            },
            offStateText: {
                type: String,
                default: null,
            },
            onStateIcon: {
                type: String,
                default: null,   
            },
            offStateIcon: {
                type: String,
                default: null,
            }
        },
        methods:{
        //    switchToggle(){
        //         this.isSelected = !this.isSelected
        //     }
            onChange() {
                console.log();
            }
        },
        computed:{
            // computedIsSelected(){
            //     return this.isSelected ? "switch-selected" : ''
            // },
            // computedIsSelectedSlider(){
            //     return this.isSelected ? 'ml-10' : ''
            // }
        }
    }
</script>

<template>
    <label :class="switchClass">
        <input class="switch__input" @change="onChange" :disabled="isDisabled" type="checkbox">
        <span class="switch__slider"></span>
        
        <span class="labels" data-on="ON" data-off="OFF"></span>
        
    </label>
</template>

<style lang="scss">
</style>
