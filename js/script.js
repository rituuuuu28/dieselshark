const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

const tabs = document.querySelectorAll(".tab-btn");
const galleries = document.querySelectorAll(".gallery");

function showGallery(id){

galleries.forEach(g=>{

g.classList.remove("active-gallery");

});

tabs.forEach(t=>{

t.classList.remove("active");

});

document.getElementById(id).classList.add("active-gallery");

event.target.classList.add("active");

}

const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

images.forEach(img=>{

img.onclick=function(){

lightbox.style.display="flex";

lightboxImg.src=this.src;

}

});

document.getElementById("close").onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";
});
}

}
