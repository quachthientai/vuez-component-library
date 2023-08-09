<script>
// import Toast from '@/components/Toast/Toast.vue';
import Button from '@/components/Button/Button.vue'
import { times } from 'lodash'

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
      
      this.$toast.success('Success!', {timeOut: 0, onClickDismiss: true})
      
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
