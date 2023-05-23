<script>
    import { Icon } from '@iconify/vue'

    export default{
        name:"Checkbox",
        components: {
            Icon,
        },
        data() {
            return {
               
            }
        },

        props: {
            
        },
    }
</script>

<template>
    <label class="checkbox"> <!-- checkbox container -->
        <input class="checkbox__input" type="checkbox"> <!-- native checkbox -->
        <span class="checkbox__custom"></span>
         <!-- fake checkbox -->
    </label>

</template>

<style lang="scss" scoped>
    
    // label {
    //     display: inline-block;
    //     width: 17px;
    //     height: 17px;
    //     position: relative;
    // }

    // //native checkbox
    // //ẩn native đi
    // input {
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     //chỉ là làm cho nó ẩn đi thôi, chứ ko phải hidden (nên vẫn lấy đc attribute của nó)
    //     opacity: 0;
    // }

    // //fake checkbox
    // label span {
    //     display: block;
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
        
    //     @apply rounded-[3px] border-[2px] border-slate-300;
        
    // }

    // // như anh đã nói, mình chỉ lấy attribute của native (::check, ::focus)
    // label span::after{
    //     @apply content-[""] absolute;
    //     left: 6.3px;
    //     right: 0;
    //     // top: 3.5px;
    //     bottom: 4.6px;
    //     opacity: 0;
    //     width: 0px;
    //     height: 0px;
    //     border: solid white;
    //     border-width: 0 2px 2px 0;
    //     transform: rotate(45deg);
    //     transition: width 0.5s, height 0.5s, opacity 0.5s;
    // }

    // input:checked + span{
    //     background-color: red;
    //     border:none;
    // }

    // input:checked ~ span::after {
    //     width: 5px;
    //     height: 9px;
    //     opacity: 1;
    // }

    
    input:focus + span{
        @apply ring-2 ring-red-500/70 ring-offset-1;
    }



    //bây giờ mình chỉ cho hiện dấu tick khi thằng input::checked

</style>
