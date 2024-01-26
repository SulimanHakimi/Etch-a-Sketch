let color = "black";
document.addEventListener("DOMContentLoaded", function () {
  creatContainer(16);

  document.querySelector("#getSize").addEventListener("click", function () {
    let size = getSize();
    creatContainer(size);
  });
});
function rest(){
}
function creatContainer(size) {
  let container = document.querySelector(".container");
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;

  let numberOfDiv = size * size;

  for (let i = 0; i < numberOfDiv; i++) {
    let div = document.createElement("div");
    div.addEventListener("mousemove", colorGene);
    container.insertAdjacentElement("beforeend", div);
  }
}
function getSize() {
  return prompt("what would be the size of the container");
}
function colorGene() {
  if (color == "random") {
    this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
  } else {
    this.style.backgroundColor = "black";
  }
  i
}
function setColor(colorCh) {
  color = colorCh;
}

