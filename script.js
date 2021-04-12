let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function getBirthday() {
    let dateString = document.getElementById('birthdate').value;
    if (!!dateString.valueOf() === true) {
        let bday = new Date(dateString);
        let d = birthdate.getDay();
        return d;
    } else {
        alert("Please select your birthday!")
        return;
    }
}
function getGender() {
    let gender;
    if ((form.gender[0].checked === true) || (form.gender[1].checked === true)) {
        if (form.gender[0].checked === true) {
            gender = 0;
        } else if (form.gender[1].checked === true) {
            gender = 1;
        }
        return gender;
    } else {
        alert("Please select your gender!");
        return;
    }
}
function computeName() {
    let gender = getGender();
    let birthdate = getBirthday();
    let result;
    if (gender === 0) {
        result = maleNames[birthdate];
        document.getElementById('result').innerHTML = "Your Akan name is " + result + "."
    } else if (gender === 1) {
        result = femaleNames[birthdate];
        document.getElementById('result').innerHTML = "Your Akan name is " + result + "."
    }
}
function clearOutput() {
    document.getElementById('result').innerHTML = " "
}
