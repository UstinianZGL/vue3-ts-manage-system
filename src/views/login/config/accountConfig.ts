export const accountRule = {
  account: [
    {
      require: true,
      message: '用户名是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名必须是5-10个数字或者字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '用户密码是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{5,10}$/,
      message: '用户密码必须是5-10个数字',
      trigger: 'blur'
    }
  ]
}
