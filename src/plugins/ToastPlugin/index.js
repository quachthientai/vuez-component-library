import { useToast } from './api'

export const ToastPlugin = {
  install(app, opts) {
    const instance = useToast
    app.config.globalProperties.$toast = instance
  }
}
