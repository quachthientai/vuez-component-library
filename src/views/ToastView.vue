<script>
   // import Toast from '@/components/Toast/Toast.vue';
   import Button from '@/components/Button/Button.vue';
   
   import { h, render } from 'vue';

   export default {
      name: 'ToastView',
      components:{
      //   Toast,
        Button
      },
      data() {
         return {
            isShow: false,
         }
      },
      methods: {
         showToast() {
            this.$toast.open();
         }
      },
      created() {
         
      }
   }
</script>

<template>
   <div>This is toast view</div>

   
   <Button class="ms-3" btnClass="btn btn-warning" @click="showToast" text="show toast"/>

   

   
   
   
</template>

