// Print the country which uses US Dollars as currency.

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
  
 ans.map((val) => {
        if (val.currencies&&val.currencies.USD)
         console.log(val.name.common)
     })
 
}

xhr.send();

// output: The all countries US Dollars as currency

// United States Virgin Islands
// British Virgin Islands
// Northern Mariana Islands
// Turks and Caicos Islands
// Panama
// Micronesia
// Marshall Islands
// Ecuador
// American Samoa
// Palau
// United States Minor Outlying Islands
// Caribbean Netherlands
// Guam
// United States
// Timor-Leste
// Bahamas
// El Salvador
// British Indian Ocean Territory
// Cambodia
// Puerto Rico
