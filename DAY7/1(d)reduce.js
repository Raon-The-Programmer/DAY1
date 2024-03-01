// Print the total population of countries using reduce function

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    let array = [];
    for (data of ans) {
        array.push(data.population);
    }
    let totalPopulation = array.reduce((a,b) => a + b);
    console.log(totalPopulation)
}
xhr.send();


// output:
// 7777721563
