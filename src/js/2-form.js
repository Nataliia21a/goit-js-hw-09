const formData = {
  email: '',
  message: '',
};
const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
  btn: document.querySelector('button'),
};
const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const { form, input, textarea, btn } = formRefs;
saveInputFields();

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  console.log(formData);
  event.currentTarget.reset();
}
function onFormInput(event) {
  event.preventDefault();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, event.target.value);
  formData[event.target.name] = event.target.value.trim();
}
function saveInputFields() {
  const messageText = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  if (!messageText) return;
  input.value = messageText;
  textarea.value = messageText;
}
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);
