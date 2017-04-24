import Vue from 'vue'
import Router from 'vue-router'
import Home from  "../pages/home"

Vue.use(Router)

export default new Router({
  linkActiveClass:"is-active",
  routes: [
    {path:"/",component:Home},
    {path:"/category",component:resolve=>{
        require(["../pages/Category"],resolve);
    }},
    {path:"/roomlist/:roomId/:gameName",component:resolve=>{
      require(['../pages/Roomlist'],resolve)
    }},
    {path:"/recommend",component:resolve=>{
        require(['../pages/Recommed'],resolve)
    }},
    {path:"/user",component:resolve=>{
        require(['../pages/User'],resolve)
    }},
    {path:"/play/:roomid/:roomname",component:resolve=>{
       require(["../pages/play"],resolve)
    }}
  ]
})
