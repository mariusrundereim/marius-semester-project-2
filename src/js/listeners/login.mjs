import { login } from "../auth/login.mjs";
import {
  validateEmail,
  validatePassword,
} from "../components/formValidation.mjs";
import { displayError } from "../components/displayError.mjs";

import {
  loginEmail,
  loginPassword,
} from "../components/validation/loginElements.mjs";
import { clearErrors } from "../components/validation/loginElements.mjs";

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
