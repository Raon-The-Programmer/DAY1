// uber price calculate in class

class uber{
    constructor( kilometer) {
        this.kilometer = kilometer;
    }
    UberPriceCalculate() {
       let minimumkilo = 3;
       let minimumcharge = 100;
        if (minimumkilo > this.kilometer) {
            console.log(`minimumCharge=${minimumcharge}`)
        }
        else {
            let k = this.kilometer - minimumkilo;
            let price = k * 40 + minimumcharge;
            console.log(price);
        }
    }
}
let passenger1 = new uber(20);
passenger1.UberPriceCalculate();

// output:
//   780
