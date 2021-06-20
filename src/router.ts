import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 说明：路由模式分为history和hash，history使得路由更加自由
  // 但是history路由害怕刷新，目前我们的项目应该采用hash模式
  // 参照链接：https://blog.csdn.net/lla520/article/details/77894985
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/gs-home',
      name: 'gsHome'
    }
  ]
})
