// Script for back to top button

let scrollMain = document.getElementById("scrollMe");



let topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance > 100) {
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




function image1() {
  // image 1 Array

  let image = document.getElementById("image");

  let imageArr = ["assets/img/Project img/ecommerce website/1.JPG", "assets/img/Project img/ecommerce website/2.JPG", "assets/img/Project img/ecommerce website/3.JPG", "assets/img/Project img/ecommerce website/4.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image1()
    }
  }, 3000);

}

image1();

function image2(){
  // image2 Array

  let image = document.getElementById("image2");
  let imageArr = ["assets/img/Project img/logistics website/1.jpg", "assets/img/Project img/logistics website/2.JPG", "assets/img/Project img/logistics website/3.JPG", "assets/img/Project img/logistics website/4.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image2()
    }
  }, 3500);

}

image2();

function image3(){

  // image3 Array
  let image = document.getElementById("image3");
  let imageArr = ["assets/img/Project img/hotel website/1.jpg", "assets/img/Project img/hotel website/2.JPG", "assets/img/Project img/hotel website/3.JPG", "assets/img/Project img/hotel website/4.JPG", "assets/img/Project img/hotel website/5.JPG", "assets/img/Project img/hotel website/6.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image3()
    }
  }, 3250);

};

image3();

function image4(){

  // image3 Array
  let image = document.getElementById("image4");
  let imageArr = ["assets/img/Project img/gallery website/1.JPG", "assets/img/Project img/gallery website/2.JPG", "assets/img/Project img/gallery website/3.JPG", "assets/img/Project img/gallery website/4.JPG", "assets/img/Project img/gallery website/5.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image4()
    }
  }, 3200);

};

image4();

function image5(){

  // image3 Array
  let image = document.getElementById("image5");
  let imageArr = ["assets/img/Project img/church website/1.JPG", "assets/img/Project img/church website/2.JPG", "assets/img/Project img/church website/3.JPG", "assets/img/Project img/church website/4.JPG", "assets/img/Project img/church website/5.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image5()
    }
  }, 3300);

};

image5();

function image6(){

  // image3 Array
  let image = document.getElementById("image6");
  let imageArr = ["assets/img/Project img/food website/1.JPG", "assets/img/Project img/food website/2.JPG", "assets/img/Project img/food website/3.JPG", "assets/img/Project img/food website/4.JPG", "assets/img/Project img/food website/5.JPG"];

  let i = 0;

  let clock = setInterval(() => {
    image.src = imageArr[i];
    i++;
    if (i == imageArr.length) {
      clearInterval(clock);
      image6()
    }
  }, 3400);

};

image6();
