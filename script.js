"use strict";

// FAQ interactivity
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



