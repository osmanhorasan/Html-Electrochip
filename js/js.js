var menu = document.getElementById("menu");
var menuIsActive = false;
function menuOpenClose(){
    if(menuIsActive === false){
        menu.style.height ="100vh";
        menu.style.transition="1s height";
        menuIsActive=true;
    }
    else if (menuIsActive){
        menu.style.height ="";
        menu.style.transition="1s height";
        menuIsActive=false
    }
 }
 var scroll = document.getElementById("slider-img-box");
 var slider_img = document.getElementById("slider-img");
 let y=slider_img.clientWidth;

 function prev(){
     if(scroll.scrollLeft!=0){
     scroll.scrollLeft  -=y;
     }
   
 }
 function next(){
    if(scroll.scrollLeft < y * 3){        
        scroll.scrollLeft  +=y;
    }
}

/*setInterval(function () {
        if(scroll.scrollLeft!=0){
            scroll.scrollLeft  -=y;
            }
        else if(scroll.scrollLeft <= 0){
            scroll.scrollLeft = y*3;
        }   
},5000);*/

    
 