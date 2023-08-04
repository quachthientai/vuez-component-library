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
      this.$toast.show('default');
      this.$toast.success('Success!', {timeOut: 4000})
      this.$toast.info('Info!', {timeOut: 3000})
      this.$toast.warning('Warning!', {timeOut: 2000})
      this.$toast.error('Error!', {timeOut: 1000})
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

  <Button class="ms-3" btnClass="btn btn-warning" @click="showToast" text="show toast" />

  <Button class="mt-3 ms-3" btnClass="btn btn-danger" @click="clearToast" text="clear toast" />
</template>
