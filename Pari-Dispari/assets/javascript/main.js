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
function genera()
{
    // Ricavo valori inseriti dall'utente
    let sceltaParteUtente = document.getElementById('sceltaParteUtente').value;
    
    let sceltaNumeroUtente = parseInt(document.getElementById('sceltaNumeroUtente').value);
    
    let numeroUtente = document.getElementById('numeroUtente');
    let numeroCpu = document.getElementById('numeroCpu');
    let risultatoSceltaUtente = document.getElementById('risultatoSceltaUtente');
    let risultatoSceltaCpu = document.getElementById('risultatoSceltaCpu');

    //Genero numero random (1 - 5)
    let numeroRandom = Math.round(Math.random() * 5);
    if(numeroRandom == 0){numeroRandom++}

    //Variabile che contiene il risultato della funzione somma()
    let risultatoSomma;
    

    if(sceltaParteUtente == "Pari o Dispari?")
    {
        alert("ATTENZIONE! Scegli pari o dispari");
        refresh();
    }
    else if(sceltaParteUtente == "Pari")
    {
        risultatoSceltaUtente.innerText = "Pari";
        risultatoSceltaCpu.innerText = "Dispari";
    }
    else
    {
        risultatoSceltaUtente.innerText = "Dispari";
        risultatoSceltaCpu.innerText = "Pari";
    }

    
    

    // ------------------------------------------------

    if(sceltaNumeroUtente == "Scegli numero da 1 a 5")
    {
        alert("ATTENZIONE! Devi scegliere un numero tra 1 e 5!");
        refresh();
    }
    else
    {
        numeroUtente.innerText = `Il tuo numero: ${sceltaNumeroUtente}`;
        numeroCpu.innerText = `Numero computer: ${numeroRandom}`;
    }
   


    // ------------------------------------------------
    
    risultatoSomma = somma(sceltaNumeroUtente, numeroRandom);

    // controllo il vincitore
    if(sceltaParteUtente == "Pari" && risultatoSomma == "Pari")
    {
        // console.log("Hai vinto");
        document.getElementById('risultatoFinale').innerHTML = '<h3 class="bg-success text-white text-center p-2 border rounded-4">Hai Vinto!</h3>';
    }
    else if(sceltaParteUtente == "Dispari" && risultatoSomma == "Dispari")
    {
        // console.log("Hai Vinto");
        document.getElementById('risultatoFinale').innerHTML = '<h3 class="bg-success text-white text-center p-2 border rounded-4">Hai Vinto!</h3>';
    }
    else
    {
        // console.log("Hai perso");
        document.getElementById('risultatoFinale').innerHTML = '<h3 class="bg-danger text-white text-center p-2 border rounded-4">Hai Perso</h3>';
    }

}


function somma(a, b)
{
    let sum = a + b;
   
    if(sum % 2 == 0)
    {
        
        return "Pari";
    }
    else
    {
        
        return "Dispari";
    }
}

function refresh()
{
    location.reload();
}
// ----- FINE :) -----