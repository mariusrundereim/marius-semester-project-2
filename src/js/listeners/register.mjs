import { registerUser } from "../auth/register.mjs";
import {
  registerName,
  regEmail,
  userAvatar,
  regPassword,
} from "../utils/domElements.mjs";
import * as formValidation from "../components/formValidation.mjs";

import { displayError } from "../components/displayError.mjs";
import {
  nameError,
  emailError,
  passwordError,
  clearErrors,
} from "../components/validation/registerElements.mjs";
import { defaultAvatarUrl } from "../utils/helper/defaultAvatar.mjs";
document
  .querySelector("#registration_form")
  .addEventListener("submit", handleSubmit);

export function handleSubmit(e) {
  e.preventDefault();

  clearErrors();

  const nameValid = formValidation.validateName(registerName.value);
  const emailValid = formValidation.validateEmail(regEmail.value);
  const passwordValid = formValidation.validatePassword(regPassword.value);

  if (!nameValid) {
    displayError(
      nameError,
      "First character to Uppercase. Minimum length is 3"
    );
    return;
  }

  if (!emailValid) {
    displayError(
      emailError,
      "Invalid email. Must be a @stud.noroff.no email address."
    );
    return;
  }

  if (!passwordValid) {
    displayError(
      passwordError,
      "Password must contains: 12 Characters, 2 Numbers, 1 special character"
    );
  }

  const newUser = {
    name: registerName.value,
    avatar: userAvatar.value || defaultAvatarUrl,
    email: regEmail.value,
    password: regPassword.value,
  };

  registerUser(newUser);
}
