//Check to see if script is linked properly.
console.log("This script is linked properly!")
let score = 0;
let isAnim = false;
let cookie = document.getElementById('cookie');
let mouseDown = false

//Write your JS code here...



 function clickCookie(){
     
     score++;

     let counter = document.getElementById('counter');
     counter.textContent = score;
     
   /*   //retrieve cookie
   


    document.body.onmousedown = function() { 
      cookie.classList.remove("heartbeat-up")
      cookie.classList.add("bump-in")
      cookie.addEventListener("animationend", function() {
        cookie.classList.remove("bump-in")
        cookie.classList.add("heartbeat-down")
      })  
    } */
    
    /* document.body.onmouseup = function() {

     cookie.classList.remove("heartbeat-down")
    cookie.classList.add("bump-out")
    cookie.addEventListener("animationend", function() {
      cookie.classList.add("heartbeat-up")
    })  
      
      
    } */

  /*   // OnEach click, play this animation, but only when the animation finishes.
    cookie.addEventListener("click", function() {
        ;
     });
     cookie.addEventListener("animationend", function() {
       
     }) */
        
        /* cookie.classList.remove("bump");

        void cookie.offsetWidth;
        
        cookie.classList.add('bump');
        setTimeout('', 1000);
        isAnim = false; */
    
    

 }
