var myBtn1 = document.getElementById('my-btn1');
myBtn1.addEventListener('click', function (){
  var max = 9;
  var min = 0;

  var inputUtente =  Math.floor(Math.random()*(max - min + 1) + min);
  console.log(inputUtente);

  if ((inputUtente % 2)== 0){
    document.getElementById('my-p').classList.remove('testa');
    document.getElementById('my-p').classList.add('croce');
  } else {
    document.getElementById('my-p').classList.remove('croce');
    document.getElementById('my-p').classList.add('testa');
  }
})
