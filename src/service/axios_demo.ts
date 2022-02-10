import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'name'
    }
  })
  .then((res) => {
    console.log(res)
  })
