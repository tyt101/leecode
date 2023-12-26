function SimplePromise(fn) {
  // 成功的回掉函数
  let self = this
  self.data = undefined
  self.cbs = []
  self.status = 'pending'
  function resolve(value) {
    setTimeout(() => {
      if(self.status === 'pending') {
        self.status = 'fulfuilled'
        self.data = value
        self.cbs.forEach(cb => cb(value))
      }
    });
  }

  fn(resolve)
}
SimplePromise.prototype.then = function(onResolved) {
  let self = this
  return new Promise(resolve => {
    self.cbs.push(() => {
      const res = onResolved(self.data)
      console.log("===", res)
      if(res instanceof Promise) {
        res.then(resolve)
      }else {
        console.log("else")
        resolve(res)
      }
    })
  })
}


const fn = (resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
}
new SimplePromise(fn).then(res => { 
  console.log('1:',res) 
  return res
})