export const phoneRule = {
  phoneNumber: [
    {
      require: true,
      message: '手机号是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11个数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '验证码是必填的',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码是6个数字',
      trigger: 'blur'
    }
  ]
}
