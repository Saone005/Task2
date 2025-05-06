
// TASK1

function number(n) {
    let divider = 0                //A variable divider is created to keep track of the number of divisors. It is initially set to 0.
    for (let i = 1; i <= n; i++) {    //It checks all numbers from 1 to 36 to see which divide the given number evenly
        if (n % i === 0) {              // If there is no remainder, then it is divisible by this number
            divider++                      //If a divisor is found, the counter divider is increased by 1.
        }
    }
    return divider
}

console.log(number(36)) // 1 2 3 4 6 9 12 18 36 => 9 