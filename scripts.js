
let numero1 = "";
let operador = "";
let numero2 = "";

function limpar() {
  document.getElementById("display").value = "";
}

function limpar() {
    document.getElementById("display").value = "";
    numero1 = "";
    numero2 = "";
    operador = "";
}

function adicionar(valor) {
  document.getElementById("display").value += valor;
}

function adicionar(valor) {

    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
        operador = valor;
        document.getElementById("display").value += valor;
    } else {

        if (operador === "") {
            numero1 += valor;
        } else {
            numero2 += valor;
        }

        document.getElementById("display").value += valor;
    }
}

function calcular() {

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado;

    if (operador === "+") {
        resultado = numero1 + numero2;
    }

    if (operador === "-") {
        resultado = numero1 - numero2;
    }

    if (operador === "*") {
        resultado = numero1 * numero2;
    }

    if (operador === "/") {
        resultado = numero1 / numero2;
    }

    document.getElementById("display").value = resultado;

    numero1 = resultado;
    numero2 = "";
    operador = "";
}

function calcular() {
  try {
    const resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
  } catch {
    document.getElementById("display").value = "Erro";
  }
}