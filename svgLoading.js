const svgLoading = document.getElementById("svgLoading");

svgLoading.setAttribute("width", 40);
svgLoading.setAttribute("height", 100);

function chargeLevel() {
  // // квадрат
  const batCharLev = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  batCharLev.setAttribute("x", 0);
  batCharLev.setAttribute("y", batLiv);
  batCharLev.setAttribute("width", 40);
  batCharLev.setAttribute("height", 100 - batLiv);
  batCharLev.setAttribute("rx", 4);
  batCharLev.setAttribute("fill", getColor(batLiv));
  svgLoading.appendChild(batCharLev);
}

function batteryCase() {
  const batCas = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  batCas.setAttribute("points", "10,6 1,6 1,99 39,99 39,6 30,6 30,1 10,1");
  batCas.setAttribute("stroke", "#00bcd4");
  batCas.setAttribute("stroke-width", "1"); // Толщина линии
  batCas.setAttribute("rx", 4);
  batCas.setAttribute("fill", "none");
  svgLoading.appendChild(batCas);
}

function chargePercentage() {
  // текст
  const batCharPerc = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  batCharPerc.setAttribute("x", 100 - batLiv > 9 ? "10" : "15");
  batCharPerc.setAttribute("y", 55);
  batCharPerc.textContent = 100 - batLiv;
  batCharPerc.style.textShadow = "0 0 4px #fff";
  batCharPerc.setAttribute("font-size", "19px");
  batCharPerc.setAttribute("font-weight", "bold");
  batCharPerc.setAttribute("fill", "#000"); // Цвет текста
  svgLoading.appendChild(batCharPerc);
}

let batLiv = 100;

// Функция для получения цвета на основе значения переменной (от 0 до 100)
function getColor(value) {
  value = 100 - value;
  const red = value >= 50 ? Math.floor(255 - (value - 50) * 5.1) : 255;
  const green = value <= 50 ? Math.floor(value * 5.1) : 255;
  const blue = 0;
  return `rgb(${red}, ${green}, ${blue})`;
}

setInterval(() => {
  batLiv--;
  svgLoading.innerHTML = "";
  if (batLiv === 0) {
    batLiv = 100;
  }
  chargeLevel();
  batteryCase();
  chargePercentage();
}, 50);
batteryCase();
chargePercentage();
