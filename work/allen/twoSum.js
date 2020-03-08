
/**
 * Return true if there exists two elements in arr that sums up
 * to target.
 * 
 * Example: arr = [5, 6, 4, 4] target = 8 => return true since 4 + 4 = 8
 * Example: arr = [5, 6, 4, 4] target = 4 => return false since no two elements
 * in arr sum up to 4
 * 
 * Requirement: The expected running time of your algorithm should be O(n)
 * 
 */
exports.twoSum = (arr=[], target=0) => {
    if (arr.length < 2)
        return false
    let hash = {};
    for (let i = 0; i < arr.length; i++){
        if (hash[target-arr[i]])
            return true;
        hash[arr[i]] = true;
    } 
    return false;           
}
