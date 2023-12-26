/**
 * @param {number} n
 * @return {number}
 */

var swap = function(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var reverse = function(arr, i, j) {
    while(i < j) {
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
}
var nextGreaterElement = function(n) {
    let m = n.toString().split('')
    let len = m.length
    let cur = -1
    for(let i = len; i >=1; i--) {
        if(m[i] > m[i - 1]) {
            cur = i - 1
            break;
        }
    }
    if(cur == -1) return -1

    // 获取第一个 > m[cur]的值下标
    let j = len - 1
    while(j >=0 && m[j] <= m[cur]) {
        j--
    }

    swap(m, cur, j)

    reverse(m, cur + 1, len - 1)

    const res = m.join('')

    return res >= 2**31 ? -1 : res

};




// 123425
// 123452 cur = 3 j = 4  => 123542
// 123524
// 123542
// 124235
// 124253 => 124352
// 124325
// 124352 => 124532
// 124523
// 124532 => 125432
// 125234
// 125243 => 125342
// 125324
// 125342 => 125432
// 125423
// 125432 => 135422
// 132245
// 132254 => 132452
// 132425
// 132452
// 132542 => 134522
// 134225 
// ...
// ...
