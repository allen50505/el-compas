function abrirPaquete(numero) {
const pass = prompt("Contraseña del paquete:");
if (pass === PASSWORDS[`paquete${numero}`]) {
fetch(`pistas/paquete${numero}.html`)
.then(r => r.text())
.then(html => document.getElementById("pistasContenido").innerHTML = html);
} else {
alert("Contraseña incorrecta");
}
}
