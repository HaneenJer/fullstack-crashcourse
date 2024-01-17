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

function arrays(){
let minions = ['Kevin', 'Stuart', 'Bob'];
console.log(minions);

// change the value of index 1
minions[1] = 'Tim';
console.log(minions);

let ages = [10, 20, 15];
console.log(ages);

// the same array can have different types
let random = ['Kevin', 'Bob', 10 , 15];
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
arrays();