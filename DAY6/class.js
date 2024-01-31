class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    // Method to display person details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  // Example usage:
  const person1 = new Person("John Doe", 30, "john.doe@example.com");
  person1.displayDetails();
  
/* ------------------------------------------------------------------------- */

  class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier = 1) {
      this.distance = distance; // in kilometers
      this.duration = duration; // in minutes
      this.surgeMultiplier = surgeMultiplier; // surge multiplier, default is 1
    }
  
    // Method to calculate the price
    calculatePrice() {
      const baseFare = 2.50; // Base fare in dollars
      const perMinuteRate = 0.20; // Rate per minute in dollars
      const perKilometerRate = 1.50; // Rate per kilometer in dollars
  
      // Surge price calculation
      const totalFare = baseFare + (this.duration * perMinuteRate) + (this.distance * perKilometerRate);
  
      // Apply surge multiplier if applicable
      const finalFare = totalFare * this.surgeMultiplier;
  
      return finalFare;
    }
  }
  
  // Example usage:
  const distance = 10; // 10 kilometers
  const duration = 20; // 20 minutes
  const surgeMultiplier = 1.5; // Surge multiplier
  const uberPriceCalculator = new UberPriceCalculator(distance, duration, surgeMultiplier);
  const price = uberPriceCalculator.calculatePrice();
  console.log(`Uber Price: $${price.toFixed(2)}`);
  