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
const arrowBtn = document.querySelector(".arrowBtn");


window.addEventListener("load", (event) => {
    preloader.classList.add("active");
  });


//   scroll document start
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  arrowBtn.classList.add("activeArrowBtn");

  }
  
  
  else{
    arrowBtn.classList.remove("activeArrowBtn")
  }
}


// without reload request and response start 
function  loadContact(){
  // create new request start
  const xhr = new XMLHttpRequest ();
  // create new request end 

  // response  aarrives
  xhr.onload = function(){
    const contactContainer = document.querySelector("body");
    contactContainer.innerHTML = xhr.responseText;
  }
// prepaare request 

  xhr.open("GET", "contact.html");

  // send request 
  xhr.send();

}

// view blog without reload 
function blogCard(){
  const xhrblog = new XMLHttpRequest ();

   // response  aarrives
   xhrblog.onload = function(){
    const blogContainer = document.querySelector("body");
    blogContainer.innerHTML = xhrblog.responseText;
  }


  // prepaare request 

  xhrblog.open("GET", "view.html");

  // send request 
  xhrblog.send();
}

// without reload request and response end 


//   scroll document end

