let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgBox = document.getElementById('formMessage');

  if (!name || !email || !subject || !message) {
    msgBox.textContent = 'Please fill in all fields.';
    msgBox.style.color = 'red';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    msgBox.textContent = 'Please enter a valid email address.';
    msgBox.style.color = 'red';
    return;
  }

  // Simulated form success
  msgBox.textContent = 'Thank you! Your message has been sent.';
  msgBox.style.color = 'green';
  this.reset();
});
