var cash = document.querySelector("#paid-input");
var bill = document.querySelector("#cost-input");
var btn = document.querySelector("#btn");
var mytable = document.querySelector("#table");
var otpt = document.querySelector("#output");
var change = document.querySelector("#changeAmount");
var resetBtn = document.querySelector("#resetBtn");
var notearray = ['2000', '500', '200', '100', '50', '20', '10', '5', '2', '1'];

var cashamount;
console.log(cashamount);
var billamount;
var totalchange;

btn.style.display = "none";
resetBtn.style.display = "none";
otpt.style.display = "none";

//getting value of input
cash.addEventListener("change", function() {
    cashamount = cash.value;

})

bill.addEventListener("change", function() {
    billamount = bill.value;
    btn.style.display = "block";
})

btn.addEventListener("click", calc);


//processing and output
function calc() {
    if (cashamount === undefined || billamount === undefined) {
        alert("Please enter the amount");
    } else if (cashamount < 0 || billamount < 0) {
        alert("Taking credit is not good");

    } else {
        var totalchange = cashamount - billamount;
        console.log(billamount, cashamount, totalchange);

        if (totalchange < 0) {
            alert("You Have to pay " + Math.abs(totalchange) + " More !!");
        } else if (cashamount === billamount) {
            alert("Thanku !! You Have Paid Right Amount !");
        } else if (totalchange > 0) {
            change.innerText = "Return change : " + "₹ " + totalchange;
            
            while (mytable.rows.length > 1) {
                mytable.deleteRow(1);
            }
            var j = 1;
            for (i = 0; i <= notearray.length; i++) {
                while (totalchange >= notearray[i]) {
                    var notes = Math.floor(totalchange / notearray[i]);
                    var row = mytable.insertRow(j);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerText = notearray[i];
                    cell2.innerText = notes;
                    j++;
                    totalchange = totalchange - notes * notearray[i];
                }
            }

        }

    }
    resetBtn.style.display = "block";
    otpt.style.display = "block";
}

resetBtn.addEventListener("click", reset);

function reset() {
    cash.value = "";
    bill.value = "";
    change.innerText = "";
    while (mytable.rows.length > 1) {
        mytable.deleteRow(1);
    }
    otpt.style.display = "none";
    resetBtn.style.display = "none";
}