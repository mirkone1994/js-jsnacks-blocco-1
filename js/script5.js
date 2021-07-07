/*SNACK 5:  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/
var list1 = [1, 2, 3, 4, 5, 6, 7];
var list2 = [1, 2, 3, 4, 5];

while(list1.length != list2.length) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    if(list1.length > list2.length) {
        list2.push(randomNumber);
    } else {
        list1.push(randomNumber)
    }
}

console.log("Gli array sono uguali")

console.table(list1);
console.table(list2);

