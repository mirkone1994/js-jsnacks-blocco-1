/*SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.*/
var names = ["Mirko", "Giovanni", "Lorenzo", "Pietro", "Stefano"];
var surname = ["Chiappori", "Leoncini", "Cazzola", "Carbone", "Camia"];
var random = [];
while (random.length < 3) {
    var randomNames = [Math.floor(Math.random()*names.length)];
    var randomSurname = [Math.floor(Math.random()*surname.length)];
    var shuffleNames = names[randomNames];
    var shuffleSurname = surname[randomSurname];
    var newNames = shuffleNames + " " + shuffleSurname;

    if (!random.includes(newNames)) {
        console.log (newNames);
        random.push(newNames);
    }   
}

