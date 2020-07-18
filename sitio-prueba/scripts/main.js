function multiplica(num1, num2){
    const resultado = num1 * num2;
    return resultado;
}

const resultMult = multiplica(88, 3);
console.log(resultMult);

/*document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
    console.log("se activó el evento")
} */

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/echadas.jpg') {
      miImage.setAttribute('src','images/ggg.jpeg');
    } else {
      miImage.setAttribute('src', 'images/echadas.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h3');

function estaleceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  if(!miNombre){
    estaleceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Comprar ropita barata es genial,'+ miNombre;
  }
}
if(!localStorage.getItem('nombre')) {
  estaleceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Comprar ropita barata es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estaleceNombreUsuario();
}