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

window.addEventListener("mousemove", (e)=>{
  let xPos = window.screenX;
  let yPos = window.screenY;
  
})



// End of script 



