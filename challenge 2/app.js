const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")
const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopiar.addEventListener('click', copiarTexto);
  });

function encriptarTexto(e) {
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;
}
    if(texto.match(soloLetras)!=null){
      let palabras = texto.split(' ');
      let nuevasPalabras = [];
    }
      for (let palabra of palabras) {
        palabra = palabra.replaceAll('e','enter');
        palabra = palabra.replaceAll('i','imes');
        palabra = palabra.replaceAll('a','ai');
        palabra = palabra.replaceAll('o','ober');
        palabra = palabra.replaceAll('u','ufat');      
        
        nuevasPalabras.push(palabra);    
      }