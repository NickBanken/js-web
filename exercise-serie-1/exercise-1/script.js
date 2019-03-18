//Check to see if script is linked properly.
console.log("This script is linked properly yeah boy!")


//Write your JS code here...

document.getElementById("blue").onclick = function(){
    this.style.backgroundColor ="blue";
    document.getElementById("square").style.backgroundColor = "blue";
};

document.getElementById("red").onclick = function(){
    this.style.backgroundColor ="red";
    document.getElementById("square").style.backgroundColor = "red";
};

document.getElementById("green").onclick = function(){
    this.style.backgroundColor ="green";
    document.getElementById("square").style.backgroundColor = "green";
};
