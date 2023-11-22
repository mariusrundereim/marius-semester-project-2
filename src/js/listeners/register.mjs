import { registerUser } from "../auth/register.mjs";
import {
  registerName,
  regEmail,
  userAvatar,
  regPassword,
} from "../utils/domElements.mjs";
// import { formValidation } from "../components/formValidation.mjs";
import * as formValidation from "../components/formValidation.mjs";
import { displayError } from "../components/displayMessages.mjs";

document
  .querySelector("#registration_form")
  .addEventListener("submit", handleSubmit);

export function handleSubmit(e) {
  e.preventDefault();

  const nameValid = formValidation.validateName(registerName.value);
  const emailValid = formValidation.validateEmail(regEmail.value);
  const passwordValid = formValidation.validatePassword(regPassword.value);

  if (!nameValid) {
    displayError("First character to Uppercase. Minimum length is 3");
    return;
  }

  if (!emailValid) {
    displayError("Invalid email. Must be a @stud.noroff.no email address.");
    return;
  }

  if (!passwordValid) {
    displayError(
      "Password must contains: 12 Characters, 2 Numbers, 1 special character"
    );
  }

  const newUser = {
    name: registerName.value,
    avatar: userAvatar.value,
    email: regEmail.value,
    password: regPassword.value,
  };

  registerUser(newUser);
}
