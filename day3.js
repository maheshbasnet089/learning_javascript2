
// // conditional statement 

// let isRaining = true 

//   isRaining ? console.log("Carry umbrella"): console.log("DOnt carry umbrella")

// let num = 5
// if(num == 5){
//     console.log("Num is 5")
// }else if(num == 6){
//     console.log("Num is 6")
// }else{
//     console.log("Num is neither 5 nor 6")
// }
// /*
//  temperature > 30 -- console.log("Hot weather")
// temperature > 20 -- console.log("Normal weather")
// temperature > 0 -- console.log("Cold weather")
// */
// let temperature = 20; 
// if(temperature > 30){
//     console.log("Hot weather")
// }else if(temperature > 20){
//     console.log("normal weather")
// }else{
//     console.log("Cold weather")
// }


// regular function(normal), arrow function 
// function add(a,b){
//     console.log(a + b)
// }

let add = (a,b)=>{
    console.log(a+b)
}

add(2,3)

/* 
checkTemperature(10)
console.log("Cold")
*/
function checkTemperature(){

}
checkTemperature([1,2,3,4,5])

/*
 test([1,2,3,4,5,6])
 output --> [3,4,5]
*/
function test(incomingArray){
   let nums =  incomingArray.slice()
   console.log(nums)

}
test([1,2,3,4,5,6])
/* 
test2({name:"Manish",address:"Balgram"})
output --> {name:"Manish",address:"Balgram",age:22} 
*/

function test2(hello){
    hello.age = 22 
    console.log(hello)
}
test2({name:"Manish",address:"Balgram"})

/* 
test3(['sun','mon','tue'])
output --> ['wed','sun','mon','tue']
*/
function test3(hi){
    hi.unshift("wed")
    console.log(hi)
}
test3(['sun','mon','tue'])

/*
isOddOrEven() --> arrow function --> ternary operator 
output --> isOddOrEven(1) --> console.log("odd num") 
output --> isOddOrEven(2) --> console.log("even num") 
*/

let isOddOrEven = (num)=>{
 num % 2 == 0 ? console.log("even number") : console.log("odd number") 
}
isOddOrEven(1)
isOddOrEven(2)