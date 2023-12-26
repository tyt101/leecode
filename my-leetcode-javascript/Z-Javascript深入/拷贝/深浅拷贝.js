function shallowCopy(obj) {
  if(typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}


function deepCopy(obj) {
  if(typeof obj !== 'object') return 
  let newObj = obj instanceof Array ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      typeof obj[key] === 'object' ? 
      newObj[key] = deepCopy(obj[key]) :
      newObj[key] = obj[key]
    }
  }

  return newObj
}