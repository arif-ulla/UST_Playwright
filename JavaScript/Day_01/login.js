function btnClick(){

    const email = document.getElementById('username').value.toString();
    const pass = document.getElementById('password').value.toString();

    if(username === "abbas@gmail.com" && password === "123"){
        alert('Login successful')
    } else{
        alert('Login failed')
    }
}