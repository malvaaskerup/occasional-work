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
