import {
  countCharacters,
  countCharactersWithoutSpace,
  countWords,
  countNumbers,
  sumNumbers,
  calculateAverageWordLength
} from './analyzer.js';
//declaramos las variables que vamos a utilizar con const ya que van a ser constantes, es importante que esten al principio por que asi definimos que son las variables para todo el archivo
const words = document.getElementById('words');
const characters = document.getElementById('characters');
const characterSwithoutSpace= document.getElementById('characterSwithoutSpace');
const numbers = document.getElementById('numbers');
const sumNumbers = document.getElementById('sumNumbers');
const averageLength = document.getElementById('averageLength')
const textarea = document.getElementById('userInput');
const resetButton = document.getElementById('resetButton')

// Evento de actualización de métricas
textarea.addEventListener('input', updateMetrics);

// Función para actualizar métricas
function updateMetrics() {
  const text = textarea.value;

  // Contar caracteres incluyendo espacios
  const charCount = text.length;
  characters.textContent = charCount;

  // Contar caracteres sin espacios
  const charCountWithoutSpace = text.replace(/\s/g, '').length;
  characterSwithoutSpace.textContent = charCountWithoutSpace;

  // Contar palabras
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  words.textContent = wordCount;

  // Contar números
  const numberMatches = text.match(/\d+/g) || [];
  const numberCount = numberMatches.length;
  numbers.textContent = numberCount;

  // Sumar números
  const sum = numberMatches.reduce((total, num) => total + Number(num), 0);
  sumNumbers.textContent = sum;

  // Calcular promedio de longitud de palabras
  const wordLengths = text.trim().split(/\s+/).filter(Boolean).map(word => word.length);
  const averageWordLength = wordLengths.length > 0 ? (wordLengths.reduce((total, length) => total + length, 0) / wordLengths.length) : 0;
  averageLength.textContent = averageWordLength.toFixed(2);
}

// Evento para limpiar métricas
resetButton.addEventListener('click', resetMetrics);

// Función para limpiar métricas
function resetMetrics() {
  textarea.value = '';
  characters.textContent = '0';
  characterSwithoutSpace.textContent = '0';
  words.textContent = '0';
  numbers.textContent = '0';
  sumNumbers.textContent = '0';
  averageLength.textContent = '0';
}
//holaaaaa nueva subida de informacion a github 
