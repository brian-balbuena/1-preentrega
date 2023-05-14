//Array donde se guardan todos los productos
let plantas = [];

// constructores de productos  
class Producto {
    constructor(info) {
        this.ID = info.id;
        this.family = info.family;
        this.nombre = info.nombre;
        this.vivienda = info.vivienda;
        this.ubicacion = info.ubicacion;
        this.proposito = info.proposito;
        this.img = info.img;
    }
}

// BUSCADOR 
function buscaProducto(num) {
    busca = plantas.find((producto) => producto.ID === num);
    return busca;
}
function buscarNombre(nombre) {
    busca = plantas.find((producto) => producto.nombre === nombre);
    return busca;
}

// funciones para comprobar y cargar datos manuales
function addManual() {
    let infoManual = {
        id: comprobacionID(),
        family: comprobacionFamily(),
        nombre: comprobacionNombre(),
        vivienda: comprobacionVivienda(),
        ubicacion: comprobacionUbicacion(),
        proposito: comprobacionProposito(),
        img: prompt("Por el momento deje este campo vacio"),
    }
    let producto = new Producto(infoManual);
    plantas.push(producto);
}

function comprobacionID() {
    idNumComprobacion = parseFloat(prompt("Ingrese el ID"));

    if (plantas.find((producto) => producto.ID === idNumComprobacion)) {
        alert("                           !!!\n El número ingresado ya pertenece a ID.\n Por favor, revise el excel para ver los ID existentes.");
        comprobacionID(); //uso la recursividad hasta que el id sea correcto
    }
    return idNumComprobacion;
}

function comprobacionFamily() {
    let confirmar = true;
    while (confirmar) {
        let numFamily = parseFloat(prompt("Ingrese el número de la familia:\n 0-SUCULENTAS\n 1-ÁRBOLES\n 2-HUERTA\n 3-HIERBAS\n 4-TREPADORAS\n 5-JARDIN\n 6-INTERIOR"))
        switch (numFamily) {
            case 0:
                return "Suculentas";
                break;
            case 1:
                return "Árboles";
                break;
            case 2:
                return "Huerta";
                break;
            case 3:
                return "Hierbas";
                break;
            case 4:
                return "Trepadoras";
                break;
            case 5:
                return "Jardin";
                break;
            case 6:
                return "Interior";
                break
            default:
                alert("                   !!!\n La opción es invalida");
        }
    }
}


function comprobacionNombre() {
    nombreComprobacion = prompt("Ingrese el nombre");
    nombreMInuscula = nombreComprobacion.toLowerCase();
    if (buscarNombre(nombreMInuscula)) {
        alert("                           !!!\n El nombre ingresado ya esta en uso.\n Por favor, revise el excel para ver los nombres existentes.");
        comprobacionNombre();
    }
    return nombreMInuscula;
}

function comprobacionVivienda() {
    let confirmar = true;
    while (confirmar) {
        let numVivienda = parseFloat(prompt("Ingrese el número correspondiente:\n 0-Casa\n 1-Departamento"))

        if (numVivienda === 0) {
            return "Casa";
        } else if (numVivienda === 1) {
            return "Depto";
        } else {
            alert("                   !!!\n La opción es invalida");
        }
    }
}

function comprobacionUbicacion() {
    let confirmar = true;
    while (confirmar) {
        let numUbicacion = parseFloat(prompt("Ingrese el número correspondiente:\n 0-Interior\n 1-Exterior"))

        if (numUbicacion === 0) {
            return "Interior";
        } else if (numUbicacion === 1) {
            return "Exterior";
        } else {
            alert("                   !!!\n La opción es invalida");
        }
    }
}

function comprobacionProposito() {
    let confirmar = true;
    while (confirmar) {
        let numProposito = parseFloat(prompt("Ingrese el número correspondiente:\n 0-Huerta\n 1-Deco"))

        if (numProposito === 0) {
            return "Huerta";
        } else if (numProposito === 1) {
            return "Deco";
        } else {
            alert("                   !!!\n La opción es invalida");
        }
    }
}



// falsa base de datos
// familia suculentas 
let info1 = {
    id: 1,
    family: "Suculentas",
    nombre: "cactus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto1 = new Producto(info1);

let info2 = {
    id: 2,
    family: "Suculentas",
    nombre: "roseta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto2 = new Producto(info2);

let info3 = {
    id: 3,
    family: "Suculentas",
    nombre: "lithops",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto3 = new Producto(info3);

let info4 = {
    id: 4,
    family: "Suculentas",
    nombre: "aloe vera",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto4 = new Producto(info4);

let info5 = {
    id: 5,
    family: "Suculentas",
    nombre: "cola de burro",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto5 = new Producto(info5);

let info6 = {
    id: 5,
    family: "Suculentas",
    nombre: "argyroderma",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto6 = new Producto(info6);

// familia árboles 
let info7 = {
    id: 100,
    family: "Árboles",
    nombre: "pino",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto7 = new Producto(info7);

let info8 = {
    id: 101,
    family: "Árboles",
    nombre: "sauce lloron",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto8 = new Producto(info8);

let info9 = {
    id: 102,
    family: "Árboles",
    nombre: "acacia",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto9 = new Producto(info9);

let info10 = {
    id: 103,
    family: "Árboles",
    nombre: "eucalipto",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto10 = new Producto(info10);

let info11 = {
    id: 104,
    family: "Árboles",
    nombre: "palo borracho",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto11 = new Producto(info11);

let info12 = {
    id: 105,
    family: "Árboles",
    nombre: "ceibo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto12 = new Producto(info12);

let info13 = {
    id: 106,
    family: "Árboles",
    nombre: "cerezo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto13 = new Producto(info13);

let info14 = {
    id: 107,
    family: "Árboles",
    nombre: "limonero",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto14 = new Producto(info14);

let info15 = {
    id: 108,
    family: "Árboles",
    nombre: "naranjo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto15 = new Producto(info15);

let info16 = {
    id: 109,
    family: "Árboles",
    nombre: "manzano",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto16 = new Producto(info16);

let info17 = {
    id: 110,
    family: "Árboles",
    nombre: "nogal",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto17 = new Producto(info17);

let info18 = {
    id: 111,
    family: "Árboles",
    nombre: "aguacatero",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto18 = new Producto(info18);


// familia huerta 
let info19 = {
    id: 200,
    family: "Huerta",
    nombre: "tomate",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto19 = new Producto(info19);

let info20 = {
    id: 201,
    family: "Huerta",
    nombre: "zanahoria",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto20 = new Producto(info20);

let info21 = {
    id: 202,
    family: "Huerta",
    nombre: "zapallo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto21 = new Producto(info21);

let info22 = {
    id: 203,
    family: "Huerta",
    nombre: "papa",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto22 = new Producto(info22);

let info23 = {
    id: 204,
    family: "Huerta",
    nombre: "cebolla",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto23 = new Producto(info23);

let info24 = {
    id: 205,
    family: "Huerta",
    nombre: "tomate cherry",
    vivienda: "Casa",
    ubicacion: "Interior",
    proposito: "Huerta",
    img: 0,
}
let producto24 = new Producto(info24);


// familia hiervas 
let info25 = {
    id: 300,
    family: "Hierbas",
    nombre: "perejil",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto25 = new Producto(info25);

let info26 = {
    id: 301,
    family: "Hierbas",
    nombre: "menta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Huerta",
    img: 0,
}
let producto26 = new Producto(info26);

let info27 = {
    id: 302,
    family: "Hierbas",
    nombre: "romero",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto27 = new Producto(info27);

let info28 = {
    id: 303,
    family: "Hierbas",
    nombre: "cilantro",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto28 = new Producto(info28);

let info29 = {
    id: 304,
    family: "Hierbas",
    nombre: "albahaca",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Huerta",
    img: 0,
}
let producto29 = new Producto(info29);

let info30 = {
    id: 305,
    family: "Hierbas",
    nombre: "lavanda",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto30 = new Producto(info30);


// familia trepadoras
let info31 = {
    id: 400,
    family: "Trepadoras",
    nombre: "potus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto31 = new Producto(info31);

let info32 = {
    id: 401,
    family: "Trepadoras",
    nombre: "hiedra inglesa",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto32 = new Producto(info32);

let info33 = {
    id: 402,
    family: "Trepadoras",
    nombre: "jazmin",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto33 = new Producto(info33);

let info34 = {
    id: 403,
    family: "Trepadoras",
    nombre: "madreselva",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto34 = new Producto(info34);

let info35 = {
    id: 404,
    family: "Trepadoras",
    nombre: "rosas trepadoras",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto35 = new Producto(info35);

let info36 = {
    id: 405,
    family: "Trepadoras",
    nombre: "campsis",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto36 = new Producto(info36);


// familia jardin
let info37 = {
    id: 500,
    family: "Jardin",
    nombre: "rosa",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto37 = new Producto(info37);

let info38 = {
    id: 501,
    family: "Jardin",
    nombre: "helecho",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto38 = new Producto(info38);

let info39 = {
    id: 502,
    family: "Jardin",
    nombre: "margarita",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto39 = new Producto(info39);

let info40 = {
    id: 503,
    family: "Jardin",
    nombre: "alegría del hogar",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto40 = new Producto(info40);

let info41 = {
    id: 504,
    family: "Jardin",
    nombre: "geranios",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto41 = new Producto(info41);

let info42 = {
    id: 505,
    family: "Jardin",
    nombre: "lirio",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto42 = new Producto(info42);

// familia interior 
let info43 = {
    id: 600,
    family: "Interior",
    nombre: "costilla de adán",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto43 = new Producto(info43);

let info44 = {
    id: 601,
    family: "Interior",
    nombre: "ficus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto44 = new Producto(info44);

let info45 = {
    id: 602,
    family: "Interior",
    nombre: "lengua de suegra",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto45 = new Producto(info45);

let info46 = {
    id: 603,
    family: "Interior",
    nombre: "cinta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto46 = new Producto(info46);

let info47 = {
    id: 604,
    family: "Interior",
    nombre: "anturio rojo",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto47 = new Producto(info47);

let info48 = {
    id: 605,
    family: "Interior",
    nombre: "orquídea",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto48 = new Producto(info48);

// cargo los datos de la falsa base de datos automaticamente a un array donde por el momento se van a guardar todos los productos
for (let i = 1; i < 49; i++) {
    var variableVariable = `producto${i}`;//creo una variable donde uso la i para que valla variando

    let nombreVariable = variableVariable.replace(/"/g, ""); // Elimino las comillas del string
    let variable = eval(nombreVariable); // Evaluo el string como una variable
    plantas.push(variable);
}


// PANEL DE CONTROL
let confirmacion = true;
while (confirmacion) {
    let opc = parseFloat(prompt("Bienvenido al panel de control de la base de datos de miPLANta.\n Opciones:\n 1- Agregar manualmente un producto.\n 2- Buscar un producto por su ID.\n 3- Buscar un producto por su nombre\n 4- Imprimir en la consola todos los productos.\n 0- Salir."));
    switch (opc) {
        case 1:
            addManual();
            break;
        case 2:
            buscadorID = parseFloat(prompt("Ingrese el id del producto que busca"));
            if (!plantas.find((producto) => producto.ID === buscadorID)) {
                alert("El producto no existe")
            } else {
                buscaProducto(buscadorID);
                alert(`ID: ${busca.ID}\n Nombre: ${busca.nombre}\n Familia: ${busca.family}\n Vivienda: ${busca.vivienda}\n Ubicacion: ${busca.ubicacion}\n Proposito: ${busca.proposito}\n Img: ${busca.img}`);
            }
            break;
        case 3: 
            buscadorNombre = prompt("Ingrese el nombre del producto que quiere buscar").toLocaleLowerCase();
            if (!plantas.find((producto) => producto.nombre === buscadorNombre)) {
                alert("El producto no existe")
            } else {
                buscarNombre(buscadorNombre);
                alert(`ID: ${busca.ID}\n Nombre: ${busca.nombre}\n Familia: ${busca.family}\n Vivienda: ${busca.vivienda}\n Ubicacion: ${busca.ubicacion}\n Proposito: ${busca.proposito}\n Img: ${busca.img}`);
            }
            break;
        case 4:
            plantas.forEach((el) => {
                console.log(el);
            });
            break;
        case 0:
            confirmacion = false;
            break;

        default:
            alert("                   !!!\n La opción es invalida");
            break;
    }

}





/************************************************************************************************************************************************ */
// // acomodo los datos en un árbol binario
// Estuve investigando el tema y por el momento acomodar los productos en un array no tiene insidencia en la velocidad de carga,
// cuando tenga mas conocimiento  terminare el árbol.
//
// class Arbol {
//     constructor(valor) {
//         this.valor = valor;
//         this.derecha = null;
//         this.izquierda = null;
//     }

//     agregar(valor) {
//         if (valor < this.valor) {
//             if (this.izquierda == null) {
//                 this.izquierda = new Arbol(valor);
//             } else {
//                 this.izquierda.agregar(valor)  // uso la recursividad de la funcion hasta encontrar el lado izquierdo sin dato
//             }

//         } else {
//             if (this.derecha == null) {
//                 this.derecha = new Arbol(valor);
//             } else {
//                 this.derecha.agregar(valor);  // uso la recursividad de la funcion hasta encontrar el lado izquierdo sin dato
//             }
//         }

//     }

//     buscar(valor) {
//         if (valor === this.valor) {
//             return this.valor;
//         } else if (valor < this.valor && this.izquierda !== null) {
//             return this.izquierda.buscar(valor);
//         } else if (valor > this.valor && this.derecha !== null) {
//             return this.derecha.buscar(valor);
//         } else {
//             return null;
//         }
//     }

// }
//*************************************************************************************************** */