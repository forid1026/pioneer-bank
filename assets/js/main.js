
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

    if (depositAmountNumber < 0) {
        alert('Deposit number cannot be negative.');
        document.getElementById('depositAmount').value  = '';
    }
    else {
        spanTextUpdate('currentDeposit', depositAmountNumber);
        spanTextUpdate('currentBalance', depositAmountNumber);
        document.getElementById('depositAmount').value = "";
    }
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositAmountNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;


    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance =  depositAmountNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;



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


function spanTextUpdate(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


