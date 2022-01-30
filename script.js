window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const iconToggle = document.getElementById("icon-toggle");
const listItems = document.getElementById("list-items");
const homeinfo = document.getElementById("home-info");
//Adding click events to icon menu
iconToggle.onclick = function () {
    iconToggle.classList.toggle("active");
    listItems.classList.toggle("active");
    homeinfo.classList.toggle("display");
}

//removing mobile view
const items = document.getElementsByClassName("items");

// loop over each item to remove the mobile view
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        listItems.getElementsByClassName("active")[0].classList.remove("active");
        this.classList.add("active");
        iconToggle.classList.remove("active");
        listItems.classList.remove("active");
        homeinfo.classList.toggle("display");
    }
}
 
 
 
 //select canvas
let canvas = new fabric.Canvas('tshirt-canvas');

function updateTshirtImage(imageURL){
    canvas.clear();
    fabric.Image.fromURL(imageURL, function(img) {                   
        img.scaleToHeight(320);
        img.scaleToWidth(200); 
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
    });
}


//updating the T-shirt color selected by the user
document.getElementsByClassName("blue")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'blue';
    
})

document.getElementsByClassName("red")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'red';
    
})
document.getElementsByClassName("yellow")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'yellow';
    
})
document.getElementsByClassName("pink")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'pink';
    
})
document.getElementsByClassName("white")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'white';
    
})
document.getElementsByClassName("black")[0].addEventListener("click", function() { 
    
    document.getElementById("tshirt-div").style.backgroundColor = 'black';
    
})

//update when the user picks a design
document.getElementById("tshirt-design").addEventListener("change", function() {
    //call the updateTshirtImage provided as first argument of the url
    updateTshirtImage(this.value);
}, false); 