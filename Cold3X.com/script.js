// Script for vercel insights
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};
// End of script


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

// Script to scroll main on window scroll for pc 

let main = document.getElementById("scrollMe");

window.addEventListener("wheel", (e) => {
  main.scrollTop += e.deltaY;
});

// End of script 