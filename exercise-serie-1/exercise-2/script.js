//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let num1;
let num2;
let op;
let result = 0;

function calc(obj)
{
    
     num1 = parseFloat(document.getElementById("input1").value);
     num2 = parseFloat(document.getElementById("input2").value);

     op = obj;

     if(op === "+"){
        result = num1 + num2;
     }
     if(op === "-"){
        result = num1 - num2;
     }
     if(op === "x"){
        result= num1 * num2;
     }
     if(op === "/"){
        result = num1 / num2;
     }

    return document.getElementById('result').value = result;
}


