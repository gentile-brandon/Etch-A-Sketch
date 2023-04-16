const grid = document.querySelector(".container");

/**
 * Create 16 by 16 grid
 */
function createDivs() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter", () => {
      addClass(div);
    });
    grid.appendChild(div);
  }
}
createDivs();

//function to add class to divs
function addClass(el) {
  el.classList.add("hover");
  //add class to div
}
