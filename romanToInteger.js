function romanToInt(s) {
    let letters = s.split("");
    let numbers = [];
    let result = 0;

    letters.forEach(letter => {
        switch(letter) {
            case "M":
                numbers.push(1000);
                break;
            case "D":
                numbers.push(500);
                break;
            case "C":
                numbers.push(100);
                break;
            case "L":
                numbers.push(50);
                break;
            case "X":
                numbers.push(10);
                break;
            case "V":
                numbers.push(5);
                break;
            default:
                numbers.push(1);
        }
    });


    let pastNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i > 0) {
            if (pastNumber < numbers[i]) {
                result-= pastNumber;
                result+= numbers[i] - pastNumber;
            } else {
                result += numbers[i];
                pastNumber = numbers[i];    
            }
        } else {
            result += numbers[i];
            pastNumber = numbers[i];
        }
    }

    return result;
}

console.log(romanToInt("MCMXCIV"));

// better solutions:

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
    
//     let sum = 0
//     let curr
//     let prev
    
//     for (let i = s.length - 1; i >= 0; i--) {
//         curr = toInt(s[i])
//         prev = toInt(s[i - 1])

//         if (prev < curr) {
//             sum += curr - prev
//             i--
//         }
//         else {
//             sum += curr
//         }
//     }

//     function toInt(roman) {
//         switch (roman) {
//             case 'I': return 1
//             case 'V': return 5
//             case 'X': return 10
//             case 'L': return 50
//             case 'C': return 100
//             case 'D': return 500
//             case 'M': return 1000
//             default:
//                 break;
//         }
//     }
//     return sum
// };


// faster solution:

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     const romanVal = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     } 
//     let result = 0;
//     for(let i=0;i<s.length;i++){
//         let crtSymVal = romanVal[s[i]];
//         let nxtSymVal = romanVal[s[i+1]];
//         if (nxtSymVal > crtSymVal){
//             result += -crtSymVal;
//         }else{
//             result += crtSymVal;
//         }
//     }
//         return result;
//   };