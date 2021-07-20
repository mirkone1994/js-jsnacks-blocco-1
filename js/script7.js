/*SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato*/
var display = document.getElementById("display");
var palla = {
    nome: "palla",
    peso: 10,
}
console.log(palla);
var nuovoPeso = parseInt(prompt("Inserisci il nuovo peso"));
palla.peso = nuovoPeso;
for(var key in palla){
    content += "<div><strong>" + key + ": </strong>" + palla[key] + "</div>"
}
display.innerHTML = content;