const grid = document.querySelector(".container");

/**
 * Create 16 by 16 grid
 */
function createDivs() {
  const input = prompt("Select a grid size 1 to 99");
  const total = input * input;
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
  for (i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    console.log(typeof div);
    div.addEventListener("mouseenter", () => {
      addClass(div);
    });
    grid.appendChild(div);
  }
}
createDivs();

/**
 * Adds hover class to grid boxes
 * @param {object} el html element
 */
function addClass(el) {
  el.classList.add("hover");
}
