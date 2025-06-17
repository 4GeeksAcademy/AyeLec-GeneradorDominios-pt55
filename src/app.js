import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = [".com", ".net"];

  let combinaciones = "";

  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        ext.forEach(e => {
          combinaciones += `www.${p}${a}${n}${e}<br>`;
        });
      });
    });
  });

document.getElementById("dominio").innerHTML = combinaciones;

};