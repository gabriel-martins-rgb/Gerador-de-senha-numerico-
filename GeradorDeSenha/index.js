 
var passwordGenerator = document.querySelector("#generator")

document.querySelector("#buttonGenerator").addEventListener("click", () => {
  
  passwordGenerator = Math.round(Math.random() * 145789120000)

 alert("Sua senha gerada é: " + passwordGenerator)
})


