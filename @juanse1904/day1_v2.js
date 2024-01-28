var searchInsert = function(nums, target) {
    if(nums[0]>target){
        return 0;
    }
    if(nums[nums.length - 1]<target){
        return nums.length;
    }
    let start = 0;
    let end = nums.length - 1;
    debugger
    while(start<=end){
        let mid = Math.floor((start + end) / 2);
        console.log(start, end, mid, nums[mid]);
        if (nums[mid] === target){ 
            return mid
        }
        else if (nums[mid] < target){
            console.log("here!");
            if(end - start === 0){
                return mid + 1;
            }
            start = mid + 1;
        }else{
        if(end - start === 0){
           return mid;
        }
        if(mid-1 >= start){
            end = mid - 1 < 0 ? mid : mid - 1;
        }else{
            end=mid;
        }
            console.log("the mid",start, end);
        }
    }
     
};
