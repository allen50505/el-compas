window.onload = () => {
if (localStorage.getItem("compas_ganado") === "true") {
mostrarManual();
}


document.getElementById("cifrarBtn").onclick = () => {
const texto = document.getElementById("inputTexto").value.toUpperCase();
document.getElementById("salida").innerText = cifrar(texto);
};


document.getElementById("objetivo").innerText = cifrar(MENSAJE_SECRETO);
};
