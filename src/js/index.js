/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  // Variables generan valores aleatorios
  let pintas = Math.round(Math.random() * 3);
  let num = Math.round(Math.random() * 13);
  let valpintas = 0;

  // Pinta de carta es corazon si pintas es 0
  if (pintas === 0) {
    valpintas === "&hearts;";
  }
  // Pinta de carta es pica si pintas es 1
  if (pintas === 1) {
    valpintas === "&spades;";
  }
  // Pinta de carta es trebol si pintas es 2
  if (pintas === 2) {
    valpintas === "&clubs;";
  }
  // Pinta de carta es diamante si pintas es 3
  if (pintas === 3) {
    valpintas === "&diams;";
  }
  //obtener el valor del ID y guardarlo en una variable
  htmlpinta = document.getElementById("");
  htmlnum = document.getElementById("");

  //imprimir el valor de la variable en el HTML
  htmlpinta.innerHTML = valpintas;
  htmlnum.innerHTML = num;
};
