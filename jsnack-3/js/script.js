var myBtn1 = document.getElementById('my-btn1');
myBtn1.addEventListener('click', function (){

  var inputUtente = parseFloat(prompt('Inserisci un numero'));
  console.log(inputUtente);

  if (!isNaN(inputUtente)){
    if (inputUtente > 0){
      document.getElementById('my-p').className = "green";
    } else if (inputUtente < 0) {
      document.getElementById('my-p').className = "red";
    } else {
      document.getElementById('my-p').className = "blue";
    }
  }
})
