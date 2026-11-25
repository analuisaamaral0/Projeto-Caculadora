// Envia os dois valores para a API da operação e mostra o resultado na tela.
function calcular(operacao) {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;
    const saida = document.getElementById("resultado");

    if (v1 === "" || v2 === "") {
        saida.innerText = "Erro: preencha os dois valores.";
        return;
    }

    fetch("/api/" + operacao, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        if (data.erro) {
            saida.innerText = "Erro: " + data.erro;
        } else {
            saida.innerText = "Resultado: " + data.resultado;
        }
    })
    .catch(() => {
        saida.innerText = "Erro: não foi possível calcular. O servidor Flask está rodando?";
    });
}

function calcularSoma() { calcular("soma"); }
function calcularSubtracao() { calcular("subtracao"); }
function calcularMultiplicacao() { calcular("multiplicacao"); }
function calcularDivisao() { calcular("divisao"); }