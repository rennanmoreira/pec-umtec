import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/index.scss'
import router from './router/index.router'
import store from './store/index.store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
