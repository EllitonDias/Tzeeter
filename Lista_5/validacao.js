const forms = document.querySelectorAll(".needs-validation");
const senha = document.querySelector("#senha");
const confirSenha = document.querySelector("#confirmar-senha");
const selectMes = document.querySelector("#floatingSelect");
const selectdia = document.querySelector("#dias");
const select = document.querySelector(".ano");
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        if (confirSenha) {
          validatePassword();
        }
      }

      form.classList.add("was-validated");
    },
    false
  );
});

function validatePassword() {
  if (senha.value != confirSenha.value) {
    confirSenha.setCustomValidity("was-validated");
  } else {
    confirSenha.setCustomValidity("");
  }
}

selectMes.addEventListener("change", () => {
  $(".ano").empty();
  dias(selectMes);
  ano();
  console.log(selectdia.value);
});
selectdia.addEventListener("change", () => {
  $(".ano").empty();
  ano();
  console.log(selectdia.value);
});
function dias(mes) {
  if (
    mes.value === "01" ||
    mes.value === "03" ||
    mes.value === "05" ||
    mes.value === "07" ||
    mes.value === "08" ||
    mes.value === "10" ||
    mes.value === "12"
  ) {
    document.querySelector(".sumir1").style.display = "block";
    document.querySelector(".sumir2").style.display = "block";
  } else if (mes.value === "02") {
    document.querySelector(".sumir1").style.display = "none";
    document.querySelector(".sumir2").style.display = "none";
  } else {
    document.querySelector(".sumir1").style.display = "block";
    document.querySelector(".sumir2").style.display = "none";
  }
}

function ano() {
  $(".ano").empty();
  if (selectMes.value === "02" && selectdia.value === "29") {
    for (let index = 1985; index <= 2022; index++) {
      if (index % 4 == 0 && (index % 100 != 0 || index % 400 == 0)) {
        select.options[select.options.length] = new Option(index, index);
      }
    }
  } else {
    for (let index = 1985; index <= 2022; index++) {
      select.options[select.options.length] = new Option(index, index);
    }
  }
}
