// Scrivi un programma che stampi i numeri da 1 a 100
var items = 100;
var numbers = [];
var flag = false;

for (var i = 0; i < items; i++) {
   numbers[i] = i + 1;

    
    if (numbers[i] % 5 == 0 && numbers[i] % 3 == 0) {   // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
        numbers[i] = 'FizzBuzz';
        flag = true;
    }
    else if (numbers[i] % 3 == 0) {                 // ma per i multipli di 3 stampi “Fizz”
        numbers[i] = 'Fizz';
        flag = true;
    }
    else if (numbers[i] % 5 == 0){                  // per i multipli di 5 stampi Buzz.
        numbers[i] = 'Buzz';
        flag = true;
    }
}

for (i = 0; i < items; i++) {                       // con il flag usciamo dal ciclo e cambiamo il nome con quello definito nella condizione dentro il for
    if (flag == true){
    console.log(numbers[i])
    }
}



