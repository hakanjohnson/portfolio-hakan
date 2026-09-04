const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const service = data.get('service');
  const message = data.get('message');

  // Bis zur Anbindung eines echten Mail-/Backend-Dienstes:
  // Die Daten werden nicht an einen Server übertragen.
  console.log({
    name,
    email,
    company: data.get('company'),
    service,
    message
  });

  status.classList.add('show');
  form.reset();
  status.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
