// JAVASCRIPT //

console.log("YDD");

/*
Pari e Dispari
    -L’utente sceglie pari o dispari
    -Inserisce un numero da 1 a 5.
    -Generiamo un numero random (sempre da 1 a 5)
    per il computer (usando una funzione).
    -Sommiamo i due numeri
    -Stabiliamo se la somma dei due numeri
    è pari o dispari (usando una funzione)
    -Dichiariamo chi ha vinto.
*/

/*
 funzione che permette di scegliere pari o dispari
 e in base alla risposta
 imposta la scelta contraria all'avversario
*/
function scelta()
{
    let sceltaUtente = document.getElementById('sceltaUtente').value;
    let risultatoSceltaUtente = document.getElementById('risultatoSceltaUtente');
    let risultatoSceltaCpu = document.getElementById('risultatoSceltaCpu');

    if(sceltaUtente == "Pari o Dispari?")
    {
        alert("Devi scegliere pari o dispari!");
        risultatoSceltaUtente.innerText = "";
        risultatoSceltaCpu.innerText = "";
    }
    else if(sceltaUtente == "Pari")
    {
        risultatoSceltaUtente.innerText = "Pari";
        risultatoSceltaCpu.innerText = "Dispari";        
    }
    else
    {
        risultatoSceltaUtente.innerText = "Dispari";
        risultatoSceltaCpu.innerText = "Pari";
    }
}

function pari_dispari()
{
    

    

    
}











// ----- FINE :) -----