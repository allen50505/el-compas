function letraAIndice(l) {
return ABC.indexOf(l);
}


function indiceALetra(i) {
return ABC[(i + 26) % 26];
}


function cifrar(texto) {
let estado = letraAIndice(ESTADO_INICIAL);
let resultado = [];


texto = texto.replace(/[^A-Z]/g, "");


for (let i = 0; i < texto.length; i++) {
const N = generarN(i);
estado += SENTIDO === "adelante" ? N : -N;
resultado.push(`[${N}]${indiceALetra(estado)}`);
}


return resultado.join(" ");
}
