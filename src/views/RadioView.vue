<script>
import Radio from '@/components/Forms/Radio.vue'
export default {
  name: 'RadioView',
  components: {
    Radio
  }
}
</script>

<template>
  <div>This is home view</div>

  <Radio radioClass="radio radio-primary" radioValue="success"></Radio>
  <Radio radioClass="radio radio-secondary" radioValue="secondary"></Radio>
  <Radio radioClass="radio radio-info" radioValue="info"></Radio>
  <Radio radioClass="radio radio-warning" radioValue="warning"></Radio>
  <Radio radioClass="radio radio-danger" radioValue="danger"></Radio>
  <Radio radioClass="radio radio-success" radioValue="success"></Radio>
</template>
