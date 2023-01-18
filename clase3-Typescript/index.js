/* console.log("Estoy trabajando desde Typescript"); */
var mensaje1 = "hola :)";
var mensaje2 = "Esta semana quedó campeón el Barcelona";
var mensaje3 = mensaje1 + " tsc index.ts --outFILR INDEX.JS" + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
var booleano = false;
var opciones;
(function (opciones) {
    opciones[opciones["si"] = 1] = "si";
    opciones[opciones["no"] = 2] = "no";
})(opciones || (opciones = {}));
function imprimirMensajes() {
    console.log("Mensaje 1: ", mensaje1);
    console.log("Mensaje 2: ", mensaje2);
    console.log("Mensaje 3: ", mensaje3);
    console.log("Numero 1: ", n1);
    console.log("Numero 2: ", n2);
    console.log("Numero 3: ", n3);
    console.log("Booleano: ", booleano);
}
