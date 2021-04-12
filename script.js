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