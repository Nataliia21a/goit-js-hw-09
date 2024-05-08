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
  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  console.log(formData);
  event.currentTarget.reset();
}
function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}
function saveInputFields() {
  const messageText = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  if (!messageText) return;
  const parsedMessageText = JSON.parse(messageText);
  input.value = parsedMessageText.email;
  formData.email = parsedMessageText.email;
  textarea.value = parsedMessageText.message;
  formData.message = parsedMessageText.message;
}
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);
