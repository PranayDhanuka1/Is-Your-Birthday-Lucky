const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

checkNumber.addEventListener('click', checkBirthdayIsLucky)

function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    if (sum && dob)
        compareValues(sum, luckyNumber.value)
    else
        outputBox.innerText = "Please enter both the field"
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your Birthday is lucky"
    } else {
        outputBox.innerText = "Your Birthday is not lucky"
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0
    for (var i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}