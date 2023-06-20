<script>
   import Toast from '@/components/Toast/Toast.vue';
   export default {
      name: 'ToastView',
      components:{
        Toast
      }
   }
</script>

<template>
   <div>This is toast view</div>
   
   
   <Toast toastClass="toast toast-info" class="my-20"/>
   <Toast toastClass="toast toast-success" class="my-40"/>
   <Toast toastClass="toast toast-warning" class="my-60"/>
   <Toast toastClass="toast toast-danger" class="my-80"/>
   
</template>

