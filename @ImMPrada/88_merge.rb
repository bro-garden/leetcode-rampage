# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
  index_1 =  m - 1

  (-1..-nums1.length).step(-1).each do |index|
    num2 = nums2[-1]
    break if num2.nil?

    num1 = index_1 < 0 ? nil : nums1[index_1]
    nums1[index] = nums2.pop and next if num1.nil?

    nums1[index] = nums2.pop and next if num2 > num1

    nums1[index] = num1
    index_1 -= 1
  end

  nums1
end
