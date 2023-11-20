import { registerUser } from "../auth/register.mjs";

export const newUser = document
  .querySelector("#registration_form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.registerName.value,
      avatar: form.userAvatar.value,
      email: form.regEmail.value,
      password: form.regPassword,
    };
    registerUser(newUser);
  });
