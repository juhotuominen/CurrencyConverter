const submit = document.getElementById("submit");
const result  = document.getElementById("result")
const to = document.getElementById("to");
const amount = document.getElementById("amount");

submit.addEventListener("click", function(){
    let amt = amount.value;
    let currency = to.value;

    fetch('https://api.exchangerate.host/latest')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let rate = data.rates[currency];
        let total = rate * amt;
        result.innerHTML = total;
    })
})
