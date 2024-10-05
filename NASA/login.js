document.getElementById('registerBtn').addEventListener('click', function() {
    showCard('register');
});

document.getElementById('loginBtn').addEventListener('click', function() {
    showCard('login');
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get values from the registration form
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (username && email && password) {
        // Retrieve current users from localStorage or initialize as an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('Username already exists. Please choose another one.');
            return;
        }

        // Add new user to the users array
        users.push({ username, email, password });

        // Save updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');

        // Clear the form
        document.getElementById('registerForm').reset();

        // Switch to login form
        showCard('login');
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get values from the login form
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with matching credentials
    const loggedInUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (loggedInUser) {
        // Successful login, redirect to another page
       

        // Redirect to another page (e.g., dashboard.html)
        window.location.href = "welcome.html";
    } else {
        // Login failed
        alert('Invalid username or password. Please try again.');
    }

    // Clear the form
    document.getElementById('loginForm').reset();
});

function showCard(type) {
    const card = document.getElementById('card');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const cardTitle = document.getElementById('cardTitle');

    card.classList.remove('hidden');
    
    if (type === 'register') {
        cardTitle.textContent = 'Register';
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    } else if (type === 'login') {
        cardTitle.textContent = 'Login';
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = document.querySelector('.card');
        
        // Apply fade-in effect when showing the card
        card.classList.remove('hidden');
        card.style.animation = 'popIn 0.6s ease forwards';
    });
});
