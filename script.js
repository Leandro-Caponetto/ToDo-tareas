// Define una lista de palabras para el juego
const palabras = ['hola', 'mundo', 'javascript', 'programacion', 'web', 'juego', 'html', 'css', 'jquery', 'react'];

let tiempoRestante;
let puntuacion;
let timer;
let palabraActual;

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start');
const palabra = document.getElementById('palabra')

// Inicializa el juego
function iniciarJuego() {
  tiempoRestante = 10;
  puntuacion = 0;
  timer = setInterval(actualizarTiempo, 1000);
  palabraActual = generarPalabra();
  mostrarPalabra();
  inputElement.focus();
  inputElement.addEventListener('input', verificarEntrada);
}

// Actualiza el tiempo restante y el tiempo límite para cada palabra
function actualizarTiempo() {
  tiempoRestante--;
  if (tiempoRestante === 0) {
    clearInterval(timer);
    gameOver();
  }
  mostrarTiempo();
}

// Genera una palabra aleatoria de la lista de palabras
function generarPalabra() {
  const index = Math.floor(Math.random() * palabras.length);
  return palabras[index];
}

// Muestra la palabra actual en el elemento de la palabra
function mostrarPalabra() {
  wordElement.innerText = palabraActual;
  palabra.innerText = wordElement;
}
// Verifica si la entrada del usuario coincide con la palabra actual
function verificarEntrada() {
  if (inputElement.value.toLowerCase() === palabraActual.toLowerCase()) {
    puntuacion++;
    scoreElement.innerText = `Puntuación: ${puntuacion}`;
    tiempoRestante += 2;
    palabraActual = generarPalabra();
    inputElement.value = '';
   // Muestra la nueva palabra actual
    mostrarPalabra();
  }
}

// Muestra el tiempo restante en el elemento de la palabra
function mostrarTiempo() {
  wordElement.innerText = `Tiempo restante: ${tiempoRestante}s`;
}

// Termina el juego y muestra la puntuación final
function gameOver() {
  wordElement.innerText = `¡Juego terminado! Tu puntuación final es ${puntuacion}.`;
  inputElement.removeEventListener('input', verificarEntrada);
  inputElement.value = '';
  startButton.innerText = 'Volver a jugar';
  startButton.style.display = 'block';
  startButton.addEventListener('click', iniciarJuego);
}

// Agrega un evento de clic al botón de inicio para iniciar el juego
startButton.addEventListener('click', iniciarJuego);