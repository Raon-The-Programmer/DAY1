// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double

class cricle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    cricle() {
        console.log(`tha cricle radius is = ${this.radius} ; The colour of cricle = ${this.color}`)
    }
 
    getRadius() {
        return this.radius;
    }

    setRadius(newRadius) {
        this.radius = newRadius;
    }

    getColor() {
        return this.color
    }

    setColor(newColor) {
        this.color = newColor;
    }

    tostring() {
        let number = String(this.radius)
        return `Cricle[radius=${number},color=${this.color}]`
    }

    getArea() {
        return `the area of the cricle is=${2 * 3.14 * this.radius}`;
    }

    getCircumFerence() {
     return `the circumfreence of the cricle = ${3.14*this.radius**2}`
    }
    
}

let cricle1 = new cricle(1.0, 'red');


console.log(cricle1);
cricle1.cricle();

cricle1.setRadius(3)
cricle1.setColor('black');


console.log(cricle1.getRadius());
console.log(cricle1.getColor());

console.log(cricle1.tostring());

console.log(cricle1.getArea());

console.log(cricle1.getCircumFerence());


// output:
// cricle { radius: 1, color: 'red' }
// tha cricle radius is = 1 ; The colour of cricle = red
// 3
// black
// Cricle[radius=3,color=black]
// the area of the cricle is=18.84
// the circumfreence of the cricle = 28.26
