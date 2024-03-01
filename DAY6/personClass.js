// person detelies in class

class person{
    constructor(name, age, qualification, currentWork,study) {
        this.personName = name;
        this.Age = age;
        this.qualification = qualification;
        this.currentWork = currentWork;
        this.study=study
    }
    personAbout() {
        console.log(`I am completed in electronics and communication engineering at 2023 passout. Cuurently I am studying Guvi${this.study}`)
    }
}
let person1 = new person('Parthasarathi', 21, 'Engineering(ECE)', 'study in Guvi','Full stack developer');
console.log(person1);
person1.personAbout();

// Output

// person {
//   personName: 'Parthasarathi',
//   Age: 21,
//   qualification: 'Engineering(ECE)',
//   currentWork: 'study in Guvi',
//   study: 'Full stack developer'
// }
// I am completed in electronics and communication engineering at 2023 passout.cuurently i am studying GuviFull stack developer
