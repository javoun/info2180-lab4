window.onload = function() {
firstBoundary();
        
        var allB = document.getElementsByClassName("boundary");
        for (var i = 0; i < allB.length; i++) {
        allB[i].setAttribute("class", "boundary")
        }

};

function firstBoundary() {

var wall = document.getElementById("boundary1");

var allB = document.getElementsByClassName("boundary");

wall.addEventListener("mouseover", function(){
   // topleft.style.borderBottomColor= "red";
   // topleft.style.borderRightColor= "red";
redBoundary();
});


allB[1].addEventListener("mouseover", function(){
    // topleft.style.borderBottomColor= "red";
   // topleft.style.borderRightColor= "red";
         redBoundary();
   
});

allB[2].addEventListener("mouseover", function(){
    // topleft.style.borderBottomColor= "red";
   // topleft.style.borderRightColor= "red";
        redBoundary();
});

allB[3].addEventListener("mouseover", function(){
    // topleft.style.borderBottomColor= "red";
   // topleft.style.borderRightColor= "red";
        redBoundary();
});

allB[4].addEventListener("mouseover", function(){
    // topleft.style.borderBottomColor= "red";
   // topleft.style.borderRightColor= "red";
    redBoundary();
});
};

function redBoundary() {
    
    var allB = document.getElementsByClassName("boundary");

    for (var i = 0; i < allB.length; i++) {
    allB[i].setAttribute("class", "boundary youlose");
    }
}




    
    



