export const rules = {
  name: [
    {
      required: true,
      message: '必须输入用户账号~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5~10位的字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入用户密码~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '必须输入用户密码~',
      trigger: 'blur'
    },
    {
      pattern: /^1[3|4|5|7|8][0-9]{9}$/,
      message: '手机号格式错误~,请重新输入',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '必须填写验证码~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码为0-9的6位数字~',
      trigger: 'blur'
    }
  ]
}
