// TC: O(log n), SC: O(1);
function findPeakElement(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const m = l + Math.floor((r + l) / 2);
        if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

