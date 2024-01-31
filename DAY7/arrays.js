// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1a: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Countries from Asia:", asiaCountries);

    // Problem 1b: Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs);

    // Problem 1c: Print the following details name, capital, flag, using forEach function
    console.log("Details of countries:");
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
    });

    // Problem 1d: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Problem 1e: Print the country that uses US dollars as currency
    const countryWithUSDCurrency = data.find(country => {
      const currencies = Object.values(country.currencies);
      return currencies.includes("USD");
    });
    console.log("Country that uses US dollars as currency:", countryWithUSDCurrency);
  })
  .catch(error => console.error('Error fetching data:', error));
