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
    <div @click="switchToggle" :class="[switchClass,computedIsSelected]">
        <span :class="computedIsSelectedSlider" class="switch-slider"></span>
        <Icon icon="mdi-light:home" class="absolute top-3 left-3"/>
        <Icon icon="mdi-light:home" class="absolute top-3 right-3"/>
    </div>

</template>
<style lang="scss">
</style>
