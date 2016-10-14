window.onload=function(){
   var topleft=document.getElementById("boundary1");
   topleft.addEventListener("mouseover", function(){
      topleft.style.borderBottomColor= "red";
      topleft.style.borderRightColor= "red";
      //topleft.style.borderWidth="2px";
   });
    
};
