import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
// vant
import { Button, NavBar, Form, Field, CellGroup } from 'vant'

const app = createApp(App)

// 路由
app.use(router)
// veux
app.use(store)
// vant
app.use(Button)
app.use(NavBar)
app.use(Form)
app.use(Field)
app.use(CellGroup)

// 挂载
app.mount('#app')
