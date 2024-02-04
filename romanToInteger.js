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

console.log(romanToInt("MCMXCV"));