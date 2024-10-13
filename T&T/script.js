// Get modals and buttons
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const openSignupBtn = document.getElementById('openSignup');
const openLoginBtn = document.getElementById('openLogin');
const openSignupFromLogin = document.getElementById('openSignupFromLogin');

// Open the signup modal when the signup button is clicked
openSignupBtn.addEventListener('click', function() {
    signupModal.style.display = 'flex';
    loginModal.style.display = 'none'; // Close login modal if open
});

// Open the login modal when the login link is clicked
openLoginBtn.addEventListener('click', function() {
    loginModal.style.display = 'flex';
    signupModal.style.display = 'none'; // Close signup modal if open
});

// Open the signup modal from the login modal
openSignupFromLogin.addEventListener('click', function() {
    signupModal.style.display = 'flex';
    loginModal.style.display = 'none'; // Close login modal
});

// Close the signup modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    // Close the login modal when clicking outside of it
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
