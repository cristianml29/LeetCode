function isPalindrome(x) {
    let splitted = x.toString().split("");
    console.log(splitted);
    let reversed = x.toString().split("").reverse();
    console.log(reversed);
    return splitted.join("") === reversed.join("");
}

console.log(isPalindrome(121));