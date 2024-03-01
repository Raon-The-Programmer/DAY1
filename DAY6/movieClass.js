// movie in class

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
   getPG(_movies) {
        if (this.rating === 'PG') {
            console.log(`${this.title} This movie rating equal to PG`)
        }
    }
}

// to given input for that task

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(movie1);

// output of movie1;
// Movie {
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG13'
//   }


// My own input for that reason of "PG" as default when no rating is provided and if movie rating equal to
//  PG to output print that movie title

let movie2 = new Movie('Jailar', 'Sun picture');

let movie3 = new Movie('Beast', 'sun picture', 'PG');


console.log(movie2);
console.log(movie3);

movie1.getPG();
movie2.getPG();
movie3.getPG();

// to overall output
// Movie {
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG13'
//   }
//   Movie { title: 'Jailar', studio: 'Sun picture', rating: 'PG' }
//   Movie { title: 'Beast', studio: 'sun picture', rating: 'PG' }
//   Jailar
//   Jailar This movie rating equal to PG
// Beast This movie rating equal to PG
