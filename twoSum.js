// difficulty: easy

function twoSum(nums, target) {
    let result = [];
    let loop = 1;
    for (let i = 0; i < nums.length; i++) { // [2,5,5,11] target = 10
        for (let j = loop; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
            }
        }
        loop++;
    }
    return result;
}

console.log(twoSum([2,5,5,11],10)); // output should be [1,2]