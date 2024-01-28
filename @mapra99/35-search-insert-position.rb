# https://leetcode.com/problems/search-insert-position/

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target, left = 0, right = nums.length - 1)
  if left == right
    return target <= nums[left] ? left : left + 1
  end

  middle = left + (right - left) / 2
  return middle if target == nums[middle]

  if target < nums[middle]
    search_insert(nums, target, left, [middle - 1, left].max)
  else
    search_insert(nums, target, [middle + 1, right].min, right)
  end
end
