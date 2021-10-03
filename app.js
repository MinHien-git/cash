let tip =0;
var AmountTip = '$0.00';
var totalTip = '$0.00';

const count = () => {
    var bill = document.getElementById("bill").value;
    var number = document.getElementById("number").value;
    if(bill != "")
    {
        document.getElementById("btn").style.backgroundColor = "#26C0AB"
        document.getElementById("btn").style.color = "#00494D"
        document.getElementById("btn").disabled = false
        document.getElementById("warning").classList.add("warning-active")
    }
    else{
        document.getElementById("btn").style.backgroundColor = "#5e7a7d"
        document.getElementById("btn").style.color = "#00494d"
        document.getElementById("btn").disabled = true
        document.getElementById("warning").classList.add("warning")
    }
    let amount = (parseFloat(bill) * parseFloat(tip)/100)/number;
    let total = (parseFloat(bill) + parseFloat(bill) * parseFloat(tip)/100)/number;
    console.log(total)
    AmountTip = '$'+amount.toFixed(2);
    totalTip = '$'+total.toFixed(2);
    if(!isNaN(amount) && isFinite(amount)){
        document.getElementById('total').innerHTML =totalTip;
        document.getElementById('amount').innerHTML = AmountTip;
    }
    else {
        document.getElementById('total').innerHTML ='$0.00';
        document.getElementById('amount').innerHTML = '$0.00';
    }
   
}

const changeColor = (num) =>{
    let x = document.querySelectorAll(".tip")
    for(let i = 0; i < x.length;i++)
    {
        if(i == num)
        {
            x[i].style.backgroundColor = "#26C0AB"
            x[i].style.color = "#00494D"
            tip = x[i].value;
            document.getElementById('custom').value =''
            count()
        }
        else {
            x[i].style.backgroundColor = "#00494D"
            x[i].style.color = "#fff"
            
        }
    }
    
}

const custom = () =>
{
    tip = document.getElementById('custom').value
    changeColor(6);
}

const reset = () =>{
    let x = document.querySelectorAll(".tip")
    for(let i = 0; i < x.length;i++)
    {
        x[i].style.backgroundColor = "#00494D"
        x[i].style.color = "#fff"
    }
    document.getElementById("bill").value ='';
    document.getElementById("number").value ='';
    document.getElementById('total').innerHTML ='$0.00';
    document.getElementById('amount').innerHTML = '$0.00';
    count()
}

const App = () =>
{
    changeColor()
    count()
    warn()
}



App();