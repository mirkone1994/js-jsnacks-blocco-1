/*SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML*/

var squadre = [
    {
        nome: "Inter",
        city: "Milano",
        punti: 93,
    },
    {
        nome: "Atalanta",
        city: "Bergamo",
        punti: 88,
    },
    {
        nome: "Genoa",
        city: "Genova",
        punti: 54,
    },
]
var table = "<table>";
    for (var i = 0; i < squadre.length; i++) {
        table+="<tr>";
        table+="<td>"+squadre[i].nome+"</td>";
        table+="<td>"+squadre[i].city+"</td>";
        table+="<td>"+squadre[i].punti+"</td>";
        table+="</tr>";
    }
table+="</table>";
document.getElementById("table").innerHTML = table;/*SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML*/

var squadre = [
    {
        nome: "Inter",
        city: "Milano",
        punti: 93,
    },
    {
        nome: "Atalanta",
        city: "Bergamo",
        punti: 88,
    },
    {
        nome: "Genoa",
        city: "Genova",
        punti: 54,
    },
]
var table = "<table>";
    for (var i = 0; i < squadre.length; i++) {
        table+="<tr>";
        table+="<td>"+squadre[i].nome+"</td>";
        table+="<td>"+squadre[i].city+"</td>";
        table+="<td>"+squadre[i].punti+"</td>";
        table+="</tr>";
    }
table+="</table>";
document.getElementById("table").innerHTML = table;