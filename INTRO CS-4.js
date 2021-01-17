// Exercise #1
// Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7

var numbers=[3, 5, 7, 1, 6]
var max=0

for(i=0;i<numbers.length;i++){
    if(max<numbers[i]){
        max=numbers[i]
    }
}
console.log(max)

// Exercise #2
// Write a program to sort a list of numbers in descending order (from highest to lowest).

var numbers=[3, 5, 7, 1, 6]
numbers.sort((a,b)=>a-b)
console.log(numbers)

// Write a program that takes in two lists and returns the greatest number out of the two lists. 

var numbers1=[21, 57, 72, 41, 16]
var numbers2=[65, 12, 32, 45, 52]

var numbers3=numbers1.concat(numbers2)

for(i=0;i<numbers3.length;i++){
    if(max<numbers3[i]){
        max=numbers3[i]
    }
}
console.log(max)

// Write a program to compute the sum and product (multiplication) of an array of numbers [1,2,3,4,5]. Print out the sum and the product.

var numbers=[1,2,3,4]

var sum=numbers.reduce(function (a,b){return a+b})
console.log(sum)

var mul=numbers.reduce(function (a,b){return a*b})
console.log(mul)

// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
// var student1Courses = ['Math', 'English', 'Programming'];
// var student2Courses = ['Geography', 'Spanish', 'Programming'];

var student1Courses = ['Math', 'English', 'Programming']
var student2Courses = ['Geography', 'Spanish', 'Programming']

function classroom(){
    for(i=0;i<student1Courses.length;i++){
        for(t=0;t<student2Courses.length;t++){
            if(student1Courses[i]==student2Courses[t]){
            console.log("They share a common class: "+student1Courses[i])
            var coincidence = true
            }
        }
    }
if (!coincidence){
    console.log("They don´t share any class.")
}
}

// For each of the exercises below, assume you are starting with the following people array.

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"]

// Write a command that prints out all of the people in the list.
console.log(people)

// Write the command to remove "Dani" from the array.
people.splice(1,1)
console.log(people)

// Write the command to remove "Juan" from the array.
people.splice(2,2,"Camila")
console.log(people)

// Write the command to add "Luis" to the front of the array.
people.splice(1,1)
people.unshift("Luis")

// Write the command to add your name to the end of the array.
people.push("Javier")
console.log(people)

// Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
var until=people["Maria"]

for(i=0;i<people.length;i++){
    if(people[i]=="Maria"){
        console.log(people[i]+". I´m going to stop here.")
        break
    }else{
    console.log(people[i])}
}

// Write the command that gives the indexOf where "Maria" is located.
var inName=people.indexOf("Maria")

console.log("The index of Maria inside the array is "+inName)

// At the end of the exercise, there should be 4 people in the array.
console.log(people)