

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function Sorti (arr_num){
        for (const num of arr_num){
            if(num % 2 !== 0){
                console.log(`${num} udda`)
            }else{
                console.log(`${num} jämt`)
            }
        }
    }

    let numbarrays = [2,4,5,9,8,12,64,23,11,92,3];

    Sorti(numbarrays);
  
}
//test
uppg9();
module.exports = { uppg9 };