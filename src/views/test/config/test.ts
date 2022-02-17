export const rules = {
  che_pai: [
    {
      require: true,
      message: '请输入雾霾指数数据~',
      trigger: 'blur'
    },
    {
      pattern: '/[a-z0-9]{6}/',
      message: '输入的车牌信息不符合要求~',
      trigger: 'blur'
    }
  ]
}
