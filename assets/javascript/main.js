// JAVASCRIPT //

console.log("YDD");

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Titolo esercizio
alert("Funzione per scoprire se una parola è palindroma o no");

//Variabili
let parola = prompt("Scrivi una parola: ");
let parolaMirror = "";

//Funzione per scoprire se la parola inserita dall'utente è palindroma o no
function checkPalindro(testo)
{
    //Ciclo che inverte la parola inserita dall'utente
    for(let i = testo.length -1; i >= 0; i--)
    {   
        parolaMirror += testo[i];
    }

    //Controllo parola palindroma
    if(testo == parolaMirror)
    {
        return console.log("E' Palindroma")
    }
    else
    {
        return console.log("Non è Palindroma")
    }
}

//Invocazione funzione
checkPalindro(parola);














// ----- FINE :) -----