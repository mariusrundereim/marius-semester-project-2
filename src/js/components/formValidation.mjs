export function validateName(name) {
  const nameRegex = /^[A-Z][a-zA-Z]{3,}$/;
  return nameRegex.test(name);
}

export function validateEmail(email) {
  const emailRegex = /^.+@stud\.noroff\.no$/;
  return emailRegex.test(email);
}
