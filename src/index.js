/**
 * Created by gexuhui on 17/9/21.
 */
import Vue from 'vue'
import App from '../src/pages/app'
import yohoPluginRouter from '../src/plugins/plugin-router'

Vue.use(yohoPluginRouter)

Vue.render({
  el: '#app',
  template: '<App/>',
  components: {App}
})
