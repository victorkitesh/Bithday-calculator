let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getBirthday() {
    let dateString = document.getElementById('bithday').value;
    if (!!dateString.valueOf() === true) {
        let bithday = new Date(dateString);
        let d = bday.getDay();
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