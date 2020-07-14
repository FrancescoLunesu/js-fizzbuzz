// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
 // e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// dichiaro variabile numero
var numero;

// creo ciclo for per incrementare la variabile di uno da 1 a 100
for (var i = 1; i <=100; i++){
    numero = i;

// imposto delle condizioni che se rispettate, dovranno stampare una stringa al posto del numero
    if ((numero % 5 == 0) && (numero % 3 == 0)){
        console.log("FizzBuzz");
    } else if (numero % 3 == 0){
        console.log("Fizz");
    } else if (numero % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}
