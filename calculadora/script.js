function somar() {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    let resultado = num1 + num2
    document.getElementById("resultado").textContent = resultado
}

function subtrair() {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    let resultado = num1 - num2
    document.getElementById("resultado").textContent = resultado
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    let resultado = num1 * num2
    document.getElementById("resultado").textContent = resultado
}

function dividir() {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)
    if (num2 !== 0) {
        let resultado = num1 / num2
        document.getElementById("resultado").textContent = resultado
    } else {
        document.getElementById("resultado").textContent = "Erro: Divisão por zero"
    }
}
