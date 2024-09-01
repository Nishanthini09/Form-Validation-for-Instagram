document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get input values
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    let isValid = true;

    if (!isValidUsernameOrEmail(username)) {
        showError('login-username-error', 'Invalid username or email address.');
        isValid = false;
    }

    if (!isValidPassword(password)) {
        showError('login-password-error', 'Invalid password. Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character.');
        isValid = false;
    }

    if (!isValid) {
        showAlert('Please correct the errors in the form before proceeding.');
    } else {
        showSuccessMessage('Login successful! Redirecting to the next page...');
        setTimeout(() => {
            window.location.href = 'image.html'; // Redirect to the image.html page
        }, 1000); // Wait 1 second before redirecting
    }
});

// Helper function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Helper function to clear all error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function(errorElement) {
        errorElement.style.display = 'none';
    });
    // Clear alert message
    const alertElement = document.getElementById('alert-message');
    if (alertElement) {
        alertElement.textContent = '';
        alertElement.style.display = 'none';
    }
}

// Function to display an alert message at the top
function showAlert(message) {
    const alertElement = document.getElementById('alert-message');
    if (alertElement) {
        alertElement.textContent = message;
        alertElement.style.display = 'block';
        alertElement.style.backgroundColor = 'white'; // White background for alert messages
        alertElement.style.color = 'black'; // Black text color for alert messages
        alertElement.style.border = '1px solid red'; // Red border to indicate alert
        alertElement.style.padding = '10px'; // Padding for better readability
        alertElement.style.borderRadius = '5px'; // Rounded corners
    }
}

// Function to display a success message
function showSuccessMessage(message) {
    const alertElement = document.getElementById('alert-message');
    if (alertElement) {
        alertElement.textContent = message;
        alertElement.style.display = 'block';
        alertElement.style.backgroundColor = 'white'; // White background for success messages
        alertElement.style.color = 'black'; // Black text color for success messages
        alertElement.style.border = '1px solid green'; // Green border to indicate success
        alertElement.style.padding = '10px'; // Padding for better readability
        alertElement.style.borderRadius = '5px'; // Rounded corners
    }
}

// Function to validate username or email
function isValidUsernameOrEmail(value) {
    // Placeholder validation logic - customize according to your requirements
    const usernameOrEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern for demo purposes
    return value.length > 3 || usernameOrEmailPattern.test(value); // Replace with actual validation logic
}

// Function to validate password
function isValidPassword(value) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(value);
}

