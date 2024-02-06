function longestCommonPrefix(strs) {
    let max = 0;
    let count = 0;
    let prefix = ""

    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].slice(0,j) === strs[i].slice(0,j)) {
                count++;
                if (count > max) {
                    max = count;
                    prefix = strs[j].slice(0,j);
                }
            } else {
                return "";
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// well this passed most test cases but didn't fully work.
// this is the correct solution:

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return "";
//     }

//     let prefix = strs[0];

//     for (let word of strs) {
//         while (word.indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1);
//             if (prefix === '') return ''
//         }
//     }
//     return prefix;
// };