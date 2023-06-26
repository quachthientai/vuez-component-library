<script>
  import { eventBus} from '@/utils/eventBus'
  export default {
    name: 'AppModal',
    components: {

    },
    data() {
      return {

      }
    },
    created() {
      console.log(this.$eventBus)
      eventBus.on('show', params => {
        console.log(params)
      })
      
    }
  }
</script>

<template>
  <div>
    <h1 class="header-title">
      <slot name="title"/>
    </h1>
    <h2 class="title-author">
      <slot name="author"/>
    </h2>
  </div>
</template>

<style lang='scss' scoped>
</style>