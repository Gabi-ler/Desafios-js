// let cantidad = Number(prompt('Cuantas veces deseas cambiarle el apellido a Luna?'))
// let nombre = 'Luna'
// let apellidos = ''
// for (let i = 0; i >= cantidad; i++) {
//     apellidos = prompt('que apellido desea elegirle')
//     let nombreCompleto = nombre + ' ' + apellidos
//     alert(nombreCompleto)
// }

let apellido = prompt('Adivina el apellido de Luna')
while (apellido != 'Rico') {
    apellido = prompt('No adivinaste, ingresa otro') ; 
}
alert('Muy bien!! adivinaste, su apellido es Rico')
