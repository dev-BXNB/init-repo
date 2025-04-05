// Script for back to top button

let scrollMain = document.getElementById("scrollMe");



let topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance > 100) {
    console.log(scrollDistance);
    topBtn.style.display = "block";
  }

  else if (scrollDistance < 100) {
    topBtn.style.display = "none";
  }
});
// End of back to top button script

let main = document.getElementById('scrollMe');


window.addEventListener("wheel", (e) => {
  main.scrollBy(0, (e.deltaY * 2.5));
});

let mouseMove = document.getElementById("mouseMove");

window.addEventListener("mousemove", (e) => {
  let xPos = e.clientX; // Correct: Use clientX
  let yPos = e.clientY; // Correct: Use clientY

  // Adjust the position to center the element on the cursor
  // (Otherwise, the top-left corner will be at the cursor)
  const elementWidth = mouseMove.offsetWidth;
  const elementHeight = mouseMove.offsetHeight;
  const cursorX = xPos - elementWidth / 2;
  const cursorY = yPos - elementHeight / 2;

  mouseMove.style.left = `${cursorX}px`; // Use template literals and add "px"
  mouseMove.style.top = `${cursorY}px`; // Use template literals and add "px"
  mouseMove.style.position = "fixed";
  mouseMove.style.pointerEvents = "none";
});



// End of script 



