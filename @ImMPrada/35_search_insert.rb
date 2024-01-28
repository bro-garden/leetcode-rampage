# https://leetcode.com/problems/search-insert-position/

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target, index = 0)
  return nums.length if target > nums[-1]
  return index if nums.length == 1 && nums[0] != target

  middle = (nums.length - 1) / 2
  left_side = nums[0..middle]
  right_side = nums[middle + 1..nums.length - 1]

  return index + middle if target == nums[middle]
  return 1 if nums.length == 1

  if target < nums[middle]
    search_insert(left_side, target, index)
  else
    search_insert(right_side, target, left_side.length + index)
  end
end

