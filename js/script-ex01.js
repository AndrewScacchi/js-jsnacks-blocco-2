// SCRIPT for Exercise-01
console.log("hello world!");


//create an empty Array
const myArray = [];
var cycles = 0;

// while array length is not 10, generate random num, check if is in the array, push in it if is not present

while( myArray.length < 20 ){
    let randomNum = Math.floor(Math.random() * 50 + 1);
    cycles++;
    let found = myArray.includes(randomNum);
    // two ways to write if include is not, includes() return a boolean true or false
    if (!found || found === false){
        myArray.push(randomNum); 
    } else {
    }
}
console.log(myArray);
console.log("You cycled " + cycles + " times");
