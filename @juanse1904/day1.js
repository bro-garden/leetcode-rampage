var searchInsert = function(nums, target) {
    const myIndex = nums.findIndex((i)=> i===target);
    if(myIndex === -1){
        let virtualIndex;
        nums.forEach((item,index)=> {
            if(item<target &&  nums[index+1]>target){
                 virtualIndex = index + 1;
            }
         });
         // if virtualIndex is undefined it means the target should be at the end of the array
         if(!virtualIndex){
             return nums.length;
         }
        return virtualIndex;
    } 
    return myIndex;
 };