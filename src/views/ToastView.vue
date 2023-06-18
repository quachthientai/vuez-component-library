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
            isShow: false,
         }
      },
      methods: {
         handleToggle(e) {
            console.log(e.target)
            this.isShow = !this.isShow
            
         },
         // handleToggle2() {
         //    this.isShow2 = !this.isShow2
         // }
      }
   }
</script>

<template>
   <div>This is toast view</div>

   <Button class="ms-3" btnClass="btn btn-danger" @click="handleToggle" text="show toast"/>
   <Toast toastClass="toast toast-danger" position="bottom-left" @onDismiss="handleToggle" :isShow="isShow" />

   <!-- <Button class="ms-3" btnClass="btn btn-warning" @click="handleToggle2" text="show toast"/>

   <Toast toastClass="toast toast-warning" position="bottom-left" v-model:isShow="isShow2"/> -->

   <!-- <Button class="ms-3" btnClass="btn btn-primary" @click="handleToggle2" text="create"/> -->
   <!-- <Toast toastClass="toast toast-success"/> -->
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto top-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-success" class="my-3 m-auto bottom-0 left-0 right-0"/> -->
   <!-- <Toast toastClass="toast toast-warning"/>
   <Toast toastClass="toast toast-danger"/>
   <Toast toastClass="toast toast-info" :position="top-right" /> -->
   
   
</template>

