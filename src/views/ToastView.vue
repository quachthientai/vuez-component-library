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
            
            this.$toast.error('Info!', {
               timeOut: 3000,
            });
            
            this.$toast.warning('Warning!', {
               type: 'toast-danger',
               timeOut: 10000})
         },
         clearToast() {
            this.$toast.clear();
         }
      },
      created() {
         
      }
   }
</script>

<template>
   <div>This is toast view</div>

   
   <Button class="ms-3" btnClass="btn btn-warning" @click="showToast" text="show toast"/>

   <Button class="mt-3 ms-3" btnClass="btn btn-danger" @click="clearToast" text="clear toast"/>
   
   
   
</template>

