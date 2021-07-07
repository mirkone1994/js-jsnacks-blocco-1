/*SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/
var sum = [];
var numbers;
var result = 0;
for (i = 0; i < 5; i++) {
    numbers = parseInt(prompt("Inserisci un numero"));
    sum.push(numbers);
    console.log(numbers); 
}
/*
i++
while (i < 5) {
    numbers = parseInt(prompt("Inserisci un numero"));
    sum.push(numbers);
    i++
    console.log(numbers); 
}
*/
for (i=0; i < sum.length; i++) {
    result += sum[i];
}
console.log(result);

