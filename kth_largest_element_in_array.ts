import { Heap } from 'heap-js';
import {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
    ICompare,
    IGetCompareValue,
  } from '@datastructures-js/priority-queue';

// O(k) space; O(N log k) time  [inserting into heap size K takes log K time, do it N times]
// create heap of O(k) size - O(k) space.
// Inserting items into heap of size K (log k insertion time) do this N times.
// function findKthLargest(nums: number[], k: number): number {
//     return Heap.nlargest(k, nums, Heap.maxComparatorNumber)[0];  
// };


// Same O(k) space
// create max-heap (O(N) time) then pop K times (K * log N)
// TC: O(N + k log(N)) 
// function findKthLargest(nums: number[], k: number): number {
//     const heap = Heap.heapify(nums, Heap.maxComparatorNumber);
//     for (let count = 0; count < k - 1; count++) {
//         heap.pop();
//     }
//     return heap.pop() || -1;
// }

// function findKthLargest(nums: number[], k: number): number {
//     return nums.sort((prev,next) => next - prev)[k - 1];
// }

// function findKthLargest(nums: number[], k: number): number {
//     const maxPriorityQueue: MaxPriorityQueue = new MaxPriorityQueue({ priority: (val) => val });
//     for (const num of nums) maxPriorityQueue.enqueue(num);
//     let ret: number;
//     for (let i = 1; i <= k; i++) ret = maxPriorityQueue.dequeue().element;
//     return ret;
// } 

function findKthLargest(nums: number[], k: number): number {
    const qs = (low: number, high: number, K: number): number => {
        const pivot = high;
        let idx = low;
        for (let i = low; i < high; i++) {
            if (nums[i] < nums[pivot]) {
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
                idx++;
            }
        }
        [nums[pivot], nums[idx]] = [nums[idx], nums[pivot]];

        if (idx === K) return nums[idx];
        if (K > idx) return qs(idx + 1, high, K);
        else return qs(low, idx - 1, K);
    };
    return qs(0, nums.length - 1, nums.length - k);
}



console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // 4
