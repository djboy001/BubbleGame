var timer=60;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function makebubble(){
    var clutter="";
    for(var i=0; i<=159; i++){
        var rno=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble"><h2>${rno}</h2></div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
    var closetime=setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#timerdiv").innerHTML=timer;
            }
            else{
                document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
                clearInterval(closetime);
            }
            
        }, 1000)
}
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=Math.floor(hitrn); 
}
document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNum=Number(details.target.textContent);
    if(hitrn==clickedNum){
        increaseScore();
        getnewhit();
        makebubble();
    }
})
makebubble();
runtimer();
getnewhit();
