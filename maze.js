window.onload = function() {
firstBoundary();

    var start = document.getElementById("start");
    start.addEventListener("click" , function(){
        var status = document.getElementById("status");
        status.innerHTML="Move your mouse over the \"S\" to begin.";
        
        var allB = document.getElementsByClassName("boundary");
        for (var i = 0; i < allB.length; i++) {
        allB[i].setAttribute("class", "boundary")
        }
    }); 
    
end();

};

function firstBoundary() {

var firstB = document.getElementById("boundary1");

var allB = document.getElementsByClassName("boundary");

firstB.addEventListener("mouseover", function(){
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
    var status = document.getElementById("status");
    status.innerHTML="You Lose!";
}

function end(){
    
    var status = document.getElementById("status");

    var end = document.getElementById("end");
    end.addEventListener("mouseover" , function(){
        if (status != "1"){
            
            status.innerHTML="You Won!";
        }
    });
}   
