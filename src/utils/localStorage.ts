export default {
  get(key: any) {
    try {
      const rs = window.localStorage.getItem(key)
      return rs ? JSON.parse(rs) : null
    } catch (e) { throw e; }
  },
  set(key: any, value:any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) { throw e; }
  },
  remove(key: any) {
    try {
      window.localStorage.removeItem(key)
    } catch (e) { throw e; }
  },
  clear() {
    try {
      window.localStorage.clear()
    } catch (e) { throw e; }
  }
}
