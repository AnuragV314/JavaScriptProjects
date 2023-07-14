const calculate = document.getElementById("calculate");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total")


function calculateTotal() {
    const billVal = bill.value;
    const tipVal = tip.value;
    const totalVal = billVal * (1 + tipVal / 100);
    console.log(totalVal)
    total.innerText = totalVal.toFixed(2);
}

calculate.addEventListener("click", calculateTotal);
