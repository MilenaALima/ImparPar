function imparPar(){
    let numero = parseInt(document.getElementById("input").value); //Convertendo para numero
    let resultado = document.getElementById("resultado").value;

    if (isNaN(numero)) { // Verifica se o usuário não digitou um número válido
        document.getElementById("resultado").innerText = "Por favor, digite um número válido!";
        return;
    }

    if(numero % 2 == 0){ // % pega o resto da divisão
        document.getElementById("resultado").innerText = `O numero ${numero} é PAR!`;
    } else {
        document.getElementById("resultado").innerText = `O numero ${numero} é IMPAR!`;
    }
}