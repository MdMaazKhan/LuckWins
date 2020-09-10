
var p1=document.querySelector("#point1");
var p2=document.querySelector("#point2");
var random=Math.floor(Math.random()*6)+1;
var x=0,y=0;
var score1=document.querySelector("#p1");
var score2=document.querySelector("#p2");
scoreOne=0;
scoreTwo=0;
var div1=document.querySelector("#player1");
var div2=document.querySelector("#player2");

var but1=document.querySelector("#click1");
var but2=document.querySelector("#click2");
var a,t1=0,t2=0;
but1.classList.remove("dis");
but2.classList.remove("dis");
var x1=0,x2=0;
p1.classList.remove("last");
p2.classList.remove("last");

document.querySelector("#click1").addEventListener("click",
  function(){
     but2.classList.add("dis");
    
     t1++; 
    div2.classList.remove("div");  
   div1.classList.add("div");
 random=Math.floor(Math.random()*10)+1;
    p1.textContent=random;
    if(random%2==0){
        
        scoreOne+=random;
        score1.textContent=scoreOne;
        
    }
    if(t1==6)
    {    but2.classList.remove("dis"); 
        x1=1;
         div1.classList.remove("div");
         div2.classList.add("div");
        // if(text != ""){save();}
        but1.classList.add("dis");
        t1=0;
     }
    if(scoreOne>=50)
    {
        
       div1.textContent="WINNER!"; 
        div2.textContent="LOOSER!";
        
        but1.classList.add("dis");
     
        p1.classList.add("last");
        p2.classList.add("last");
    }
   
    
    
})
// p2.textContent=random;
document.querySelector("#click2").addEventListener("click",
  function(){
      but1.classList.add("dis");
       t2++;
    
    div1.classList.remove("div");
    div2.classList.add("div");
     random=Math.floor(Math.random()*10)+1;
     p2.textContent=random;
    if(random%2==0){
        
        scoreTwo+=random;
        score2.textContent=scoreTwo;
        
    }
    if(t2==6)
    {    
         but1.classList.remove("dis");
        x2=1;
         div2.classList.remove("div");
         div1.classList.add("div");
        // if(text != ""){save();}
        but2.classList.add("dis");
        t2=0;
        
    }
    if(scoreTwo>=50)
    {
        
       div2.textContent="WINNER!"; 
        div1.textContent="LOOSER!";
        but2.classList.add("dis");
         p2.classList.add("last");
        p1.classList.add("last");
    }
    
    
    
    
})










