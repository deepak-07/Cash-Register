var cash = document.querySelector("#amt-paid");
var bill = document.querySelector("#bill-amt");
var calculate = document.querySelector("#btn");
var output = document.querySelector(".output");
var nofnotes = document.getElementsByClassName("noOfNotes");

var noteDb = ['2000', '500', '200', '100', '50', '20', '10', '5', '2', '1'];

var cashamount;
var billamount;
var totalchange;
//getting value of input
cash.addEventListener("change", () => {
    cashamount = cash.value;
})

bill.addEventListener("change", () => {
    billamount = bill.value;
})

totalchange = bill - cashamount;

function clickHandler() {
    if (totalchange < 0) {
        alert("You Have to pay"+ mod(totalchange) +"More !!" );
    } else if (cashamount === billamount) {
        alert("Thanku !! You Have Paid Right Amount !");
    } else if (totalchange > 0) {
        output.innerHTML = totalchange;
        for (i = 0; i <= noteDb.length; i++) {
            if (totalchange >= noteDb[i]) {
                var notes = Math.floor(totalchange / noteDb[i])
                nofnotes[i].innerHTML = notes;
                console.log(notes);
                totalchange = totalchange % noteDb[i];
            }
        }

    }
}

calculate.addEventListener("click", clickHandler);