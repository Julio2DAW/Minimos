'use strict'

//No cambies esta línea o el test no funcionará
window.addEventListener('load', iniciar)

/**
  Función que se llamará al cargar la página.
**/
function iniciar() {
  //Ejercicio 1

  /*
  //Apartado a: cambiar el valor del campo
  document.getElementById('iEj1').addEventListener('change', function registrar(){
    this.value = 1
  })

  //Apartado b: poner el foco en el campo de texto
  document.getElementById('iEj1').addEventListener('focus', function registrar(){
    this.value = 2
  })

  //Apartado c: pasar el ratón sobre en el campo de texto
  document.getElementById('iEj1').addEventListener('mouseover', function registrar(){
    this.value = 3
  })

  //Apartado d: hacer click en el campo de texto
  document.getElementById('iEj1').addEventListener('click', function registrar(){
    this.value = 4
  })
  */

  let id = document.getElementById('iEj1')

  id.onchange = () => {acto(1)}
  id.onfocus = () => {acto(2)}
  id.onmouseover = () => {acto(3)}
  id.onclick = () => {acto(4)}

  let acto = (a) => {
    switch (a) {
      case 1:
        registrar()
        console.log('acto 1')
        break;
      case 2:
        registrar()
        console.log('acto 2')
        break;
      case 3:
        registrar()
        console.log('acto 3')
        break;
      case 4:
        registrar()
        console.log('acto 4')
        break;
    }
  }

  //Ejercicio 2

  //Aparta 1: pattern="^[A-Z]{3,5}$"

  //Apartado 2:
  document.forms[0].addEventListener('submit', () => {
    enviar.preventDefault()

    let select = document.getElementById('sLista')
    if(select.value == ''){
      alert('Campo en blanco')
      return
    }else{
      alert('Correcto')
      enviar.submit()
      return
    }
  })

  //Apartado 3:
  document.getElementById('iF1').addEventListener('focusout', () => {
    let actual = object.now()
    let fecha = new Date(actual)
    fecha = fecha.toISOString().slice(0, 10)

    let date = document.getElementById('iF1').value.split('-')
    let anio = parseInt(date[0])

    if(anio != 2021) {
      iF1.value = fecha
    }
  })
  
  document.getElementById('iF2').addEventListener('focusout', () => {
    let actual = object.now()
    let fecha = new Date(actual)
    fecha = fecha.toISOString().slice(0, 10)

    let date = document.getElementById('iF2').value.split('-')
    let anio = parseInt(date[0])

    if(anio != 2021) {
      iF2.value = fecha
    }
  })

  //Ejercicio 3
  gestionarCookie()
}

function gestionarCookie() {
  if (document.cookie.includes('cookie1')){
    let cambio = document.cookie.replace(/=/g,' ')
    let cookies = cambio.split(' ')
    let posicion = cookies.indexOf('cookie1')
    let resultado = cookies[posicion] + `=${cookies[posicion +1]}`
    console.log(resultado)
    return resultado
  }else{
    document.cookie = 'Valor1'
  }
}
