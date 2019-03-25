//Check to see if script is linked properly.
console.log("This script is linked properly!")
let score = 0;
let cookie = document.getElementById('cookie');
let multiB = document.getElementById("multiply");
let counter = document.getElementById('counter');
let mouseDown = false

let scoreAdd = 1;
let multiMin = 50;

//Write your JS code here...

multiB.disabled = true;


 function clickCookie(){
     
  score = score + scoreAdd;

 
  counter.textContent = score;
  
  
  // multiply when
  if(score >= multiMin){
    multiB.classList.remove("disabled");
    multiB.disabled = false; }
 }


 function multiply(){
  multiB.disabled = true;
  score -= multiMin;
  multiMin = Math.floor(multiMin * 1.5);
  scoreAdd = scoreAdd *2;
  counter.textContent = score;
  multiB.classList.add("disabled"); 
  
 }