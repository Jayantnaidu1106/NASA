document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const cardTitle = document.getElementById('cardTitle');

    // Show the register form when register button is clicked
    document.getElementById('registerBtn').addEventListener('click', function() {
        card.classList.add('show');
        cardTitle.textContent = 'Register';
        registerForm.classList.remove('hidden'); // Show register form
        loginForm.classList.add('hidden');  // Hide login form
    });

    // Show the login form when login button is clicked
    document.getElementById('loginBtn').addEventListener('click', function() {
        card.classList.add('show');
        cardTitle.textContent = 'Login';
        loginForm.classList.remove('hidden'); // Show login form
        registerForm.classList.add('hidden'); // Hide register form
    });

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        if (username && email && password) {
            let users = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = users.some(user => user.username === username);
            if (userExists) {
                alert('Username already exists. Please choose another one.');
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            document.getElementById('registerForm').reset();
            
            // Switch to login form after registration
            cardTitle.textContent = 'Login';
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const loggedInUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

        if (loggedInUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            document.getElementById('play').classList.remove('hidden');
            card.classList.add('hidden');
            document.querySelector('.buttons').classList.add('hidden');
            alert('Login successful! You can now start playing.');
        } else {
            alert('Invalid username or password. Please try again.');
        }

        document.getElementById('loginForm').reset();
    });

    // Play button handler
    document.getElementById('play').addEventListener('click', function() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (!loggedInUser) {
            alert('Please log in first.');
        } else {
            window.location.href = 'levels.html'; // Redirect to the game page
        }
    });
});
