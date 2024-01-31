fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.flag); 
    });
  })
  .catch(error => console.error('Error fetching data:', error));
