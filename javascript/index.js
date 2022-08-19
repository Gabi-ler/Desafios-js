
//========================Desafio complementario 3===========================
const mantenerCard = () => {
    localStorage.getItem('resultado')
}
mantenerCard()

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

//Probando con evento del form

let resultado = []
let form = document.getElementById("datos")
let selectorCuotas = document.getElementById("lang").value



form.addEventListener("submit", (e) => {
    e.preventDefault()
    monto = document.querySelector('#monto').value
    selectCuota = () => {
        let selectorCuotas = document.getElementById("lang")
        cantCuotas = selectorCuotas.value
        return 
    }
    selectCuota(cantCuotas)
    //cantCuotas = document.querySelector('#cuotas').value
    resultado.push(calculador())
    console.log(cantCuotas)

    const section = document.querySelector('#visualCalculos')
    const temp = document.querySelector('template')

    const list = temp.content.querySelector('div');
    console.log("esta es la list", list)


    const ultimoResultado = resultado[resultado.length - 1]
    let listClonada = list.cloneNode(list, true);
    listClonada.children[0].innerText = 'Su prestamo es de ' + ultimoResultado.monto //li
    listClonada.children[1].innerText = 'Vas a devolver ' + ultimoResultado.interes.toFixed(2)//li
    listClonada.children[2].innerText = 'En ' + ultimoResultado.cantCuotas + ' cuotas de ' + ultimoResultado.cuota.toFixed(2) //li


    section.appendChild(listClonada)
    const calculosJSON = JSON.stringify(resultado)
    localStorage.setItem('resultado', calculosJSON)

})

function getStorage() {
    const localStorageCalculo = JSON.parse(localStorage.getItem('resultado'));
    const section = document.querySelector('#visualCalculos')
    const temp = document.querySelector('template')

    const list = temp.content.querySelector('div');

    localStorageCalculo.map(result => {
        let listClonada = list.cloneNode(list, true);
        listClonada.children[0].innerText = 'Su prestamo es de ' + result.monto //li
        listClonada.children[1].innerText = 'Vas a devolver ' + result.interes.toFixed(2)//li
        listClonada.children[2].innerText = 'En ' + result.cantCuotas + ' cuotas de ' + result.cuota.toFixed(2) //li
        section.appendChild(listClonada)
    });
};
getStorage();





/* const inputMonto = document.querySelector('#monto').value

const inputCuotas = document.querySelector('#cuotas')
const form = document.querySelector('#datos')

let resultado = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    monto = inputMonto.value
    cantCuotas = inputCuotas.value
    calculador()
    resultado.push(calculador())
}) */


///////////LE AGREGO UN FILTER SUPONIENDO QUE EL USUARIO HIZO UN CALCULO DE  UN MONTO DE 100000 PARA VOLVERLO A VISUALIZAR
// const calculoBuscado = resultado.filter((prestamo) => prestamo.monto == 100000)
// console.log(calculoBuscado);
//intentar mostrar las distintos calculos que hizo el cliente sobre sus prestamos y que despues úeda ver cual le convienetu
//MIRAR LA DIAPOSITIVA 7 QUE SALE UN EJEMPLO DE FUNCION SUPERIOR PRARA ACUMULAR LOS OBJTOS


