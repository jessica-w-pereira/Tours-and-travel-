// Get signup modal and button
const signupModal = document.getElementById('signupModal');
const openSignupBtn = document.getElementById('openSignup');

// Open the signup modal when the signup button is clicked
openSignupBtn.addEventListener('click', function() {
    signupModal.style.display = 'flex';
});

// Close the signup modal when clicking outside the modal
window.addEventListener('click', function(event) {
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});
