// sets my name to a variable. type = string
var myName = "Cheyenne";
// sets the number of states to a varible. type = number
var states = 50;
// sets the result of 4 + 5 to a variable. type = number
var add = 5 + 4;
// a function that alerts the user with "Hello World!". returns nothing so it can be labeled as void.
function sayHello() {
    alert("Hello World!");
}
sayHello();
// a function that checks the age passed in and alerts if the person is not old enough
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// an array of my favorite vegetables. type = array of strings
var vegetables = ["bell peppers", "asparagus", "onions"];
for (var i = 0; i < vegetables.length; ++i) {
    console.log(vegetables[i]);
}
var people = [
    {
        name: "Tom",
        age: 19
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "John",
        age: 20
    },
    {
        name: "Fred",
        age: 60
    },
    {
        name: "Bill",
        age: 45
    }
];
// looping through array of people and checking each ones age
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(word) {
    if (word.length % 2 == 0) {
        console.log("The world is nice and even!");
    }
    else {
        console.log("The world is an odd place!");
    }
}
getLength("Hello World");
