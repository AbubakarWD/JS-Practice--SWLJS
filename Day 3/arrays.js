// array
var city = ["Peshawar", "Charsadda", "Mardan"]
document.write(city);

document.write("<br>");

// declare an array and then add elements

var pets = [];
pets[0] = "Cat";
pets[1] = "Dog";
pets[2] = "Fish";
pets[3] = "Mouse";
pets[4] = "Lion";
document.write(pets);

document.write("<br>");

// replace elements in an already declared array
pets[0] = "Birds";
pets[2] = "Snake";
pets[4] = "Shark";
document.write(pets);

var fruits = ["Apple", "Banana", "Grapes"]
document.write(fruits);

document.write("<br>");

fruits.pop();               // the (pop) keyword/function removes the last element from the array
document.write(fruits);

document.write("<br>");

fruits.push("Mango", "Pineapple")      // the (push) keyword/function adds element to the end of array
document.write(fruits);

var animals = ["cat", " dog", " mouse"];
document.write(animals);
document.write("<br>");

animals.shift()                        // the (shift) keyword/function removes the first element of the array
document.write(animals);
document.write("<br>");

animals.unshift("lion", "snake")        // the (unshift) keyword/function adds element to the beginning of an array
document.write(animals);
document.write("<br>");

// Use the splice method to insert one or more elements anywhere in an array, 
// while optionally removing one or more elements that come after it. 

var fruits = ["apple", "banana", "grapes", "mango", "peach"];
document.write(fruits);
document.write("<br>");

//  The first digit inside the parenthesis is the index of the position,
//  where you want to start adding if you're adding and deleting if you're deleting.

// The second digit is the number of existing elements to remove, 
// starting with the first element that comes after the element(s) that you're splicing in.


fruits.splice(2, 2, "Pomegrenate", "Strawberry");
document.write(fruits);
document.write("<br>");

// The following code adds 2 elements without removing any elements
fruits.splice(3, 0, "potato", "tomato");
document.write(fruits);
document.write("<br>");

//  with the following code, we can  remove elements without adding any.
fruits.splice(2, 3);
document.write(fruits);
document.write("<br>");

// By Using the slice method we cam copy one or more consecutive elements in any position and put them into a new array.

var pets = ["dog", "cat", "fly", "bug", "ox", "cow", "buffalo", "Sparrow", "Parrots", "mouse"];
document.write(pets);
document.write("<br>");

// The first digit inside the parentheses is the index of the first element to be copied. 
// The second digit is the index of the element after the last element to be copied
var nopets = pets.slice(3, 7);
document.write(nopets);
document.write("<br>");