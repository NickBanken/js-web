//Check to see if script is linked properly.
console.log("This script is linked properly! nope")


//Write your JS code here...

let name = document.getElementById('input1');
let power = document.getElementById('input2');
let moti = document.getElementById('input3');
let plan = document.getElementById('input4');


function reset(){
    name.value = ("");
    power.value = ("");
    moti.value = ("");
    plan.value = ("");
}

function submit(){
    if(name.value,power.value,moti.value,plan.value === ""){ 
        alert("please fill in all forms...")
    }else{
        let elem1 = document.getElementById('first1');
        let elem2 = document.getElementById('first2');
        let elem3 = document.getElementById('second')
    
    
        elem1.style.display = 'none';
        elem2.style.display = 'none';
        elem3.style.display = 'block';

        let paragraph = document.getElementById("header");

        paragraph.textContent += "Your name is: " + name.value + ". Your power is " + power.value + ". " + moti.value + " is your motivation " + "plan: " + plan.value ;
    
        return;
    }
    

}