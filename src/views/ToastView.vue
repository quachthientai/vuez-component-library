<script>
   import Toast from '@/components/Toast/Toast.vue';
   import Button from '@/components/Button/Button.vue';
   export default {
      name: 'ToastView',
      components:{
        Toast,
        Button
      },
      data() {
         return {
            isShow: false
         }
      },
      methods: {
         handleToggle() {
            this.isShow = !this.isShow
         }
      }
   }
</script>

<template>
   <div>This is toast view</div>

   <Button class="ms-3" btnClass="btn btn-primary" @click="handleToggle" text="show toast"/>
   <Toast toastClass="toast toast-success" @onDismiss="handleToggle" :isShow="isShow"/>
   <!-- <Toast toastClass="toast toast-success"/> -->
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto top-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto bottom-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-warning"/>
   <Toast toastClass="toast toast-danger"/>
   <Toast toastClass="toast toast-info" :position="top-right" /> -->
   
   
</template>

