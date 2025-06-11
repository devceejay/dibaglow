"use strict";

// Uncheck the menu toggle checkbox to close the menu after a link is clicked
 document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("menu-toggle").checked = false;
    });
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



