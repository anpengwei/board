import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/main.css";
import echarts from "echarts";
import './component/china'
// import 'node_modules/echarts/map/js/province/taiwan'

// import '/node_modules/echarts/map/js/china'
import vueCom from "./component/main";
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
vueCom();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
