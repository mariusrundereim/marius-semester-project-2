import { login } from "../auth/login.mjs";
export const form = document
  .querySelector("#login-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: form.loginEmail.value,
      password: form.loginPassword.value,
    };
    login(user);
  });
