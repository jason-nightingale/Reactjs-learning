/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;
var  txtDisplay = "Thank you. Have a nice day!";

// your code goes here
if (isActive === false) {
    txtDisplay = "Your account is no longer active.";
} else {
    if (checkBalance === true) {
        if (balance < 0) {
            txtDisplay = "Your balance is negative. Please contact bank.";
        } else if (balance === 0) {
            txtDisplay = "Your account is empty.";
        } else {
            txtDisplay = "Your babance is $" + balance.toFixed(2) + ".";
        }
    } else {
        txtDisplay;
    }
}

console.log(txtDisplay);
