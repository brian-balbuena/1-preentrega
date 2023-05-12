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

function addManual() {
    let infoManual = {
        id: parseFloat(prompt("Ingrese el ID")),
        family: prompt("Ingrese la familia a la que pertenece"),
        nombre: prompt("Ingrese el nombre"),
        vivienda: prompt("Ingrese opc vivineda: casa / depto"),
        ubicacion: prompt("Ingrese opc de ubicaion: interior / exterior"),
        proposito: prompt("Ingrese opc proposito: huerta / deco"),
        img: prompt("Por el momento deje esto en 0"),
    }
    let producto = new Producto(infoManual);
    plantas.push(producto);
}

// falsa base de datos
// familia suculentas 
let info1 = {
    id: 1,
    family: "Suculentas",
    nombre: "Cactus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto1 = new Producto(info1);

let info2 = {
    id: 2,
    family: "Suculentas",
    nombre: "Roseta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto2 = new Producto(info2);

let info3 = {
    id: 3,
    family: "Suculentas",
    nombre: "Lithops",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto3 = new Producto(info3);

let info4 = {
    id: 4,
    family: "Suculentas",
    nombre: "Aloe Vera",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto4 = new Producto(info4);

let info5 = {
    id: 5,
    family: "Suculentas",
    nombre: "Cola de burro",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto5 = new Producto(info5);

let info6 = {
    id: 5,
    family: "Suculentas",
    nombre: "Argyroderma",
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
    nombre: "Pino",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto7 = new Producto(info7);

let info8 = {
    id: 101,
    family: "Árboles",
    nombre: "Sauce Lloron",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto8 = new Producto(info8);

let info9 = {
    id: 102,
    family: "Árboles",
    nombre: "Acacia",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto9 = new Producto(info9);

let info10 = {
    id: 103,
    family: "Árboles",
    nombre: "Eucalipto",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto10 = new Producto(info10);

let info11 = {
    id: 104,
    family: "Árboles",
    nombre: "Palo Borracho",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto11 = new Producto(info11);

let info12 = {
    id: 105,
    family: "Árboles",
    nombre: "Ceibo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto12 = new Producto(info12);

let info13 = {
    id: 106,
    family: "Árboles",
    nombre: "Cerezo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto13 = new Producto(info13);

let info14 = {
    id: 107,
    family: "Árboles",
    nombre: "Limonero",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto14 = new Producto(info14);

let info15 = {
    id: 108,
    family: "Árboles",
    nombre: "Naranjo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto15 = new Producto(info15);

let info16 = {
    id: 109,
    family: "Árboles",
    nombre: "Manzano",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto16 = new Producto(info16);

let info17 = {
    id: 110,
    family: "Árboles",
    nombre: "Nogal",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto17 = new Producto(info17);

let info18 = {
    id: 111,
    family: "Árboles",
    nombre: "Aguacatero",
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
    nombre: "Tomate",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto19 = new Producto(info19);

let info20 = {
    id: 201,
    family: "Huerta",
    nombre: "Zanahoria",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto20 = new Producto(info20);

let info21 = {
    id: 202,
    family: "Huerta",
    nombre: "Zapallo",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto21 = new Producto(info21);

let info22 = {
    id: 203,
    family: "Huerta",
    nombre: "Papa",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto22 = new Producto(info22);

let info23 = {
    id: 204,
    family: "Huerta",
    nombre: "Cebolla",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto23 = new Producto(info23);

let info24 = {
    id: 205,
    family: "Huerta",
    nombre: "Tomate Cherry",
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
    nombre: "Perejil",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto25 = new Producto(info25);

let info26 = {
    id: 301,
    family: "Hierbas",
    nombre: "Menta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Huerta",
    img: 0,
}
let producto26 = new Producto(info26);

let info27 = {
    id: 302,
    family: "Hierbas",
    nombre: "Romero",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto27 = new Producto(info27);

let info28 = {
    id: 303,
    family: "Hierbas",
    nombre: "Cilantro",
    vivienda: "Depto",
    ubicacion: "Exterior",
    proposito: "Huerta",
    img: 0,
}
let producto28 = new Producto(info28);

let info29 = {
    id: 304,
    family: "Hierbas",
    nombre: "Albahaca",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Huerta",
    img: 0,
}
let producto29 = new Producto(info29);

let info30 = {
    id: 305,
    family: "Hierbas",
    nombre: "Lavanda",
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
    nombre: "Potus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto31 = new Producto(info31);

let info32 = {
    id: 401,
    family: "Trepadoras",
    nombre: "Hiedra inglesa",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto32 = new Producto(info32);

let info33 = {
    id: 402,
    family: "Trepadoras",
    nombre: "Jazmin",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto33 = new Producto(info33);

let info34 = {
    id: 403,
    family: "Trepadoras",
    nombre: "Madreselva",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto34 = new Producto(info34);

let info35 = {
    id: 404,
    family: "Trepadoras",
    nombre: "Rosas trepadoras",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto35 = new Producto(info35);

let info36 = {
    id: 405,
    family: "Trepadoras",
    nombre: "Campsis",
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
    nombre: "Rosa",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto37 = new Producto(info37);

let info38 = {
    id: 501,
    family: "Jardin",
    nombre: "Helecho",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto38 = new Producto(info38);

let info39 = {
    id: 502,
    family: "Jardin",
    nombre: "Margarita",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto39 = new Producto(info39);

let info40 = {
    id: 503,
    family: "Jardin",
    nombre: "Alegría del Hogar",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto40 = new Producto(info40);

let info41 = {
    id: 504,
    family: "Jardin",
    nombre: "Geranios",
    vivienda: "Casa",
    ubicacion: "Exterior",
    proposito: "Deco",
    img: 0,
}
let producto41 = new Producto(info41);

let info42 = {
    id: 505,
    family: "Jardin",
    nombre: "Lirio",
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
    nombre: "Costilla de Adán",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto43 = new Producto(info43);

let info44 = {
    id: 601,
    family: "Interior",
    nombre: "Ficus",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto44 = new Producto(info44);

let info45 = {
    id: 602,
    family: "Interior",
    nombre: "Lengua de suegra",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto45 = new Producto(info45);

let info46 = {
    id: 603,
    family: "Interior",
    nombre: "Cinta",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto46 = new Producto(info46);

let info47 = {
    id: 604,
    family: "Interior",
    nombre: "Anturio rojo",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto47 = new Producto(info47);

let info48 = {
    id: 605,
    family: "Interior",
    nombre: "Orquídea",
    vivienda: "Depto",
    ubicacion: "Interior",
    proposito: "Deco",
    img: 0,
}
let producto48 = new Producto(info48);

// cargo los datos de la falsa base de datos automaticamente a un array donde por el momento se van a guardar todos los productos



for (let i = 1; i < 49; i++) {
    var variableVariable = `producto${i}`;//creo una variable donde uso la i para que valla variando

    let nombreVariable = variableVariable.replace(/"/g, ""); // Elimina las comillas del string
    let variable = eval(nombreVariable); // Evalúa el string como una variable
    plantas.push(variable);
}



// buscador = parseFloat(prompt("Ingrese el id del producto que busca"));
// const busca = plantas.find((producto) => producto.ID === buscador);
// console.log(busca);




// falta termibar el panel de control con todas las opciones que va a tener (busqueda , carga manual , y mostrar en pantalla), por prompt() y alert()




// panel de control
// let confirmacion = true;
// while (confirmacion) {
//    let opc =parseFloat(prompt("opcion"));
//     switch (opc) {
//         case 1:
//             addManual();
//             break;
//         case 2:
//             buscador = parseFloat(prompt("Ingrese el id del producto que busca"));
//             const busca = plantas.find((producto) => producto.ID === buscador);
//             console.log(busca);
//             break;
//         default:
//             confirmacion = false;
//             break;
//     }

// }












































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


// let arbol = new Arbol(producto24.ID);
// console.log(arbol);

// arbol.agregar(producto10.ID);
// console.log(arbol);

// arbol.agregar(15)
// console.log(arbol);

// arbol.agregar(70);
// console.log(arbol);

// arbol.agregar(80)
// console.log(arbol);

// // let busca = arbol.buscar(parseFloat(prompt("numero")));
// // console.log(busca);
//*************************************************************************************************** */