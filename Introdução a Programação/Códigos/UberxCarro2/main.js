//Funções
function promptUserInput(mensagem) {
    return parseFloat(prompt(mensagem).replace("",0).replace(",","."));
}
function ajustNum(num) {
    return num.toFixed(2).replace(".",",");
}
//Variáveis
//Vindas do Usuário
var distancia = promptUserInput("Digite a Distância:");
var estacionamento = promptUserInput("Gasto com estacionamento:");
//Pré-definidas
var velMed = 25;
var precoLitGas = 3.99;
var autonomia = 9;
var precoDistUber = 1.4;
var precoTempUber = 0.26;
var minemhora = 60; // essa linha converte hora em minuto
//Calculadas    
var tempo = distancia/velMed*minemhora;
var custoDistUber = distancia*precoDistUber;
var custoDistCarro = distancia/autonomia*precoLitGas;
var custoTempoUber = tempo*precoTempUber;
var totalUber = custoDistUber+custoTempoUber;
var totalCarro = custoDistCarro+estacionamento;
//Exibição
document.getElementById("tempoUber").innerHTML = formataRelogio(tempo);
document.getElementById("totalUber").innerHTML = ajustNum(totalUber);
document.getElementById("distCarro").innerHTML = ajustNum(custoDistCarro);
document.getElementById("estac").innerHTML = ajustNum(estacionamento);
document.getElementById("totCar").innerHTML = ajustNum(totalCarro);