// 高阶函数的应用  before
// 希望将核心的逻辑提取出来 ，在外面在增加功能

Function.prototype.before = function (beforeFn) {
  return (...args) => {
    beforeFn()
    this(...args)
  }
}
// AOP：面向切面编程
// 把核心抽离出来 在核心基础上增加功能
const foo = (...args) => {
  console.log('do sth', args)
}
const beforeFoo1 = foo.before(() => {
  console.log('before 1')
})
const beforeFoo2 = foo.before(() => {
  console.log('before 2')
})
beforeFoo1(1, 2, 3)
beforeFoo2()