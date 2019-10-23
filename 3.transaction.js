// 事务 开始的时候 做某些事 结束的时候再做另外一些事
const perform = (anymethod, wrappers) => {
  wrappers.forEach(wrap => {
    wrap.initialize()
  })
  anymethod()
  wrappers.forEach(wrap => {
    wrap.close()
  })
}
perform(() => {
  console.log('do sth')
}, [
  { // wrapper1
    initialize() {
      console.log('do before1')
    },
    close() {
      console.log('do after1')
    }
  },
  { // wrapper2
    initialize() {
      console.log('do before2')
    },
    close() {
      console.log('do after2')
    }
  }
])