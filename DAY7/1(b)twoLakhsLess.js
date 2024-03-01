// Get all the countries with a population of less than 2 lakhs using Filter function

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    let less2Laks = [];
    let countries= ans.filter((val) => {
        if (val.population < 200000)
         return val
     })
    for (data of countries) {
        less2Laks.push((data.name.common))
   }
console.log(less2Laks.join("\n"))
}
xhr.send();

// output;
// Svalbard and Jan Mayen
// Samoa
// Saint Kitts and Nevis
// Monaco
// Aruba
// Bermuda
// United States Virgin Islands
// Antigua and Barbuda
// British Virgin Islands
// Montserrat
// Northern Mariana Islands
// Turks and Caicos Islands
// Norfolk Island
// Saint Vincent and the Grenadines
// Christmas Island
// Jersey
// Curaçao
// Tuvalu
// Saint Lucia
// Micronesia
// Nauru
// Saint Helena, Ascension and Tristan da Cunha
// Marshall Islands
// Saint Pierre and Miquelon
// Faroe Islands
// Kiribati
// South Georgia
// Seychelles
// American Samoa
// Åland Islands
// Dominica
// Heard Island and McDonald Islands
// Falkland Islands
// Guernsey
// San Marino
// Palau
// United States Minor Outlying Islands
// Gibraltar
// Caribbean Netherlands
// Sint Maarten
// Guam
// Isle of Man
// Wallis and Futuna
// Vatican City
// Greenland
// Liechtenstein
// Saint Martin
// Bouvet Island
// Grenada
// Cook Islands
// Andorra
// Cocos (Keeling) Islands
// Tokelau
// Tonga
// Anguilla
// British Indian Ocean Territory
// Saint Barthélemy
// Cayman Islands
// Antarctica
// Pitcairn Islands
// French Southern and Antarctic Lands
// Niue
