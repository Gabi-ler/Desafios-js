// let cantidad = Number(prompt('Cuantas veces deseas cambiarle el apellido a Luna?'))
// let nombre = 'Luna'
// let apellidos = ''
// for (let i = 0; i >= cantidad; i++) {
//     apellidos = prompt('que apellido desea elegirle')
//     let nombreCompleto = nombre + ' ' + apellidos
//     alert(nombreCompleto)
// }

/*let apellido = prompt('Adivina el apellido de Luna').toUpperCase
while (apellido != 'Rico') {
    apellido = prompt('No adivinaste, ingresa otro') ; 
}
alert('Muy bien!! adivinaste, su apellido es Rico')*/


//=================================Desafio entregable 1=========================================
function financiacion(num1, num2, num3, num4) {  
    return num1 * (num2 + num3 * num4)
}

function cuotas(montoFinal, cuotas) {
    return montoFinal / cuotas
}

const tasa = 0.045
const num = 1
let monto;
let cantCuotas;
let interes;
let cuota;
let salida;

function calculador() {
    monto = Number(prompt('Indique el monto que desea financiar'))
    if (monto === 0) return
    cantCuotas = Number(prompt('Ingrese la cantidad de cuotas en la cual desea financiar'))
    interes = financiacion(monto, num, tasa, cantCuotas)
    cuota = cuotas(interes,cantCuotas)
    alert('Usted va a devolver un total de ' + interes)
    alert('En ' + cantCuotas + ' cuotas de ' + cuota )
    // alert('Gracias por usar nuestro calculador')
}//Si descomentas este alert y comentas el while el calculador funciona con el boton html

while(salida != 'NO') {
    calculador()
    salida = prompt('Desea hacer otro cálculo? SI o NO').toUpperCase()
}
alert('Gracias por usar nuestro calculador')


