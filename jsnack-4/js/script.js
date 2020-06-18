var myBtn1 = document.getElementById('my-btn1');
myBtn1.addEventListener('click', function (){
  var max = 10;
  var min = 1;

  var inputUtente =  Math.floor(Math.random()*(max - min + 1) + min);
  console.log(inputUtente);

  if ((inputUtente % 2)== 0){
    document.getElementById('my-p').classList.remove('dispari');
    document.getElementById('my-p').classList.add('pari');
    document.getElementById('my-p').innerHTML = inputUtente;
  } else {
    document.getElementById('my-p').classList.remove('pari');
    document.getElementById('my-p').classList.add('dispari');
    document.getElementById('my-p').innerHTML = inputUtente;
  }
})
