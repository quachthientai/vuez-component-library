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
   <Toast toastClass="toast toast-success"/>
   <Toast toastClass="toast toast-success"/>
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto top-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto bottom-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-warning"/>
   <Toast toastClass="toast toast-danger"/>
   <Toast toastClass="toast toast-info" :position="top-right" /> -->
   
   
</template>

