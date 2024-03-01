// Print the following details name, capital, flag using forEach function

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    let countries = [];
    ans.forEach(element => {
       countries.push('country : '+element.name.common);
       countries.push('capital : '+element.capital);
        countries.push('flag : '+element.flag+'\n');
    });
    console.log(countries.join('\n'))
}

xhr.send();

// output:
// example few countries ouput show all countriesto run the code its only Reference

// country : South Africa
// capital : Pretoria,Bloemfontein,Cape Town
// flag : 🇿🇦

// country : Svalbard and Jan Mayen
// capital : Longyearbyen
// flag : 🇸🇯

// country : Samoa
// capital : Apia
// flag : 🇼🇸

// country : Gambia
// capital : Banjul
// flag : 🇬🇲

// country : Saint Kitts and Nevis
// capital : Basseterre
// flag : 🇰🇳

// country : Monaco
// capital : Monaco
// flag : 🇲🇨
