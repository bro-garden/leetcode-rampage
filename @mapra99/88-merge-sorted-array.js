// https://leetcode.com/problems/merge-sorted-array/

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class MyQueue {
  constructor(head = null) {
    this.head = head
    this.tail = head
    this.length = head === null ? 0 : 1
  }

  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node
      this.tail = node
      this.length = 1
      return;
    }

    this.tail.next = node
    this.tail = node
    this.length += 1
  }

  pop() {
    if (this.head === null) {
      return null
    }

    if (this.length === 1) {
      const node = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return node.value;
    }

    const node = this.head
    this.head = this.head.next
    this.length -= 1;
    return node.value;
  }

  getHead() {
    if (this.head === null) return null

    return this.head.value
  }
}


var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let replacedNums = new MyQueue();

  while (i < nums1.length) {
    let target
    if ((replacedNums.getHead() === null && nums2[j] !== undefined) || (replacedNums.getHead() >= nums2[j])) {
      target = nums2[j]
      if (i >= m) {
        nums1[i] = target
        j += 1
      } else if (nums1[i] > target) {
        replacedNums.push(nums1[i])
        nums1[i] = target
        j += 1
      }
    }
    else if ((replacedNums.getHead() !== null && nums2[j] === undefined) || (replacedNums.getHead() < nums2[j])) {
      target = replacedNums.getHead()
      if (i >= m) {
        nums1[i] = target
        replacedNums.pop()
      } else if (nums1[i] > target) {
        replacedNums.push(nums1[i])
        nums1[i] = target
        replacedNums.pop()
      }
    }

    i += 1
  }

  return nums1
}

var nums = [1,2,3,0,0,0]
merge(nums, 3, [2,5,6], 3)
console.log(nums) // [1,2,2,3,5,6]

nums = [1]
merge(nums, 1, [], 0)
console.log(nums) // [1]

nums = [0]
merge(nums, 0, [1], 1)
console.log(nums) // [1]

nums = [-1,0,0,3,3,3,0,0,0]
merge(nums, 6, [1, 2, 2], 3)
console.log(nums) // [-1,0,0,1,2,2,3,3,3]
