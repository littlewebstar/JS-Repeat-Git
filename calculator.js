

var deger = document.querySelector("#deger");



function select(param1) {
  if (param1 === 1) {
    return Addition();
  }
  if (param1 === 2) {
    return Subtraction();
  }
  if (param1 === 3) {
    return Multiplication();
  }
  if (param1 === 4) {
    return Division();
  }
}



function Addition(param1,param2) {
  return param1 + param2;
}

function Subtraction(param1, param2) {
  return param1 - param2;
}

function Multiplication(param1, param2) {
  return param1 * param2;
}

function Division(param1, param2) {
  return param1 / param2;
}

