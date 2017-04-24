
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import "./assets/css/font-awesome.css"
import "./assets/css/style.css"
import axios from "axios"
Vue.prototype.axios=axios
// var bus=new Vue();
Vue.filter("number",value=>{
   if(value>10000){
           return (value/10000).toFixed(2)+"万";
   }
})
     
Vue.filter("message",value=>{
        if(value.length>10){
          return value.substr(0,10)+"...";
        }else{
           return value;
        }
})
Vue.filter("name",value=>{
    if(value.length>7){
      return value.substr(0,7);
    }else{
      return value;
    }
})
Vue.filter("gaName",value=>{
    if(value.length>10){
      return value.substr(0,10);
    }else{
      return value;
    }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
