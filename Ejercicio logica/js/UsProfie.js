/** User profile
 * Write a program that prompts a user for their data: username, age, and a list of their favorite movies
 * Store the information and then showcase it in the console.
 * Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'
 */

 const usname = prompt("Write your username");
 const age = prompt("How old are you?");
 const movies = prompt("Write a list of your favorite movies, separate each one with a comma");

movies = movies.split(",");

 console.log(`Your name is ${usname}`);
console.log(`Your age is ${age}`);
 arrayMovies.forEach(movie => {
     console.log(`The film ${movie} is one of my favorites`);
});


