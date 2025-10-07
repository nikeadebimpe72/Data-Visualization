var leftPosition = 0;
var curOpacity = 1.0;
var start;
function animateBox(){
    if(typeof start == 'undefined')
        start = 0;    
        
    if(start==0){
        move = setInterval('moveBox()',100);    
        start = 1;        
    }
    else{
        clearInterval(move);
        start = 0;
        var obj = document.getElementById('animate');
        obj.style.left = "0px";
        obj.style.visibility = "hidden";
    }

}

function moveBox(){
    var obj = document.getElementById('animate');    

    obj.style.left = leftPosition + "px";
    obj.style.visibility = "visible";
    obj.style.opacity = curOpacity;

    leftPosition += 20;
    curOpacity -= 0.02;
    if (leftPosition >= 500) {        
        leftPosition = 0;
        obj.style.visibility = "hidden";
        curOpacity = 1;
    }    
}