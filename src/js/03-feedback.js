import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

const STORAGE_KEY = 'feedback-form-state';

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput(e) {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateFormField();

function populateFormField() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    input.value = savedData.email;
    textarea.value = savedData.message;
  }
}
