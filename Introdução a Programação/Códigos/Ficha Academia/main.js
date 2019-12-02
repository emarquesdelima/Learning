function ficha() {
//Funções

//Objetos
var firstName = inputNome.value;
var lastName = inputSobrenome.value;
var peso = numberAdjust(inputPeso);
var altura = numberAdjust(inputAltura);
var birthInput = nasc.value.split("-");
var birth = birthInput[1] + "/" + birthInput[2] + "/" + birthInput[0];
var age = function() {return calculaIdade(birthInput[2],birthInput[1],birthInput[0])};
var fullName = function() {return firstName + " " + lastName;};
var hearthCond = inputHearthCond.checked;
var adult = age() > 18;
var old = age() > 63;
var acompanhamentoMedico = (hearthCond || !adult) ? "Necessita Acompanhamento Médico<br>":"";
var atestadoMedico = old ? "Necessita de Atestado":"";

/* //Exibição
document.getElementById("displayRegister").innerHTML = "Falta Adicionar Num do Cadastro";
document.getElementById("displayName").innerHTML = r001.fullName();
document.getElementById("displayBirth").innerHTML = r001.birth();
document.getElementById("displayAge").innerHTML = r001.age(); */

mostra(`
<table>
        <hr>        
        <p>Cadastro: </p> <input id="qty" value="0" /><br>
        <p>Nome: </p>${fullName()}<br>
        <p>Peso: </p>${peso} kg<br>
        <P>Altura: </p>${altura} m<br>
        <p>Data de Nascimento: </p>${birth}<br>
        <p>Idade: </p>${age()}<br><br>
        ${acompanhamentoMedico}
        ${atestadoMedico}
</table>
`)
}
