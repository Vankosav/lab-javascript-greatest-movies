// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


//const movies = require("./data");

const getAllDirectors = (movies) => movies.map(movie => {
    return movie.director;
});

/*const getAllDirectors = movies.map(function (movie) {
    return movie.director;
});*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const ssMovies = movies.filter(movie => {
        //if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            //return ssMovies.length}
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
});
return ssMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    };
    const totalScore = moviesArray.reduce((accumulator, movie) => {
        if (movie.score) {
            //the accumulator is the total score so far
            return accumulator + movie.score;
        } else {
            //if the movie doesn't have a score, we just return the accumulator
            return accumulator;
        }
        //the 0 is the initial value of the accumulator
    }, 0);
    //const totalScore = moviesArray.reduce((acc, movie) => {
        //console.log('accumulator is: ', acc, 'and movieScore is: ', movie.score);
        //return acc + movie.score;
        
   // });
    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
/*function dramaMoviesScore(moviesArray) { 
    const dramaMovies = moviesArray.filter(movie => {
        if (movie.genre.includes("Drama")) {
            return movie; 
        };
        return scoresAverage(dramaMovies);
    });
}WHY THIS DOESNT WORK?*/
function dramaMoviesScore(moviesArray) { 
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  
    return scoresAverage(dramaMovies);

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];

    const inOrder = moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
        return a.title.localeCompare(b.title);
    } else {
        return a.year - b.year;
    };
});
    return inOrder;
    
}
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //copy of a new array
  const newArray = [...moviesArray]; 
//ordering titles alphabeticaly 
    const titles = newArray.sort((movie1, movie2) => {
            return movie1.title.localeCompare(movie2.title);
        });
        
        
    
// returning a string modified array, map and slice 
const twentyMovies = titles.map(title => {
    return title.title.slice(0, 20);
})
        return twentyMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   const newArray = [...moviesArray];
    const minutes = newArray.map(movie => {
        let durationInMins = convertTomins(movie.duration)
       
        return {...movie, duration: durationInMins}
        
    })
    console.log(minutes);
    return minutes;
}

const convertTomins = (duration) =>{
    const hoursMatch = duration.match(/(\d+)\s*h/);
    const minutesMatch = duration.match(/(\d+)\s*min/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return (hours*60) + minutes

    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    } else if (moviesArray.length === 1) {
        return moviesArray[0].score;
    }
    
}





