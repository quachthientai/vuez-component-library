<script>
    import { Icon } from '@iconify/vue'
import { IconBase } from 'react-icons';

    export default{
        name:"Switch",
        components: {
    Icon,
    IconBase
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
        }
    }
</script>

<template>
    <label :class="switchClass">
        <input 
            class="switch__input" 
            @change="onChange" 
            :disabled="isDisabled" type="checkbox"
        >

        <span class="switch__slider"></span>

        <template v-if="!(onStateIcon || offStateIcon) && (onStateText || offStateText)">
            <span class="switch__labels" :data-on="onStateText" :data-off="offStateText"></span>
        </template>
        
        <template v-if="(onStateIcon || offStateIcon) && !(onStateText || offStateText)">
            <span class="switch__labels">
                <Icon :icon="onStateIcon" width="11" class="onIcon"></Icon>
                <Icon :icon="offStateIcon" width="11" class="offIcon"></Icon>
            </span>
        </template>
        
    </label>
</template>

<style lang="scss">
</style>
