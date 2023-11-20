import { registerUser } from "../auth/register.mjs";
import {
  registerName,
  regEmail,
  userAvatar,
  regPassword,
} from "../utils/domElements.mjs";

export const newUser = document
  .querySelector("#registration_form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    //const form = e.target;
    const newUser = {
      name: registerName.value,
      avatar: userAvatar.value,
      email: regEmail.value,
      password: regPassword.value,
    };
    console.log(newUser);
    registerUser(newUser);
  });
