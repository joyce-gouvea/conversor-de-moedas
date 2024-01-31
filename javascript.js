function numeroConvertido(simbolo) {
  var numero = parseFloat(document.getElementById("campoNumero").value);

  switch (simbolo) {
    case "R":
      var resultado = calcularReal(numero);
      var resultadoUnidade = "R$ " + resultado;
      break;
    case "D":
      var resultado = calcularDolar(numero);
      var resultadoUnidade = "U$ " + resultado;
      break;
    case "R-B":
      var resultado = calcularRealBitcoin(numero);
      var resultadoUnidade = "₿ " + resultado;
      break;
    case "D-B":
      var resultado = calcularDolarBitcoin(numero);
      var resultadoUnidade = "₿ " + resultado;
  }

  document.getElementById("resultadoNumeros").innerHTML =
    "O valor convertido é " + resultadoUnidade;
}

function calcularReal(n) {
  return n * 5.15; 
}

function calcularDolar(n) {
  return n / 5.15; 
}

//1 BTC vale 109695,06 reais
//1 real vale 0,0000091BTC
//1 dolar vale 0,000047BTC
function calcularRealBitcoin(n) {
  return n * 0.0000091;
}

function calcularDolarBitcoin(n) {
  return n * 0.000047;
}

function limparCampoNumeroEResultado() {
  document.getElementById("campoNumero").value = "";
  document.getElementById("resultadoNumeros").innerHTML = "";
}