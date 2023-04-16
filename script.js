const grid = document.querySelector(".container");

/**
 * Create 16 by 16 grid
 */
function createDivs(num) {
  const total = num * num;
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
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
