let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const { email, message } = formData;
  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log('Form Data:', formData);
  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
