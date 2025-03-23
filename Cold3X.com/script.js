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

// Script for scroll animation

// const slides = document.querySelectorAll('.slide');

// window.addEventListener('scroll', checkBoxes);

// checkBoxes();

// function checkBoxes(){
//   const triggerBtn = window.innerHeight/5*4;

//   slides.forEach(slide => {
//     const slideTop = slide.getBoundingClientRect().top;

//     if(slideTop < triggerBtn){
//       slide.classList.add('slide');
//     }else{
//       slide.classList.remove('slide');
//     }
//   })
// }

