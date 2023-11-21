import { registerUser } from "../auth/register.mjs";
import {
  registerName,
  regEmail,
  userAvatar,
  regPassword,
} from "../utils/domElements.mjs";
import { formValidation } from "../components/formValidation.mjs";

document
  .querySelector("#registration_form")
  .addEventListener("submit", handleSubmit);

// export const newUser = document
//   .querySelector("#registration_form")
//   .addEventListener("submit", (e) => {
//     e.preventDefault();
//     const studEmail = formValidation(regEmail);
//     console.log(studEmail);
//     const newUser = {
//       name: registerName.value,
//       avatar: userAvatar.value,
//       //email: regEmail.value,
//       email: studEmail.value,
//       password: regPassword.value,
//     };
//     console.log(newUser);
//     registerUser(newUser);
//   });
