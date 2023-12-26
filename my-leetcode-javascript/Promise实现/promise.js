// Pomise A+ 标准链接
// https://github.com/xieranmaya/blog/issues/3


function MyPromise(executor) {
  var self = this
  self.status = 'pending',
  self.data = undefined,
  self.onResolvedCallback = []  //Promise resolve时的回调函数
  self.onRejectedCallback = []  //Promise reject时的回调函数

  function resolve(value) {
    if(self.status === 'pending') {
      self.data = value
      self.status = 'resolved'
      for(let i = 0; i < self.onResolvedCallback.length; i ++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(value) {
    if(self.status === 'pending') {
      self.data = value
      self.status = 'rejected'
      for(let i = 0; i < self.onRejectedCallback.length; i ++) {
        self.onRejectedCallback[i](value)
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
    // executor可能出错，例如
    // new Promise(function(resolve, reject) { throw 2})
    // 出错，直接走catch
  }
}

// onResolved: 成功的回掉
// onRejected: 失败的回掉
// then会返回一个Promise，每次调用then返回的Promise的状态取决于 上一次调用then时传入参数的返回值


// then方法要返回一个新的对象（不能和原对象相同）
MyPromise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promise2 

  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {return v}
  onRejected = typeof onRejected === 'function' ? onRejected : function(e) {return e}


  // Promise有三种状态， 所以分三种处理。
  // promise2 的状态由p1的状态后的then来决定。
  // ex：
  // promise2 = promise1.then(function(value) {
  //   return 4
  // }, function(reason) {
  //   throw new Error('sth went wrong')
  // })
  // promise1 被resolved了，promise2将被4resolved， promise1 被rejected了， promise2将被new Error('sth went wrong')给rejected
  if(self.status === 'resolved') {
    return promise2 = new MyPromise(function(resolve, reject) {
      try {
        let x = onResolved(self.value)
        resolvePromise(promise2, x, resolve, reject)
        // resolve(x)
      } catch (error) {
        reject(error)
      }
    })
  }

  if(self.status === 'rejected') {
    return promise2 = new MyPromise(function(resolve, reject) {
      setTimeout(() => {
        try {
          let x = onRejected(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)        
        }
      });
    })
  }

  if(self.status === 'pending') {
    return promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        setTimeout(() => {
          try {
            let x = onResolved(self.data)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          } 
        });
      })

      self.onRejectedCallback.push(function(value) {
        try {
          let x = onRejected(self.data)
          if(x instanceof MyPromise) {
            x.then(resolve, reject)
          }
        } catch (error) {
          reject(error)
        }
      })
    })
  }
}

MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}


function resolvePromise(promise2, x, resolve, reject) {
  var then 
  var thenCalledOrThrow = false
  // If promise and x refer to the same object, reject promise with a TypeError as the reason.
  if(promise2 === x) return reject(new TypeError('Chaining cycle detected for promise!'))


  // If x is a promise, adopt its state 
  if(x instanceof MyPromise) {
    // If x is pending, promise must remain pending until x is fulfilled or rejected.
    if(x.status === 'pending') {
      x.then(function(value) {
        resolvePromise(promise2, value, resolve, reject)
      })
    }
    // If/when x is fulfilled, fulfill promise with the same value.
    // If/when x is rejected, reject promise with the same reason.
    else {
      x.then(resolve, reject)
    }

    return 
  }

  // if x is an object or function,
  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then
      if(typeof then === 'function') {
        then.call(x, function rs(y) {
          if(thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve,reject)
        }, function rj(r) {
          if(thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      }

      else {
        resolve(x)
      }
    } catch (error) {
      if(thenCalledOrThrow) return
      thenCalledOrThrow = true
      reject(error)
    }
  } 
  // If x is not an object or function, fulfill promise with x
  else {
    resolve(x)
  }
}


new MyPromise((resolve) => {
  resolve(1)
}).then(res => {
  console.log(res)
})