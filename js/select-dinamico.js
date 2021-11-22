let $ciudad = document.getElementById('ciudad')
let $provincia = document.getElementById('provincia')
const opcionValores = ["Bs_As","Sta_Fe","Cordoba"]


const ciudades = [
    ['Moron', 'Ramos Mejia', 'San Justo', 'Ituzaingo'],
    ['Santa Fe 1', 'Santa Fe 2', 'Santa Fe 3', 'Santa Fe 4'],
    ['Cordoba 1', 'Cordoba 2', 'Cordoba 3', 'Cordoba 4']
  ]

function mostrarCiudades(arreglo, lugar) {
    let elementos = '<option selected disables>--Seleccione--</option>'

    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos
}

function validarProvincia(){
    let optionValor =$provincia.options[$provincia.selectedIndex].value;
    if(optionValor == opcionValores[0]){
        mostrarCiudades(ciudades[0], $ciudad);
    }
    if(optionValor == opcionValores[1]){
        mostrarCiudades(ciudades[1], $ciudad);
    }
    if(optionValor == opcionValores[2]){
        mostrarCiudades(ciudades[2], $ciudad);
    }
}
//mostrarCiudades(departamentos, $departemento)


$provincia.addEventListener('change', function(e) {
    validarProvincia();
})
