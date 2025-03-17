let dialog = document.getElementById("dialogBtn");

let closeDialog = document.getElementById("closeDialog");

closeDialog.onclick = function(){
  dialog.style.display = "none";
}

let scrollMain = document.getElementById("scrollMe");

scrollMain.addEventListener("scroll", ()=>{
  dialog.style.display = "none";
});

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