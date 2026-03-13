const body = document.body;
const currentYear = document.getElementById('current-year');
const startConsultingBtn = document.getElementById('start-consulting-btn');
const choiceModal = document.getElementById('contact-choice-modal');
const emailModal = document.getElementById('email-form-modal');
const chooseEmailBtn = document.getElementById('choose-email-btn');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function openModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');

  if (!document.querySelector('.modal-overlay.is-open')) {
    body.classList.remove('modal-open');
  }
}

if (startConsultingBtn && choiceModal) {
  startConsultingBtn.addEventListener('click', function (event) {
    event.preventDefault();
    openModal(choiceModal);
  });
}

if (chooseEmailBtn) {
  chooseEmailBtn.addEventListener('click', function () {
    closeModal(choiceModal);
    openModal(emailModal);
  });
}

document.querySelectorAll('[data-close-modal]').forEach(function (button) {
  button.addEventListener('click', function () {
    closeModal(button.closest('.modal-overlay'));
  });
});

document.querySelectorAll('.modal-overlay').forEach(function (modal) {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.is-open').forEach(closeModal);
  }
});
