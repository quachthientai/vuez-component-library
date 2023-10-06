<script>
// import Toast from '@/components/Toast/Toast.vue';
import Button from '@/components/Button/Button.vue'


export default {
  name: 'ToastView',
  components: {
    Button
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showToast() {
      this.$toast.success('Success!', {timeOut: 2000, position: 'top-center', onClickDismiss: false})
      this.$toast.warning('Success!', {timeOut: 3000, position: 'top-center', onClickDismiss: true})
      this.$toast.info('Success!', {timeOut: 4000, position: 'top-center', onClickDismiss: true})
      this.$toast.error('Success!', {timeOut: 5000, position: 'top-center', onClickDismiss: true, pauseOnHover: true})
      t
    },
    clearToast() {
      this.$toast.clear()
    }
  },
  created() {}
}
</script>

<template>
  <div>This is toast view</div>
  <div class="flex flex-row-reverse">

    <Button class="ms-3" btnClass="btn btn-warning" @click="showToast" text="show toast" />

    <Button class="ms-3" btnClass="btn btn-danger" @click="clearToast" text="clear toast" />
  </div>
  
</template>
