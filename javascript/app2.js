class Banco {
    constructor(monto, cantCuotas, interes, cuota) {
        this.monto = monto
        this.cantCuotas = cantCuotas
        this.interes = interes
        this.cuota = cuota
    }
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
    if (monto === 0) return (alert('Monto invalido'))
    if (cantCuotas != 12 && cantCuotas != 24 && cantCuotas != 36 && cantCuotas != 48) return (alert('Monto invalido de cuotas'))
    interes = financiacion(monto, num, tasa, cantCuotas)
    cuota = cuotas(interes, cantCuotas)

    const impCalculados = new Banco(monto, cantCuotas, interes, cuota)
    return impCalculados
}

const inputMonto = document.querySelector('#monto')
const inputCuotas = document.querySelector('#cuotas')
const form = document.querySelector('#datos')
let resultado = []
/*while (salida != 'NO') {
    resultado.push(calculador())
    salida = prompt('Desea hacer otro cálculo? SI o NO').toUpperCase()
}
alert('Gracias por usar nuestro calculador')*/
form.addEventListener("submit", (e) => {
    e.preventDefault()

    monto = inputMonto.value
    cantCuotas = inputCuotas.value
    calculador()
    resultado.push(calculador())
})


const section = document.querySelector('#visualCalculos')
const temp = document.querySelector('template')
const list = temp.content.querySelector('div');

resultado.forEach((elem) => {
    let listClonada = list.cloneNode(list,true);
    listClonada.children[0].innerText = 'Su prestamo es de ' + elem.monto //li
    listClonada.children[1].innerText = 'Vas a devolver ' + elem.interes//li
    listClonada.children[2].innerText = 'En ' + elem.cantCuotas + ' cuotas de ' + elem.cuota.toFidex(2) //li
    
    section.appendChild(listClonada)
})