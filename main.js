// variables 
let num = prompt("Ingrese en número entero, positivo que quiere analizar.");
let validador = true;

// funciones 
function parOimpar(numero) {
    let numOperacion = numero % 2;

    if (numOperacion) {
        alert("El número " + num + " es impar.")
    } else {
        alert("El número " + num + " es par.")
    }
}

function primo(numero) {
    let numAux2 = 0;

    for (let i = 2; i < (numero - 1); i++) {
        let numAux = numero % i;
        console.log(numAux);
        if (numAux == 0) {
            numAux2 = numAux2 + 1;
        }
    }

    if (numAux2) {
        alert("El número " + numero + " NO es primo.");
    } else {
        alert("El número " + numero + " ES primo.");
    }
}

function decimales(numero) {
    let numDecimales = numero;
    let contador = 1;

    while (numDecimales >= 10) {
        numDecimales = Math.trunc(numDecimales / 10);
        console.log(numDecimales);
        contador = contador + 1;
    }

    alert("El número " + numero + " tiene " + contador + " dígitos.");
}

// menu 
while (validador) {
    let option = prompt("*************************Escoja una opción****************************      1)El número es par o impar?                                                                      2)El número es primo?                                                                    3)Cuantos dígitos tiene el numero?                                                      4)Salir");

    switch (option) {
        case "1":
            parOimpar(num);
            break;

        case "2":
            primo(num);
            break;

        case "3":
            decimales(num);
            break;

        case "4":
            validador = false
            break;


        default: alert("Opción invalida")
            break;

    }
}