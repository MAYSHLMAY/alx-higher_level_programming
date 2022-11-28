
let output = ""

for (let i = 0; i < 100; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        output += "FizzBuzz"
    console.log(output)
    }
    else if (i % 3 == 0) {
        output = "Fizz"
    console.log(output)

    }
    else if(i % 5 == 0) {
        output = "Buzz"
    console.log(output)
    }
  
    else console.log(i)
}


