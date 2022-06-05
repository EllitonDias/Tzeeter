//Tamanho maximo
const maxLength = 140;
//iniciando os campos texarea sem o modal
const texto1 = document.querySelector("#coment");
const spanText = document.querySelector(".result");
const btnEnviar = document.querySelector(".btnEnviar");
if (btnEnviar) {
  btnEnviar.disabled = true;
}
//Modal
const texto2 = document.querySelector("#coment1");
const spanText2 = document.querySelector(".result1");
const btnEnviar2 = document.querySelector(".btnEnviar1");
if (btnEnviar2) {
  btnEnviar2.disabled = true;
}
if (texto1) {
  texto1.addEventListener("input", () => {
    addEvento(texto1, "result", spanText, btnEnviar);
  });
}
texto2.addEventListener("input", () => {
  addEvento(texto2, "result1", spanText2, btnEnviar2);
});

function addEvento(texto, classSpan, spanText, btn) {
  let tamanho = texto.value.length;
  let contador = maxLength - tamanho;
  document.querySelector(`.${classSpan}`).textContent = contador;

  mudarCor(contador, spanText);
  verificarBtn(contador, btn);
  verificarBtnText(tamanho, spanText, btn);
}

function verificarBtnText(tamanho, spanText, btn) {
  if (tamanho == 0) {
    spanText.textContent = "";
    btn.disabled = true;
  }
}

function mudarCor(contador, spanTxt) {
  if (contador < 0) {
    spanTxt.style.color = " rgb(255, 0, 0)";
  } else if (contador <= 40 && contador >= 0) {
    spanTxt.style.color = "rgb(255, 200, 0)";
  } else {
    spanTxt.style.color = "black";
  }
}

function verificarBtn(contador, btn) {
  if (contador < 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
console.log("oi");
