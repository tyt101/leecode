/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function isArrayInArray(mainArray, targetArray) {
  const mainArrayString = JSON.stringify(mainArray);
  const targetArrayString = JSON.stringify(targetArray);
  return mainArrayString.includes(targetArrayString);
}
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let res = []
    for(let p = 0; p < nums.length-3; p++) {
        // if判断增加效率
        if(p > 0 && nums[p] === nums[p - 1]) continue
        for(let q = p + 1; q < nums.length-2; q++) {
            // if判断增加效率
            if(q > p + 1 && nums[q]===nums[q - 1]) continue
            let m = q + 1, n = nums.length - 1
            while(m < n) {
                let sum = nums[p] + nums[q] + nums[m] + nums[n]
                if(sum === target) {
                    if(
                        !isArrayInArray(res, [nums[p],nums[q],nums[m],nums[n]])
                    ){
                        res.push([nums[p],nums[q],nums[m],nums[n]])
                    }
                    // while判断增加效率
                    while(m < n && nums[m] === nums[m + 1]) m++
                    m++
                    // while判断增加效率
                    while(m < n && nums[n] === nums[n - 1]) n--
                    n--
                }  else if (sum < target) {
                    m++
                } else {
                    n--
                }
            }
        }
    }
    return res
};


// -2 -1 0 0 1 2
// -2 -2 -1 0 0 1 2

// -3 -1 0 2 4 5