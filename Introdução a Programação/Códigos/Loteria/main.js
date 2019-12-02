//Variáveis
var gameNum = 0;

//Funções
function promptUserInput(mensagem) {
    return parseInt(prompt(mensagem).replace("",0).replace(",","."));
}
function jogar() {
    //Computer Input
    var numComp = parseInt(Math.random()*99)+1;
    
    //Player Input
    var chance = 3;
    var numPlayer = promptUserInput(`Você tem ${chance} tentativas. Escolha um número de 1 a 100`);
    while (chance > 0 || isNaN(numPlayer) || !(numPlayer > 0 && numPlayer < 100)) {
        numPlayer = promptUserInput("Número de 1 a 100");
        chance = chance - 1;
            //Comparison
            var winLost = (numPlayer ==  numComp) ? "Ganhou!!!":"Perdeu...";
            gameNum = gameNum + 1;
            mostra(`
            <table>
            <hr>
            <p>Jogo Num: </p> ${gameNum}<br><br>
            <p>Você </p>${winLost}<br>
            <p>Você escolheu </p>${numPlayer}<br>
            <p>A loteria deu </p>${numComp}<br>
            </table>
            `);
    }

    /* Outra maneira de fazer a comparação

    if (numPlayer == numComp) {
        var winLost = "Ganhou";
    }
    if (numPlayer != numComp) {
        var winLost = "Perdeu";
    }
    */

    //Display
    mostra(`
    <table>
    <hr>
    <p>Jogo Num: </p> ${gameNum}<br><br>
    <p>Você </p>${winLost}<br>
    <p>Você escolheu </p>${numPlayer}<br>
    <p>A loteria deu </p>${numComp}<br>
    </table>
    `)
}