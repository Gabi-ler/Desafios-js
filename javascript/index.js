
//========================Desafio complementario 3===========================

class Banco {
    constructor(monto, cantCuotas, interes, cuota) {
        this.monto = monto
        this.cantCuotas = cantCuotas
        this.interes = interes
        this.cuota = cuota
    }
    // iva() {
    //     let iva = 1.21
    //     this.cuota = cuota += iva
    //     console.log(this.cuota);
    // }
}


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

const calculador = () => {
    monto = Number(prompt('Indique el monto que desea financiar'))
    if (monto === 0) return(alert('Monto invalido'))
    cantCuotas = Number(prompt('Ingrese la cantidad de cuotas: 12 / 24 / 36 / 48'))
    if (cantCuotas != 12 && cantCuotas != 24 && cantCuotas != 36 && cantCuotas != 48) return(alert('Monto invalido de cuotas'))
    interes = financiacion(monto, num, tasa, cantCuotas)
    cuota = cuotas(interes, cantCuotas)
    alert('Usted va a devolver un total de ' + interes)
    alert('En ' + cantCuotas + ' cuotas de ' + cuota )
    
    const impCalculados = new Banco(monto, cantCuotas, interes, cuota)
    return impCalculados
}

let resultado = []
while(salida != 'NO') {
    resultado.push(calculador())
    salida = prompt('Desea hacer otro cálculo? SI o NO').toUpperCase()
}
alert('Gracias por usar nuestro calculador')

///////////LE AGREGO UN FILTER SUPONIENDO QUE EL USUARIO HIZO UN CALCULO DE  UN MONTO DE 100000 PARA VOLVERLO A VISUALIZAR
// const calculoBuscado = resultado.filter((prestamo) => prestamo.monto == 100000)
// console.log(calculoBuscado);
//intentar mostrar las distintos calculos que hizo el cliente sobre sus prestamos y que despues úeda ver cual le convienetu
//MIRAR LA DIAPOSITIVA 7 QUE SALE UN EJEMPLO DE FUNCION SUPERIOR PRARA ACUMULAR LOS OBJTOS
const section = document.querySelector('#visualCalculos')
const temp = document.querySelector('template')

const list = temp.content.querySelector('div');


resultado.forEach((elem) => {
    let listClonada = list.cloneNode(list,true);
    console.log(listClonada.children[0].innerText);
    listClonada.children[0].innerText = 'Su prestamo es de ' + elem.monto //li
    listClonada.children[1].innerText = 'En ' + elem.cantCuotas + ' cuotas'//l
    listClonada.children[2].innerText = 'Vas a devolver ' + elem.interes//li
    listClonada.children[3].innerText = 'En ' + cantCuotas + ' de ' + elem.cuota //li
    
    section.appendChild(listClonada)
})