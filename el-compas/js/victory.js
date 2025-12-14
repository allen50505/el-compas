function verificarVictoria() {
const intento = document.getElementById("inputFinal").value.trim().toUpperCase();
if (intento === MENSAJE_SECRETO) {
localStorage.setItem("compas_ganado", "true");
mostrarManual();
} else {
alert("Mensaje incorrecto");
}
}


function mostrarManual() {
fetch("manual/manual.html")
.then(r => r.text())
.then(html => document.body.innerHTML = html);
}
