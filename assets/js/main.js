
//login button event handler
const login = document.getElementById('login');
login.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// deposit event handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    const depositAmountNumber = getInput('depositAmount');


    spanTextUpdate('currentDeposit', depositAmountNumber);

    spanTextUpdate('currentBalance', depositAmountNumber)

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositAmountNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;


    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance =  depositAmountNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('depositAmount').value = "";

});


//withdraw event handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInput('withdrawAmount');

    spanTextUpdate('currentWithdraw', withdrawNumber);
    spanTextUpdate('currentBalance', -1 *
        withdrawNumber);

    document.getElementById('withdrawAmount').value = "";

})


function spanTextUpdate(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


