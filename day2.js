let days = ["Sunday","Monday","Tuesday"]

/*

days.push("Wednesday") // array of last ma haldinxa
days.pop() // array ko last item nikaldinxa

days.unshift("Saturday") // array ko suru place ma haldinxa
days.shift() // array ko suru ko item nikaldinxa 

*/

let todos = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
    },
    {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
    }
]
console.log(days.length)


console.log(days)
// slice -- katxa only , doesn't affect original array
let nums = [1,2,3,4]
let newNums = nums.slice(1,4)
console.log(newNums)

let names = ["Anish","Aashish","Anup","Sagar"]
let newNames = names.slice(2,4) // cut garne raixa 
console.log(names)
// output --> ["Anup","Sagar"]

// splice -- katxa rw kateko thau ma kehi data ni halxa, affects original array 
let nums3 = [1,2,3,4]
nums3.splice(1,1,999)
console.log(nums3)

let data = [1,2,3,4,5,6]
data.splice(1,3,"hello","bye","world")
console.log(data)
// output ---> [1,'hello','bye','world',5,6]


let characters = ['m','a','n','i','s','h']
characters.splice(0,6,13,1,14,9,19,8)
console.log(characters)
// output --> [13,1,14,9,19,8]


// split 
let text = "I am_from nepal"
let newText = text.split("_")
console.log(newText)
// output --> ["I","am","from","nepal"]

// object 
let data2 = Object.freeze({
    name : "Manish", 
    address : "Balgram"
})
console.log(data2.address)
console.log(data2.name)
data2.age = 22
console.log(data2)

// arr --> obj, obj -> array 

let test = [
    {
        name : "Manish"
    }, 
    {
        name : ["hello","bye"]
    }
]
console.log(test[1].name[1])


let test3 = {
    data : {
        title : "Hello world"
    }
}
console.log(test3.data.title)
// output--> Hello world 
let test4 = {
    days : ["Sunday","Monday","Tuesday"]
}
test4.days.push("Wednesday")
console.log(test4)


/* 
output -->
let test4 = {
    days : ["Sunday","Monday","Tuesday","Wednesday"]
}
*/
let test2 = {
    name : ['Manish','Anish']
}

let test5 = [{
    days : ["Sunday","Monday","Tuesday","Wednesday"]
}]

/*
output -->
let test5 = [{
    days : ["Sunday",1,2,"Wednesday"]
}]
*/

