function showContent(id) {
  // Ocultar todos los contenidos
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => {
    content.classList.remove('show');
  });

  // Mostrar solo el contenido correspondiente al ID
  const contentToShow = document.getElementById(`content-${id}`);
  contentToShow.classList.add('show');
}

//zoom a las categorias
const categorias = document.querySelectorAll('.categoria');
categorias.forEach(categoria => {
  categoria.addEventListener('click', function (event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Agregar la clase "active" al enlace clicado
    categorias.forEach(c => c.classList.remove('active'));
    categoria.classList.add('active');
  });
});

//Informacion de cada provincia
const imageElements = document.querySelectorAll('.provincia');
const infoText = document.getElementById('titulo');
const parrafo = document.getElementById('informacion');
const displayedImage = document.getElementById("displayedImage");
const displayedImageDanza = document.getElementById("displayedImageDanza");
const displayedImageCaltura = document.getElementById("displayedImageCultura");

imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    imageElements.forEach((element) => {
      element.style.filter = "sepia(1)";
    });
    imageElement.style.filter = "brightness(0.5)";
    const provincia = imageElement.getAttribute('data-provincia');
    const altitud = imageElement.getAttribute('data-altitud');
    const capital= imageElement.getAttribute('data-capital');
    const distritos= imageElement.getAttribute('data-distritos');
    const foto = imageElement.getAttribute('data-foto');
    const fotodanza = imageElement.getAttribute('data-danza');
    const fototradicion = imageElement.getAttribute('data-tradicion');
    infoText.textContent = provincia;
    parrafo.innerHTML = `<span class="color-destacado">Altitud:</span> ${altitud}<br><span class="color-destacado">Capital:</span> ${capital}<br><span class="color-destacado">Distritos:</span> ${distritos}`;
    displayedImage.src = foto;
    displayedImageDanza.src = fotodanza;
    displayedImageCultura.src = fototradicion;
  });
});


//*********mostrar contenido segun categoria */
// Función para ocultar el contenido
function mostrarContenido(idContenido) {
  // Ocultar el div de navegacion_inicio
  const navegacionInicio = document.querySelector('.navegacion_inicio');
  const navTexto = document.getElementById('titulo_principal');

  navegacionInicio.style.display = 'none';
  // Ocultar todos los divs de contenido
  const divsContenido = document.querySelectorAll('.contenido');
  divsContenido.forEach((div) => {
      div.style.display = 'none';
  });

  

  // Mostrar solo el contenido de la categoría seleccionada
  const contenido = document.getElementById(idContenido);
  contenido.style.display = 'block';
}

$(document).ready(function() {
  $(".provincia").hover(function() {
    // Al hacer hover, quita la clase 'provincia-zoom' de todas las provincias
    $(".provincia").removeClass("provincia-zoom");
    // Agrega la clase 'provincia-zoom' solo a la provincia que se está haciendo zoom
    $(this).addClass("provincia-zoom");
  });
});

