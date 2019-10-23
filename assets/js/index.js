function controle(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

  var rest = firstNumber % secondNumber;



  alert("Résultat :"+rest);
}
