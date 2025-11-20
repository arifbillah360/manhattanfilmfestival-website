/**
 * Sponsor Login Handler
 * Manhattan Film Festival 2026
 */

document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('loginSection');
    const sponsorContent = document.getElementById('sponsorContent');
    const loginForm = document.getElementById('sponsorLoginForm');
    const errorMessage = document.getElementById('errorMessage');
    const logoutBtn = document.getElementById('logoutBtn');

    // NOTE: This is a simple client-side password protection
    // For production, implement proper server-side authentication
    const SPONSOR_PASSWORD = 'MFF2026Sponsor'; // Change this to your actual password

    // Check if user is already logged in (session storage)
    if (sessionStorage.getItem('sponsorLoggedIn') === 'true') {
        showSponsorContent();
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const passwordInput = document.getElementById('sponsorPassword');
            const password = passwordInput.value;

            if (password === SPONSOR_PASSWORD) {
                // Successful login
                sessionStorage.setItem('sponsorLoggedIn', 'true');
                showSponsorContent();
                passwordInput.value = '';
                errorMessage.style.display = 'none';
            } else {
                // Failed login
                errorMessage.style.display = 'flex';
                passwordInput.value = '';
                passwordInput.focus();

                // Shake animation for error
                loginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);
            }
        });
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('sponsorLoggedIn');
            hideSponsorContent();

            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Functions to show/hide content
    function showSponsorContent() {
        if (loginSection) loginSection.style.display = 'none';
        if (sponsorContent) sponsorContent.style.display = 'block';
    }

    function hideSponsorContent() {
        if (loginSection) loginSection.style.display = 'block';
        if (sponsorContent) sponsorContent.style.display = 'none';
    }

    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);

    // Prevent unauthorized access via browser back button
    window.addEventListener('pageshow', function(event) {
        if (event.persisted && sessionStorage.getItem('sponsorLoggedIn') !== 'true') {
            hideSponsorContent();
        }
    });
});
