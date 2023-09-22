/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures
you've seen before, determine and output the highest of those numbers. */


alert('Escribe 10 números, el programa te indicará cual de estos es el mayor')
let actualNumber = 0;
let highest = 0;

for (let index = 1; index <= 10; index++) {

    do {
       actualNumberNumber = prompt(`Set the Number ${index}:`);
   } while (isNaN(actualNumber));

     currentNumber = Number(actualNumber)

   if (index == 1 || actualNumber > highest) {
       highest = actualNumber;
       console.log(highest);
   }
 }

 alert(`The highest of those numbers is ${highest}`);
