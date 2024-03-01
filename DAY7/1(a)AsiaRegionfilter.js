// Get all the countries from Asia continent /region using Filter function

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    let Asiacountries = [];
    let countries= ans.filter((val) => {
        if (val.region === 'Asia')
         return val
     })
    for (data of countries) {
   Asiacountries.push((data.name.common))
   }
console.log(Asiacountries.join("\n"))
}
xhr.send();

// output;

// North Korea
// Singapore
// Bahrain
// Macau
// Uzbekistan
// China
// Pakistan
// Taiwan
// Sri Lanka
// United Arab Emirates
// Kuwait
// Turkey
// Azerbaijan
// India
// Nepal
// Saudi Arabia
// Yemen
// Israel
// Vietnam
// Iran
// Lebanon
// Malaysia
// Mongolia
// Georgia
// Tajikistan
// Turkmenistan
// Thailand
// Kazakhstan
// Jordan
// Myanmar
// Kyrgyzstan
// Japan
// Afghanistan
// Timor-Leste
// Laos
// Palestine
// Syria
// Bangladesh
// Oman
// Philippines
// Armenia
// Indonesia
// Maldives
// Brunei
// Cambodia
// Qatar
// Iraq
// Bhutan
// South Korea
// Hong Kong
