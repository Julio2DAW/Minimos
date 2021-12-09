'use strict'

/**
Suma dos números enteros.
@param {String} a Primer sumando.
@param {String} b Segundo sumando.
@return {Number} La suma de a y b.
**/
function sumar(a, b){
    let resultado = parseInt(a) + parseInt(b)
    return resultado
}

/**
Comprueba si el valor recibido es un número
@param {Object} a Valor a comprobar.
@return {Boolean} Indica si es un número válido.
**/
function comprobar(a){
    if(!isNaN(a)){
        return true
    }else{
        return false
    }
}

//Función multiplicar
function multiplicar(a, b){
    return a*b
}

/** Calcula la potencia de un número.
Esta función utiliza la función "multiplicar"
@param {Number} base Base de la potencia
@param {Number} exponente Número natural al que se elevará la base.
@result {Number} Resultado de elevar base a exponente.
**/
function elevar(base, exponente){
    let resultado = 1
    for(let i=0; i<exponente; i++){
        resultado = multiplicar(base, resultado)
    }
    return resultado
}

/** Genera un array con los 10 primeros números enteros
@result {Array} Array con los 10 primeros números enteros.
**/
function generarArray(){
    let array = []
    for(let i=0; i<10; i++){
        array[i] = i
    }
    return array
}

/** Genera un array bidimensional de números aleatorios enteros entre 1 y 100
@param {Number} filas Número de filas del array.
@param {Number} cols Número de columnas del array
@result {Array} Array bidimensional de números aleatorios
**/
function generarArrayBidimensionalAleatorio(filas, cols){
    let array2 = new Array(filas)
    for(let i=0; i<filas; i++){
        array2[i] = new Array(cols)
        for(let j=0; j<cols; j++){
            array2[i][j] = Math.round(Math.random() * (100-1)) + 1
        }
    }
    return array2
}

/** Suma los elementos de un array bidimensional numérico
@param {Array} matriz Array bidimensional numérico.
@return {Number} Suma de los elementos del array.
**/
function sumarArrayBidimensional(matriz){
    let suma = 0
    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++) {
            suma = suma + matriz[i][j]            
        }
    }
    return suma
}

//Clase Factura
/**
 * 
 * @class Factura crea instancias con un cliente, 
 * base imponible y tipoIVA con valores por defecto
 */
class Factura {
    /**
     * 
     * @param {String} cliente Nombre completo del cliente. Valor por defecto null
     * @param {Number} base Base imponible de la factura (por ejemplo 134.45). Valor por defecto 0.
     * @param {Number} tipoIVA % de IVA (por ejemplo, 21). Valor por defecto 21.
     */
    constructor(cliente = null, base = 0, tipoIVA = 21){
        this.cliente = cliente
        this.base = base
        this.tipoIVA = tipoIVA
    }

    /**
     * Devuelve el atributo cliente
     * @returns {String}
     */
    getCliente(){
        return this.cliente
    }

    /**
     * Modifica el atributo cliente
     * @param {String} cliente atributo de la instancia
     */
    setCliente(cliente){
        this.cliente = cliente
    }

    /**
     * Devuelve el atributo base
     * @returns {Number}
     */
    getBase(){
        return this.base
    }

    /**
     * Modifica el atributo base
     * @param {Number} base atributo de la instancia
     */
    setBase(base){
        this.base = base
    }

    /**
     * Devuelve el atributo tipoIVA
     * @returns {Number}
     */
    getTipoIVA(){
        return this.tipoIVA
    }

    /**
     * Modifcida el atributo tipoIVA
     * @param {Number} tipoIVA atributo de la instancia
     */
    setTipoIVA(tipoIVA){
        this.tipoIVA = tipoIVA
    }

    /**
     * Devuelve la variable total
     * @returns {Number}
     */
    getTotal(){
        let total = this.base + this.base * this.tipoIVA / 100
        console.log(total)
        return total
    }
}
