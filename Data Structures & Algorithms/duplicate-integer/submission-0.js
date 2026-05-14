class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet=new Set();
        for(let x of nums){
            if(hashSet.has(x))
            return true;
            else 
            hashSet.add(x);
        }
        return false;
    }
}
