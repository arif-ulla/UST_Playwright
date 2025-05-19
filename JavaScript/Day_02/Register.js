function getName() {
    return document.getElementById("name").value;
}
function getEmail() {
    return document.getElementById("email").value;
}
function getAge() {
    return document.getElementById("age").value;
}
function getRole() {
    return document.getElementById("role").value;
}
function getPhone() {
    return document.getElementById("phone").value;
}
function getSalary() {
    return document.getElementById("salary").value;
}

function validateName(name) {
    if(name.length >=3){
        return true;
    }
    return false;
}

function validateAge(age) {
    if(age >= 18){
        return true;
    }
    return false;
}

function validateRole(role) {
    if(role == "Trainer"){
        return true;
    }
    return false;
}

function validatePhone(phone) {
    if(phone.length == 10){
        return true;
    }
    return false;
}

function displayErrorMsg(msg) {
    document.getElementById("vmsg").innerHTML = msg;
}

function submit() {
    const name = getName();
    const email = getEmail();
    const age = getAge();
    const role = getRole();
    const phone = getPhone();
    const salary = getSalary();

    // alert(`${name}, ${email}, ${age}`)

    const v_name = validateName(name)
    if(!v_name){
        displayErrorMsg("Name should be having atleast 3 characters");
    }

    const v_role = validateRole(role)
    if(v_role){
        displayErrorMsg("You have admin rights!!!");
    }

    const v_age = validateAge(age);
    if(!v_age){
        displayErrorMsg("Sorry, you're not eligible");
    }

    const v_phone = validatePhone(phone);
    if(!v_phone){
        displayErrorMsg("Sorry, you're not eligible");
    }
}