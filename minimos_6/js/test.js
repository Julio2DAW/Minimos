/**
 *   Este fichero prueba el código.
 *   @author Miguel Jaque <mjaque@migueljaque.com>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 */

window.onload = iniciar

function iniciar() {
    comprobarE11()
    cambiarE12()
    buscarE13()
    cambiarE14()

    let div31 = document.getElementById('div31')
    div31.onclick = function () {
        this.innerHTML = 'CLICK'
    }

    div31.onmouseover = function () {
        this.innerHTML = 'MOUSEOVER'
    }

    div31.ondblclick = function () {
        this.innerHTML = 'DOUBLECLICK'
    }

    div31.onmouseout = function () {
        this.innerHTML = 'MOUSEOUT'
    }

}


//Ejercicio 1

//Apartado 1: devuelve el valor del atributo width del campo de texto.
function comprobarE11() {
    let campo = document.getElementById('iEj11').getAttribute('width')
    console.log(campo)
    return campo
}

//Apartado 2: establece la anchura del campo de texto a 37.
function cambiarE12() {
    let campo = document.getElementById('iEj12').style.width = '37px'
    console.log(campo)
    return campo
}

//Apartado 3: devuelve el value del tercer campo numérico.
function buscarE13() {
    let campo = document.getElementsByTagName('input')[4].value
    console.log(campo)
    return campo
}

//Apartado 4: establece el color de fondo del div a rojo.
function cambiarE14() {
    let campo = document.getElementById('div14').style.backgroundColor = 'red'
}


//Ejercicio 2
function crearSelect() {
    let div2 = document.getElementById('div21')
    let salto = document.createElement('br')
    let opcion = document.createElement('option')
    div2.appendChild(salto)

    let selec = div2.appendChild(document.createElement('select'))
    for (let i = 1; i < 3; i++) {
        selec[i] = selec.appendChild(opcion)
        for (let j = 0; j < selec.length; j++) {
            selec[j].value = j

        }
    }

    selec[0].innerHTML = 'JavaScript'
    selec[1].innerHTML = 'ECMA2'
}

function crearP() {
    let div = document.getElementById('div21')
    let parrafo = document.createElement('p')
    parrafo.classList.add('bonito')
    parrafo.innerHTML = 'Brendan Eich creó JavaScript'
    div.insertBefore(parrafo, div.getElementsByTagName('select')[0])
}

class Controlador {

    constructor() {
        
        this.vista = new Vista()
        this.modelo = new Modelo()
        this.cambiar()
    }

    cambiar() {
        return this.vista.mostrarDatos(this.modelo.getDatos())
    }

}

class Vista {
    constructor() {

    }
    
    mostrarDatos(texto) {
        let div = document.getElementById('div41')
        div.innerHTML = texto // o `${div.textContent} ${texto}` //no elimina el texto existente

    }
}

class Modelo {

    constructor() {
        this.datos = 'MVC es un patrón de diseño'
    }
    
    getDatos() {
        return this.datos
    }
}