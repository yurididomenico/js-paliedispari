// JAVASCRIPT //

console.log("YDD");

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let parola = "ciao";
let parolaMirror = "";


function checkPalindro(x)
{
    for(let i = parola.length -1; i >= 0; i--)
    {   
        parolaMirror += parola[i];
    }
}

checkPalindro(parola);


console.log(parola)
console.log(parolaMirror)













// ----- FINE :) -----