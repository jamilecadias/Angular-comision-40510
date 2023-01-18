/* console.log("Estoy trabajando desde Typescript"); */
let mensaje1: string = "hola :)"
const mensaje2: string = "Esta semana quedó campeón el Barcelona"
let mensaje3: string = mensaje1 + " tsc index.ts --outFILR INDEX.JS" + mensaje2;
let n1: number = 3;
let n2: number = 2.5;
let n3: number = n1*n2;
let booleano: boolean = false;
enum opciones{
    si = 1,
    no = 2
}

function imprimirMensajes(){
    console.log("Mensaje 1: ", mensaje1);
    console.log("Mensaje 2: ", mensaje2);
    console.log("Mensaje 3: ", mensaje3);
    console.log("Numero 1: ", n1);
    console.log("Numero 2: ", n2);
    console.log("Numero 3: ", n3);
    console.log("Booleano: ", booleano);
}