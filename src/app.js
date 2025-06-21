import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensions = [".com", ".net", ".us", ".io"];

  let combinaciones = "";

  pronouns.forEach(pron => {
    adjectives.forEach(adj => {
      nouns.forEach(noun => {
        extensions.forEach(ext => {
          combinaciones += `www.${pron}${adj}${noun}${ext}<br>`;
        });
      });
    });
  });

  document.getElementById("dominio").innerHTML = combinaciones;

};


