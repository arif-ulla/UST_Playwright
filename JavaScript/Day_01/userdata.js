document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        fullname : document.getElementById('fullname').value,
        email : document.getElementById('email').value,
        progression : document.getElementById('profession').value,
        city : document.getElementById('city').value,
        country : document.getElementById('country').value
        };
        
        const output = document.getElementById('jsonOutput');
        output.innerText = 'Stored JSON:\n' + JSON.stringify(userData, null, 2);
});