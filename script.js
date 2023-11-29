
window.addEventListener('scroll', function() {
  const header = document.querySelector('.imagen');
  const scrollPosition = window.scrollY;

  // Ajusta la opacidad del encabezado a medida que te desplazas hacia abajo
  header.style.opacity = 1 - (scrollPosition / 400); // Cambia 400 según tu preferencia
});

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


imageElements.forEach((imageElement, index) => {
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
    info_provincia=imageElement.getAttribute('id');
    localStorage.setItem('imagenSeleccionada', index);
  });
});


//*********mostrar contenido segun categoria */
// Función para ocultar el contenido
function mostrarContenido(idContenido) {
  // Ocultar el div de navegacion_inicio
  const navegacionInicio = document.querySelector('.navegacion_inicio');

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


/*carrusel*/ 
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//scroll suave
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;

  function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
  }

  window.addEventListener('wheel', function (event) {
      if (event.deltaY > 0) {
          currentSectionIndex++;
      } else {
          currentSectionIndex--;
      }

      if (currentSectionIndex < 0) {
          currentSectionIndex = 0;
      } else if (currentSectionIndex >= sections.length) {
          currentSectionIndex = sections.length - 1;
      }

      scrollToSection(currentSectionIndex);
  });
});

//Escuhcar los atributos de cada provincia
const Atributos = document.querySelectorAll('div.cultura, div.danza, div.zona_turistica');

Atributos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    const galeria = document.querySelector('.contenido_mapa');
    galeria.style.display = 'none';

    const imagenSeleccionada = localStorage.getItem('imagenSeleccionada');

    if (elemento.className === 'zona_turistica') {
      const divTurismo = document.querySelector(`.turismo_${imageElements[imagenSeleccionada].alt.toLowerCase()}`);
      // Ocultar todos los divs de turismo antes de mostrar el específico
      document.querySelectorAll('[class^="turismo_"]').forEach((div) => {
        div.style.display = 'none';
      });
      divTurismo.style.display = 'block';
    }
    // Demas casos
    else if (elemento.className === 'danza'){
      const divDanza = document.querySelector(`.danza_${imageElements[imagenSeleccionada].alt.toLowerCase()}`);
    
      document.querySelectorAll('[class^="danza_"').forEach((div)=>{
        div.style.display='none';
      })
      divDanza.style.display='block';
    }
    
    else if (elemento.className === 'cultura'){
      const divDanza = document.querySelector(`.cultura_${imageElements[imagenSeleccionada].alt.toLowerCase()}`);
    
      document.querySelectorAll('[class^="cultura_"').forEach((div)=>{
        div.style.display='none';
      })
      divDanza.style.display='block';
    }

  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide22');
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000); // Cambia a la siguiente diapositiva cada 5 segundos (ajusta según sea necesario)
});

//redireccionar a los enlaces
document.getElementById("emailIcon").addEventListener("click", function() {
  window.location.href = "mailto:correo@empresa.com";
});

document.getElementById("facebookIcon").addEventListener("click", function() {
  window.location.href = "https://www.facebook.com/TradicionCultura22";
});

//Scrooll automatico 
function scrollToDiv(divId) {
  const targetDiv = document.getElementById(divId);
  targetDiv.scrollIntoView({ behavior: 'smooth' });

  // Cambiar la dirección del ícono
  const icono = document.querySelector(`#${divId} .iconoFlecha`);
  icono.src = (divId === 'section_two') ? 'iconos/MdiChevronUp.svg' : 'iconos/MdiChevronDown.svg';
}
