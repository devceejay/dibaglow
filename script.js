"use strict";

// Uncheck the menu toggle checkbox to close the menu after a link is clicked
 document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("menu-toggle").checked = false;
    });
  });

  
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("nav a");

// Close menu and remove scroll lock when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    document.body.classList.remove("no-scroll");
  });
});

// Add or remove scroll lock based on toggle state
menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});


// FAQ interaction
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active'); // Close other open FAQs
      }
    });

    item.classList.toggle('active'); // Toggle the clicked one
  });
});


// Booking form interaction
  const reasonSelect = document.getElementById("reason");
  const bookingFields = document.getElementById("booking-fields");
  const submitBtn = document.getElementById("form-submit-btn");

  function updateFormUI() {
    if (reasonSelect.value === "book") {
      bookingFields.style.display = "block";
      submitBtn.textContent = "Book Your Appointment";
      submitBtn.setAttribute("aria-label", "Submit form to book an appointment");
      submitBtn.setAttribute("title", "Click to book your appointment");
    } else if (reasonSelect.value === "inquire") {
      bookingFields.style.display = "none";
      submitBtn.textContent = "Send Your Inquiry";
      submitBtn.setAttribute("aria-label", "Submit form to send a general inquiry");
      submitBtn.setAttribute("title", "Click to send your message");
    } else {
      // Default state when no option is selected yet
      bookingFields.style.display = "none";
      submitBtn.textContent = "Submit";
      submitBtn.setAttribute("aria-label", "Submit form");
      submitBtn.setAttribute("title", "Click to submit form");
    }
  }

  reasonSelect.addEventListener("change", updateFormUI); // Run on change
  window.addEventListener("DOMContentLoaded", updateFormUI); // Run on page load


  
 

