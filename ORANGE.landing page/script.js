// Get references to the input fields and login button
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('.btn');

// Predefined username and password
const correctUsername = 'muhzin321';
const correctPassword = '123muhzin';

// Add event listener to the login button
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get entered username and password
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered credentials are correct
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Redirect to the next page (replace 'next-page.html' with your actual page URL)
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});