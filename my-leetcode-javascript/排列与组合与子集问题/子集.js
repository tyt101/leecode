/**
* 
* [1, 2, 3]
* [], [1], [2], [3], [1,2],[1,3],[2,3],[1,2,3]
* 
*/

const subSets = (nums) => {
 const res = []
 const track = []

 const backtrack = (start) => {

   res.push([...track])
   for(let i = start; i < nums.length; i++) {
     track.push(nums[i])

     backtrack(i+1)

     track.pop()
   }
   
 }


 backtrack(0)

 return res
}
console.log(subSets([1,2,3]))