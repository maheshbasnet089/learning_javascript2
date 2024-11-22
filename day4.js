

var days = ['Sunday','Monday','Tuesday']

// for(var i = 0;i<days.length;i++){
//     console.log(days[i])
// }
for(let day of days){
    console.log(day)
}
/*
output--> "this is subtitle1", "this is subtitle2"
*/
var datas = [
    {
        title : "hello world", 
        subtitle : "this is subtitle1"
    }, 
    {
        title : "Bye world",
        subtitle : "this is subtitle2"
    }
    ]
for(var i = 0 ; i < datas.length; i++){
    console.log(datas[i].subtitle)
}

for(hello of datas){
    console.log(hello.subtitle)
}


function add(){
    console.log("hello")
}

function Calculator(fn){

}
Calculator(add)

function sayHEllo(){
    console.log("hi")
}
sayHEllo(function(){

})

var days2 = ['Sunday','Monday','Tuesday']
// for , for - of 

// forEach --> HOF -- loops array 
days2.forEach(function(hello){
    console.log(hello)
})


var datas2 = [
    {
        title : "hello world", 
        subtitle : {
            name : "Manish"
        }
    }, 
    {
        title : "Bye world",
        subtitle : {
            name : "Manish"
        }
    }
]

// days2.map(function(){

// })
// days.filter(function(){

// })
// days.reduce(function(){

// })

days.forEach(function(day){
    return day
})

var nums = [1,2,3,4,5]
var squares = nums.map(function(num){
   return "Manish"
})
console.log(squares)

var information = [
    {
        firstName : "Manish", 
        lastName : "Basnet"
    }, 
    {
        firstName : "Anish", 
        lastName : "Basnet"
    }
]
var informatonss = information.map(function(data){
 return {
    ...data, 
    fullName : data.firstName + data.lastName
 }
})
console.log(informatonss)

var products = [
    {
        name : "apple", 
        price : 200, 
        qty : 2
    }, 
    {
        name : "mango", 
        price : 100, 
        qty : 4
    }
]
var productsss = products.map(function(pro){
    return {
        ...pro,
        total : pro.price * pro.qty
    }
})
console.log(productsss)
/*
var productsss = [
    {
        name : "apple", 
        price : 200, 
        qty : 2, 
        total : 400
    }, 
    {
        name : "mango", 
        price : 100, 
        qty : 4, 
        total : 400
    }
]
*/

/*

var informations = [
    {
        firstName : "Manish", 
        lastName : "Basnet", 
        fullName : "Manish Basnet"
    }, 
    {
        firstName : "Anish", 
        lastName : "Basnet", 
        fullName : "Anish Basnet"
    }
]

*/