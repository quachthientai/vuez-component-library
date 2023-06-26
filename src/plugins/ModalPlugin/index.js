import MyHeader from '../../components/MyHeader.vue'
import { eventBus } from '@/utils/eventBus'

export default {
   install(app, options) {
     
      app.component('my-header', MyHeader)
     
      
      app.config.globalProperties.$modal = {
         show(params) {
            eventBus.emit('show', params)
         }
      }
      
   }
}
 
