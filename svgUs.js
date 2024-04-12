const svgUs = document.getElementById("svgUs");

svgUs.setAttribute("width", 400);
svgUs.setAttribute("height", 100);

// квадрат
const rectB = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rectB.setAttribute("x", 10);
rectB.setAttribute("y", 10);
rectB.setAttribute("width", 20);
rectB.setAttribute("height", 20);
rectB.setAttribute("rx", 6);
rectB.setAttribute("fill", "#000");
svgUs.appendChild(rectB);

// квадрат
const rectG = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rectG.setAttribute("x", 40);
rectG.setAttribute("y", 10);
rectG.setAttribute("width", 20);
rectG.setAttribute("height", 20);
rectG.setAttribute("fill", "#00ff00");
svgUs.appendChild(rectG);

// круг
const circB = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circB.setAttribute("cx", 20);
circB.setAttribute("cy", 45);
circB.setAttribute("r", 10);
circB.setAttribute("fill", "#0000ff");
svgUs.appendChild(circB);

// круг
const circR = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circR.setAttribute("cx", 50);
circR.setAttribute("cy", 45);
circR.setAttribute("r", 10);
circR.setAttribute("fill", "#ff0000");
svgUs.appendChild(circR);

// элипс
const ellipse1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse"
);
ellipse1.setAttribute("cx", 20);
ellipse1.setAttribute("cy", 75);
ellipse1.setAttribute("rx", 15);
ellipse1.setAttribute("ry", 10);
ellipse1.setAttribute("fill", "gold");
svgUs.appendChild(ellipse1);

// элипс
const ellipse2 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse"
);
ellipse2.setAttribute("cx", 50);
ellipse2.setAttribute("cy", 75);
ellipse2.setAttribute("rx", 10);
ellipse2.setAttribute("ry", 15);
ellipse2.setAttribute("fill", "#880055");
svgUs.appendChild(ellipse2);

// полигон
const polygon3 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon"
);
polygon3.setAttribute("points", "10,100 30,100 20,120");
polygon3.setAttribute("fill", "#880055");
svgUs.appendChild(polygon3);

// полигон
const polygon6 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon"
);
polygon6.setAttribute("points", "50,100 60,105 60,115 50,120 40,115 40,105");
polygon6.setAttribute("fill", "#880055");
svgUs.appendChild(polygon6);

// линия
const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", 20);
line.setAttribute("y1", 150);
line.setAttribute("x2", 50);
line.setAttribute("y2", 160);
line.setAttribute("stroke", "#880055");
line.setAttribute("stroke-width", "8"); // Толщина линии
line.setAttribute("stroke-linecap", "round"); // Скругление концов линии
svgUs.appendChild(line);

// линия изгиб
const polyline = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polyline"
);
polyline.setAttribute("points", "10,190 30,200 60,190 ");
polyline.setAttribute("stroke", "#880055");
polyline.setAttribute("stroke-width", "4"); // Толщина линии
polyline.setAttribute("fill", "none");
// polyline.setAttribute("stroke-linecap", "round"); // Скругление концов линии
svgUs.appendChild(polyline);

// Создание кривой Безье
const BezierCurve = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
BezierCurve.setAttribute("d", "M 20 250 Q 50 230 80 250"); // Задание команды для кривой Безье
// M 20 250 - начало
// Q 50 230 80 250 -  управляющую точку и конечную точку кривой
BezierCurve.setAttribute("fill", "none");
BezierCurve.setAttribute("stroke", "#880055");
BezierCurve.setAttribute("stroke-width", "3");
svgUs.appendChild(BezierCurve);

const zigzag = document.createElementNS("http://www.w3.org/2000/svg", "path");
zigzag.setAttribute(
  "d",
  "M 20 270 Q 30 280 40 270 T 60 270 Q 70 280 80 270 T 100 270"
);
// T 100 270 - плаввность
zigzag.setAttribute("stroke", "#880055");
zigzag.setAttribute("stroke-width", "5");
zigzag.setAttribute("fill", "none");
svgUs.appendChild(zigzag);

// текст
const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", 100);
text.setAttribute("y", 20);
text.textContent = "Пример текста";
text.setAttribute("font-size", "19px");
text.setAttribute("fill", "#000"); // Цвет текста
svgUs.appendChild(text);

// текст по линии
const zigzagText = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
zigzagText.setAttribute(
  "d",
  "M 120 270 Q 130 280 140 270 T 160 270 Q 170 280 180 270 T 200 270"
);
zigzagText.setAttribute("stroke", "inherit"); // прозрачная линия
zigzagText.setAttribute("stroke-width", "1");
zigzagText.setAttribute("fill", "none");
zigzagText.setAttribute("id", "lineText");
svgUs.appendChild(zigzagText);

// Создаем элемент <text> для текста
const textZ = document.createElementNS("http://www.w3.org/2000/svg", "text");
textZ.setAttribute("font-size", "10px");
textZ.setAttribute("fill", "#000"); // Цвет текста
svgUs.appendChild(textZ);

// Создаем элемент <textPath> и задаем ссылку на путь линии
const textPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "textPath"
);
textPath.setAttribute("href", "#lineText"); // Ссылка на путь линии

// Устанавливаем начальное смещение по оси Y
textPath.setAttribute("startOffset", "5"); // Начало текста с небольшого смещения от начала пути

// Устанавливаем текст
textPath.textContent = "текст по линии 🥲 !";

// Добавляем <textPath> к элементу <text>
textZ.appendChild(textPath);

// линия изгиб
const polylinePunct = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polyline"
);
polylinePunct.setAttribute("points", "110,190 130,200 160,190 ");
polylinePunct.setAttribute("stroke", "#880055");
polylinePunct.setAttribute("stroke-width", "4");
polylinePunct.setAttribute("stroke-dasharray", "6, 10"); // Толщина линии
polylinePunct.setAttribute("stroke-dashoffset", "4"); // Пример смещения пунктира
polylinePunct.setAttribute("fill", "none");
polylinePunct.setAttribute("stroke-linecap", "round"); // Скругление концов линии
svgUs.appendChild(polylinePunct);

//todo  -         svgUs.innerHTML = ""; // очистка svg
