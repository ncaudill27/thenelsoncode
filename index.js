const form = document.querySelector('form');
const email = document.getElementById('email');
const emailImg = email.lastElementChild;

const showEmailForm = () => {
  // form.removeAttribute('class');
  focusForm();
  bringToCenter();
};

const focusForm = () => form.querySelectorAll('input')[1].focus();

const bringToCenter = () => form.scrollIntoView({behavior: 'smooth', block: 'center'});

emailImg.addEventListener('click', showEmailForm);