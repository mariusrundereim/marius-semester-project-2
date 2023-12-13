import { login } from "../auth/login.js";
import {
  validateEmail,
  validatePassword,
} from "../components/formValidation.js";
import { displayError } from "../components/displayError.js";

import {
  loginEmail,
  loginPassword,
} from "../components/validation/loginElements.js";
import { clearErrors } from "../components/validation/loginElements.js";

const form = document.querySelector("#login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  const emailValid = validateEmail(form.loginEmail.value);
  const passwordValid = validatePassword(form.loginPassword.value);
  if (!emailValid) {
    displayError(loginEmail, "Invalid email.");
    return;
  }
  if (!passwordValid) {
    displayError(loginPassword, "Invalid password.");
    return;
  }

  const user = {
    email: form.loginEmail.value,
    password: form.loginPassword.value,
  };
  login(user);
});
