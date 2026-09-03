document.addEventListener('DOMContentLoaded', function () {
  const manifesto = document.getElementById('manifesto');
  if (!manifesto) return;

  manifesto.addEventListener('click', function (e) {
    e.stopPropagation();
    manifesto.classList.toggle('is-open');
  });

  // Clicking anywhere else on the screen closes it again.
  document.addEventListener('click', function () {
    manifesto.classList.remove('is-open');
  });
});

const newsletterForm = document.getElementById('mc-embedded-subscribe-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    const email = document.getElementById('mce-EMAIL').value.trim();
    if (!email) {
      e.preventDefault();
    }
  });
}