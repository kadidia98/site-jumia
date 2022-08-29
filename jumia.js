let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* pied de page slide */
const arraw1 = document.querySelector(".arraw1");
const arraw2 = document.querySelector(".arraw2");
arraw1.disabled = true;

const slidefooter=()=>{
    const img1 = document.querySelectorAll('.footer1');
    const img2 = document.querySelectorAll('.footer2');
    
    for(let i = 0; i< img1.length; i++) {
        const slide1 = img1[i];
        const slide2 = img2[i];

        if(slide1.style.display == 'block'){
            slide1.style.display = 'none';
            slide2.style.display = 'block';
            arraw2.disabled = true;
            arraw1.disabled = false;
        }
        else{
            slide1.style.display = 'block';
            slide2.style.display = 'none';
            arraw1.disabled = true;
            arraw2.disabled = false;
        }
    }
}