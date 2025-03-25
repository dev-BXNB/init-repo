let scrollMain = document.getElementById("scrollMe");



let topBtn = document.getElementById("top");

window.addEventListener("scroll", ()=>{
  let scrollDistance = window.scrollY;
  if(scrollDistance > 100){
    console.log(scrollDistance);
    topBtn.style.display = "block";
  }

  else if(scrollDistance < 100){
    topBtn.style.display = "none";
  }
});
