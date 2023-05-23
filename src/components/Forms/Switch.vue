<script>
    import { Icon } from '@iconify/vue'

    export default{
        name:"Switch",
        components: {
            Icon,
        },
        data() {
            return {
                isChecked: true
            }
        },

        props: {
            switchClass: {
                type: String,
                default: 'switch switch-primary',
                required: true
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
        methods: {
            onChange(){
                return this.isChecked = !this.isChecked;
            }
        }
    }
</script>

<template>
    <label :class="switchClass">

        <input
            :checked="isChecked"
            class="switch__input" 
            @change="onChange"
            :disabled="isDisabled"
            role="switch" 
            type="checkbox"
        >
        <span class="switch__slider"></span>

        <template v-if="!(onStateIcon || offStateIcon) && (onStateText || offStateText)">
            <span class="switch__labels" :data-on="onStateText" :data-off="offStateText"></span>
        </template>
        
        <template v-if="(onStateIcon || offStateIcon) && !(onStateText || offStateText)">
            <span class="switch__labels">
                <Icon :icon="onStateIcon" width="12" height="12" class="onIcon"></Icon>
                <Icon :icon="offStateIcon" width="12" height="12" class="offIcon"></Icon>
            </span>
        </template>
        
    </label>
</template>

<style lang="scss">
</style>
