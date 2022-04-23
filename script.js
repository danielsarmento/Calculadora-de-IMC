// Capturando evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', calcular)
//Criando função que será chamada ao "enviar" formulário
function calcular(e){
    e.preventDefault();

    //Pegando os dados de entrada
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // pegando o valor em número do input
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!altura){
        escreveResultado('Altura inválida', false)
        return;
    }
    if(!peso) {
        escreveResultado('Peso inválido', false)
        return;
    }   
    const imc = calculoImc(peso, altura);
    console.log(imc);

    if (peso && altura){
        escreveResultado(`Sucesso ao receber seus dados!! Seu peso é ${peso}Kg, sua 
        altura é ${altura}m e seu <b>IMC é ${imc}</b> `, true)
    }

    const grauIMC = grauDeIMC(imc);
    console.log(grauIMC);
}

// 1 - Função que escreve resultado de validação na tela
function escreveResultado (msg, isValid) {
    const resultado = document.querySelector('.resultadoP');
    resultado.innerHTML = ''; // zera o resultado
    resultado.innerHTML = msg; // Escreve o resultdo
}
// 2 - Funão que calcula o IMC
function calculoImc (peso, altura){
    const imc = peso/(altura*altura);
    return imc.toFixed(2);
}

// 3 - Calcula o grau de obessidade do indivíduo
function grauDeIMC(imc){
    const grau = ['Você está Abaixo do Peso! 🚨','Parabéns! Seu Peso está normal! ✅',
    'Cuidado, você está com Sobrepeso! ⚠','Atenção!🚨 Você está com Obesidade grau 1❗',
    'Muita Atenção!🚨 Você está com Obesidade grau 2❗❗','Muita Atenção!🚨 Você está com Obesidade grau 3❗❗❗'];
    if (imc > 39.9) {
        adicionarElemento(grau[5])
        return grau[5]};
    if (imc >= 34.9) {
        adicionarElemento(grau[4])
        return grau[4]};
    if (imc >=29.9) {
        adicionarElemento(grau[3])
        return grau[3]};
    if (imc >= 24.9) {
        adicionarElemento(grau[2])
        return grau[2]};
    if (imc >= 18.5) {
        adicionarElemento(grau[1])
        return grau[1]};
    if (imc < 18.5) {
        adicionarElemento(grau[0])
        return grau[0]};
}
// 4- Adiciona um novo parágrafo para ser escrito a mensagem
function adicionarElemento(msgn){
    const resultado2 = document.querySelector('.resultadoP2');
    resultado2.innerHTML = '';
    resultado2.innerHTML= msgn;
}






