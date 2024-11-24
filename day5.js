let nums = [1,2,3,4,5,6,7,8]

// even nums --> num % 2 == 0 
let evenNums = nums.filter(function(num){
    return num % 2==0 
})
console.log(evenNums)

/* 
output --> ["Manish"] 
*/
let nums2 = [1,2,3,"Manish"]

let output = nums2.filter(function(num){
    return num == "Manish"
})
console.log(output)

let files = ['index.html','script.js','a.c','a.py']
let htmlFile = files.filter(function(file){
    return file.endsWith('.html')
})
console.log(htmlFile)


// PASS MARK -> 1000
let datas = [
{ 
name : "Manish", 
marks : 1200, 
location : "Itahari"
}, 
{ 
name : "anish", 
marks : 500, 
location : "Biratnagar"
}, 
{ 
name : "nish", 
marks : 1100, 
location : "damak"
}]

let result = datas.filter(function(data){
    return data.marks > 1000 && data.location == "damak"
})
console.log(result)
