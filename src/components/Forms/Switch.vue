<script>
    import { Icon } from '@iconify/vue'

    export default{
        name:"Switch",
        components: {
            Icon
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

        },
        props:{

        }
    }
</script>

<template>
    <label class="switch-button">
        <input type="checkbox">
        <span class="switch-button-slider-round"></span>
    </label>
</template>
<style lang="scss">
</style>
