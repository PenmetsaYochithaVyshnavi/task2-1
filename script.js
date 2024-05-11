const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('hidden');
  });
});