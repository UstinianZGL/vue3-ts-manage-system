class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): any {
    const value = window.localStorage.getItem(key)
    console.log(value)
    console.log(typeof value)
    if (value && value != 'undefined') {
      return JSON.parse(value)
    }
    return ''
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
