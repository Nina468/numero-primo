function clique() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        exibir(" Por favor, insira um número válido.");
        return;
    }

    if (ehPrimo(numero)) {
        exibir(` ${numero} é um número primo!`);
    } else {
        exibir(` ${numero} não é um número primo.`);
    }
}

function ehPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function exibir(mensagem) {
    document.getElementById("resultado").innerHTML = mensagem;
}
