document.addEventListener("DOMContentLoaded", () => {
    const displejVstup = document.getElementById("calculator-input");
    const displejVystup = document.getElementById("calculator-output");
    const tlacitka = document.querySelectorAll(".calculator-buttons button");
    const historie = document.getElementById("history-display");
    const vymazatHistorii = document.getElementById("clear-history-btn");
  
    let vyraz = "";
  
    function pridejDoVyrazu(hodnota) {

      if (hodnota === "^") hodnota = "**";
      vyraz += hodnota;
      displejVstup.textContent = vyraz;
    }
  
    function smazatZnak() {
      vyraz = vyraz.slice(0, -1);


      displejVstup.textContent = vyraz || "0";
    }

  
    function smazatVse() {
      vyraz = "";
      displejVstup.textContent = "0";
      displejVystup.textContent = "0";
    }
  
    function spocitejVyraz() {
      try {
        const vysledek = Function('"use strict";return (' + vyraz + ')')();
        displejVystup.textContent = vysledek;
        pridejDoHistorie(vyraz, vysledek);
        vyraz = vysledek.toString();
      } catch {
        displejVystup.textContent = "Chyba";
      }
    }

  
    function pridejDoHistorie(vstup, vystup) {
      const zaznam = document.createElement("div");
      zaznam.textContent = `${vstup} = ${vystup}`;
      historie.prepend(zaznam);
    }

  

    tlacitka.forEach(tlacitko => {
      const hodnota = tlacitko.value;
      if (!hodnota) return;
  
      tlacitko.addEventListener("click", () => {
        if (hodnota === "=") {

          spocitejVyraz();
          
        } else if (hodnota === "C") {
          smazatZnak();
        } else if (hodnota === "CE") {
          smazatVse();
        } else {
          pridejDoVyrazu(hodnota);
        }
      });
    });

    vymazatHistorii.addEventListener("click", () => {
      historie.innerHTML = "";
    });
  });
  