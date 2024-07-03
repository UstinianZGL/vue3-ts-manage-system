//根据process.env.NOOE_ENV来区分开发环境
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NOOE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
  console.log('当前是开发环境')
} else if (process.env.NOOE_ENV === 'production') {
  console.log('当前是生成环境')
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  console.log('当前是测试环境')
  BASE_URL = 'http://123.207.32.32:8000/'
}

export { BASE_URL, TIME_OUT }
