<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      isChecked: true
    }
  },

  props: {
    checkboxClass: {
      type: String,
      default: 'checkbox checkbox-primary',
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange() {
      return (this.isChecked = !this.isChecked)
    }
  }
}
</script>

<template>
  <label :class="checkboxClass" class="m-1">
    <!-- checkbox container -->
    <input
      class="checkbox__input"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="onChange"
      type="checkbox"
    />
    <!-- native checkbox -->
    <span class="checkbox__custom"></span>
    <!-- fake checkbox -->
  </label>
</template>

<style lang="scss" scoped></style>
