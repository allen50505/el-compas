const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// CONFIGURACIÓN DEL SISTEMA
const ESTADO_INICIAL = "F"; // editable
const SENTIDO = "adelante"; // "adelante" o "atras"


// MENSAJE FINAL (SOLUCIÓN)
const MENSAJE_SECRETO = "EL TIEMPO NO AVANZA SOLO";


// CONTRASEÑAS DE PAQUETES
const PASSWORDS = {
paquete1: "eco",
paquete2: "memoria",
paquete3: "movimiento",
paquete4: "referencia",
paquete5: "inicio",
paquete6: "uniforme",
paquete7: "circular",
paquete8: "lectura",
paquete9: "acumulativo",
paquete10: "sistema"
};


// GENERADOR DE NÚMEROS (puede cambiarse para otro juego)
function generarN(posicion) {
return (posicion % 5) + 1;
}
