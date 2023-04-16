const grid = document.querySelector(".container");

function createDivs(num) {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
}
createDivs();

document.addEventListener("mouseenter");
