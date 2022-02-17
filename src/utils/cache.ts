class LocalCache {
  //存入
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  //获取
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  //删除单个
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  //删除全部
  cleanCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
