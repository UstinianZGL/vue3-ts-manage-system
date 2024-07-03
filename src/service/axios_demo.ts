import axios from 'axios'
import { ElLoading } from 'element-plus'

//axios的示例对象

//1.模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

//2.get请求 并传入参数
axios
  .get('http://123.207.32.32:8000/home/multidata', {
    params: {
      name: 'Ustinian',
      age: 22
    }
  })
  .then((res) => {
    console.log(res)
  })

//3.post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      myName: 'Ustinian',
      age: 24
    }
  })
  .then((res) => {
    console.log(res)
  })

//额外补充 Promise中类型的使用
//Promise本身可以有类型
new Promise<string>((resolve, reject) => {
  resolve('abc hahahhaah')
}).then((res) => {
  console.log('promise res:', res)
})

//4.axios的配置选项
//4.1 全局的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 2000

//4.2 每一个请求单独配置
//get
axios
  .get('/get', {
    params: {
      name: 'Ustinian',
      age: 22
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('/post', {
    data: {
      myName: 'Ustinian',
      age: 24
    }
  })
  .then((res) => {
    console.log(res)
  })

//5. axios.all -》 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'luoyao' } }),
    axios.post('/post', { data: { name: 'luoyao' } })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

//6.axios拦截器
//fn1:请求发送成功会执行的函数
//fn2：请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //想做一些操作
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求失败的拦截')
    return err
  }
)

//fn1:数据响应成功会执行的函数
//fn2：数据响应失败会执行的函数
axios.interceptors.response.use(
  (config) => {
    //想做一些操作
    //1.给请求添加token
    //2.isLoading动画
    console.log('响应成功的拦截')
    return config
  },
  (err) => {
    console.log('响应失败的拦截')
    return err
  }
)

ElLoading.service
