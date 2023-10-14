 <script>
export default {
  name: 'Radio',
  props: {
    radioClass: {
      type: String,
      required: true
    },
    radioValue: {
      type: String,
      default: '',
      required: true
    },
    radioType: {
      type: String,
      default: null
    },
    radioID: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>

<template>
  <label class="inline-flex align-middle">
    <input
      role="radio"
      aria-label="Click the radio button for input"
      :class="[radioClass]"
      :id="[radioID]"
      type="radio"
      :value="[radioValue]"
    />
  </label>
  <span class="ml-1 mr-1 align-middle">
    <label aria-label="Input value" :for="[radioID]" role="radio-value">{{ radioValue }}</label>
  </span>
</template>

<style lang="scss"></style>

// import { PropType, defineComponent, ref} from "vue"

// interface RadioProps{
//   radioClass:string,
//   radioValue:string,
//   radioType:string,
//   radioID:string
// }

// const Radio = defineComponent({
  
// })