//******************************************

// var numUtente1 = parseFloat(prompt('Inserisci il numero'));
// var numUtente2 = parseFloat(prompt('Inserisci il numero'));
//
// console.log(numUtente1, numUtente2);
//
//
// if (!isNaN(numUtente1) && !isNaN(numUtente2)){
//
//   if (numUtente1 > numUtente2){
//     console.log(numUtente1);
//   } else if (numUtente1 < numUtente2){
//     console.log(numUtente2);
//   }  else {
//     console.log('Pari');
//   }
//
// } else {
//   console.log('L\'input inserito non era il numero, riprova.');
// }



//****************************************** JSNACK 2
// nome cognome (btn)


// var myBtn = document.getElementById('my-btn');
// myBtn.addEventListener('click', function (){
//   var nome = document.getElementById('my-name').value;
//   var cognome = document.getElementById('my-surname').value;
//   console.log(nome + ' ' + cognome)
// })


//****************************************** JSNACK 3
// prompt btn


// var myBtn1 = document.getElementById('my-btn1');
// myBtn1.addEventListener('click', function (){
//
//   var inputUtente = parseFloat(prompt('Inserisci un numero'));
//   console.log(inputUtente);
//
//   if (!isNaN(inputUtente)){
//     if (inputUtente > 0){
//       document.getElementById('my-p').className = "green";
//     } else if (inputUtente < 0) {
//       document.getElementById('my-p').className = "red";
//     } else {
//       document.getElementById('my-p').className = "blue";
//     }
//   }
//
// })


//****************************************** JSNACK 3
// prompt btn

// var myBtn1 = document.getElementById('my-btn1');
// myBtn1.addEventListener('click', function (){
//   var max = 10;
//   var min = 1;
//
//   var inputUtente =  Math.floor(Math.random()*(max - min + 1) + min);
//   console.log(inputUtente);
//   // document.getElementById('my-p').className = "";
//   //
//   // console.log(inputUtente);
//
//   //ლუწი ასე აღინიშნება
//   if ((inputUtente % 2)== 0){
//     document.getElementById('my-p').classList.remove('dispari');
//     document.getElementById('my-p').classList.add('pari');
//     document.getElementById('my-p').innerHTML = inputUtente;
//   } else {
//     document.getElementById('my-p').classList.remove('pari');
//     document.getElementById('my-p').classList.add('dispari');
//     document.getElementById('my-p').innerHTML = inputUtente;
//   }


//****************************************** JSNACK 3
// calc



var myBtn1 = document.getElementById('my-btn1');
myBtn1.addEventListener('click', function (){



  var num1 = parseFloat(document.getElementById('my-num1').value);
  var num2 = parseFloat(document.getElementById('my-num2').value);
  console.log(num1, num2);

  var operation = document.getElementById('my-options').value;
  console.log(operation);


  if (operation === 'division'){
    if (num2 === 0){
      console.log('cant divide');
    } else {
      console.log(num1 / num2);
    }
  } else if (operation === 'addition') {
    console.log(num1 + num2);
  } else if (operation === 'multiplication') {
    console.log(num1 * num2);
  } else if (operation === 'subtraction') {
    console.log(num1 - num2);
  } else if (!operation) {
    console.log('Seleziona numero');
  }
})
