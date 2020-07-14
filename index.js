const form = document.querySelector('form');
const email = document.getElementById('email');
const emailImg = email.lastElementChild;

const showEmailForm = () => {
  form.removeAttribute('class');
  focusForm();
};
const focusForm = () => form.querySelectorAll('input')[1].focus();

emailImg.addEventListener('click', showEmailForm);

const bringToCenter = () => {
  const center = window.heigh
}