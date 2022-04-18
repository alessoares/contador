var currentNumberWrapper = document.getElementById("currentNumber");
var buttonSubtrair = document.getElementById("subtrair");
var buttonAdicionar = document.getElementById("adicionar");
var buttonResetar = document.getElementById("resetar");
var currentNumber = 0;
var backgroundColorDefault = "rgb(241, 214, 214)";
var backgroundColorDisabled = "background:gray";
var limitePositivo = "20";
var limiteNegativo = "-20";

buttonSubtrair.addEventListener("click",decrement);
buttonAdicionar.addEventListener("click",increment);
buttonResetar.addEventListener("click",reset);

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber < 0){
    currentNumberWrapper.style.cssText = "color:red";
  }else{
    currentNumberWrapper.style.cssText = "rgb(241, 214, 214);";
  }
  if(currentNumber >= limiteNegativo-1){
    buttonSubtrair.disabled = false;
    buttonSubtrair.style.cssText = backgroundColorDefault;
  }
  if(currentNumber >= limitePositivo){
    buttonAdicionar.style.cssText = backgroundColorDisabled;
    buttonAdicionar.disabled = true;
  }
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  
  if(currentNumber < 0){
    currentNumberWrapper.style.cssText = "color:red";
  }else{
    currentNumberWrapper.style.cssText = "rgb(241, 214, 214);";
  }
  if(currentNumber <= limiteNegativo){
    buttonSubtrair.style.cssText = backgroundColorDisabled;
    buttonSubtrair.disabled = true; 
  }else if(currentNumber <= limitePositivo-1){
    buttonAdicionar.disabled = false;
    buttonAdicionar.style.cssText = backgroundColorDefault;
  }
}

function reset(){
  buttonAdicionar.disabled = false;
  buttonAdicionar.style.cssText = backgroundColorDefault;
  buttonSubtrair.style.cssText = backgroundColorDefault;
  currentNumberWrapper.style.cssText = "rgb(241, 214, 214);";
  buttonSubtrair.disabled = false;
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
}

