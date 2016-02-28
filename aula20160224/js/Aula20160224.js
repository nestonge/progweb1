function moneyTextToFloat(text){
  var cleanText = text.replace("R$ ","").replace(",",".");
  return parseFloat(cleanText);
}

function floatToMoney(value){
  var text = (value < 1 ? "0" : "") + Math.floor(value*100);
  text = "R$ " + text;
  return text.substr(0,text.lenght -2)+ "," + text.substr(-2); //essa linha eu acho que ta errada
}

function calculaValorTotalTabela(){
  var listaProdutos = document.getElementsByClassName("produto");
  var valorTotal = 0;

  for (var pos =0; pos< listaProdutos.lenght;pos++){
    var qtdElement = listaProdutos[pos].getElementsByClassName("qtd");
    var prcElement = listaProdutos[pos].getElementsByClassName("prc");
    var prcValor = moneyTextToFloat(prcElement[0].innerHTML);
    var qtdValor = parseFloat(qtdElement[0].innerHTML);

    valorTotal += prcValor * qtdValor;
  }
  return valorTotal;
}
//var totalVenda = document.getElementById("total");
console.log(calculaValorTotalTabela());
//totalVenda.innerHTML = floatToMoney(calculaValorTotalTabela());


/*
var floatTotal = moneyTextToFloat(total.innerHTML);
var textTotal = floatToMoney(floatTotal + 2,5);

alert(total.innerHTML);
alert(floatTotal);
alert(textTotal);
*/
