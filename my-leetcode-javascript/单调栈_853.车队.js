/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let map = new Map()
    let count =position.length
    for(let i = 0; i < position.length; i++) {
        map.set(position[i], (target - position[i]) / speed[i])
    }
    var arrayObj=Array.from(map);
    arrayObj.sort(function(a,b){return b[0] - a[0]});
    console.log(arrayObj)
    let cur = [arrayObj[0][0], arrayObj[0][1]]
    let flag = false
    for(let i = 1; i < arrayObj.length; i++) {
        let diff = [arrayObj[i][0], arrayObj[i][1]]
        if(diff[0] < cur[0] && diff[1] <= cur[1]) {
                count --
        } else {
            cur = diff
        }

    }
    return count
};
