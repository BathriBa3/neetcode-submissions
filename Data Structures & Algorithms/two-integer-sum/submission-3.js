class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i <= nums.length; i++){
            let value = nums[i]
            let neededValue = target - value
            let matchedIndex = i;
          // let temp = nums.splice(i + 1)
          // console.log(temp,i)
          //   let indices = temp.findIndex((num)=>{
          //     console.log(num)
          //     if(num === neededValue){
          //       return num
          //     }
          //   })
          for(let j = i + 1; j <= nums.length; j++){
               if(nums[j] === neededValue){
                 matchedIndex = j
               }            
          }
          if(matchedIndex !== i){
            return[i,matchedIndex]
          }          
       }
    }
}
