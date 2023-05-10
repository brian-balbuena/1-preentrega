// // variables 
// let num = prompt("Ingrese en número entero, positivo que quiere analizar.");
// let validador = true;

// // funciones 
// function parOimpar(numero) {
//     let numOperacion = numero % 2;

//     if (numOperacion) {
//         alert("El número " + num + " es impar.")
//     } else {
//         alert("El número " + num + " es par.")
//     }
// }

// function primo(numero) {
//     let numAux2 = 0;

//     for (let i = 2; i < (numero - 1); i++) {
//         let numAux = numero % i;
//         console.log(numAux);
//         if (numAux == 0) {
//             numAux2 = numAux2 + 1;
//         }
//     }

//     if (numAux2) {
//         alert("El número " + numero + " NO es primo.");
//     } else {
//         alert("El número " + numero + " ES primo.");
//     }
// }

// function decimales(numero) {
//     let numDecimales = numero;
//     let contador = 1;

//     while (numDecimales >= 10) {
//         numDecimales = Math.trunc(numDecimales / 10);
//         console.log(numDecimales);
//         contador = contador + 1;
//     }

//     alert("El número " + numero + " tiene " + contador + " dígitos.");
// }

// // menu 
// while (validador) {
//     let option = prompt("*************************Escoja una opción****************************      1)El número es par o impar?                                                                      2)El número es primo?                                                                    3)Cuantos dígitos tiene el numero?                                                      4)Salir");

//     switch (option) {
//         case "1":
//             parOimpar(num);
//             break;

//         case "2":
//             primo(num);
//             break;

//         case "3":
//             decimales(num);
//             break;

//         case "4":
//             validador = false
//             break;


//         default: alert("Opción invalida")
//             break;

//     }
// } 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Productos 

class Producto {
    constructor(info) {
        this.ID = info.id;
        this.family = info.family;
        this.nombre = info.nombre;
        this.vivienda = info.vivienda;
        this.ubicaion = info.ubicaion;
        this.proposito = info.proposito;
        this.estacion = info.estacion;
    }
}


// let infoManual = {
//     id: parseFloat(prompt("Ingrese el ID")),
//     family: prompt("Ingrese la familia a la que pertenece"),
//     nombre: prompt("Ingrese el nombre"),
//     vivienda: prompt("Ingrese opc vivineda: casa / depto"),
//     ubicaion: prompt("Ingrese opc de ubicaion: interior / exterior"),
//     proposito: prompt("Ingrese opc proposito: huerta / deco"),
//     estacion: prompt("Ingrese opc estacion: verano / otoño / invierno / primavera"),
// }

let cactus = [];
console.log(cactus);

function addManual() {
    let infoManual = {
        id: parseFloat(prompt("Ingrese el ID")),
        family: prompt("Ingrese la familia a la que pertenece"),
        nombre: prompt("Ingrese el nombre"),
        vivienda: prompt("Ingrese opc vivineda: casa / depto"),
        ubicaion: prompt("Ingrese opc de ubicaion: interior / exterior"),
        proposito: prompt("Ingrese opc proposito: huerta / deco"),
        estacion: prompt("Ingrese opc estacion: verano / otoño / invierno / primavera"),
    }
    let producto = new Producto(infoManual);
    cactus.push(producto);
}


let confirmacion = true;

while (confirmacion) {
   let opc =parseFloat(prompt("opcion"));
    switch (opc) {
        case 1:
            addManual();
            break;
        case 2:
            cactus.forEach((item) => {
                console.log(item);
            });  
            break;
        default:
            confirmacion = false;
            break;
    }

}