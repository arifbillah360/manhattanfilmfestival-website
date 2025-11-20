/**
 * Contact Form Handler
 * Manhattan Film Festival 2026
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                inquiryType: document.getElementById('inquiryType').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };

            // Client-side validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message || !formData.inquiryType) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Here you would typically send the data to your backend
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formData);

            // Show success message
            alert(`Thank you for contacting Manhattan Film Festival, ${formData.firstName}!\n\nWe've received your ${formData.inquiryType} inquiry and will respond within 24-48 business hours.\n\nA confirmation has been sent to ${formData.email}.`);

            // Reset form
            contactForm.reset();

            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            /*
            // Example: Send to backend API
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you! Your message has been sent.');
                    contactForm.reset();
                } else {
                    alert('Sorry, there was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Sorry, there was an error. Please try again.');
            });
            */
        });

        // Real-time validation feedback
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '';
                }
            });

            field.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '';
                }
            });
        });

        // Email field validation
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#ef4444';
                } else if (this.value) {
                    this.style.borderColor = '#16a34a';
                }
            });
        }
    }
});
