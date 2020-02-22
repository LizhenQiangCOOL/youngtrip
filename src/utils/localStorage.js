//封装 localStorage
// 添加 获取 删除
const ls = localStorage

export default {
  setItem(name, value) {
    name = 'youngtrip_'+name
    ls.setItem(name, JSON.stringify(value))
  },
  getItem(name) {
    try {
      name = 'youngtrip_'+name
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },
  removeItem(name) {
    name = 'youngtrip_'+name
    ls.removeItem(name)
  }
}