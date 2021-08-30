var botaoBusca = document.querySelector(".busca-paciente");

botaoBusca = addEventListener("click", function () {
  var api = new XMLHttpRequest();
  api.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  api.addEventListener("load", function () {
    if (api.status == 200) {
      var resposta = api.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function (paciente) {
        addPaciente(paciente);
      });
    } else {
      console.log(api.status);
    }
  });
  api.send();
});
