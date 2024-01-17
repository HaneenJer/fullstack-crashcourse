// template strings
function stringTemp() {
    const title = 'Best reads of 2019';
    const author = 'Mario';
    const likes = 30;

    // concatenation way
    let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
    console.log(result);

    // template strings
    result = `The blog called ${title} by ${author} has ${likes} likes`;
    console.log(result);

    // html template strings
    let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

    console.log(html);
}

function arrays() {
    let minions = ['Kevin', 'Stuart', 'Bob'];
    console.log(minions);

    // change the value of index 1
    minions[1] = 'Tim';
    console.log(minions);

    let ages = [10, 20, 15];
    console.log(ages);

    // the same array can have different types
    let random = ['Kevin', 'Bob', 10, 15];
    console.log(random);

    console.log(random.length);

    // array methods
    // create a string using the array, where ',' is between each two elements 
    let result = minions.join(',');
    console.log(result);

    result = minions.concat(['Stuart']);
    console.log(result);

    result = minions.indexOf('Bob');
    console.log(result);

    // Destructive methods - change the original array 
    minions.push('Lion');
    console.log(minions);
    minions.pop();
    console.log(minions);

}

// stringTemp();
// arrays();

// function expressions
const speak = function () {
    console.log("this is a function expression");
};

// speak();
// ass opossed to the function declartion, in function expressions, the function should be declared BEFORE calling it

// arrow function 
// const calcArea = (radius) =>{
//     return 3.14 * radius**2;
// };

// one param you can remove the parentheses, when returnig something with only one line you can remove {} and return
const calcArea = radius => 3.14 * radius**2;

// console.log(calcArea(5));

// callbacks and foreach
const myFunc = callbackfunc => {
    // do something
    let value = 50;
    callbackfunc(value);
};
// calling myFunc with the call backfunc
// option1
// myFunc(function(value){
//     console.log(value);
// });

// option2
// myFunc(value=>console.log(value +10));


// foreach

let people = ["tim", "stuart", "bob", "kevin"];

// foreach element in the array people, it executes the funtion
// people.forEach(function(){console.log('something')});

// you get the current element as the first param
// people.forEach(person => {console.log(person)});

const logperson = (person, index) => {
    console.log(`the person is ${person} at index ${index}`);
};

// people.forEach(logperson);   




// get a reference to the ul
let ul = document.querySelector('.people');

html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
});

// console.log(html);
ul.innerHTML = html;