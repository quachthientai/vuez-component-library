<script>
    import { Icon } from '@iconify/vue'

    export default{
        name:"Switch",
        components: {
            Icon
        },
        data(){
            return{
                isSelected: false,
            }
        },
        props: {
            switchClass: {
                type: String,
                default: null,
                // required: true
            },
            isDisabled: {
                type: Boolean,
                default: false
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
           switchToggle(){
                this.isSelected = !this.isSelected
            }
        },
        computed:{
            computedIsSelected(){
                return this.isSelected ? "switch-selected" : ''
            },
            computedIsSelectedSlider(){
                return this.isSelected ? 'ml-10' : ''
            }
        }
    }
</script>

<template>
    <label :class="switchClass">
        <input type="checkbox" class="switch__input">
        <span class="switch__slider"></span>
    </label>

</template>
<style lang="scss">
</style>
