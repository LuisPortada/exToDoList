import "./style.css";

const divClases = [
  "container",
  "search",
  "li-container",
  "empty",
  "task-count",
];

const divs = document.querySelectorAll("div");
divs.forEach((div, index) => {
  div.classList.add(divClases[index]);
});

const botonMas = document.getElementsByTagName("button")[0];
botonMas.classList.add("btn-add");

const createLi = (textoIntroducido) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const botonX = document.createElement("button");
  botonX.classList.add("btn-delete");
  botonX.textContent = "x";

  span.textContent = textoIntroducido;

  p.appendChild(span);
  li.append(p, botonX);

  return li;
};

const ul = document.querySelector("ul");
const inputContent = document.querySelector("input");
let count = 0;

botonMas.addEventListener("click", (event) => {
  event.preventDefault();
  const introducido = inputContent.value;

  if (introducido != "") {
    count += 1;
    const newLi = createLi(introducido);
    ul.appendChild(newLi);
    inputContent.value = "";
    contador();
  }

  comprobarTask(count);
});

const contador = () => {
  const allSpans = document.querySelectorAll("span");
  const lastSpan = allSpans[allSpans.length - 1];
  lastSpan.textContent = count;
};

const comprobarTask = (count) => {
  if (count > 0) {
    const allP = document.querySelectorAll("p");
    const lastP = allP[allP.length - 1];
    lastP.textContent = "";
  }
};

