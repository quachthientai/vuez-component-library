<script>
import { Icon } from '@iconify/vue'
import Button from '../../components/Button/Button.vue'
import { eventBus } from '../../utils/eventBus'
import { POSITION, TYPE } from '@/plugins/ToastPlugin/constant'

import { Transition, render, h, isVNode } from 'vue'

export default {
  name: 'Toast',
  components: {
    Icon,
    Button
  },
  data() {
    return {
      isVisible: false,
      topContainer: null,
      bottomContainer: null,
      transition: null,
    }
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    text: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: null,
      validator(value) {
        return Object.values(POSITION).includes(value)
      }
    },
    onClickDismiss: {
      type: Boolean,
      default: false
    },
    timeOut: {
      type: Number,
      default: 0
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    hideCloseButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showToast() {
      let insertPos = this.position.includes('top') ? 'afterbegin' : 'beforeend'
      this.isVisible = true
      const shadowContainer = this.$refs.toastWrapper.parentElement
      this.computedToastParent.insertAdjacentElement(insertPos,this.$refs.toastWrapper);
      shadowContainer.remove()
    },
    dismissToast() {
      const el = this.$refs.toastWrapper
      this.isVisible = false
      this.transition.finish()
      
      setTimeout(() => {
        el.remove();
      }, 1000)
    },
    startDismissTimeout() {
      this.showToast()
      this.transition.play()
    },
    setupProgressTransition() {
      const keyFrame = new KeyframeEffect(
        this.$refs.progress,
        { right: '100%' },
        { duration: this.timeOut, fill: 'forwards', ease: 'linear' }
      )

      return (this.transition = new Animation(keyFrame, document.timeline))
    },
    setupContainer() {
      this.topContainer = document.querySelector('.toast-top-container')
      this.bottomContainer = document.querySelector('.toast-bottom-container')

      if (this.topContainer && this.bottomContainer) return

      if (!this.topContainer) {
        this.topContainer = document.createElement('div')
        this.topContainer.classList.add('toast-top-container')
      }

      if (!this.bottomContainer) {
        this.bottomContainer = document.createElement('div')
        this.bottomContainer.classList.add('toast-bottom-container')
      }
      document.body.appendChild(this.topContainer)
      document.body.appendChild(this.bottomContainer)
    },
    handleHover() {
      this.transition.pause()
    },
    handleLeave() {
      this.transition.play()
    }
  },
  mounted() {
    this.setupProgressTransition()
    eventBus.on('dismiss', this.dismissToast)

    if (this.timeOut > 0) return this.startDismissTimeout()

    this.showToast()
  },
  beforeMount() {
    this.setupContainer()
  },
  unmounted() {
    eventBus.off('dismiss', this.dismissToast)
  },
  computed: {
    computedType() {
      switch (this.type) {
        case 'success':
          return TYPE.SUCCESS
        case 'info':
          return TYPE.INFO
        case 'error':
          return TYPE.ERROR
        case 'warning':
          return TYPE.WARNING
        default:
          return TYPE.DEFAULT
      }
    },
    computedToastParent() {
      return this.position.includes('top') ? this.topContainer : this.bottomContainer
    },
    computedPosition() {
      switch (this.position) {
        case POSITION.BOTTOM_RIGHT:
        case POSITION.TOP_RIGHT:
          return 'self-end'
        case POSITION.BOTTOM_LEFT:
        case POSITION.TOP_LEFT:
          return 'self-start'
        default:
          return 'self-center'
      }
    },
    computedIcon() {
      switch (this.type) {
        case 'success':
          return 'material-symbols:check-circle-outline'
        case 'info':
          return 'material-symbols:info-outline'
        case 'warning':
          return 'material-symbols:warning-outline-rounded'
        case 'error':
          return 'material-symbols:dangerous-outline'
        default:
          return 'material-symbols:info-outline'
      }
    },
    computedToastTransition() {
      switch (this.position) {
        case POSITION.TOP_RIGHT:
        case POSITION.TOP_CENTER:
        case POSITION.TOP_LEFT:
          return 'fade-top'
        case POSITION.BOTTOM_RIGHT:
        case POSITION.BOTTOM_CENTER:
        case POSITION.BOTTOM_LEFT:
          return 'fade-bottom'
      }
    }
  },
  watch: {
    transition(v) {
      Promise.resolve(v.finished).then(() => {
        return this.dismissToast()
      })
    }
  }
}
</script>

<template>
  <Transition :name="computedToastTransition">
    <div class="toast-wrapper" 
      ref="toastWrapper"
      :class="computedPosition"
      v-show="isVisible"
      v-on="{
        click: this.onClickDismiss ? dismissToast : null,
        mouseover: this.pauseOnHover && this.timeOut > 0 ? handleHover : null,
        mouseleave: this.pauseOnHover && this.timeOut > 0 ? handleLeave : null,
      }"
    >
      <div
        ref="toast"
        :class="computedType"
        class="toast"
      >
        <div class="toast__icon ms-2">
          <Icon :icon="computedIcon" />
        </div>
        <div class="toast__body">
          <span class="font-semibold text-[15px]">
            {{ this.text }}
          </span>
        </div>
        <div class="toast__dismiss" :class="[hideCloseButton ? 'opacity-0' : '']">
          <Button
            btnClass="btn-icon-circle"
            appendIcon="iconamoon:close-bold"
            @click="dismissToast"
          />
        </div>
        <div ref="progress" v-if="this.timeOut > 0" class="toast__progress"></div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>

  @mixin toast-transition {
    @apply h-0 p-0 opacity-0;
  }

  .fade-top-leave-active,
  .fade-bottom-leave-active {
    transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-top-enter-active,
  .fade-bottom-enter-active {
    transition: all .3s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-top-leave-to,
  .fade-top-enter-from {
    @include toast-transition;
    margin-bottom: 0;
    transform: translateY(-100px);
  }

  .fade-bottom-leave-to,
  .fade-bottom-enter-from {
    @include toast-transition;
    margin-top: 0;
    transform: translateY(100px);
  }

</style>
