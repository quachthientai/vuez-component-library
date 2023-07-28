import { useToast } from './api'


export const ToastPlugin = {
  install(app, opts) {
    
    // const instance = new useToast('ssss')
    const instance = useToast;
    
    app.config.globalProperties.$toast = instance
    // app.config.globalProperties.$toast = () => {
    //   let instance = new useToast(opts);
    // }
  }
}
