var billAmt = document.querySelector("#bill-amt");
var nextBtn = document.querySelector(".btn-next");
var paidAmt = document.querySelector("#paid-amt");
var calcBtn = document.querySelector(".btn-submit");

var billSection = document.querySelector(".bill-section");

var notes = [2000 , 500 , 100 , 50 , 20 , 10 , 5 , 2 ,1];
var returnAmt = 0;
var noOfNotes = [0,0,0,0,0,0,0,0,0];

function calculateChange(amount){

    for(var i=0;i<9;i++){
        noOfNotes[i] = Math.floor(amount/notes[i]);
        console.log(noOfNotes[i]);
        amount = amount - noOfNotes[i]*notes[i];
        console.log(amount);
    }

    console.log(noOfNotes);
}


nextBtn.addEventListener("click",()=>{
    console.log("clicked");
    if(billAmt.value){
        billSection.style.display="block";
    }
    else{
        alert("Please enter Bill Amount !!!");
    }
});

calcBtn.addEventListener("click",()=>{

    document.getElementById("table").style.display = "none";
    returnAmt = paidAmt.value - billAmt.value;

    if(returnAmt==0){ 
    document.getElementById("returned-amt").innerText = "Wow!!! Exact Amount Paid";
    }
    else if(returnAmt<0){
        document.getElementById("returned-amt").innerText = "You Paid Less Amount, Pay the bill Dude";
    }
    else {
    
    calculateChange(returnAmt);
    document.getElementById("table").style.display = "block";
    document.getElementById("returned-amt").innerText = "Returned Amount : " + returnAmt;
   for(let i=0;i<9;i++)
    document.getElementById(notes[i].toString()).innerText =
        noOfNotes[i]  
    ;
    }
});