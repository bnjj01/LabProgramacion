const titulo = document.querySelector(".titulo");
titulo.classList.add("titulai");
document.write("<br>")
//document.write(titulo.classList.item(1))
titulo.classList.toggle("pomodoro",true)
//titulo.classList.toggle("titulai",true)
titulo.classList.replace("titulo", "titulaso")
const existe= titulo.classList.contains("titulaso");
document.write(existe);
const titulo2 = document.getElementById("titulo2");

