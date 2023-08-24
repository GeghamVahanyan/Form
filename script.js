function validate() {
    let a = document.forms["myForm"]["first_name"].value;
    if (a.trim() == "") {
        alert("Укажите ваше имя");
        return false;
    }
    let b = document.forms["myForm"]["last_name"].value;
    if (b.trim() == "") {
        alert("Укажите вашу фамилию");
        return false;
    }
    let с = document.forms["myForm"]["email"].value;
    if (с.trim() == "" ) {
        alert("Укажите ваш Е-майл");
        return false;
    }
    let d = document.forms["myForm"]["tel"].value;
    if (d == "") {
        alert("Укажите ваш телефон");
        return false;
    }
    let f = document.forms["myForm"]["time"].value;
    if (f == "") {
        alert("Укажите время визита");
        return false;
    }
    let x = document.forms["myForm"]["date"].value;
    if (x == "") {
        alert("Выберите дату визита");
        return false;
    }
}