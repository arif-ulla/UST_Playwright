document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation
            if (username && password) {
                // Store user in localStorage (not secure for production)
                localStorage.setItem('currentUser', username);
                window.location.href = 'home.html';
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    // Logout button
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // Display username if logged in
    if (document.getElementById('usernameDisplay')) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            document.getElementById('usernameDisplay').textContent = currentUser;
        } else {
            window.location.href = 'index.html';
        }
    }

    // Simple book counter (would be connected to a database in a real app)
    if (document.getElementById('booksRead')) {
        // These would normally come from an API/database
        document.getElementById('booksRead').textContent = '12';
        document.getElementById('wantToRead').textContent = '5';
    }
});