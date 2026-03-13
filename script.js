const body = document.body;
const currentYear = document.getElementById('current-year');
const startConsultingBtn = document.getElementById('start-consulting-btn');
const choiceModal = document.getElementById('contact-choice-modal');
const emailModal = document.getElementById('email-form-modal');
const chooseEmailBtn = document.getElementById('choose-email-btn');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

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

if (menuToggle && navMenu) {
  function closeMobileMenu() {
    navMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  document.addEventListener('click', function (event) {
    const clickedOutsideMenu = !navMenu.contains(event.target);
    const clickedOutsideToggle = !menuToggle.contains(event.target);
    if (navMenu.classList.contains('is-open') && clickedOutsideMenu && clickedOutsideToggle) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 640) {
      closeMobileMenu();
    }
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
    if (menuToggle && navMenu && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.querySelectorAll('.modal-overlay.is-open').forEach(closeModal);
  }
});
