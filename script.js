const specials = [
  'Cardamom Rose Latte with orange-zest shortbread.',
  'Brown Sugar Shaken Espresso with vanilla bean cream.',
  'Lavender Mocha paired with a warm almond financier.',
  'Maple Sea Salt Cappuccino and a flaky ham-and-gruyere twist.',
];

const dailySpecialBtn = document.getElementById('dailySpecialBtn');
const specialText = document.getElementById('specialText');
const reserveForm = document.getElementById('reserveForm');
const formMessage = document.getElementById('formMessage');

let specialIndex = 0;

dailySpecialBtn?.addEventListener('click', () => {
  specialIndex = (specialIndex + 1) % specials.length;
  specialText.textContent = specials[specialIndex];
});

reserveForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(reserveForm);
  const name = formData.get('name');
  const partySize = formData.get('partySize');

  formMessage.textContent = `Thanks, ${name}! Your table for ${partySize.toString().toLowerCase()} is noted. We'll email you shortly.`;
  reserveForm.reset();
});
