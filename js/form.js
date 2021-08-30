var novoPaciente = document.querySelector("#adicionar-paciente");

novoPaciente.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = catchPacient(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeErro(erros);
    return;
  }

  addPaciente(paciente);

  form.reset();
  var mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";
});

function exibeErro(erros) {
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function catchPacient(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function createTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = createTd(paciente.nome, "info-nome");
  var pesoTd = createTd(paciente.peso, "info-peso");
  var alturaTd = createTd(paciente.altura, "info-altura");
  var gorduraTd = createTd(paciente.gordura, "info-gordura");
  var imcTd = createTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function createTd(valor, classe) {
  var td = document.createElement("td");
  td.textContent = valor;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Nome não pode ser em branco.");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("O peso é inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }

  if (paciente.gordura.length == 0) {
    erros.push("Gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("Peso não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("Altura não pode ser em branco");
  }
  return erros;
}

function addPaciente(paciente) {
  var pacienteTr = createTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
}
