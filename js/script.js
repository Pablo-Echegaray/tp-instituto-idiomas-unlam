let $buttons = document.querySelectorAll("button");
const $inputSearch = document.getElementById('search');
const $places = document.querySelectorAll('.place');
const d = document;
const $provincia = document.getElementById('provincia');
const $ciudad = document.getElementById('ciudad');
const ciudades = [
  ['Moron', 'Ramos Mejia', 'San Justo', 'Ituzaingo'],
  ['Santa Fe 1', 'Santa Fe 2', 'Santa Fe 3', 'Santa Fe 4'],
  ['Cordoba 1', 'Cordoba 2', 'Cordoba 3', 'Cordoba 4']
]

$buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let sede = button.id;
    switch (sede) {
      case "moron":
        location.href = "sede_moron.html";
        break;
      case "ramos":
        location.href = "sede_ramos.html";
        break;
      case "san-justo":
        location.href = "sede_sanJusto.html";
        break;
      case "ituz":
        location.href = "sede_ituzaingo.html";
        break;
    }
  })
);

$inputSearch.addEventListener("keyup", (e) => {
  if (e.key === "Escape") e.target.value = "";

  const $provincias = d.querySelectorAll('.provincia');
  for(let i = 0; i < $provincias.length; i++){
    $provincias[i].textContent.toLowerCase().includes(e.target.value)
    ? $places[i].classList.remove("filter")
      : $places[i].classList.add("filter")
  }
});
/*.filter{

    visibility: hidden;
    opacity: 0;
    order: 1;
} */

 
/*   $inputSearch.addEventListener("keyup", (e) => {
      if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll('.provincia').forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
  }); */



$provincia.addEventListener('change', (e)=>{
  let selectedOption = this.options[$provincia.selectedIndex];
  let opciones;
  switch(selectedOption.text){
    case 'Buenos Aires': 
      opciones = `
      <div>
         <option value="${ciudades[0][0]}">${ciudades[0][0]} </option>
         <option value="${ciudades[0][1]}">${ciudades[0][1]} </option>
         <option value="${ciudades[0][2]} ">${ciudades[0][2]} </option>
         <option value="${ciudades[0][3]} ">${ciudades[0][3]} </option>
         </div>
      `
      $ciudad.appendChild(opciones);
      break;
      case 'Cordoba':
        opciones = `
         <option value="${ciudades[1][0]} >${ciudades[1][0]} </option>
         <option value="${ciudades[1][1]}>${ciudades[1][1]} </option>
         <option value="${ciudades[1][2]}>${ciudades[1][2]} </option>
         <option value="${ciudades[1][3]}>${ciudades[1][3]} </option>
      `
      break;
      case 'Santa Fe':
        opciones = `
         <option value="${ciudades[2][0]}>${ciudades[2][0]} </option>
         <option value="${ciudades[2][1]}>${ciudades[2][1]} </option>
         <option value="${ciudades[2][2]}>${ciudades[2][2]} </option>
         <option value="${ciudades[2][3]}>${ciudades[2][3]} </option>
      `
      break;
  }

  console.log(selectedOption.value + ': ' + selectedOption.text);
})
        
    


