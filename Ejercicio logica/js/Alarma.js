/** Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed 
alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds". */

let segundos = 0;

do {
    segundos = prompt("Ingresa la cantidad de segundos para la alarma");
} while (isNaN(segundos));

const texto = prompt("Escribe el texto a mostrar al terminar la alarma");

segundos = Number(segundos);
let miliSegundos = 1000*segundos;

setTimeout(() => {
    alert(texto);
}, miliSegundos);