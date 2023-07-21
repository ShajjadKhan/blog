// menubar start 

const menuBtn = document.querySelector(".menuContainer");
const menuBar = document.querySelector(".menuBar");
const btnContainer = document.querySelector(".btnContainer");
const closeBtn = document.querySelector(".closeBtn");

menuBtn.onclick = () =>{
    menuBar.classList.add('activeMenu');
    btnContainer.classList.add('activeBtn')
}
closeBtn.onclick = () =>{
    menuBar.classList.remove('activeMenu')
    btnContainer.classList.remove('activeBtn')
}


// menubar end



// loading effect js 


const preloader = document.querySelector(".preloader");

window.addEventListener("load", (event) => {
    preloader.classList.add("active");
  });
