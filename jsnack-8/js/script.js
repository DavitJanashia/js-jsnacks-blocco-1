var numero = prompt('Inserisci numero con 4 cifre');

var sum = 0;
for (var i = 0; i < numero.length; i++) {
  sum += parseInt(numero[i]);
}
console.log(sum);
//
// var numero1 = prompt('una stringa é array');
//
// for (var j = 0; j < numero1.length; j++) {
//   console.log(numero1[j]);
// }
