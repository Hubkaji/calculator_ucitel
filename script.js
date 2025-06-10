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
