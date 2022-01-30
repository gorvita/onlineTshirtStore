

window.addEventListener("scroll", () => {    

const navbar = document.getElementById("header");    
navbar.classList.toggle("sticky", window.scrollY > 0);

});

const iconToggle = document.getElementById("icon-toggle");
const listItems = document.getElementById("list-items");
const homeinfo = document.getElementById("home-info");


//Adding click events to icon 

iconToggle.onclick = function () {   
  
   iconToggle.classList.toggle("active");    
   listItems.classList.toggle("active");    
   homeinfo.classList.toggle("display");
  
  }


//removing mobile 

const items = document.getElementsByClassName("items");

// loop over each item to remove the mobile view

for (let i = 0; i < items.length; i++) {    
  items[i].onclick = function () {        
    listItems.getElementsByClassName("active")[0].classList.remove("active");       
     this.classList.add("active");        
     iconToggle.classList.remove("active");       
      listItems.classList.remove("active");        
      homeinfo.classList.toggle("display");    
    
    }}