const calculateLoan = () => {
    loanAmountVal = document.getElementById("loan-amount").value;
    interestRateVal = document.getElementById("interest-rate").value;
    monthsToPayVal = document.getElementById("months-to-pay").value;

    interest = (loanAmountVal *  (interestRateVal * 0.01)) / monthsToPayVal;

    monthlyPayment = (loanAmountVal / monthsToPayVal + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;

}