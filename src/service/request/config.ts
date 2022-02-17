let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000' //需要根据你自己的后台地址做出修改
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://abcdefg.org/prod' //需要根据你自己的后台地址做出修改
} else {
  BASE_URL = 'http://abcdefg.org/test' //需要根据你自己的后台地址做出修改
}

export { BASE_URL, TIME_OUT }
