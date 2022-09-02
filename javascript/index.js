
//========================Desafio complementario 5===========================
//----------------Funcion para mantener calculos en localStorage
const mantenerCard = () => {
    localStorage.getItem('resultado')
}
mantenerCard()

class Banco {
    constructor(monto, cantCuotas, interes, cuota) {
        this.id = Math.random().toString(36).substring(2, 9);
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

//----------------Funcion que integra el calculo princiapl del prestamo----
const calculador = () => {
    if (monto === 0) return //(alert('Monto invalido'))
    if (cantCuotas != 12 && cantCuotas != 24 && cantCuotas != 36 && cantCuotas != 48) return (
        (Swal.fire({
            title: 'Inválido',
            text: 'Seleccione el monto de cuotas',
            icon: 'warning',
            showConfirmButton: false,
            timer: 2500
        })))

    interes = financiacion(monto, num, tasa, cantCuotas)
    cuota = cuotas(interes, cantCuotas)

    const impCalculados = new Banco(monto, cantCuotas, interes, cuota)
    return impCalculados
}

//---------------Trayendo template del HTML
let resultado = []
let form = document.getElementById("datos")


//----------------Evento aplicado al boton calcular
form.addEventListener("submit", (e) => {
    e.preventDefault()
    monto = document.querySelector('#monto').value
    selectCuota = () => {
        let selectorCuotas = document.getElementById("lang")
        cantCuotas = selectorCuotas.value
        return
    }
    selectCuota(cantCuotas)
    resultado.push(calculador())

    //-----------------Renderizado de calculos
    const section = document.querySelector('#visualCalculos')
    const temp = document.querySelector('template')

    const list = temp.content.querySelector('div');
    // console.log(list)


    const ultimoResultado = resultado[resultado.length - 1]
    let listClonada = list.cloneNode(list, true);
    listClonada.id = ultimoResultado.id;
    listClonada.children[0].innerText = 'Su prestamo es de ' + ultimoResultado.monto //li
    listClonada.children[1].innerText = 'Vas a devolver ' + ultimoResultado.interes.toFixed(2)//li
    listClonada.children[2].innerText = 'En ' + ultimoResultado.cantCuotas + ' cuotas de ' + ultimoResultado.cuota.toFixed(2) //li

    section.appendChild(listClonada)

    const borrarCard = document.querySelectorAll('.borrar');
    borrarCard.forEach(buttonDelete => buttonDelete.addEventListener("click", (event) => {
        event.target.parentElement.remove();
        // agregar codigo pra eliminar del localStorage por id
    }));

    
    //para ver la node list que me creando
    console.log(borrarCard);
    console.log(ultimoResultado);
    console.log(listClonada);

    const calculosJSON = JSON.stringify(resultado)
    localStorage.setItem('resultado', calculosJSON)
})

/*resultado.forEach((elem) => {
   let listClonada = list.cloneNode(list, true);
   listClonada.children[0].innerText = 'Su prestamo es de ' + elem.monto //li
   listClonada.children[1].innerText = 'Vas a devolver ' + elem.interes.toFixed(2)//li
   listClonada.children[2].innerText = 'En ' + elem.cantCuotas + ' cuotas de ' + elem.cuota.toFixed(2) //li
   
   section.appendChild(listClonada)
   const calculosJSON = JSON.stringify(resultado)
   localStorage.setItem('resultado', calculosJSON)
   })*/

//------------------Funcion para mantener en el local storage y no se pierdan al actualizar
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

    const borrarCard = document.querySelectorAll('.borrar');
    borrarCard.forEach(buttonDelete => buttonDelete.addEventListener("click", (event) => {
        event.target.parentElement.remove();
        // agregar codigo pra eliminar del localStorage por id
    }));
    

}
getStorage();



//--------- Código conversor con API ---------------
/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'Hola Gabi',
        body: 'un mensaje generico',
        userId: 10
    })
})
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        console.log(data);
    })*/

const monedaUno = document.querySelector('#moneda-uno')
const monedaDos = document.querySelector('#moneda-dos')
const cantidadUno = document.querySelector('#cantidad-uno')
const cantidadDos = document.querySelector('#cantidad-dos')
const cambio = document.querySelector('#cambio')
const tazael = document.querySelector('#taza')

//fetch exchange rate and update
const conversor = () => {
    const moneda1 = monedaUno.value
    const moneda2 = monedaDos.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
        .then(res => res.json())
        .then(data => {
            const taza = data.rates[moneda2];
            
            cambio.innerText = `1 ${moneda1} = ${taza} ${moneda2}`;

            cantidadDos.value = (cantidadUno.value * taza).toFixed(2);

        });
}


monedaUno.addEventListener('change', conversor);
cantidadUno.addEventListener('input', conversor);
monedaDos.addEventListener('change', conversor);
cantidadDos.addEventListener('input', conversor);

taza.addEventListener('click', () => {
    const temp = monedaUno.value
    monedaUno.value = monedaDos.value
    monedaDos.value = temp

    conversor();
})
conversor()


