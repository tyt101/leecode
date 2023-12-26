var types = {}

"Boolean Number String Function Array Date Math RegExp Object Error".split(" ").map((item, index) => {
  types["[object "+ item + "]"] = item.toLocaleLowerCase()
})

function type(obj) {
  if(obj === null) return null + ""

  return typeof obj === 'object' || typeof obj === 'function' ? types[Object.prototype.toString.call(obj)] || 'object' : typeof(obj)
}


console.log(type(Math))
console.log(type(null))
console.log(type(Function))