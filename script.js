const contactButton = document.getElementById('contact-button');
const newsletterForm = document.getElementById('newsletter-form');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    window.location.href = 'mailto:hello@focuspoint.example?subject=Camera%20Store%20Inquiry';
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for subscribing to FocusPoint updates!');
    newsletterForm.reset();
  });
}
