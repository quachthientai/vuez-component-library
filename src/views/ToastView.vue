<script>
   // import Toast from '@/components/Toast/Toast.vue';
   import Button from '@/components/Button/Button.vue';
   
   export default {
      name: 'ToastView',
      components:{
        Button
      },
      data() {
         return {
            isShow: false,
         }
      },
      methods: {
         showToast() {
            
            this.$toast.success('Success!');
            this.$toast.info('Info!');
            this.$toast.warning('Warning!');
            this.$toast.error('Error!');
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

