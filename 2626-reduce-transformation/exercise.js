/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;

    for (let num = 0; num < nums.length; num++) {
        if (!nums.length){
            break;
        }
        if (num === 0){
            val = fn(init, nums[0])
            console.log("VAL", val)
            continue
        }
        val = fn(val, nums[num])

    }

    return val
};
