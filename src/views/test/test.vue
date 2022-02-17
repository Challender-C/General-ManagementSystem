<template>
  <div>
    <div class="xianxing" :rules="rules" :model="data">
      <el-form label-width="150px">
        <el-form-item label="雾霾指数">
          <el-input
            placeholder="请输入雾霾指数"
            v-model="data.zhi_shu"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input
            placeholder="请输入日期(周)"
            v-model="data.ri_qi"
          ></el-input>
        </el-form-item>
        <el-form-item label="车牌" prop="che_pai">
          <span>晋D</span>
          <el-input placeholder="请输入车牌" v-model="data.che_pai"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="select">查询</el-button>
    <div>查询结果:{{ res }}</div>
    <div class="xianxing">
      <el-form label-width="150px">
        <el-form-item label="请输入计算信息">
          <el-input placeholder="请输入计算信息" v-model="str"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="calc">计算</el-button>
    <div>计算结果：{{ num }}</div>
    <div class="xianxing">
      <el-form label-width="150px">
        <el-form-item label="请输入数字">
          <el-input placeholder="请输入数字" v-model="num1"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="calc1">计算</el-button>
    <div>计算结果：{{ num2 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from './config/test'

export default defineComponent({
  setup() {
    //第一题
    let data = reactive({
      zhi_shu: '',
      ri_qi: '',
      che_pai: ''
    })
    let res = ref()
    const select = () => {
      // if (!data.zhi_shu && !data.ri_qi && !data.che_pai) {
      //   res.value = '数据信息填写不完整，请重新输入~'
      // }
      if (data.zhi_shu < '200' && data.zhi_shu !== '') {
        res.value = '今天不限行~'
      } else if (data.zhi_shu >= '200' && data.zhi_shu < '400') {
        let arr = data.che_pai.split('')
        console.log('arr', arr)
        console.log('aaa')
      } else {
        console.log('bbb')
      }
    }

    //第二题
    let num = ref()
    let str = ref()
    let str1 = []
    const calc = () => {
      const arr = str.value.split(' ')
      console.log(arr)
      for (const item of arr) {
        if (item !== '+') {
          str1.push(item)
        }
      }
    }

    //第三题
    let num1 = ref()
    let num2 = ref()
    let i = [0]
    let last = ref(1)
    let beforeDate = ref(0)
    const calc1 = () => {
      for (let m = 0; m < num1.value; m++) {
        let n = beforeDate.value + last.value
        beforeDate.value = last.value
        i.push(n)
      }
      console.log(i)
    }
    return { data, res, rules, select, num, str, calc, num1, num2, calc1 }
  }
})
</script>

<style scoped lang="less">
.xianxing {
  width: 300px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
