
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let numSorted = [...nums].sort((a,b) => a-b)
    if(JSON.stringify(numSorted) == JSON.stringify(nums)) return 0
    let p = 0, q = nums.length - 1

    while(nums[p] == numSorted[p]) {
        p++
    }
    while(nums[q] == numSorted[q]) {
        q--
    }
    return q - p + 1
};
