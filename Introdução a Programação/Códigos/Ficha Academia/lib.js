function promptUserInputNum(mensagem) {
    return parseFloat(prompt(mensagem).replace("",0).replace(",","."));
};
function promptUserInputTxt(mensagem) {
    return prompt(mensagem);
};
function numberAdjust(num) {
    return parseFloat(num.value.replace("",0).replace(",",".")).toFixed(2).replace(".",",")
}