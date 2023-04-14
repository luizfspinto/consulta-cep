function consultar() {
  const cep = document.querySelector("input[name=cep]")

  cep.addEventListener("blur", (e) => {
    if (!cep.value) {
      const nameError = document.getElementById("nameError")
      nameError.classList.add("visible")
    } else if (cep.value != "") {
      nameError.classList.remove("visible")
      const value = cep.value.replace(/[^0-9]+/, "")
      const urlApi = `https://viacep.com.br/ws/${value}/json/` //Cosultando API viacep

      fetch(urlApi)
        .then((response) => response.json())
        .then((json) => {
          if (json.logradouro) {
            document.querySelector("input[name=rua]").value = json.logradouro
            document.querySelector("input[name=bairro]").value = json.bairro
            document.querySelector("input[name=cidade]").value = json.localidade
            document.querySelector("input[name=uf]").value = json.uf
          }
        })
    }
  })
}
consultar()

//Animação título
document.getElementsByClassName("move").addEventListener("load", myMove())
var id = null
function myMove() {
  var elem = document.getElementById("myAnimation")
  var pos = 0
  clearInterval(id)
  id = setInterval(evento, 05)
  function evento() {
    if (pos == 350) {
      clearInterval(id)
    } else {
      pos++
      elem.style.rigth = pos + "px"
      elem.style.left = pos + "px"
    }
  }
}
