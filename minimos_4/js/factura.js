'use strcit'

/**
 * 
 * @class Factura crea instancias con un cliente, 
 * base imponible y tipoIVA con valores por defecto
 */
 export default class Factura {
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