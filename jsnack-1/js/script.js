var numUtente1 = parseFloat(prompt('Inserisci il numero'));
var numUtente2 = parseFloat(prompt('Inserisci il numero'));

console.log(numUtente1, numUtente2);


if (!isNaN(numUtente1) && !isNaN(numUtente2)){

  if (numUtente1 > numUtente2){
    document.getElementById('numero-maggiore').innerHTML = 'il numero maggiore è: ' + numUtente1;
  } else if (numUtente1 < numUtente2){
    document.getElementById('numero-maggiore').innerHTML = 'il numero maggiore è: ' +  numUtente2;
  }  else {
    document.getElementById('numero-maggiore').innerHTML = 'Pari';
  }

} else {
  document.getElementById('numero-maggiore').innerHTML = 'L\'input inserito non era il numero, riprova.';
}
